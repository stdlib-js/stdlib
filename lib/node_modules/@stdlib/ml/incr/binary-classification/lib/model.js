/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var format = require( '@stdlib/string/format' );
var gdot = require( '@stdlib/blas/base/gdot' ).ndarray;
var gaxpy = require( '@stdlib/blas/base/gaxpy' ).ndarray;
var dcopy = require( '@stdlib/blas/base/dcopy' );
var dscal = require( '@stdlib/blas/base/dscal' );
var max = require( '@stdlib/math/base/special/max' );
var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );
var sigmoid = require( '@stdlib/math/base/special/expit' );
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var numel = require( '@stdlib/ndarray/base/numel' );
var vind2bind = require( '@stdlib/ndarray/base/vind2bind' );


// VARIABLES //

var MIN_SCALING_FACTOR = 1.0e-7;
var MIN_SCALE = 1.0e-11;
var LEARNING_RATE_METHODS = {
	'basic': '_basicLearningRate',
	'constant': '_constantLearningRate',
	'invscaling': '_inverseScalingLearningRate',
	'pegasos': '_pegasosLearningRate'
};
var LOSS_METHODS = {
	'hinge': '_hingeLoss',
	'log': '_logLoss',
	'modifiedHuber': '_modifiedHuberLoss',
	'perceptron': '_perceptronLoss',
	'squaredHinge': '_squaredHingeLoss'
};


// MAIN //

/**
* Model constructor.
*
* ## Notes
*
* -   The model (weight vector) implementation is inspired by the [sofia-ml][sofia-ml] library.
*
* [sofia-ml]: https://code.google.com/archive/p/sofia-ml/
*
* @private
* @constructor
* @param {PositiveInteger} N - number of feature weights (excluding bias/intercept term)
* @param {Options} opts - model options
* @param {PositiveNumber} opts.lambda - regularization parameter
* @param {ArrayLikeObject} opts.learningRate - learning rate function and associated parameters
* @param {string} opts.loss - loss function
* @param {boolean} opts.intercept - boolean indicating whether to include an intercept
* @returns {Model} model
*/
function Model( N, opts ) {
	var len;

	// Set internal properties:
	this._N = N;
	this._opts = opts;

	this._scaleFactor = 1.0;
	this._t = 0; // iteration counter (i.e., number of updates)

	// Determine the learning rate function:
	this._learningRateMethod = LEARNING_RATE_METHODS[ opts.learningRate[ 0 ] ];

	// Determine the loss function:
	this._lossMethod = LOSS_METHODS[ opts.loss ];

	// Determine the number of model coefficients:
	len = N;
	if ( opts.intercept ) {
		len += 1;
	}
	// Initialize a model weight vector with all weights set to zero:
	this._weights = new Float64Array( len );

	// Initialize model coefficients to zero:
	this._coefficients = new ndarray( 'float64', new Float64Array( len ), [ len ], [ 1 ], 0, 'row-major' );

	return this;
}

/**
* Adds a provided input vector to the model weight vector.
*
* @private
* @name _add
* @memberof Model.prototype
* @type {Function}
* @param {VectorLike} x - input vector
* @param {number} scale - scale factor
* @returns {Model} model instance
*/
setReadOnly( Model.prototype, '_add', function add( x, scale ) {
	var s = scale / this._scaleFactor;
	var w = this._weights;

	// Scale `x` and add to the model weight vector:
	gaxpy( x.shape[ 0 ], s, x.data, x.strides[ 0 ], x.offset, w, 1, 0 );

	// If an intercept is assumed, treat `x` as containing one additional element equal to one...
	if ( this._opts.intercept ) {
		w[ this._N ] += s;
	}
	return this;
});

/**
* Computes a learning rate.
*
* ## Notes
*
* -   This learning rate function is based on the learning rate function of the same name in the [sofia-ml][sofia-ml] library.
*
* [sofia-ml]: https://code.google.com/archive/p/sofia-ml/
*
* @private
* @name _basicLearningRate
* @memberof Model.prototype
* @type {Function}
* @returns {number} learning rate
*/
setReadOnly( Model.prototype, '_basicLearningRate', function basic() {
	return 10.0 / ( 10.0+this._t );
});

/**
* Returns a constant learning rate.
*
* @private
* @name _constantLearningRate
* @memberof Model.prototype
* @type {Function}
* @returns {number} learning rate
*/
setReadOnly( Model.prototype, '_constantLearningRate', function constant() {
	return this._opts.learningRate[ 1 ];
});

