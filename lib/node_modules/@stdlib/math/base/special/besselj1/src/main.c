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
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/detail/bessel_j1.hpp}. The implementation has been modified for use in stdlib.
*
* ```text
* Copyright Xiaogang Zhang, 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

#include "stdlib/math/base/special/besselj1.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/sincos.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/sqrt_pi.h"

static const double x1 = 3.8317059702075123156e+00;
static const double x2 = 7.0155866698156187535e+00;
static const double x11 = 9.810e+02;
static const double x12 = -3.2527979248768438556e-04;
static const double x21 = 1.7960e+03;
static const double x22 = -3.8330184381246462950e-05;

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: rational_p1q1

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
static double rational_p1q1( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return -0.03405537391318949;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -142585098013.66644 + (x * (6678104126.14924 + (x * (-115486967.64841276 + (x * (980629.0409895825 + (x * (-4461.579298277507 + (x * (10.650724020080236 + (x * -0.010767857011487301)))))))))));
		s2 = 4186860446082.0176 + (x * (42091902282.58013 + (x * (202283751.40097034 + (x * (591176.1449417479 + (x * (1074.227223951738 + (x * (1.0 + (x * 0.0)))))))))));
	} else {
		ix = 1.0 / x;
		s1 = -0.010767857011487301 + (ix * (10.650724020080236 + (ix * (-4461.579298277507 + (ix * (980629.0409895825 + (ix * (-115486967.64841276 + (ix * (6678104126.14924 + (ix * -142585098013.66644)))))))))));
		s2 = 0.0 + (ix * (1.0 + (ix * (1074.227223951738 + (ix * (591176.1449417479 + (ix * (202283751.40097034 + (ix * (42091902282.58013 + (ix * 4186860446082.0176)))))))))));
	}
	return s1 / s2;
}

// END: rational_p1q1

// BEGIN: rational_p2q2

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
static double rational_p2q2( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return -0.010158790774176108;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -17527881995806512.0 + (x * (1660853173129901.8 + (x * (-36658018905416.664 + (x * (355806656709.1062 + (x * (-1811393126.9860668 + (x * (5079326.614801118 + (x * (-7502.334222078161 + (x * 4.6179191852758255)))))))))))));
		s2 = 1725390588844768000.0 + (x * (17128800897135812.0 + (x * (84899346165481.42 + (x * (276227772862.44086 + (x * (648725028.9959639 + (x * (1126712.5065029138 + (x * (1388.6978985861358 + (x * 1.0)))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 4.6179191852758255 + (ix * (-7502.334222078161 + (ix * (5079326.614801118 + (ix * (-1811393126.9860668 + (ix * (355806656709.1062 + (ix * (-36658018905416.664 + (ix * (1660853173129901.8 + (ix * -17527881995806512.0)))))))))))));
		s2 = 1.0 + (ix * (1388.6978985861358 + (ix * (1126712.5065029138 + (ix * (648725028.9959639 + (ix * (276227772862.44086 + (ix * (84899346165481.42 + (ix * (17128800897135812.0 + (ix * 1725390588844768000.0)))))))))))));
	}
	return s1 / s2;
}

// END: rational_p2q2

// BEGIN: rational_pcqc

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
static double rational_pcqc( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return 1.0;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -4435757.816794128 + (x * (-9942246.505077641 + (x * (-6603373.248364939 + (x * (-1523529.3511811374 + (x * (-109824.05543459347 + (x * (-1611.6166443246102 + (x * 0.0)))))))))));
		s2 = -4435757.816794128 + (x * (-9934124.389934586 + (x * (-6585339.4797230875 + (x * (-1511809.5066341609 + (x * (-107263.8599110382 + (x * (-1455.0094401904962 + (x * 1.0)))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 0.0 + (ix * (-1611.6166443246102 + (ix * (-109824.05543459347 + (ix * (-1523529.3511811374 + (ix * (-6603373.248364939 + (ix * (-9942246.505077641 + (ix * -4435757.816794128)))))))))));
		s2 = 1.0 + (ix * (-1455.0094401904962 + (ix * (-107263.8599110382 + (ix * (-1511809.5066341609 + (ix * (-6585339.4797230875 + (ix * (-9934124.389934586 + (ix * -4435757.816794128)))))))))));
	}
	return s1 / s2;
}

// END: rational_pcqc

// BEGIN: rational_psqs

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
static double rational_psqs( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return 0.046875;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 33220.913409857225 + (x * (85145.1606753357 + (x * (66178.83658127084 + (x * (18494.262873223866 + (x * (1706.375429020768 + (x * (35.26513384663603 + (x * 0.0)))))))))));
		s2 = 708712.8194102874 + (x * (1819458.0422439973 + (x * (1419460.669603721 + (x * (400294.43582266977 + (x * (37890.2297457722 + (x * (863.8367769604992 + (x * 1.0)))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 0.0 + (ix * (35.26513384663603 + (ix * (1706.375429020768 + (ix * (18494.262873223866 + (ix * (66178.83658127084 + (ix * (85145.1606753357 + (ix * 33220.913409857225)))))))))));
		s2 = 1.0 + (ix * (863.8367769604992 + (ix * (37890.2297457722 + (ix * (400294.43582266977 + (ix * (1419460.669603721 + (ix * (1819458.0422439973 + (ix * 708712.8194102874)))))))))));
	}
	return s1 / s2;
}

// END: rational_psqs

/* End auto-generated functions. */

/**
* Computes the Bessel function of the first kind of order one.
*
* ## Notes
*
* -   Accuracy for subnormal `x` is very poor. Full accuracy is achieved at `1.0e-308` but trends progressively to zero at `5e-324`. This suggests that underflow (or overflow, perhaps due to a reciprocal) is effectively cutting off digits of precision until the computation loses all accuracy at `5e-324`.
*
* @param x    input value
* @return     evaluated Bessel function
*
* @example
* double out = stdlib_base_besselj1( 1.0 );
* // returns ~0.440
*/
double stdlib_base_besselj1( const double x ) {
	double value;
	double rc;
	double rs;
	double y2;
	double r;
	double y;
	double f;
	double w;
	double s;
	double c;

	w = stdlib_base_abs( x );
	if ( x == 0.0 ) {
		return 0.0;
	}
	if ( w == STDLIB_CONSTANT_FLOAT64_PINF ) {
		return 0.0;
	}
	if ( w <= 4.0 ) {
		y = x * x;
		r = rational_p1q1( y );
		f = w * ( w + x1 ) * ( ( w - ( x11 / 256.0 ) ) - x12 );
		value = f * r;
	} else if ( w <= 8.0 ) {
		y = x * x;
		r = rational_p2q2( y );
		f = w * ( w + x2 ) * ( ( w - ( x21 / 256.0 ) ) - x22 );
		value = f * r;
	} else {
		y = 8.0 / w;
		y2 = y * y;
		rc = rational_pcqc( y2 );
		rs = rational_psqs( y2 );
		f = 1.0 / ( sqrt( w ) * STDLIB_CONSTANT_FLOAT64_SQRT_PI );

		/*
		* What follows is really just:
		*
		* ```
		* z = w - 0.75 * pi;
		* value = f * ( rc * cos( z ) - y * rs * sin( z ) );
		* ```
		*
		* but using the sin/cos addition rules plus constants for the values of sin/cos of `3π/4` which then cancel out with corresponding terms in "f".
		*/
		stdlib_base_sincos( w, &s, &c );
		value = f * ( ( rc * ( s - c ) ) + ( ( y * rs ) * ( s + c ) ) );
	}
	if ( x < 0.0 ) {
		value *= -1.0;
	}
	return value;
}
