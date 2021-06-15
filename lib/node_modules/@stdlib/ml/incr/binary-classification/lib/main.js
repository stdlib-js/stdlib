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

'use strict';

// MODULES //

var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isVectorLike = require( '@stdlib/assert/is-vector-like' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var Model = require( './model.js' );
var LEARNING_RATE_DEFAULTS = require( './learning_rate_defaults.json' );
var validate = require( './validate.js' );


// MAIN //

/**
* Returns an accumulator function which incrementally performs binary classification using stochastic gradient descent (SGD).
*
* ## Method
*
* -   The sub-gradient of the loss function is estimated for each datum and the classification model is updated incrementally, with a decreasing learning rate and regularization of model feature weights using L2 regularization.
*
* ## References
*
* -   Shalev-Shwartz, S., Singer, Y., Srebro, N., & Cotter, A. (2011). Pegasos: Primal estimated sub-gradient solver for SVM. Mathematical Programming, 127(1), 3–30. doi:10.1007/s10107-010-0420-4
*
* @param {PositiveInteger} N - number of features
* @param {Options} [options] - options object
* @param {PositiveNumber} [options.lambda=1.0e-3] - regularization parameter
* @param {ArrayLikeObject} [options.learningRate=['basic']] - learning rate function and associated parameters (one of `basic`, `constant`, or `pegasos`)
* @param {string} [options.loss='log'] - loss function (one of `hinge`, `log`, `modifiedHuber`, `perceptron`, or `squaredHinge`)
* @param {boolean} [options.intercept=true] - boolean indicating whether to include an intercept
* @throws {TypeError} first argument must be a positive integer
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Function} accumulator
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var array = require( '@stdlib/ndarray/array' );
*
* // Create an accumulator:
* var accumulator = incrBinaryClassification( 3, {
*     'intercept': true,
*     'lambda': 1.0e-5
* });
*
* // ...
*
* // Update the model:
* var x = array( new Float64Array( [ 2.3, 1.0, 5.0 ] ) );
* var coefs = accumulator( x, 1 );
* // returns <ndarray>
*
* // ...
*
* // Create a new observation vector:
* x = array( new Float64Array( [ 2.3, 5.3, 8.6 ] ) );
*
* // Predict the response value:
* var yhat = accumulator.predict( x );
* // returns <ndarray>
*/
function incrBinaryClassification( N, options ) {
	var model;
	var opts;
	var err;

	if ( !isPositiveInteger( N ) ) {
		throw new TypeError( 'invalid argument. First argument must be a positive integer. Value: `' + N + '`.' );
	}
	opts = {
		'intercept': true,
		'lambda': 1.0e-4,
		'learningRate': LEARNING_RATE_DEFAULTS[ 'basic' ].slice(),
		'loss': 'log'
	};
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	model = new Model( N, opts );

	// Attach methods to the accumulator:
	setReadOnly( accumulator, 'predict', predict );

	return accumulator;

	/**
	* If provided a feature vector and response value, the accumulator function updates a binary classification model; otherwise, the accumulator function returns the current binary classification model coefficients.
	*
	* @private
	* @param {VectorLike} x - feature vector
	* @param {integer} y - response value
	* @throws {TypeError} first argument must be a one-dimensional ndarray
	* @throws {TypeError} first argument must be a one-dimensional ndarray whose length matches the number of model features
	* @throws {TypeError} second argument must be either `+1` or `-1`
	* @returns {ndarray} one-dimensional ndarray containing model coefficients
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var array = require( '@stdlib/ndarray/array' );
	*
	* // Create an accumulator:
	* var accumulator = incrBinaryClassification( 3 );
	*
	* // ...
	*
	* // Update the model:
	* var x = array( new Float64Array( [ 2.3, 1.0, 5.0 ] ) );
	* var coefs = accumulator( x, 1 );
	* // returns <ndarray>
	*/
	function accumulator( x, y ) {
		if ( arguments.length === 0 ) {
			return model.coefficients;
		}
		if ( !isVectorLike( x ) ) {
			throw new TypeError( 'invalid argument. First argument must be a one-dimensional ndarray. Value: `' + x + '`.' );
		}
		if ( y !== -1 && y !== 1 ) {
			throw new TypeError( 'invalid argument. Second argument must be either +1 or -1. Value: `' + y + '`.' );
		}
		if ( x.shape[ 0 ] !== model.nfeatures ) {
			throw new TypeError( 'invalid argument. First argument must be a one-dimensional ndarray of length ' + model.nfeatures + '. Actual length: `' + x.shape[ 0 ] + '`.' );
		}
		model.update( x, y );
		return model.coefficients;
	}

	/**
	* Predicts the response value for one or more observation vectors `X`.
	*
	* @private
	* @param {ndarrayLike} X - ndarray (of size `(...,N)`) containing observation vectors
	* @param {string} [type="label"] - prediction type (either `label`, `probability`, or `linear`)
	* @throws {TypeError} first argument must be an ndarray
	* @throws {TypeError} first argument must be an ndarray whose last dimension matches the number of model features
	* @throws {TypeError} second argument must be a recognized/supported prediction "type"
	* @throws {Error} second argument must be compatible with the model loss function
	* @returns {ndarray} ndarray (of size `(...)`) containing response values
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var array = require( '@stdlib/ndarray/array' );
	*
	* // Create an accumulator:
	* var accumulator = incrBinaryClassification( 3 );
	*
	* // ...
	*
	* // Create a new observation vector:
	* var x = array( new Float64Array( [ 2.3, 5.3, 8.6 ] ) );
	*
	* // Predict the response value:
	* var yhat = accumulator.predict( x );
	* // returns <ndarray>
	*/
	function predict( X, type ) {
		var sh;
		var t;
		if ( !isndarrayLike( X ) ) {
			throw new TypeError( 'invalid argument. First argument must be an ndarray. Value: `' + X + '`.' );
		}
		sh = X.shape;
		if ( sh[ sh.length-1 ] !== N ) {
			throw new TypeError( 'invalid argument. First argument must be an ndarray whose last dimension is of size ' + N + '. Actual size: `' + sh[ sh.length-1 ] + '`.' );
		}
		t = 'label';
		if ( arguments.length > 1 ) {
			if ( type === 'probability' ) {
				if ( opts.loss !== 'log' && opts.loss !== 'modifiedHuber' ) {
					throw new Error( 'invalid argument. Second argument is incompatible with model loss function. Probability predictions are only supported when the loss function is either `log` or `modifiedHuber`. Model loss function: `' + opts.loss + '`.' );
				}
			} else if ( type !== 'label' && type !== 'linear' ) {
				throw new TypeError( 'invalid argument. Second argument must be a string value equal to either \'label\', \'probability\', or \'linear\'. Value: `' + type + '`.' );
			}
			t = type;
		}
		return model.predict( X, t );
	}
}


// EXPORTS //

module.exports = incrBinaryClassification;
