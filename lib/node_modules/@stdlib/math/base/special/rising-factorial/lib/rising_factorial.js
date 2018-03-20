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
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/factorials.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006, 2010.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var isInteger = require( '@stdlib/math/base/assert/is-integer' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var gammaDeltaRatio = require( '@stdlib/math/base/special/gamma-delta-ratio' );


// VARIABLES //

var fallingFactorial;


// MAIN //

/**
* Computes the rising factorial of `x` and `n`.
*
* ## Notes
*
* -   The rising factorial is defined as
*
*     ```tex
*     \operatorname{risingFactorial}(x, n) = x (x-1) (x-2) (x-3) \ldots (x-n+1)
*     ```
*
*     or equivalently
*
*     ```tex
*     \operatorname{risingFactorial}(x, n) = \frac{ \Gamma(x + n) }{ \Gamma(x) };
*     ```
*
* @param {number} x - first function parameter
* @param {integer} n - second function parameter
* @returns {number} function value
*
* @example
* var v = risingFactorial( 0.9, 5 );
* // returns ~94.766
*
* @example
* var v = risingFactorial( -9.0, 3 );
* // returns -504.0
*
* @example
* var v = risingFactorial( 0.0, 2 );
* // returns 0.0
*
* @example
* var v = risingFactorial( 3.0, -2 );
* // returns 0.5
*/
function risingFactorial( x, n ) {
	var result;
	var inv;

	// Lazy-load to avoid undefined reference due to circular dependency...
	if ( !fallingFactorial ) {
		fallingFactorial = require( '@stdlib/math/base/special/falling-factorial' );
	}
	if ( isnan( x ) || !isInteger( n ) ) {
		return NaN;
	}
	if ( x < 0.0 ) {
		// For `x < 0`, we really have a falling factorial, modulo a possible change of sign. Note that the falling factorial isn't defined for negative `n`, so we'll get rid of that case first:
		if ( n < 0.0 ) {
			x += n;
			n = -n;
			inv = true;
		}
		result = ( (n&1) ? -1.0 : 1.0 ) * fallingFactorial( -x, n );
		if ( inv ) {
			result = 1.0 / result;
		}
		return result;
	}
	if ( n === 0 ) {
		return 1.0;
	}
	if ( x === 0.0 ) {
		if ( n < 0 ) {
			return -gammaDeltaRatio( x+1.0, -n );
		}
		return 0.0;
	}
	if ( x < 1.0 && x+n < 0.0 ) {
		result = gammaDeltaRatio( 1.0-x, -n );
		return ( n&1 ) ? -result : result;
	}
	// We don't optimize this for small `n`, because `gammaDeltaRatio` is already optimized for that use case:
	return 1.0 / gammaDeltaRatio( x, n );
}


// EXPORTS //

module.exports = risingFactorial;
