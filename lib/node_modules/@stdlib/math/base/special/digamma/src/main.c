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
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/digamma.hpp}. The implementation follows the original but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

#include "stdlib/math/base/special/digamma.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/special/tan.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/pi.h"

static const double MIN_SAFE_ASYMPTOTIC = 10.0; // BIG!
static const double root1 = 1569415565.0 / 1073741824.0;
static const double root2 = ( 381566830.0 / 1073741824.0 ) / 1073741824.0;
static const double root3 = 0.9016312093258695918615325266959189453125e-19;
static const double Y = 0.99558162689208984;

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
static double polyval_p( const double x ) {
	return 0.08333333333333333 + (x * (-0.008333333333333333 + (x * (0.003968253968253968 + (x * (-0.004166666666666667 + (x * (0.007575757575757576 + (x * (-0.021092796092796094 + (x * (0.08333333333333333 + (x * -0.4432598039215686)))))))))))));
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
static double rational_pq( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return 0.25479851061131553;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 0.25479851061131553 + (x * (-0.3255503118680449 + (x * (-0.6503185377089651 + (x * (-0.28919126444774784 + (x * (-0.04525132144873906 + (x * (-0.002071332116774595 + (x * 0.0)))))))))));
		s2 = 1.0 + (x * (2.076711702373047 + (x * (1.4606242909763516 + (x * (0.43593529692665967 + (x * (0.054151797245674226 + (x * (0.0021284987017821146 + (x * -5.578984132167551e-7)))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 0.0 + (ix * (-0.002071332116774595 + (ix * (-0.04525132144873906 + (ix * (-0.28919126444774784 + (ix * (-0.6503185377089651 + (ix * (-0.3255503118680449 + (ix * 0.25479851061131553)))))))))));
		s2 = -5.578984132167551e-7 + (ix * (0.0021284987017821146 + (ix * (0.054151797245674226 + (ix * (0.43593529692665967 + (ix * (1.4606242909763516 + (ix * (2.076711702373047 + (ix * 1.0)))))))))));
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
static double asymptoticApprox( const double x ) {
	double y;
	double z;
	double xc;

	xc = x;
	xc -= 1.0;
	y = stdlib_base_ln( xc ) + ( 1.0 / ( 2.0 * xc ) );
	z = 1.0 / ( xc * xc );
	return y - ( z * polyval_p( z ) );
}

/**
* Evaluates the digamma function over interval `[1,2]`.
*
* @param x    input value
* @return     function value
*/
static double rationalApprox( const double x ) {
	double g;
	double r;

	g = x - root1;
	g -= root2;
	g -= root3;
	r = rational_pq( x - 1.0 );
	return ( g * Y ) + ( g * r );
}

/**
* Evaluates the digamma function.
*
* ## Method
*
* 1.  For \\(x < 0\\), we use the reflection formula
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
*     <!-- <note>-->
*
*     Note that, since \\(\mathrm{root}\\) is irrational, we need twice as many digits in \\(\mathrm{root}\\) as in \\(x\\) in order to avoid cancellation error during subtraction, assuming \\(x\\) has an exact value. This means that, even if \\(x\\) is rounded to the next representable value, the result of \\(\psi(x)\\) will not be zero.
*
*     <!-- </note> -->
*
*     <!-- <note> -->
*
*     This approach gives 17-digit precision.
*
*     <!-- </note> -->
*
* 4.  For \\(x \in \[2,\mathrm{BIG}]\\), we use the recurrence relation
*
*     ```tex
*     \psi(x+1) = \psi(x) + \frac{1}{x}
*     ```
*
*     to shift the evaluation range to \\(\[1,2]\\).
*
* 5.  For \\(x > \mathrm{BIG}\\), we use the asymptotic expression
*
*     ```tex
*     \psi(x) = \ln(x) + \frac{1}{2x} - \biggl( \frac{B_{21}}{2x^2} + \frac{B_{22}}{4x^4} + \frac{B_{23}}{6x^6} + \ldots \biggr)
*     ```
*
*     This expansion, however, is divergent after a few terms. The number of terms depends on \\(x\\). Accordingly, we must choose a value of \\(\mathrm{BIG}\\) which allows us to truncate the series at a term that is too small to have an effect on the result. Setting \\(\mathrm{BIG} = 10\\), allows us to truncate the series early and evaluate as \\(1/x^2\\).
*
*     <!-- <note> -->
*
*     This approach gives 17-digit precision for \\(x \geq 10\\).
*
*     <!-- </note> -->
*
* ## Notes
*
* -   Maximum deviation found: \\(1.466\\mbox{e-}18\\)
* -   Max error found: \\(2.452\mbox{e-}17\\) (double precision)
*
* @param x    input value
* @return     function value
*
* @example
* double v = stdlib_base_digamma( -2.5 );
* // returns ~1.103
*/
double stdlib_base_digamma( const double x ) {
	double rem;
	double tmp;
	double xc;

	if ( stdlib_base_is_nan( x ) || x == 0.0 ) {
		return 0.0 / 0.0; // NaN
	}

	// If `x` is negative, use reflection...
	xc = x;
	if ( xc <= -1.0 ) {
		// Reflect:
		xc = 1.0 - xc;

		// Argument reduction for tan:
		rem = xc - stdlib_base_floor( xc );

		// Shift to negative if > 0.5:
		if ( rem > 0.5 ) {
			rem -= 1.0;
		}

		// Check for evaluation at a negative pole:
		if ( rem == 0.0 ) {
			return 0.0 / 0.0; // NaN
		}
		tmp = STDLIB_CONSTANT_FLOAT64_PI / stdlib_base_tan( STDLIB_CONSTANT_FLOAT64_PI * rem );
	} else {
		tmp = 0.0;
	}

	// If we're above the lower-limit for the asymptotic expansion, then use it...
	if ( xc >= MIN_SAFE_ASYMPTOTIC ) {
		tmp += asymptoticApprox( xc );
		return tmp;
	}

	// If x > 2, reduce to the interval [1,2]...
	while ( xc > 2.0 ) {
		xc -= 1.0;
		tmp += 1.0 / xc;
	}

	// If x < 1, use recurrence to shift to > 1..
	while ( xc < 1.0 ) {
		tmp -= 1.0 / xc;
		xc += 1.0;
	}
	tmp += rationalApprox( xc );
	return tmp;
}
