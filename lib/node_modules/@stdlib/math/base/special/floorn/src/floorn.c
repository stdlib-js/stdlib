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

#include "stdlib/math/base/special/floorn.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/min_base10_exponent.h"
#include "stdlib/constants/float64/max_base10_exponent.h"
#include "stdlib/constants/float64/max_safe_integer.h"
#include "stdlib/constants/float64/min_base10_exponent_subnormal.h"
#include "stdlib/constants/float64/ninf.h"
#include <stdint.h>
#include <math.h>


// VARIABLES //

static const double MAX_INT = STDLIB_CONSTANT_FLOAT64_MAX_SAFE_INTEGER + 1.0;
static const double HUGE_VALUE = 1.0e+308;


// MAIN //

/**
* Rounds a double-precision floating-point number to the nearest multiple of `10^n` toward negative infinity.
*
* ## Method
*
* 1.  If \\(|x| <= 2^{53}\\) and \\(|n| <= 308\\), we can use the formula
*
*     ```tex
*     \operatorname{floorn}(x,n) = \frac{\operatorname{floor}(x \cdot 10^{-n})}{10^{-n}}
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
*     Note that rescaling \\(x\\) can result in unexpected behavior. For instance, the result of \\(\operatorname{floorn}(-0.2-0.1,-16)\\) is \\(-0.3000000000000001\\) and not \\(-0.3\\). While possibly unexpected, this is not a bug. The behavior stems from the fact that most decimal fractions cannot be exactly represented as floating-point numbers. And further, rescaling can lead to slightly different fractional values, which, in turn, affects the result of \\(\mathrm{floor}\\).
*
*     <!-- </note> -->
*
* 2.  If \\(n > 308\\), we recognize that the maximum absolute double-precision floating-point number is \\(\approx 1.8\mbox{e}308\\) and, thus, the result of rounding any possible negative finite number \\(x\\) to the nearest \\(10^n\\) is \\(-\infty\\) and any possible positive finite number \\(x\\) is \\(+0\\). To ensure consistent behavior with \\(\operatorname{floor}(x)\\), if \\(x > 0\\), the sign of \\(x\\) is preserved.
*
* 3.  If \\(n < -324\\), \\(n\\) exceeds the maximum number of possible decimal places (such as with subnormal numbers), and, thus, the rounded value is \\(x\\).
*
* 4.  If \\(x > 2^{53}\\), \\(x\\) is **always** an integer (i.e., \\(x\\) has no decimal digits). If \\(n <= 0\\), the rounded value is \\(x\\).
*
* 5.  If \\(n < -308\\), we let \\(m = n + 308\\) and modify the above formula to avoid overflow.
*
*     ```tex
*     \operatorname{floorn}(x,n) = \frac{\biggl(\frac{\operatorname{floor}( (x \cdot 10^{308}) 10^{-m})}{10^{308}}\biggr)}{10^{-m}}
*     ```
*
*     If overflow occurs, the rounded value is \\(x\\).
*
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* \operatorname{floorn}(\mathrm{NaN}, n) &= \mathrm{NaN} \\
* \operatorname{floorn}(x, \mathrm{NaN}) &= \mathrm{NaN} \\
* \operatorname{floorn}(x, \pm\infty) &= \mathrm{NaN} \\
* \operatorname{floorn}(\pm\infty, n) &= \pm\infty \\
* \operatorname{floorn}(\pm 0, n) &= \pm 0
* \end{align*}
* ```
*
* @param x       number
* @param n       integer power of 10
* @return        rounded value
*
* @example
* double y = stdlib_base_floorn( 3.141592653589793, -4 );
* // returns 3.1415
*
* @example
* // If n = 0, `floorn` behaves like `floor`:
* double y = stdlib_base_floorn( 3.141592653589793, 0 );
* // returns 3.0
*/
double stdlib_base_floorn( const double x, const int32_t n ) {
	double s;
	double y;
	if ( stdlib_base_is_nan( x ) ) {
		return x;
	}
	if (
		// Handle infinites...
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
		if ( x >= 0.0 ) {
			return 0.0; // preserve the sign (same behavior as floor)
		}
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	// If we overflow, return `x`, as the number of digits to the right of the decimal is too small (i.e., `x` is too large / lacks sufficient fractional precision) for there to be any effect when rounding...
	if ( n < STDLIB_CONSTANT_FLOAT64_MIN_BASE10_EXPONENT ) {
		s = pow( 10.0, - ( n + STDLIB_CONSTANT_FLOAT64_MAX_BASE10_EXPONENT ) ); // TODO: replace use of `pow` once have stdlib equivalent
		y = ( x * HUGE_VALUE ) * s; // order of operation matters!
		if ( stdlib_base_is_infinite( y ) ) {
			return x;
		}
		return ( stdlib_base_floor( y ) / HUGE_VALUE ) / s;
	}
	s = pow( 10.0, -n ); // TODO: replace use of `pow` once have stdlib equivalent
	y = x * s;
	if ( stdlib_base_is_infinite( y ) ) {
		return x;
	}
	return stdlib_base_floor( y ) / s;
}
