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

var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' );
var isUnityProbabilityArray = require( '@stdlib/assert/is-unity-probability-array' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isObject = require( '@stdlib/assert/is-plain-object' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination for validated options
* @param {Options} options - function options
* @param {NonNegativeInteger} [options.size] - sample size
* @param {ProbabilityArray} [options.probs] - element probabilities
* @param {boolean} [options.replace] - boolean indicating whether to sample with replacement
* @param {boolean} [options.mutate] - boolean indicating whether to mutate the `pool` when sampling without replacement
* @returns {(null|Error)} null or an error
*
* @example
* var opts = {};
* var options = {
*     'size': 10,
*     'replace': false,
*     'mutate': true,
*     'probs': [ 0.7, 0.3 ]
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( hasOwnProp( options, 'size' ) ) {
		opts.size = options.size;
		if ( !isNonNegativeInteger( opts.size ) ) {
			return new TypeError( 'invalid option. `size` option must be a nonnegative integer. Option: `' + opts.size + '`.' );
		}
	}
	if ( hasOwnProp( options, 'probs' ) ) {
		opts.probs = options.probs;
		if ( !isUnityProbabilityArray( opts.probs ) ) {
			return new TypeError( 'invalid option. `probs` option must be an array of probabilities that sum to one. Option: `' + opts.probs + '`.' );
		}
	}
	if ( hasOwnProp( options, 'mutate' ) ) {
		opts.mutate = options.mutate;
		if ( !isBoolean( opts.mutate ) ) {
			return new TypeError( 'invalid option. `mutate` option must be a boolean primitive. Option: `' + opts.mutate + '`.' );
		}
	}
	if ( hasOwnProp( options, 'replace' ) ) {
		opts.replace = options.replace;
		if ( !isBoolean( opts.replace ) ) {
			return new TypeError( 'invalid option. `replace` option must be a boolean primitive. Option: `' + opts.replace + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
