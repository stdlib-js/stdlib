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

/* eslint-disable */ // TODO: fix me
'use strict';

// MODULES //

var isArray = require( '@stdlib/assert/is-array' );
var copy = require( '@stdlib/utils/copy' );
var setNonEnumerableReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var WeightVector = require( './weight_vector.js' );
var epsilonInsensitiveLoss = require( './loss/epsilon_insensitive.js' );
var squaredErrorLoss = require( './loss/squared_error.js' );
var huberLoss = require( './loss/huber.js' );
var getEta = require( './eta_factory.js' );
var DEFAULTS = require( './defaults.json' );
var validate = require( './validate.js' );


// MAIN //

/**
* Online learning for regression using stochastic gradient descent (SGD).
*
* ## Method
*
* The sub-gradient of the loss function is estimated for each datum and the regression model is updated incrementally, with a decreasing learning rate and regularization of the feature weights based on L2 regularization.
*
* ## References
*
* -   Shalev-Shwartz, S., Singer, Y., Srebro, N., & Cotter, A. (2011). Pegasos: Primal estimated sub-gradient solver for SVM. Mathematical Programming, 127(1), 3–30. doi:10.1007/s10107-010-0420-4
*
* @param {Object} [options] - options object
* @param {PositiveNumber} [options.epsilon=0.1] - insensitivity parameter
* @param {PositiveNumber} [options.eta0=0.02] - constant learning rate
* @param {NonNegativeNumber} [options.lambda=1e-3] - regularization parameter
* @param {string} [options.learningRate='basic'] - string denoting the learning rate to use. Can be `constant`, `pegasos`, or `basic`
* @param {string} [options.loss='squaredError'] - string denoting the loss function to use. Can be `squaredError`, `epsilonInsensitive`, or `huber`
* @param {boolean} [options.intercept=true] - boolean indicating whether to include an intercept
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Object} regression model
*
* @example
* var incrSGDRegression = require( '@stdlib/streams/ml/incr/sgd-regression' );
*
* var accumulator = incrSGDRegression({
*     'intercept': true
*     'lambda': 1e-5
* });
*
* // Update model as observations come in:
* var y = 3.5;
* var x = [ 2.3, 1.0, 5.0 ];
* accumulator( x, y );
*
* // Predict new observation:
* var yHat = accumulator.predict( x );
*
* // Retrieve coefficients:
* var coefs = accumulator.coefs;
*/
function incrSGDRegression( options ) {
	var _nFeatures;
	var _lossfun;
	var _weights;
	var _getEta;
	var accumulator;
	var opts;
	var err;

	opts = copy( DEFAULTS );
	if ( arguments.length > 0 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	_weights = null;

	// Set loss function:
	switch ( opts.loss ) {
	case 'epsilonInsensitive':
		_lossfun = epsilonInsensitiveLoss;
	break;
	case 'huber':
		_lossfun = huberLoss;
	break;
	case 'squaredError':
		_lossfun = squaredErrorLoss;
	break;
	default:
		throw Error( 'invalid input value. `loss` option must be either `epsilonInsensitive`, `huber` or `squaredError`. Value: `' + opts.loss + '`' );
	}

	// Set learning rate:
	_getEta = getEta( opts.learningRate, opts.eta0, opts.lambda );

	/**
	* Update weights given new observations `y` and `x`.
	*
	* @param {NumericArray} x - feature vector
	* @param {number} y - response value
	* @throws {TypeError} first argument must be an array
	* @throws {TypeError} first argument must have length equal to the number of predictors
	*
	* @example
	* // Update model as observations come in:
	* var y = 3.5;
	* var x = [ 2.3, 1.0, 5.0 ];
	* accumulator( x, y );
	*/
	function accumulator( x, y ) {
		var eta;

		if ( !_weights ) {
			_weights = new WeightVector( x.length, opts.intercept );
			_nFeatures = opts.intercept ? _weights.nWeights - 1 : _weights.nWeights;
		}

		if ( !isArray( x ) || x.length !== _nFeatures ) {
			throw new TypeError( 'invalid input value. First argument `x` must be an array of length ' + _nFeatures + '. Value: `' + x + '`' );
		}

		// Get current learning rate...
		eta = _getEta();

		// Update weights depending on the chosen loss function...
		_lossfun( _weights, x, y, eta, opts.lambda, opts.epsilon );
	}

	setNonEnumerableReadOnlyAccessor( accumulator, 'coefs', getCoefs );
	setReadOnly( accumulator, 'predict', predict );
	return accumulator;

	/**
	* Model coefficients / feature weights.
	*
	* @private
	* @name coefs
	* @type {Array}
	*
	* @example
	* // Retrieve coefficients:
	* var coefs = accumulator.coefs;
	*/
	function getCoefs() {
		var ret;
		var i;

		ret = new Array( _weights.nWeights );
		for ( i = 0; i < ret.length; i++ ) {
			ret[ i ] = _weights._data[ i ] * _weights.scale;
		}
		return ret;
	}

	/**
	* Predict response for a new observation with features `x`.
	*
	* @private
	* @param {NumericArray} x - feature vector
	* @throws {TypeError} first argument must be an array
	* @throws {TypeError} first argument must have length equal to the number of predictors
	* @returns {number} response value
	*
	* @example
	* // Predict new observation:
	* var x = [ 2.3, 5.3, 8.6 ];
	* var yHat = accumulator.predict( x );
	*/
	function predict( x ) {
		if ( !isArray( x ) || x.length !== _nFeatures ) {
			throw new TypeError( 'invalid input value. First argument `x` must be an array of length ' + this.nFeatures + '. Value: `' + x + '`' );
		}
		return _weights.innerProduct( x );
	}
}


// EXPORTS //

module.exports = incrSGDRegression;
