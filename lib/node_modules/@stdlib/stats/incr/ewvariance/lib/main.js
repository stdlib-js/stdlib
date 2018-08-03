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
* Returns an accumulator function which incrementally computes an exponentially weighted variance.
*
* @param {NonNegativeNumber} alpha - smoothing factor
* @throws {TypeError} must provide a nonnegative number
* @throws {RangeError} must be on the interval `[0,1]`
* @returns {Function} accumulator function
*
* @example
* var accumulator = increwvariance( 0.5 );
*
* var v = accumulator();
* // returns null
*
* v = accumulator( 2.0 );
* // returns 0.0
*
* v = accumulator( -5.0 );
* // returns 12.25
*
* v = accumulator();
* // returns 12.25
*/
function increwvariance( alpha ) {
	var incr;
	var s2;
	var r;
	var m;
	var c;
	if ( !isNonNegativeNumber( alpha ) ) {
		throw new TypeError( 'invalid argument. Must provide a nonnegative number. Value: `' + alpha + '`.' );
	}
	if ( alpha < 0.0 || alpha > 1.0 ) {
		throw new RangeError( 'invalid argument. Must provide a nonnegative number on the interval [0,1]. Value: `' + alpha + '`.' );
	}
	c = 1.0 - alpha;
	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated variance. If not provided a value, the accumulator function returns the current variance.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} variance or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			return ( s2 === void 0 ) ? null : s2;
		}
		if ( s2 === void 0 ) {
			m = x;
			s2 = 0.0;
		} else {
			r = x - m;
			incr = alpha * r;
			m += incr;
			s2 = c * ( s2+(r*incr) );
		}
		return s2;
	}
}


// EXPORTS //

module.exports = increwvariance;
