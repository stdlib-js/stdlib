/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

#include "stdlib/math/base/special/ceiln.h"
#include "stdlib/math/base/special/ceil.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/constants/float64/max_base10_exponent.h"
#include "stdlib/constants/float64/min_base10_exponent.h"
#include "stdlib/constants/float64/min_base10_exponent_subnormal.h"
#include "stdlib/constants/float64/max_safe_integer.h"
#include "stdlib/constants/float64/pinf.h"
#include <stdint.h>
#include <math.h>


// VARIABLES //

static const double MAX_INT = STDLIB_CONSTANT_FLOAT64_MAX_SAFE_INTEGER + 1.0;
static const double HUGE_VALUE = 1.0e+308;


// MAIN //

/**
* Rounds a double-precision floating-point number to the nearest multiple of \\(10^n\\) toward positive infinity.
*
* @param x       input value
* @param n       integer power of 10
* @return        rounded value
*
* @example
* // Round a value to 2 decimal places:
* double y = stdlib_base_ceiln( 3.141592653589793, -2 );
* // returns 3.15
*
* @example
* // If n = 0, `ceiln` behaves like `ceil`:
* double y = stdlib_base_ceiln( 3.141592653589793, 0 );
* // returns 4.0
*
* @example
* // Round a value to the nearest thousand:
* double y = stdlib_base_ceiln( 12368.0, 3 );
* // returns 13000.0
*/
double stdlib_base_ceiln( const double x, const int32_t n ) {
	double s;
	double y;
	if ( stdlib_base_is_nan( x ) ) {
		return x;
	}
	if (
		// Handle infinities...
		stdlib_base_is_infinite( x ) ||

		// Handle +-0...
		x == 0.0 ||

		// If `n` exceeds the maximum number of feasible decimal places (such as with subnormal numbers), nothing to round...
		n < STDLIB_CONSTANT_FLOAT64_MIN_BASE10_EXPONENT_SUBNORMAL ||

		// If `|x|` is large enough, no decimals to round...
		( stdlib_base_abs( x ) > MAX_INT && n <= 0 )
	) {
		return x;
	}
	// The maximum absolute double is ~1.8e308. Accordingly, any possible positive finite `x` rounded to the nearest >=10^309 is infinity and any negative finite `x` is zero.
	if ( n > STDLIB_CONSTANT_FLOAT64_MAX_BASE10_EXPONENT ) {
		if ( x <= 0.0 ) {
			return -0.0; // preserve the sign (same behavior as ceil)
		}
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	// If we overflow, return `x`, as the number of digits to the right of the decimal is too small (i.e., `x` is too large / lacks sufficient fractional precision) for there to be any effect when rounding...
	if ( n < STDLIB_CONSTANT_FLOAT64_MIN_BASE10_EXPONENT ) {
		s = pow( 10.0, -( n + STDLIB_CONSTANT_FLOAT64_MAX_BASE10_EXPONENT ) ); // TODO: replace use of `pow` once have stdlib equivalent
		y = ( x * HUGE_VALUE ) * s; // order of operation matters!
		if ( stdlib_base_is_infinite( y ) ) {
			return x;
		}
		return ( stdlib_base_ceil( y ) / HUGE_VALUE ) / s;
	}
	s = pow( 10.0, -n ); // TODO: replace use of `pow` once have stdlib equivalent
	y = x * s;
	if ( stdlib_base_is_infinite( y ) ) {
		return x;
	}
	return stdlib_base_ceil( y ) / s;
}
