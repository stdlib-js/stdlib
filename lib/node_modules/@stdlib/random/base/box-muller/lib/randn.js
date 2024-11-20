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

var sqrt = require( '@stdlib/math/base/special/sqrt' );
var ln = require( '@stdlib/math/base/special/ln' );
var sin = require( '@stdlib/math/base/special/sin' );
var cos = require( '@stdlib/math/base/special/cos' );
var TWO_PI = require( '@stdlib/constants/float64/two-pi' );


// MAIN //

/**
* Returns a function for generating standard normally distributed pseudorandom numbers using the Box-Muller algorithm.
*
* @private
* @param {PRNG} rand - PRNG which returns standard uniformly distributed numbers
* @returns {PRNG} PRNG
*/
function wrap( rand ) {
	var flg;
	var r;

	// Flag indicating whether to generate new normal random variates or return a cached normal random variate:
	flg = true;

	return randn;

	/**
	* Generates a standard normally distributed pseudorandom number.
	*
	* @private
	* @returns {number} pseudorandom number
	*
	* @example
	* var r = randn();
	* // returns <number>
	*/
	function randn() {
		var u1;
		var u2;
		var a;
		var b;
		if ( flg ) {
			// Note: if `u1` is `0`, the natural log blows up, so we keep trying until we get a non-zero rand. Rarely should we need more than one iteration.
			do {
				u1 = rand();
				u2 = rand();
			} while (
				u1 === 0.0
			);
			a = sqrt( -2.0 * ln(u1) );
			b = TWO_PI * u2;
			r = a * cos( b ); // cache for next call
			flg = false;
			return a * sin( b );
		}
		flg = true;
		return r;
	}
}


// EXPORTS //

module.exports = wrap;
