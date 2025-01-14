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
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/detail/bessel_y0.hpp}. The implementation has been modified for use in stdlib.
*
* ```text
* Copyright Xiaogang Zhang, 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

#include "stdlib/math/base/special/bessely0.h"
#include "stdlib/math/base/special/besselj0.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/sincos.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/constants/float64/pi.h"
#include "stdlib/constants/float64/sqrt_pi.h"

static const double ONE_DIV_SQRT_PI = 1.0 / STDLIB_CONSTANT_FLOAT64_SQRT_PI;
static const double TWO_DIV_PI = 2.0 / STDLIB_CONSTANT_FLOAT64_PI;
static const double x1 = 8.9357696627916752158e-01;
static const double x2 = 3.9576784193148578684e+00;
static const double x3 = 7.0860510603017726976e+00;
static const double x11 = 2.280e+02;
static const double x12 = 2.9519662791675215849e-03;
static const double x21 = 1.0130e+03;
static const double x22 = 6.4716931485786837568e-04;
static const double x31 = 1.8140e+03;
static const double x32 = 1.1356030177269762362e-04;

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
		return 0.18214429522164177;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 107235387820.03177 + (x * (-8371625545.12605 + (x * (204222743.5737662 + (x * (-2128754.84744018 + (x * (10102.532948020907 + (x * -18.402381979244993)))))))));
		s2 = 588738657389.9703 + (x * (8161718777.729036 + (x * (55662956.624278255 + (x * (238893.93209447255 + (x * (664.7598668924019 + (x * 1.0)))))))));
	} else {
		ix = 1.0 / x;
		s1 = -18.402381979244993 + (ix * (10102.532948020907 + (ix * (-2128754.84744018 + (ix * (204222743.5737662 + (ix * (-8371625545.12605 + (ix * 107235387820.03177)))))))));
		s2 = 1.0 + (ix * (664.7598668924019 + (ix * (238893.93209447255 + (ix * (55662956.624278255 + (ix * (8161718777.729036 + (ix * 588738657389.9703)))))))));
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
		return -0.051200622130023854;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -22213976967566.19 + (x * (-551074352067.2264 + (x * (43600098638.60306 + (x * (-695904393.9461962 + (x * (4690528.861167863 + (x * (-14566.865832663636 + (x * 17.427031242901595)))))))))));
		s2 = 433861465807072.6 + (x * (5426682441941.234 + (x * (34015103849.97124 + (x * (139602027.7098683 + (x * (406699.82352539554 + (x * (830.3085761207029 + (x * 1.0)))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 17.427031242901595 + (ix * (-14566.865832663636 + (ix * (4690528.861167863 + (ix * (-695904393.9461962 + (ix * (43600098638.60306 + (ix * (-551074352067.2264 + (ix * -22213976967566.19)))))))))));
		s2 = 1.0 + (ix * (830.3085761207029 + (ix * (406699.82352539554 + (ix * (139602027.7098683 + (ix * (34015103849.97124 + (ix * (5426682441941.234 + (ix * 433861465807072.6)))))))))));
	}
	return s1 / s2;
}

// END: rational_p2q2

// BEGIN: rational_p3q3

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
static double rational_p3q3( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return -0.023356489432789604;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -8072872690515021.0 + (x * (670166418691732.4 + (x * (-128299123640.88687 + (x * (-193630512667.72083 + (x * (2195882717.0518103 + (x * (-10085539.923498211 + (x * (21363.5341693139 + (x * -17.439661319197498)))))))))))));
		s2 = 345637246288464600.0 + (x * (3927242556964031.0 + (x * (22598377924042.9 + (x * (86926121104.20982 + (x * (247272194.75672302 + (x * (539247.3920976806 + (x * (879.0336216812844 + (x * 1.0)))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = -17.439661319197498 + (ix * (21363.5341693139 + (ix * (-10085539.923498211 + (ix * (2195882717.0518103 + (ix * (-193630512667.72083 + (ix * (-128299123640.88687 + (ix * (670166418691732.4 + (ix * -8072872690515021.0)))))))))))));
		s2 = 1.0 + (ix * (879.0336216812844 + (ix * (539247.3920976806 + (ix * (247272194.75672302 + (ix * (86926121104.20982 + (ix * (22598377924042.9 + (ix * (3927242556964031.0 + (ix * 345637246288464600.0)))))))))))));
	}
	return s1 / s2;
}

// END: rational_p3q3

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
		s1 = 22779.090197304686 + (x * (41345.38663958076 + (x * (21170.523380864943 + (x * (3480.648644324927 + (x * (153.76201909008356 + (x * 0.8896154842421046)))))))));
		s2 = 22779.090197304686 + (x * (41370.41249551042 + (x * (21215.350561880117 + (x * (3502.8735138235606 + (x * (157.11159858080893 + (x * 1.0)))))))));
	} else {
		ix = 1.0 / x;
		s1 = 0.8896154842421046 + (ix * (153.76201909008356 + (ix * (3480.648644324927 + (ix * (21170.523380864943 + (ix * (41345.38663958076 + (ix * 22779.090197304686)))))))));
		s2 = 1.0 + (ix * (157.11159858080893 + (ix * (3502.8735138235606 + (ix * (21215.350561880117 + (ix * (41370.41249551042 + (ix * 22779.090197304686)))))))));
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
		return -0.015625;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -89.22660020080009 + (x * (-185.91953644342993 + (x * (-111.83429920482737 + (x * (-22.300261666214197 + (x * (-1.244102674583564 + (x * -0.008803330304868075)))))))));
		s2 = 5710.502412851206 + (x * (11951.131543434614 + (x * (7264.278016921102 + (x * (1488.7231232283757 + (x * (90.59376959499312 + (x * 1.0)))))))));
	} else {
		ix = 1.0 / x;
		s1 = -0.008803330304868075 + (ix * (-1.244102674583564 + (ix * (-22.300261666214197 + (ix * (-111.83429920482737 + (ix * (-185.91953644342993 + (ix * -89.22660020080009)))))))));
		s2 = 1.0 + (ix * (90.59376959499312 + (ix * (1488.7231232283757 + (ix * (7264.278016921102 + (ix * (11951.131543434614 + (ix * 5710.502412851206)))))))));
	}
	return s1 / s2;
}

// END: rational_psqs

/* End auto-generated functions. */

/**
* Computes the Bessel function of the second kind of order zero.
*
* ## Notes
*
* -   Accuracy for subnormal `x` is very poor. Full accuracy is achieved at `1.0e-308` but trends progressively to zero at `5e-324`. This suggests that underflow (or overflow, perhaps due to a reciprocal) is effectively cutting off digits of precision until the computation loses all accuracy at `5e-324`.
*
* @param x    input value
* @return     evaluated Bessel function
*
* @example
* double y = stdlib_base_bessely0( 0.0 );
* // returns -Infinity
*/
double stdlib_base_bessely0( const double x ) {
	double rc;
	double rs;
	double y2;
	double xc;
	double r;
	double y;
	double f;
	double s;
	double c;
	double z;

	if ( x < 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x == 0.0 ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	if ( x == STDLIB_CONSTANT_FLOAT64_PINF ) {
		return 0.0;
	}
	xc = x;
	if ( xc <= 3.0 ) {
		y = xc * xc;
		z = ( stdlib_base_ln( xc / x1 ) * stdlib_base_besselj0( xc ) ) * TWO_DIV_PI;
		r = rational_p1q1( y );
		f = ( xc + x1 ) * ( ( xc - ( x11 / 256.0 ) ) - x12 );
		return z + ( f * r );
	}
	if ( xc <= 5.5 ) {
		y = xc * xc;
		z = ( stdlib_base_ln( xc / x2 ) * stdlib_base_besselj0( xc ) ) * TWO_DIV_PI;
		r = rational_p2q2( y );
		f = ( xc + x2 ) * ( ( xc - ( x21 / 256.0 ) ) - x22 );
		return z + ( f * r );
	}
	if ( xc <= 8.0 ) {
		y = xc * xc;
		z = ( stdlib_base_ln( xc / x3 ) * stdlib_base_besselj0( xc ) ) * TWO_DIV_PI;
		r = rational_p3q3( y );
		f = ( xc + x3 ) * ( ( xc - ( x31 / 256.0 ) ) - x32 );
		return z + ( f * r );
	}
	y = 8.0 / xc;
	y2 = y * y;
	rc = rational_pcqc( y2 );
	rs = rational_psqs( y2 );
	f = ONE_DIV_SQRT_PI / stdlib_base_sqrt( xc );

	/*
	* The following code is really just:
	*
	* ```
	* z = x - 0.25 * pi;
	* value = f * ( rc * sin( z ) + y * rs * cos( z ) );
	* ```
	*
	* But using the sin/cos addition formulae and constant values for sin/cos of `π/4` which then cancel part of the "f" term as they're all `1/sqrt(2)`:
	*/
	stdlib_base_sincos( xc, &s, &c );
	return f * ( ( rc * ( s - c ) ) + ( ( y * rs ) * ( s + c ) ) );
}