/**
* Calculates the dot product of the model weight vector and a provided vector `x`.
*
* @private
* @name _dot
* @memberof Model.prototype
* @type {Function}
* @param {NumericArray} buf - ndarray data buffer
* @param {integer} stride - stride
* @param {NonNegativeInteger} offset - index offset
* @returns {number} dot product
*/
setReadOnly( Model.prototype, '_dot', function dot( buf, stride, offset ) {
	var v = gdot( this._N, this._weights, 1, 0, buf, stride, offset );
	if ( this._opts.intercept ) {
		v += this._weights[ this._N ];
	}
	v *= this._scaleFactor;
	return v;
});

/**
* Updates the model weight vector using the hinge loss function.
*
* ## Notes
*
* -   The hinge loss function is defined as
*
*     ```tex
*     L(y, f(x)) = \max\{ 0, 1 - y\,f(x) \}
*     ```
*
*     where
*
*     ```tex
*     f(x) = w^T x + b
*     ```
*
*     with \\(w\\) being the model weight vector and \\(b\\) being the intercept.
*
* @private
* @name _hingeLoss
* @memberof Model.prototype
* @type {Function}
* @param {VectorLike} x - feature vector
* @param {integer} y - response value
* @returns {Model} model instance
*/
setReadOnly( Model.prototype, '_hingeLoss', function hingeLoss( x, y ) {
	var eta;
	var d;

	eta = this[ this._learningRateMethod ]();
	this._regularize( eta );

	d = this._dot( x.data, x.strides[ 0 ], x.offset );
	if ( ( y*d ) < 1.0 ) {
		this._add( x, y*eta );
	}
	return this;
});

/**
* Computes a learning rate according to an inverse scaling formula.
*
* ## Notes
*
* -   The inverse scaling formula is defined as
*
*     ```tex
*     \eta = \frac{\eta_0}{t^{k}}
*     ```
*
*     where \\(\eta_0\\) is an initial learning rate, \\(t\\) is the current iteration, and \\(k\\) is an exponent controlling how quickly the learning rate decreases.
*
* @private
* @name _inverseScalingLearningRate
* @memberof Model.prototype
* @type {Function}
* @returns {number} learning rate
*/
setReadOnly( Model.prototype, '_inverseScalingLearningRate', function invscaling() {
	var params = this._opts.learningRate;
	return params[ 1 ] / pow( this._t, params[ 2 ] );
});

/**
* Updates the model weight vector using the log loss function.
*
* ## Notes
*
* -   The log loss function is defined as
*
*     ```tex
*     L(y, f(x)) = \ln( 1 + \exp( -y\,f(x) ) )
*     ```
*
*     where
*
*     ```tex
*     f(x) = w^T x + b
*     ```
*
*     with \\(w\\) being the model weight vector and \\(b\\) being the intercept.
*
* @private
* @name _logLoss
* @memberof Model.prototype
* @type {Function}
* @param {VectorLike} x - feature vector
* @param {integer} y - response value
* @returns {Model} model instance
*/
setReadOnly( Model.prototype, '_logLoss', function logLoss( x, y ) {
	var loss;
	var eta;
	var d;

	eta = this[ this._learningRateMethod ]();
	this._regularize( eta );

	d = this._dot( x.data, x.strides[ 0 ], x.offset );
	loss = y / ( 1.0 + exp( y*d ) );
	this._add( x, eta*loss );

	return this;
});

/**
* Updates the model weight vector using the modified Huber loss function.
*
* ## Notes
*
* -   The modified Huber loss function is defined as
*
*     ```tex
*     L(y, f(x)) = \begin{cases}
*       \max(0, 1 - y\,f(x))^2 & \textrm{for}\,\,y\,f(x) \geq -1\\
*       -4y\,f(x) & \textrm{otherwise}
*     \end{cases}
*     ```
*
*     where
*
*     ```tex
*     f(x) = w^T x + b
*     ```
*
*     with \\(w\\) being the model weight vector and \\(b\\) being the intercept.
*
* ## References
*
* -   Zhang, Tong. 2004. "Solving Large Scale Linear Prediction Problems Using Stochastic Gradient Descent Algorithms." In _Proceedings of the Twenty-First International Conference on Machine Learning_, 116. New York, NY, USA: Association for Computing Machinery. doi:[10.1145/1015330.1015332][@zhang:2004a].
*
* [@zhang:2004a]: https://doi.org/10.1145/1015330.1015332
*
* @private
* @name _modifiedHuberLoss
* @memberof Model.prototype
* @type {Function}
* @param {VectorLike} x - feature vector
* @param {integer} y - response value
* @returns {Model} model instance
*/
setReadOnly( Model.prototype, '_modifiedHuberLoss', function modifiedHuber( x, y ) {
	var eta;
	var d;

	eta = this[ this._learningRateMethod ]();
	this._regularize( eta );

	d = y * this._dot( x.data, x.strides[ 0 ], x.offset );
	if ( d < -1.0 ) {
		this._add( x, 4.0*eta*y );
	} else {
		this._add( x, eta*( y-(d*y) ) );
	}
	return this;
});

