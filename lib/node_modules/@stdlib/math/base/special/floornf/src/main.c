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
*/

#include "stdlib/math/base/special/floornf.h"
#include "stdlib/math/base/special/absf.h"
#include "stdlib/math/base/special/floorf.h"
#include "stdlib/math/base/special/powf.h"
#include "stdlib/math/base/assert/is_infinitef.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/constants/float32/min_base10_exponent.h"
#include "stdlib/constants/float32/max_base10_exponent.h"
#include "stdlib/constants/float32/max_safe_integer.h"
#include "stdlib/constants/float32/min_base10_exponent_subnormal.h"
#include "stdlib/constants/float32/ninf.h"
#include <stdint.h>


// VARIABLES //

static const float MAX_INT = STDLIB_CONSTANT_FLOAT32_MAX_SAFE_INTEGER + 1.0f;
static const float HUGE_VALUE = 1.0e+38f;


// MAIN //

/**
* Rounds a single-precision floating-point number to the nearest multiple of `10^n` toward negative infinity.
*
* ## Method
*
* 1.  If \\(|x| <= 2^{24}\\) and \\(|n| <= 38\\), we can use the formula
*
*     ```tex
*     \operatorname{floornf}(x,n) = \frac{\operatorname{floor}(x \cdot 10^{-n})}{10^{-n}}
*     ```
*
*     which shifts the decimal to the nearest multiple of \\(10^n\\), performs a standard \\(\mathrm{floor}\\) operation, and then shifts the decimal to its original position.
*
*     <!-- <note> -->
*
*     If \\(x \cdot 10^{-n}\\) overflows, \\(x\\) lacks a sufficient number of decimal digits to have any effect when rounding. Accordingly, the rounded value is \\(x\\).
*
*     <!-- </note> -->
*
*     <!-- <note> -->
*
*     Note that rescaling \\(x\\) can result in unexpected behavior. For instance, the result of \\(\operatorname{floornf}(-0.2-0.1,-16)\\) is \\(-0.30000001192092896\\) and not \\(-0.3\\). While possibly unexpected, this is not a bug. The behavior stems from the fact that most decimal fractions cannot be exactly represented as floating-point numbers. And further, rescaling can lead to slightly different fractional values, which, in turn, affects the result of \\(\mathrm{floor}\\).
*
*     <!-- </note> -->
*
* 2.  If \\(n > 38\\), we recognize that the maximum absolute single-precision floating-point number is \\(\approx 3.4\mbox{e}38\\) and, thus, the result of rounding any possible negative finite number \\(x\\) to the nearest \\(10^n\\) is \\(-\infty\\) and any possible positive finite number \\(x\\) is \\(+0\\). To ensure consistent behavior with \\(\operatorname{floor}(x)\\), if \\(x > 0\\), the sign of \\(x\\) is preserved.
*
* 3.  If \\(n < -45\\), \\(n\\) exceeds the maximum number of possible decimal places (such as with subnormal numbers), and, thus, the rounded value is \\(x\\).
*
* 4.  If \\(x > 2^{24}\\), \\(x\\) is **always** an integer (i.e., \\(x\\) has no decimal digits). If \\(n <= 0\\), the rounded value is \\(x\\).
*
* 5.  If \\(n < -38\\), we let \\(m = n + 38\\) and modify the above formula to avoid overflow.
*
*     ```tex
*     \operatorname{floornf}(x,n) = \frac{\biggl(\frac{\operatorname{floor}( (x \cdot 10^{38}) 10^{-m})}{10^{38}}\biggr)}{10^{-m}}
*     ```
*
*     If overflow occurs, the rounded value is \\(x\\).
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* \operatorname{floornf}(\mathrm{NaN}, n) &= \mathrm{NaN} \\
* \operatorname{floornf}(x, \mathrm{NaN}) &= \mathrm{NaN} \\
* \operatorname{floornf}(x, \pm\infty) &= \mathrm{NaN} \\
* \operatorname{floornf}(\pm\infty, n) &= \pm\infty \\
* \operatorname{floornf}(\pm 0, n) &= \pm 0
* \end{align*}
* ```
*
* @param x       number
* @param n       integer power of 10
* @return        rounded value
*
* @example
* // Round a value to 3 decimal places:
* float y = stdlib_base_floornf( 3.14159f, -3 );
* // returns ~3.141f
*
* @example
* // If n = 0, `floornf` behaves like `floorf`:
* float y = stdlib_base_floornf( 3.14159f, 0 );
* // returns 3.0f
*/
float stdlib_base_floornf( const float x, const int32_t n ) {
	float s;
	float y;

	if ( stdlib_base_is_nanf( x ) ) {
		return x;
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
	// The maximum absolute single-precision floating-point number is ~3.4e38. Accordingly, any possible positive finite `x` rounded to the nearest >=10^39 is infinity and any negative finite `x` is zero.
	if ( n > STDLIB_CONSTANT_FLOAT32_MAX_BASE10_EXPONENT ) {
		if ( x >= 0.0f ) {
			return 0.0f; // preserve the sign (same behavior as floor)
		}
		return STDLIB_CONSTANT_FLOAT32_NINF;
	}
	// If we overflow, return `x`, as the number of digits to the right of the decimal is too small (i.e., `x` is too large / lacks sufficient fractional precision) for there to be any effect when rounding...
	if ( n < STDLIB_CONSTANT_FLOAT32_MIN_BASE10_EXPONENT ) {
		s = stdlib_base_powf( 10.0f, -( n+STDLIB_CONSTANT_FLOAT32_MAX_BASE10_EXPONENT ) );
		y = ( x * HUGE_VALUE ) * s; // order of operation matters!
		if ( stdlib_base_is_infinitef( y ) ) {
			return x;
		}
		return ( stdlib_base_floorf( y ) / HUGE_VALUE ) / s;
	}
	s = stdlib_base_powf( 10.0f, -n );
	y = x * s;
	if ( stdlib_base_is_infinitef( y ) ) {
		return x;
	}
	return stdlib_base_floorf( y ) / s;
}
