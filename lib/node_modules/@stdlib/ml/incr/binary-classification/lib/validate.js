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

var isNonNegativeNumber = require( '@stdlib/assert/is-nonnegative-number' ).isPrimitive;
var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var contains = require( '@stdlib/assert/contains' );
var LEARNING_RATES = require( './learning_rates.json' );
var LOSS_FUNCTIONS = require( './loss_functions.json' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {PositiveNumber} [options.lambda] - regularization parameter
* @param {ArrayLikeObject} [options.learningRate] - learning rate function
* @param {string} [options.loss] - loss function
* @param {boolean} [options.intercept] - specifies whether an intercept should be included
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {};
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	var name;
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( hasOwnProp( options, 'intercept' ) ) {
		opts.intercept = options.intercept;
		if ( !isBoolean( opts.intercept ) ) {
			return new TypeError( 'invalid option. `intercept` option must be a boolean. Option: `' + opts.intercept + '`.' );
		}
	}
	if ( hasOwnProp( options, 'lambda' ) ) {
		opts.lambda = options.lambda;
		if ( !isNonNegativeNumber( opts.lambda ) ) {
			return new TypeError( 'invalid option. `lambda` option must be a nonnegative number. Option: `' + opts.lambda + '`.' );
		}
	}
	if ( hasOwnProp( options, 'learningRate' ) ) {
		if ( !isArrayLikeObject( options.learningRate ) ) {
			return new TypeError( 'invalid option. `learningRate` option must be an array-like object. Option: `' + options.learningRate + '`.' );
		}
		name = options.learningRate[ 0 ];
		opts.learningRate[ 0 ] = name;
		if ( !contains( LEARNING_RATES, name ) ) {
			return new TypeError( 'invalid option. First `learningRate` option must be one of the following values: \'' + LEARNING_RATES.join( '\', \'' ) + '\'. Option: `' + name + '`.' );
		}
		if ( options.learningRate.length > 1 ) {
			if ( name === 'constant' || name === 'invscaling' ) {
				opts.learningRate[ 1 ] = options.learningRate[ 1 ];
				if ( !isPositiveNumber( opts.learningRate[ 1 ] ) ) {
					return new TypeError( 'invalid option. Second `learningRate` option must be a positive number. Option: `' + opts.learningRate[ 1 ] + '`.' );
				}
			}
		}
		if ( options.learningRate.length > 2 ) {
			if ( name === 'invscaling' ) {
				opts.learningRate[ 2 ] = options.learningRate[ 2 ];
				if ( !isNumber( opts.learningRate[ 2 ] ) ) {
					return new TypeError( 'invalid option. Third `learningRate` option must be a number. Option: `' + opts.learningRate[ 2 ] + '`.' );
				}
			}
		}
	}
	if ( hasOwnProp( options, 'loss' ) ) {
		opts.loss = options.loss;
		if ( !contains( LOSS_FUNCTIONS, opts.loss ) ) {
			return new TypeError( 'invalid option. `loss` option must be one of the following values: \'' + LOSS_FUNCTIONS.join( '\', \'' ) + '\'. Option: `' + opts.loss + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