/**
* Computes a learning rate using Pegasos.
*
* ## References
*
* -   Shalev-Shwartz, Shai, Yoram Singer, Nathan Srebro, and Andrew Cotter. 2011. "Pegasos: primal estimated sub-gradient solver for SVM." _Mathematical Programming_ 127 (1): 3–30. doi:[10.1007/s10107-010-0420-4][@shalevshwartz:2011a].
*
* [@shalevshwartz:2011a]: https://doi.org/10.1007/s10107-010-0420-4
*
* @private
* @name _pegasos
* @memberof Model.prototype
* @type {Function}
* @returns {number} learning rate
*/
setReadOnly( Model.prototype, '_pegasosLearningRate', function pegasos() {
	return 1.0 / ( this._opts.lambda*this._t );
});

/**
* Updates the model weight vector using the perceptron loss function.
*
* ## Notes
*
* -   The perceptron loss function is defined as
*
*     ```tex
*     L(y, f(x)) = \max(0, -y\,f(x))
*     ```
*
*     where
*
*     ```tex
*     f(x) = w^T x + b
*     ```
*
*     with \\(w\\) being the model weight vector and \\(b\\) being the intercept.
*
* -   The perceptron loss function is equivalent to the hinge loss function without a margin.
*
* -   The perceptron loss function does not update the model weight vector when the response is correctly classified.
*
* ## References
*
* -   Rosenblatt, Frank. 1957. "The Perceptron–a perceiving and recognizing automaton." 85-460-1. Buffalo, NY, USA: Cornell Aeronautical Laboratory.
*
* @private
* @name _perceptronLoss
* @memberof Model.prototype
* @type {Function}
* @param {VectorLike} x - feature vector
* @param {integer} y - response value
* @returns {Model} model instance
*/
setReadOnly( Model.prototype, '_perceptronLoss', function perceptron( x, y ) {
	var eta;
	var d;

	eta = this[ this._learningRateMethod ]();
	this._regularize( eta );

	d = this._dot( x.data, x.strides[ 0 ], x.offset );
	if ( ( y*d ) <= 0.0 ) {
		this._add( x, y*eta );
	}
	return this;
});

/**
* Performs L2 regularization of the model weights.
*
* @private
* @name _regularize
* @memberof Model.prototype
* @type {Function}
* @param {PositiveNumber} eta - learning rate
* @returns {Model} model instance
*/
setReadOnly( Model.prototype, '_regularize', function regularize( eta ) {
	var lambda = this._opts.lambda;
	if ( lambda <= 0.0 ) {
		return this;
	}
	this._scale( max( 1.0-( eta*lambda ), MIN_SCALING_FACTOR ) );
	return this;
});

/**
* Scale the model weight vector by a provided scaling factor.
*
* @private
* @name _scale
* @memberof Model.prototype
* @type {Function}
* @param {number} factor - scaling factor
* @throws {RangeError} scaling factor must be a positive number
* @returns {Model} model instance
*/
setReadOnly( Model.prototype, '_scale', function scale( factor ) {
	var s;
	if ( factor <= 0.0 ) {
		throw new RangeError( format( 'invalid argument. Attempting to scale a weight vector by a nonpositive value. This is likely due to too large a value of eta * lambda. Value: `%f`.', factor ) );
	}
	// Check whether we need to scale the weight vector to unity in order to avoid numerical issues...
	s = this._scaleFactor;
	if ( s < MIN_SCALE ) {
		// Note: we only scale/shrink the feature weights, not the intercept...
		dscal( this._N, s, this._weights, 1 );
		this._scaleFactor = 1.0;
	}
	this._scaleFactor *= factor;
	return this;
});

