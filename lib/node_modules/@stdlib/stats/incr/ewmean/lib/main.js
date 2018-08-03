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


// MAIN //

/**
* Returns an accumulator function which incrementally computes an exponentially weighted mean.
*
* @param {NonNegativeNumber} alpha - smoothing factor
* @throws {TypeError} must provide a nonnegative number
* @throws {RangeError} must be on the interval `[0,1]`
* @returns {Function} accumulator function
*
* @example
* var accumulator = increwmean( 0.5 );
*
* var v = accumulator();
* // returns null
*
* v = accumulator( 2.0 );
* // returns 2.0
*
* v = accumulator( -5.0 );
* // returns -1.5
*
* v = accumulator();
* // returns -1.5
*/
function increwmean( alpha ) {
	var m;
	if ( !isNonNegativeNumber( alpha ) ) {
		throw new TypeError( 'invalid argument. Must provide a nonnegative number. Value: `' + alpha + '`.' );
	}
	if ( alpha < 0.0 || alpha > 1.0 ) {
		throw new RangeError( 'invalid argument. Must provide a nonnegative number on the interval [0,1]. Value: `' + alpha + '`.' );
	}
	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated mean. If not provided a value, the accumulator function returns the current mean.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} mean value or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			return ( m === void 0 ) ? null : m;
		}
		if ( m === void 0 ) {
			m = x;
		} else {
			m += alpha * ( x-m );
		}
		return m;
	}
}


// EXPORTS //

module.exports = increwmean;
