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

#include "stdlib/math/base/special/truncn.h"
#include "stdlib/math/base/special/trunc.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/constants/float64/max_safe_integer.h"
#include "stdlib/constants/float64/max_base10_exponent.h"
#include "stdlib/constants/float64/min_base10_exponent.h"
#include "stdlib/constants/float64/min_base10_exponent_subnormal.h"
#include <stdint.h>

static const double MAX_INT = STDLIB_CONSTANT_FLOAT64_MAX_SAFE_INTEGER + 1.0;
static const double HUGE_VALUE = 1.0e+308;

/**
* Rounds a numeric value to the nearest multiple of \\(10^n\\) toward zero.
*
* ## Method
*
* 1.  If \\(|x| <= 2^{53}\\) and \\(|n| <= 308\\), we can use the formula
*
*     ```tex
*     \operatorname{truncn}(x,n) = \frac{\operatorname{trunc}(x \cdot 10^{-n})}{10^{-n}}
*     ```
*
*     which shifts the decimal to the nearest multiple of \\(10^n\\), performs a standard \\(\mathrm{trunc}\\) operation, and then shifts the decimal to its original position.
*
*     <!-- <note> -->
*
*     If \\(x \cdot 10^{-n}\\) overflows, \\(x\\) lacks a sufficient number of decimal digits to have any effect when rounding. Accordingly, the rounded value is \\(x\\).
*
*     <!-- </note> -->
*
*     <!-- <note> -->
*
*     Note that rescaling \\(x\\) can result in unexpected behavior due to the fact that most decimal fractions cannot be exactly represented as floating-point numbers. And further, rescaling can lead to slightly different fractional values, which, in turn, affects the result of \\(\mathrm{trunc}\\).
*
*     <!-- </note> -->
*
* 2.  If \\(n > 308\\), we recognize that the maximum absolute double-precision floating-point number is \\(\approx 1.8\mbox{e}308\\) and, thus, the result of rounding any possible finite number \\(x\\) to the nearest \\(10^n\\) is \\(0\\). To ensure consistent behavior with \\(\operatorname{trunc}(x)\\), the sign of \\(x\\) is preserved.
*
* 3.  If \\(n < -324\\), \\(n\\) exceeds the maximum number of possible decimal places (such as with subnormal numbers), and, thus, the rounded value is \\(x\\).
*
* 4.  If \\(x > 2^{53}\\), \\(x\\) is **always** an integer (i.e., \\(x\\) has no decimal digits). If \\(n <= 0\\), the rounded value is \\(x\\).
*
* 5.  If \\(n < -308\\), we let \\(m = n + 308\\) and modify the above formula to avoid overflow.
*
*     ```tex
*     \operatorname{truncn}(x,n) = \frac{\biggl(\frac{\operatorname{trunc}( (x \cdot 10^{308}) 10^{-m})}{10^{308}}\biggr)}{10^{-m}}
*     ```
*
*     If overflow occurs, the rounded value is \\(x\\).
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* \operatorname{truncn}(\mathrm{NaN}, n) &= \mathrm{NaN} \\
* \operatorname{truncn}(x, \mathrm{NaN}) &= \mathrm{NaN} \\
* \operatorname{truncn}(x, \pm\infty) &= \mathrm{NaN} \\
* \operatorname{truncn}(\pm\infty, n) &= \pm\infty \\
* \operatorname{truncn}(\pm 0, n) &= \pm 0
* \end{align*}
* ```
*
* @param x    input value
* @param n    integer power of `10`
* @return     rounded value
*
* @example
* // Round a value to 4 decimal places:
* double v = stdlib_base_truncn( 3.141592653589793, -4 );
* // returns 3.1415
*/
double stdlib_base_truncn( const double x, const int32_t n ) {
	double s;
	double y;

	if ( stdlib_base_is_nan( x ) ) {
		return 0.0 / 0.0; // NaN
	}

	if (
		// Handle infinites...
		stdlib_base_is_infinite( x ) ||

		// Handle +-0...
		x == 0.0 ||

		// If `n` exceeds the maximum number of feasible decimal places (such as with subnormal numbers), nothing to truncate...
		n < STDLIB_CONSTANT_FLOAT64_MIN_BASE10_EXPONENT_SUBNORMAL ||

		// If `|x|` is large enough, no decimals to truncate...
		( stdlib_base_abs( x ) > MAX_INT && n <= 0 )
	) {
		return x;
	}

	// The maximum absolute double is ~1.8e308. Accordingly, any possible positive finite `x` rounded to the nearest >=10^309 is zero.
	if ( n > STDLIB_CONSTANT_FLOAT64_MAX_BASE10_EXPONENT ) {
		return 0.0 * x; // preserve the sign (same behavior as trunc)
	}

	// If we overflow, return `x`, as the number of digits to the right of the decimal is too small (i.e., `x` is too large / lacks sufficient fractional precision) for there to be any effect when rounding...
	if ( n < STDLIB_CONSTANT_FLOAT64_MIN_BASE10_EXPONENT ) {
		s = stdlib_base_pow( 10.0, -( n + STDLIB_CONSTANT_FLOAT64_MAX_BASE10_EXPONENT ) );
		y = ( x * HUGE_VALUE ) * s; // order of operation matters!
		if ( stdlib_base_is_infinite( y ) ) {
			return x;
		}
		return ( stdlib_base_trunc( y ) / HUGE_VALUE ) / s;
	}
	s = stdlib_base_pow( 10.0, -n );
	y = x * s;
	if ( stdlib_base_is_infinite( y ) ) {
		return x;
	}
	return stdlib_base_trunc( y ) / s;
}
