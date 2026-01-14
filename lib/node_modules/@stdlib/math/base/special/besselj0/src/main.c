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
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/detail/bessel_j0.hpp}. The implementation has been modified for use in stdlib.
*
* ```text
* Copyright Xiaogang Zhang, 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

#include "stdlib/math/base/special/besselj0.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/sincos.h"
#include "stdlib/constants/float64/pinf.h"

static const double ONE_DIV_SQRT_PI = 0.5641895835477563;
static const double x1 = 2.4048255576957727686e+00;
static const double x2 = 5.5200781102863106496e+00;
static const double x11 = 6.160e+02;
static const double x12 = -1.42444230422723137837e-03;
static const double x21 = 1.4130e+03;
static const double x22 = 5.46860286310649596604e-04;

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
		return -0.17291506903064494;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -412986685009.9087 + (x * (27282507878.60594 + (x * (-621407004.2354012 + (x * (6630299.79048338 + (x * (-36629.81465510709 + (x * (103.44222815443189 + (x * -0.12117036164593528)))))))))));
		s2 = 2388378799633.229 + (x * (26328198300.85965 + (x * (139850973.72263435 + (x * (456126.9622421994 + (x * (936.1402239233771 + (x * (1.0 + (x * 0.0)))))))))));
	} else {
		ix = 1.0 / x;
		s1 = -0.12117036164593528 + (ix * (103.44222815443189 + (ix * (-36629.81465510709 + (ix * (6630299.79048338 + (ix * (-621407004.2354012 + (ix * (27282507878.60594 + (ix * -412986685009.9087)))))))))));
		s2 = 0.0 + (ix * (1.0 + (ix * (936.1402239233771 + (ix * (456126.9622421994 + (ix * (139850973.72263435 + (ix * (26328198300.85965 + (ix * 2388378799633.229)))))))))));
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
		return 0.005119512965174424;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -1831.9397969392085 + (x * (-12254.07816137899 + (x * (-7287.970246446462 + (x * (10341.910641583727 + (x * (11725.046279757104 + (x * (4417.670702532509 + (x * (743.2119668062425 + (x * 48.5917033559165)))))))))))));
		s2 = -357834.78026152303 + (x * (245991.0226258631 + (x * (-84055.06259116957 + (x * (18680.99000835919 + (x * (-2945.876654550934 + (x * (333.07310774649073 + (x * (-25.258076240801554 + (x * 1.0)))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 48.5917033559165 + (ix * (743.2119668062425 + (ix * (4417.670702532509 + (ix * (11725.046279757104 + (ix * (10341.910641583727 + (ix * (-7287.970246446462 + (ix * (-12254.07816137899 + (ix * -1831.9397969392085)))))))))))));
		s2 = 1.0 + (ix * (-25.258076240801554 + (ix * (333.07310774649073 + (ix * (-2945.876654550934 + (ix * (18680.99000835919 + (ix * (-84055.06259116957 + (ix * (245991.0226258631 + (ix * -357834.78026152303)))))))))))));
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
* Computes the Bessel function of the first kind of order zero.
*
* @param x    input value
* @return     evaluated Bessel function
*
* @example
* double y = stdlib_base_besselj0( 0.0 );
* // returns 1.0
*/
double stdlib_base_besselj0( const double x ) {
	double rc;
	double rs;
	double y2;
	double xc;
	double r;
	double y;
	double f;
	double s;
	double c;

	xc = x;
	if ( xc < 0 ) {
		xc = -xc;
	}
	if ( xc == STDLIB_CONSTANT_FLOAT64_PINF ) {
		return 0.0;
	}
	if ( xc == 0.0 ) {
		return 1.0;
	}
	if ( xc <= 4.0 ) {
		y = xc * xc;
		r = rational_p1q1( y );
		f = ( xc + x1 ) * ( ( xc - ( x11 / 256.0 ) ) - x12 );
		return f * r;
	}
	if ( xc <= 8.0 ) {
		y = 1.0 - ( ( xc * xc ) / 64.0 );
		r = rational_p2q2( y );
		f = ( xc + x2 ) * ( ( xc - ( x21 / 256.0 ) ) - x22 );
		return f * r;
	}
	y = 8.0 / xc;
	y2 = y * y;
	rc = rational_pcqc( y2 );
	rs = rational_psqs( y2 );
	f = ONE_DIV_SQRT_PI / stdlib_base_sqrt( xc );

	/*
	* What follows is really just:
	*
	* ```
	* var z = x - pi/4;
	* return f * (rc * cos(z) - y * rs * sin(z));
	* ```
	*
	* But using the addition formulae for sin and cos, plus the special values for sin/cos of `π/4`.
	*/
	stdlib_base_sincos( xc, &s, &c );
	return f * ( ( rc * ( c + s ) ) - ( ( y * rs ) * ( s - c ) ) );
}
