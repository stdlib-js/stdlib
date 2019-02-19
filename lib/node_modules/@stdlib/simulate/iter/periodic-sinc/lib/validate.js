/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isNonNegativeNumber = require( '@stdlib/assert/is-nonnegative-number' ).isPrimitive;


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {PositiveInteger} [options.period] - number of iterations before a waveform repeats
* @param {NonNegativeNumber} [options.amplitude] - peak amplitude
* @param {integer} [options.offset] - phase offset (in units of iterations)
* @param {NonNegativeInteger} [options.iter] - number of iterations
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'iter': 100
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isPlainObject( options ) ) {
		return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( hasOwnProp( options, 'period' ) ) {
		opts.period = options.period;
		if ( !isPositiveInteger( options.period ) ) {
			return new TypeError( 'invalid option. `period` option must be an positive integer. Option: `' + options.period + '`.' );
		}
	}
	if ( hasOwnProp( options, 'amplitude' ) ) {
		opts.amplitude = options.amplitude;
		if ( !isNonNegativeNumber( options.amplitude ) ) {
			return new TypeError( 'invalid option. `amplitude` option must be a nonnegative number. Option: `' + options.amplitude + '`.' );
		}
	}
	if ( hasOwnProp( options, 'offset' ) ) {
		opts.offset = options.offset;
		if ( !isInteger( options.offset ) ) {
			return new TypeError( 'invalid option. `offset` option must be an integer. Option: `' + options.offset + '`.' );
		}
	}
	if ( hasOwnProp( options, 'iter' ) ) {
		opts.iter = options.iter;
		if ( !isNonNegativeInteger( options.iter ) ) {
			return new TypeError( 'invalid option. `iter` option must be a nonnegative integer. Option: `' + options.iter + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
