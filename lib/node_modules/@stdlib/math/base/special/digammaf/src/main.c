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
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/digamma.hpp}. The implementation follows the original, but has been modified for C.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

#include "stdlib/math/base/special/digammaf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/special/floorf.h"
#include "stdlib/math/base/special/lnf.h"
#include "stdlib/math/base/special/tanf.h"
#include "stdlib/constants/float32/pi.h"

// Minimum value of `x` for which the asymptotic expansion may be used directly:
static const float MIN_SAFE_ASYMPTOTIC = 10.0f;

// Location of the positive real root of the digamma function (`1532632 / 2**20`, exactly representable in single-precision):
static const float ROOT = 1.46163177490234375f;

// Low-order correction to the location of the positive real root:
static const float ROOT_MINOR = 0.3700660185912626595423257213284682051735604e-6f;

// Constant offset for the rational approximation on the interval `[1,2]`:
static const float Y = 0.99558162689208984f;

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: polyval_p

/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the polynomial
* @return     evaluated polynomial
*/
static float polyval_p( const float x ) {
	return 0.08333333333333333f + (x * (-0.008333333333333333f + (x * 0.003968253968253968f)));
}

// END: polyval_p

// BEGIN: rational_pq

/**
* Evaluates a rational function (i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\)).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the rational function
* @return     evaluated rational function
*/
static float rational_pq( const float x ) {
	float ax;
	float ix;
	float s1;
	float s2;
	if ( x == 0.0f ) {
		return 0.2547985102325026f;
	}
	if ( x < 0.0f ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0f ) {
		s1 = 0.2547985102325026f + (x * (-0.4498133191526837f + (x * (-0.43916936919946836f + (x * -0.06104176535057907f)))));
		s2 = 1.0f + (x * (1.5890202430554952f + (x * (0.6534124985614694f + (x * 0.06385169052335571f)))));
	} else {
		ix = 1.0f / x;
		s1 = -0.06104176535057907f + (ix * (-0.43916936919946836f + (ix * (-0.4498133191526837f + (ix * 0.2547985102325026f)))));
		s2 = 0.06385169052335571f + (ix * (0.6534124985614694f + (ix * (1.5890202430554952f + (ix * 1.0f)))));
	}
	return s1 / s2;
}

// END: rational_pq

/* End auto-generated functions. */

/**
* Evaluates the digamma function via asymptotic expansion.
*
* @param x    input value
* @return     function value
*/
static float asymptoticApprox( const float x ) {
	float xc;
	float y;
	float z;

	xc = x;
	xc -= 1.0f;
	y = stdlib_base_lnf( xc ) + ( 1.0f / ( 2.0f * xc ) );
	z = 1.0f / ( xc * xc );
	return y - ( z * polyval_p( z ) );
}

/**
* Evaluates the digamma function over interval `[1,2]`.
*
* @param x    input value
* @return     function value
*/
static float rationalApprox( const float x ) {
	float g;
	float r;

	g = x - ROOT;
	g -= ROOT_MINOR;
	r = rational_pq( x - 1.0f );
	return ( g * Y ) + ( g * r );
}

