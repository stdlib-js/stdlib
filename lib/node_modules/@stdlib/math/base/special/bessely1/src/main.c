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
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/detail/bessel_y0.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright Xiaogang Zhang, 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

// MODULES

#include "stdlib/math/base/special/bessely1.h"
#include "stdlib/math/base/special/besselj1.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/sincos.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/constants/float64/pi.h"
#include "stdlib/constants/float64/sqrt_pi.h"

static const double ONE_DIV_SQRT_PI = 1.0 / STDLIB_CONSTANT_FLOAT64_SQRT_PI;
static const double TWO_DIV_PI = 2.0 / STDLIB_CONSTANT_FLOAT64_PI;
static const double x1 = 2.1971413260310170351e+00;
static const double x2 = 5.4296810407941351328e+00;
static const double x11 = 5.620e+02;
static const double x12 = 1.8288260310170351490e-03;
static const double x21 = 1.3900e+03;
static const double x22 = -6.4592058648672279948e-06;

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
		return 0.13187550549740895;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 40535726612579.55 + (x * (5470861171652.543 + (x * (-375959744978.196 + (x * (7214454821.450256 + (x * (-59157479.9974084 + (x * (221579.5322228026 + (x * -317.1442466004613)))))))))));
		s2 = 307378739210792.9 + (x * (4127228620040.646 + (x * (27800352738.690586 + (x * (122504351.22182964 + (x * (381364.70753052575 + (x * (820.7990816839387 + (x * 1.0)))))))))));
	} else {
		ix = 1.0 / x;
		s1 = -317.1442466004613 + (ix * (221579.5322228026 + (ix * (-59157479.9974084 + (ix * (7214454821.450256 + (ix * (-375959744978.196 + (ix * (5470861171652.543 + (ix * 40535726612579.55)))))))))));
		s2 = 1.0 + (ix * (820.7990816839387 + (ix * (381364.70753052575 + (ix * (122504351.22182964 + (ix * (27800352738.690586 + (ix * (4127228620040.646 + (ix * 307378739210792.9)))))))))));
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
		return 0.021593919914419626;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 11514276357909012000.0 + (x * (-5680809457472421000.0 + (x * (-23638408497043136.0 + (x * (4068627528980474.5 + (x * (-59530713129741.984 + (x * (374536739624.3849 + (x * (-1195796191.2070618 + (x * (1915380.6858264203 + (x * -1233.7180442012952)))))))))))))));
		s2 = 533218443133161800000.0 + (x * (5696819882285718000.0 + (x * (30837179548112880.0 + (x * (111870100658569.7 + (x * (302217668529.60406 + (x * (635503180.8708892 + (x * (1045374.8201934079 + (x * (1285.516484932161 + (x * 1.0)))))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = -1233.7180442012952 + (ix * (1915380.6858264203 + (ix * (-1195796191.2070618 + (ix * (374536739624.3849 + (ix * (-59530713129741.984 + (ix * (4068627528980474.5 + (ix * (-23638408497043136.0 + (ix * (-5680809457472421000.0 + (ix * 11514276357909012000.0)))))))))))))));
		s2 = 1.0 + (ix * (1285.516484932161 + (ix * (1045374.8201934079 + (ix * (635503180.8708892 + (ix * (302217668529.60406 + (ix * (111870100658569.7 + (ix * (30837179548112880.0 + (ix * (5696819882285718000.0 + (ix * 533218443133161800000.0)))))))))))))));
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
* Computes the Bessel function of the second kind of order one.
*
* ## Notes
*
* -   Accuracy for subnormal `x` is very poor. Full accuracy is achieved at `1.0e-308` but trends progressively to zero at `5e-324`. This suggests that underflow (or overflow, perhaps due to a reciprocal) is effectively cutting off digits of precision until the computation loses all accuracy at `5e-324`.
*
* @param x    input value
* @return     evaluated Bessel function
*
* @example
* double v = stdlib_base_bessely1( 0.0 );
* // returns -Infinity
*/
double stdlib_base_bessely1( double x ) {
	double rc;
	double rs;
	double y2;
	double r;
	double y;
	double s;
	double c;
	double z;
	double f;

	if ( x < 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x == 0.0 ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	if ( x == STDLIB_CONSTANT_FLOAT64_PINF ) {
		return 0.0;
	}
	if ( x <= 4.0 ) {
		y = x * x;
		z = ( stdlib_base_ln( x / x1 ) * stdlib_base_besselj1( x ) ) * TWO_DIV_PI;
		r = rational_p1q1( y );
		f = ( ( x+x1 ) * ( (x - (x11/256.0)) - x12 ) ) / x;
		return z + ( f*r );
	}
	if ( x <= 8.0 ) {
		y = x * x;
		z = ( stdlib_base_ln( x / x2 ) * stdlib_base_besselj1( x ) ) * TWO_DIV_PI;
		r = rational_p2q2( y );
		f = ( ( x+x2 ) * ( (x - (x21/256.0)) - x22 ) ) / x;
		return z + ( f*r );
	}
	y = 8.0 / x;
	y2 = y * y;
	rc = rational_pcqc( y2 );
	rs = rational_psqs( y2 );
	f = ONE_DIV_SQRT_PI / stdlib_base_sqrt( x );

	/*
	* This code is really just:
	*
	* ```
	* z = x - 0.75 * PI;
	* return f * (rc * sin(z) + y * rs * cos(z));
	* ```
	*
	* But using the sin/cos addition rules, plus constants for sin/cos of `3π/4` which then cancel out with corresponding terms in "f".
	*/
	stdlib_base_sincos( x, &s, &c );
	return f * ( ( ( (y*rs) * (s-c) ) - ( rc * (s+c) ) ) );
}
