/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

/**
* Computes the greatest common divisor (gcd) of two single-precision floating point numbers using the binary GCD algorithm and bitwise operations.
*
* ## References
*
* -   Stein, Josef. 1967. "Computational problems associated with Racah algebra." _Journal of Computational Physics_ 1 (3): 397–405. doi:[10.1016/0021-9991(67)90047-2][@stein:1967].
*
* [@stein:1967]: https://doi.org/10.1016/0021-9991(67)90047-2
*
* @private
* @param {integer32} a - first number
* @param {integer32} b - second number
* @returns {integer32} greatest common divisor
*
* @example
* var v = gcdf( 48, 18 );
* // returns 6
*/
function gcdf( a, b ) {
	var k = 0;
	var t;

	// Simple cases:
	if ( a === 0 ) {
		return b;
	}
	if ( b === 0 ) {
		return a;
	}
	// Reduce `a` and/or `b` to odd numbers and keep track of the greatest power of 2 dividing both `a` and `b`...
	while ( (a & 1) === 0 && (b & 1) === 0 ) {
		a >>>= 1; // right shift
		b >>>= 1; // right shift
		k += 1;
	}
	// Reduce `a` to an odd number...
	while ( (a & 1) === 0 ) {
		a >>>= 1; // right shift
	}
	// Henceforth, `a` is always odd...
	while ( b ) {
		// Remove all factors of 2 in `b`, as they are not common...
		while ( (b & 1) === 0 ) {
			b >>>= 1; // right shift
		}
		// `a` and `b` are both odd. Swap values such that `b` is the larger of the two values, and then set `b` to the difference (which is even)...
		if ( a > b ) {
			t = b;
			b = a;
			a = t;
		}
		b -= a; // b=0 iff b=a
	}
	// Restore common factors of 2...
	return a << k;
}


// EXPORTS //

module.exports = gcdf;
