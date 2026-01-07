/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/math/base/special/roundnf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_infinitef.h"
#include "stdlib/math/base/special/absf.h"
#include "stdlib/math/base/special/roundf.h"
#include "stdlib/math/base/special/powf.h"
#include "stdlib/constants/float32/max_safe_integer.h"
#include "stdlib/constants/float32/max_base10_exponent.h"
#include "stdlib/constants/float32/min_base10_exponent.h"
#include "stdlib/constants/float32/min_base10_exponent_subnormal.h"
#include <stdint.h>

static const float MAX_INT = STDLIB_CONSTANT_FLOAT32_MAX_SAFE_INTEGER + 1.0f;
static const float HUGE_VALUE = 1.0e+38f;

/**
* Rounds a single-precision floating-point number to the nearest multiple of `10^n`.
*
* ## Method
*
* 1.  If \\(|x| <= 2^{24}\\) and \\(|n| <= 38\\), we can use the formula
*
*     ```tex
*     \\operatorname{roundnf}(x,n) = \\frac{\\operatorname{roundf}(x \\cdot 10^{-n})}{10^{-n}}
*     ```
*
*     which shifts the decimal to the nearest multiple of \\(10^n\\), performs a standard \\(\\mathrm{roundf}\\) operation, and then shifts the decimal to its original position.
*
*     <!-- <note> -->
*
*     If \\(x \\cdot 10^{-n}\\) overflows, \\(x\\) lacks a sufficient number of decimal digits to have any effect when rounding. Accordingly, the rounded value is \\(x\\).
*
*     <!-- </note> -->
*
*     <!-- <note> -->
*
*     Note that rescaling \\(x\\) can result in unexpected behavior. For instance, the result of \\(\\operatorname{roundnf}(0.2+0.1,-16)\\) is \\(0.30000001192092896\\) and not \\(0.3\\). While possibly unexpected, this is not a bug. The behavior stems from the fact that most decimal fractions cannot be exactly represented as floating-point numbers. And further, rescaling can lead to slightly different fractional values, which, in turn, affects the result of \\(\mathrm{roundf}\\).
*
*     <!-- </note> -->
*
* 2.  If \\(n > 38\\), we recognize that the maximum absolute single-precision floating-point number is \\(\\approx 3.4\\mbox{e}38\\) and, thus, the result of rounding any possible finite number \\(x\\) to the nearest \\(10^n\\) is \\(0.0\\). To ensure consistent behavior with \\(\\operatorname{roundf}(x)\\), the sign of \\(x\\) is preserved.
*
* 3.  If \\(n < -45\\), \\(n\\) exceeds the maximum number of possible decimal places (such as with subnormal numbers), and, thus, the rounded value is \\(x\\).
*
* 4.  If \\(x > 2^{24}\\), \\(x\\) is **always** an integer (i.e., \\(x\\) has no decimal digits). If \\(n <= 0\\), the rounded value is \\(x\\).
*
* 5.  If \\(n < -38\\), we let \\(m = n + 38\\) and modify the above formula to avoid overflow.
*
*     ```tex
*     \\operatorname{roundnf}(x,n) = \\frac{\\biggl(\\frac{\\operatorname{roundf}( (x \\cdot 10^{38}) 10^{-m})}{10^{38}}\\biggr)}{10^{-m}}
*     ```
*
*     If overflow occurs, the rounded value is \\(x\\).
*
* ## Special Cases
*
* ```tex
* \\begin{align*}
* \\operatorname{roundnf}(\\mathrm{NaN}, n) &= \\mathrm{NaN} \\\\
* \\operatorname{roundnf}(x, \\mathrm{NaN}) &= \\mathrm{NaN} \\\\
* \\operatorname{roundnf}(x, \\pm\\infty) &= \\mathrm{NaN} \\\\
* \\operatorname{roundnf}(\\pm\\infty, n) &= \\pm\\infty \\\\
* \\operatorname{roundnf}(\\pm 0, n) &= \\pm 0
* \\end{align*}
* ```
*
* @param x       number
* @param n       power of 10
* @return        rounded value
*
* @example
* // Round a value to 2 decimal places:
* float v = stdlib_base_roundnf( 3.141592653589793f, -2 );
* // returns ~3.14f
*
* @example
* // If n = 0, `roundnf` behaves like `roundf`:
* float v = stdlib_base_roundnf( 3.141592653589793f, 0 );
* // returns 3.0f
*
* @example
* // Round a value to the nearest thousand:
* float v = stdlib_base_roundnf( 12368.0f, 3 );
* // returns ~12000.0f
*/
float stdlib_base_roundnf( const float x, const int32_t n ) {
	float s;
	float y;

	if ( stdlib_base_is_nanf( x ) ) {
		return 0.0f / 0.0f; // NaN
	}

	if (
		// Handle infinites...
		stdlib_base_is_infinitef( x ) ||

		// Handle +-0...
		x == 0.0f ||

		// If `n` exceeds the maximum number of feasible decimal places (such as with subnormal numbers), nothing to round...
		n < STDLIB_CONSTANT_FLOAT32_MIN_BASE10_EXPONENT_SUBNORMAL ||

		// If `|x|` is large enough, no decimals to round...
		( stdlib_base_absf( x ) > MAX_INT && n <= 0 )
	) {
		return x;
	}
	// The maximum absolute single-precision float is ~3.4e38. Accordingly, any possible finite `x` rounded to the nearest >=10^39 is 0.0.
	if ( n > STDLIB_CONSTANT_FLOAT32_MAX_BASE10_EXPONENT ) {
		return 0.0f * x; // preserve the sign (same behavior as roundf)
	}
	// If we overflow, return `x`, as the number of digits to the right of the decimal is too small (i.e., `x` is too large / lacks sufficient fractional precision) for there to be any effect when rounding...
	if ( n < STDLIB_CONSTANT_FLOAT32_MIN_BASE10_EXPONENT ) {
		s = stdlib_base_powf( 10.0f, -(float)( n + STDLIB_CONSTANT_FLOAT32_MAX_BASE10_EXPONENT ) );
		y = ( x * HUGE_VALUE ) * s; // order of operation matters!
		if ( stdlib_base_is_infinitef( y ) ) {
			return x;
		}
		return ( stdlib_base_roundf( y ) / HUGE_VALUE ) / s;
	}
	s = stdlib_base_powf( 10.0f, -(float)n );
	y = x * s;
	if ( stdlib_base_is_infinitef( y ) ) {
		return x;
	}
	return stdlib_base_roundf( y ) / s;
}
