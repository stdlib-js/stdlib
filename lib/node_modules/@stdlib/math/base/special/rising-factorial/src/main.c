/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/factorials.hpp}. The implementation has been modified according to stdlib conventions.
*
* ```text
* (C) Copyright John Maddock 2006, 2010.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/gamma_delta_ratio.h"
#include "stdlib/math/base/special/falling_factorial.h"
#include <stdint.h>
#include <stdbool.h>

/**
* Computes the rising factorial of `x` and `n`.
*
* ## Notes
*
* -   The rising factorial is defined as
*
*     ```tex
*     \operatorname{stdlib_base_rising_factorial}(x, n) = x (x-1) (x-2) (x-3) \ldots (x-n+1)
*     ```
*
*     or equivalently
*
*     ```tex
*     \operatorname{stdlib_base_rising_factorial}(x, n) = \frac{ \Gamma(x + n) }{ \Gamma(x) };
*     ```
*
* @param x     first function parameter
* @param n     second function parameter
* @return      function value
*
* @example
* double v = stdlib_base_rising_factorial( 0.9, 5 );
* // returns ~94.766
*/
double stdlib_base_rising_factorial( const double x, const int32_t n ) {
	double result;
	int32_t nc;
	double xc;
	bool inv;

	if ( stdlib_base_is_nan( x ) ) {
		return 0.0 / 0.0; // NaN
	}
	nc = n;
	xc = x;
	inv = false;
	if ( xc < 0.0 ) {
		// For `x < 0`, we really have a falling factorial, modulo a possible change of sign. Note that the falling factorial isn't defined for negative `n`, so we'll get rid of that case first:
		if ( nc < 0 ) {
			xc += nc;
			nc = -nc;
			inv = true;
		}
		result = ( (nc&1) ? -1.0 : 1.0 ) * stdlib_base_falling_factorial( -xc, nc );
		if ( inv ) {
			result = 1.0 / result;
		}
		return result;
	}
	if ( nc == 0 ) {
		return 1.0;
	}
	if ( xc == 0.0 ) {
		if ( nc < 0 ) {
			return -stdlib_base_gamma_delta_ratio( xc + 1.0, -nc );
		}
		return 0.0;
	}
	if ( ( xc < 1.0 ) && ( xc+nc < 0.0 ) ) {
		result = stdlib_base_gamma_delta_ratio( 1.0 - xc, -nc );
		return ( nc&1 ) ? -result : result;
	}
	// We don't optimize this for small `nc`, because `stdlib_base_gamma_delta_ratio` is already optimized for that use case:
	return 1.0 / stdlib_base_gamma_delta_ratio( xc, nc );
}
