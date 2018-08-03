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
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes an exponentially weighted standard deviation.
*
* @param {NonNegativeNumber} alpha - smoothing factor
* @throws {TypeError} must provide a nonnegative number
* @throws {RangeError} must be on the interval `[0,1]`
* @returns {Function} accumulator function
*
* @example
* var accumulator = increwstdev( 0.5 );
*
* var s = accumulator();
* // returns null
*
* s = accumulator( 2.0 );
* // returns 0.0
*
* s = accumulator( -5.0 );
* // returns 3.5
*
* s = accumulator();
* // returns 3.5
*/
function increwstdev( alpha ) {
	var incr;
	var s2;
	var s;
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
	* If provided a value, the accumulator function returns an updated standard deviation. If not provided a value, the accumulator function returns the current standard deviation.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} standard deviation or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			return ( s === void 0 ) ? null : s;
		}
		if ( s === void 0 ) {
			m = x;
			s2 = 0.0;
		} else {
			r = x - m;
			incr = alpha * r;
			m += incr;
			s2 = c * ( s2+(r*incr) );
		}
		s = sqrt( s2 );
		return s;
	}
}


// EXPORTS //

module.exports = increwstdev;