/**
* Evaluates the digamma function for a single-precision floating-point number.
*
* ## Method
*
* 1.  For \\(x \leq -1\\), we use the reflection formula
*
*     ```tex
*     \psi(1-x) = \psi(x) + \frac{\pi}{\tan(\pi x)}
*     ```
*
*     to make \\(x\\) positive.
*
* 2.  For \\(x \in \[0,1]\\), we use the recurrence relation
*
*     ```tex
*     \psi(x) = \psi(x+1) - \frac{1}{x}
*     ```
*
*     to shift the evaluation range to \\(\[1,2]\\).
*
* 3.  For \\(x \in \[1,2]\\), we use a rational approximation of the form
*
*     ```tex
*     \psi(x) = (x - \mathrm{root})(Y + \operatorname{R}(x-1))
*     ```
*
*     where \\(\mathrm{root}\\) is the location of the positive root of \\(\psi\\), \\(Y\\) is a constant, and \\(R\\) is optimized for low absolute error compared to \\(Y\\).
*
*     <!-- <note> -->
*
*     Note that, since \\(\mathrm{root}\\) is irrational, we need twice as many digits in \\(\mathrm{root}\\) as in \\(x\\) in order to avoid cancellation error during subtraction, assuming \\(x\\) has an exact value. This means that, even if \\(x\\) is rounded to the next representable value, the result of \\(\psi(x)\\) will not be zero.
*
*     <!-- </note> -->
*
*     <!-- <note> -->
*
*     This approach gives 9-digit precision.
*
*     <!-- </note> -->
*
* 4.  For \\(x \in \[2,10]\\), we use the recurrence relation
*
*     ```tex
*     \psi(x+1) = \psi(x) + \frac{1}{x}
*     ```
*
*     to shift the evaluation range to \\(\[1,2]\\).
*
* 5.  For \\(x > 10\\), we use the asymptotic expression
*
*     ```tex
*     \psi(x) = \ln(x) + \frac{1}{2x} - \biggl( \frac{B_{21}}{2x^2} + \frac{B_{22}}{4x^4} + \frac{B_{23}}{6x^6} + \ldots \biggr)
*     ```
*
*     This expansion, however, is divergent after a few terms. The number of terms depends on \\(x\\). Accordingly, we must choose a lower limit which allows us to truncate the series at a term that is too small to have an effect on the result. Setting the lower limit to \\(10\\) allows us to truncate the series early and evaluate as \\(1/x^2\\).
*
*     <!-- <note> -->
*
*     This approach gives 9-digit precision for \\(x \geq 10\\).
*
*     <!-- </note> -->
*
* ## Notes
*
* -   For `x` equal to a negative integer or zero, the function returns `NaN`.
* -   In contrast to the original Boost implementation, the fractional part used in the reflection formula is computed from the original (rather than the reflected) argument, as, in single-precision, reflection may otherwise destroy the fractional part for arguments of large magnitude.
* -   Maximum deviation found: \\(3.388\\mbox{e-}10\\)
* -   Max error found: \\(2.008725\mbox{e-}8\\) (single precision)
*
* @param x    input value
* @return     function value
*
* @example
* float v = stdlib_base_digammaf( -2.5f );
* // returns ~1.103f
*/
float stdlib_base_digammaf( const float x ) {
	float rem;
	float tmp;
	float xc;

	if ( stdlib_base_is_nanf( x ) || x == 0.0f ) {
		return 0.0f / 0.0f; // NaN
	}

	// If `x` is negative, use reflection...
	xc = x;
	if ( xc <= -1.0f ) {
		// Argument reduction for tan (computed BEFORE reflection, as, in single-precision, reflection may otherwise destroy the fractional part for large `|x|`):
		rem = xc - stdlib_base_floorf( xc );

		// Check for evaluation at a negative pole:
		if ( rem == 0.0f ) {
			return 0.0f / 0.0f; // NaN
		}
		if ( rem == 0.5f ) {
			tmp = 0.0f;
		} else {
			// Shift to negative if > 0.5:
			if ( rem > 0.5f ) {
				rem -= 1.0f;
			}
			tmp = -( STDLIB_CONSTANT_FLOAT32_PI / stdlib_base_tanf( STDLIB_CONSTANT_FLOAT32_PI * rem ) );
		}

		// Reflect:
		xc = 1.0f - xc;
	} else {
		tmp = 0.0f;
	}

	// If we're above the lower-limit for the asymptotic expansion, then use it...
	if ( xc >= MIN_SAFE_ASYMPTOTIC ) {
		tmp += asymptoticApprox( xc );
		return tmp;
	}

	// If x > 2, reduce to the interval [1,2]...
	while ( xc > 2.0f ) {
		xc -= 1.0f;
		tmp += 1.0f / xc;
	}

	// If x < 1, use recurrence to shift to > 1...
	while ( xc < 1.0f ) {
		tmp -= 1.0f / xc;
		xc += 1.0f;
	}
	tmp += rationalApprox( xc );
	return tmp;
}