/**
* Updates the model weight vector using the squared hinge loss function.
*
* ## Notes
*
* -   The squared hinge loss function is defined as
*
*     ```tex
*     L(y, f(x)) = \max\{ 0, 1 - y\,f(x) \}^2
*     ```
*
*     where
*
*     ```tex
*     f(x) = w^T x + b
*     ```
*
*     with \\(w\\) being the model weight vector and \\(b\\) being the intercept.
*
* @private
* @name _squaredHingeLoss
* @memberof Model.prototype
* @type {Function}
* @param {VectorLike} x - feature vector
* @param {integer} y - response value
* @returns {Model} model instance
*/
setReadOnly( Model.prototype, '_squaredHingeLoss', function squaredHingeLoss( x, y ) {
	var eta;
	var d;

	eta = this[ this._learningRateMethod ]();
	this._regularize( eta );

	d = y * this._dot( x.data, x.strides[ 0 ], x.offset );
	if ( d < 1.0 ) {
		this._add( x, eta*( y-(d*y) ) );
	}
	return this;
});

/**
* Returns the model coefficients.
*
* @private
* @name coefficients
* @memberof Model.prototype
* @type {Function}
* @returns {ndarray} model coefficients
*/
setReadOnlyAccessor( Model.prototype, 'coefficients', function coefficients() {
	var c = this._coefficients.data;
	var w = this._weights;
	dcopy( w.length, w, 1, c, 1 );
	dscal( this._N, this._scaleFactor, c, 1 );
	return this._coefficients;
});

/**
* Returns the number of model features.
*
* @private
* @name nfeatures
* @memberof Model.prototype
* @type {PositiveInteger}
*/
setReadOnlyAccessor( Model.prototype, 'nfeatures', function nfeatures() {
	return this._N;
});

/**
* Predicts the response value for one or more observation vectors `X`.
*
* @private
* @name predict
* @memberof Model.prototype
* @type {Function}
* @param {ndarray} X - feature vector
* @param {string} type - prediction type
* @returns {ndarray} ndarray containing response values
*/
setReadOnly( Model.prototype, 'predict', function predict( X, type ) {
	var ndims;
	var xbuf;
	var ybuf;
	var xsh;
	var ysh;
	var ord;
	var ptr;
	var sxn;
	var sx;
	var sy;
	var ox;
	var M;
	var N;
	var Y;
	var v;
	var i;

	// Cache input array properties in case of lazy evaluation:
	xbuf = X.data;
	xsh = X.shape;
	sx = X.strides;
	ox = X.offset;
	ord = X.order;

	ndims = xsh.length - 1;

	// The output array shape is the same as the input array shape without the last dimension (i.e., the number of dimensions is reduced by one)...
	ysh = [];
	for ( i = 0; i < ndims; i++ ) {
		ysh.push( xsh[ i ] );
	}
	// Create an output array...
	if ( ndims === 0 ) {
		M = 1;
		ybuf = new Float64Array( 1 );
		sy = [ 0 ];
	} else {
		M = numel( ysh );
		ybuf = new Float64Array( M );
		sy = shape2strides( ysh, ord );
	}
	Y = new ndarray( 'int8', ybuf, ysh, sy, 0, ord );

	// Loop over all observation vectors...
	N = this._N; // number of features (i.e., size of last `X` dimension)
	sxn = sx[ ndims ]; // stride of the last `X` dimension
	for ( i = 0; i < M; i++ ) {
		// Compute the index offset into the underlying data buffer pointing to the start of the current observation vector:
		ptr = vind2bind( xsh, sx, ox, ord, i*N, 'throw' );

		// Compute the dot product of the current observation vector with the model weight vector:
		v = this._dot( xbuf, sxn, ptr );

		// Determine the output value:
		if ( type === 'label' ) {
			v = ( v > 0 ) ? 1 : -1;
		} else if ( type === 'probability' ) {
			v = sigmoid( v );
		} // else type === 'linear' (i.e., linear predictor)

		// Set the element in the output array:
		if ( ndims === 0 ) {
			Y.iset( v );
		} else {
			Y.iset( i, v );
		}
	}
	return Y;
});

/**
* Updates a model given a provided observation vector and response value.
*
* @private
* @name update
* @memberof Model.prototype
* @type {Function}
* @param {VectorLike} x - feature vector
* @param {integer} y - response value
* @returns {Model} model instance
*/
setReadOnly( Model.prototype, 'update', function update( x, y ) {
	this._t += 1;
	return this[ this._lossMethod ]( x, y );
});


// EXPORTS //

module.exports = Model;
