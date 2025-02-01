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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/factorials.hpp}. The implementation has been modified according to project conventions.
*
* ```text
* (C) Copyright John Maddock 2006, 2010.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

#include "stdlib/math/base/special/falling_factorial.h"
#include "stdlib/math/base/assert/is_nonnegative_integer.h"
#include "stdlib/math/base/assert/is_integer.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/gamma_delta_ratio.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/constants/float64/max.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/max_safe_nth_factorial.h"
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
*     \operatorname{risingFactorial}(x, n) = x (x-1) (x-2) (x-3) \ldots (x-n+1)
*     ```
*
*     or equivalently
*
*     ```tex
*     \operatorname{risingFactorial}(x, n) = \frac{ \Gamma(x + n) }{ \Gamma(x) };
*     ```
*
* @param x    first function parameter
* @param n    second function parameter
* @return     function value
*
* @example
* double out = risingFactorial( 0.9, 5 );
* // returns ~94.766
*
* @example
* double out = risingFactorial( -9.0, 3 );
* // returns -504.0
 */
static double risingFactorial( const double x, const int32_t n ) {
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
		// For `xc < 0`, we really have a falling factorial, modulo a possible change of sign. Note that the falling factorial isn't defined for negative `nc`, so we'll get rid of that case first:
		if ( nc < 0 ) {
			xc += nc;
			nc = -nc;
			inv = true;
		}
		result = ( ( nc & 1 ) ? -1.0 : 1.0 ) * stdlib_base_falling_factorial( -xc, nc );
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
	if ( ( xc < 1.0 ) && ( xc + nc < 0.0 ) ) {
		result = stdlib_base_gamma_delta_ratio( 1.0 - xc, -nc );
		return ( nc & 1 ) ? -result : result;
	}

	// We don't optimize this for small `nc`, because `stdlib_base_gamma_delta_ratio` is already optimized for that use case:
	return 1.0 / stdlib_base_gamma_delta_ratio( xc, nc );
}

/**
* Computes the falling factorial of `x` and `n`.
*
* ## Notes
*
* -   The falling factorial is defined as
*
*     ```tex
*     \operatorname{fallingFactorial}(x, n) = x (x-1) (x-2) (x-3) \ldots (x-n+1)
*     ```
*
* @param x    first function parameter
* @param n    second function parameter
* @return     function value
*
* @example
* double out = stdlib_base_falling_factorial( 0.9, 5 );
* // returns ~0.644
*
* @example
* double out = stdlib_base_falling_factorial( -9.0, 3 );
* // returns -990.0
*/
double stdlib_base_falling_factorial( const double x, const int32_t n ) {
	double result;
	double xp1;
	double n2;
	double t1;
	double t2;
	double xc;

	if ( stdlib_base_is_nan( x ) || !stdlib_base_is_nonnegative_integer( n ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x == 0.0 ) {
		return 0.0;
	}
	if ( x < 0.0 ) {
		// For `x < 0`, we really have a rising factorial modulo a possible change of sign:
		return ( ( n & 1 ) ? -1.0 : 1.0 ) * risingFactorial( -x, n );
	}
	if ( n == 0 ) {
		return 1.0;
	}
	if ( x < 0.5 ) {
		// Computing `1 + x` will throw away digits, so split up calculation...
		if ( n > STDLIB_CONSTANT_FLOAT64_MAX_SAFE_NTH_FACTORIAL - 2 ) {
			// Given a ratio of two very large numbers, we need to split the calculation up into two blocks:
			t1 = x * stdlib_base_falling_factorial( x - 1.0, STDLIB_CONSTANT_FLOAT64_MAX_SAFE_NTH_FACTORIAL - 2 );
			t2 = stdlib_base_falling_factorial( x - STDLIB_CONSTANT_FLOAT64_MAX_SAFE_NTH_FACTORIAL + 1.0, n - STDLIB_CONSTANT_FLOAT64_MAX_SAFE_NTH_FACTORIAL + 1 );
			if ( ( STDLIB_CONSTANT_FLOAT64_MAX / stdlib_base_abs( t1 ) ) < stdlib_base_abs( t2 ) ) {
				return STDLIB_CONSTANT_FLOAT64_PINF;
			}
			return t1 * t2;
		}
		return x * stdlib_base_falling_factorial( x - 1.0, n - 1 );
	}
	xc = x;
	if ( xc <= n - 1.0 ) {
		// `xc + 1 - n` will be negative and computing the ratio of two gammas will not work, so split the product up into three parts:
		xp1 = xc + 1.0;
		n2 = stdlib_base_abs( stdlib_base_floor( xp1 ) );
		if ( n2 == xp1 ) {
			return 0.0;
		}
		result = stdlib_base_gamma_delta_ratio( xp1, -(int32_t)n2 );
		xc -= n2;
		result *= xc;
		n2 += 1.0;
		if ( (int32_t)n2 < n ) {
			result *= stdlib_base_falling_factorial( xc - 1.0, n - (int32_t)n2 );
		}
		return result;
	}
	// Simple case: just the ratio of two (positive argument) gamma functions. Note that we don't optimize this for small `n`, because `gammaDeltaRatio` is already optimized for that use case:
	return stdlib_base_gamma_delta_ratio( xc + 1.0, -n );
}
