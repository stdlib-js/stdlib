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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/trigamma.hpp}. The implementation follows the original but has been reformatted and modified for use in stdlib.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

#include "stdlib/math/base/special/trigammaf.h"
#include "stdlib/math/base/special/absf.h"
#include "stdlib/math/base/special/floorf.h"
#include "stdlib/math/base/special/sinpif.h"
#include "stdlib/constants/float32/pi_squared.h"

static const float YOFFSET12 = 2.1093254089355469f;

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: rational_p12q12

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
static float rational_p12q12( const float x ) {
	float ax;
	float ix;
	float s1;
	float s2;
	if ( x == 0.0f ) {
		return -1.1093280605946045f;
	}
	if ( x < 0.0f ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0f ) {
		s1 = -1.1093280605946045f + (x * (-3.831067447261932f + (x * (-3.3703848401898284f + (x * (0.2808057446798121f + (x * (1.6638069578676165f + (x * 0.6446838681910284f)))))))));
		s2 = 1.0f + (x * (3.453538966854115f + (x * (4.520892698785143f + (x * (2.701273417835153f + (x * (0.6446879839978561f + (x * -2.0314516859987727e-7f)))))))));
	} else {
		ix = 1.0f / x;
		s1 = 0.6446838681910284f + (ix * (1.6638069578676165f + (ix * (0.2808057446798121f + (ix * (-3.3703848401898284f + (ix * (-3.831067447261932f + (ix * -1.1093280605946045f)))))))));
		s2 = -2.0314516859987727e-7f + (ix * (0.6446879839978561f + (ix * (2.701273417835153f + (ix * (4.520892698785143f + (ix * (3.453538966854115f + (ix * 1.0f)))))))));
	}
	return s1 / s2;
}

// END: rational_p12q12

// BEGIN: rational_p24q24

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
static float rational_p24q24( const float x ) {
	float ax;
	float ix;
	float s1;
	float s2;
	if ( x == 0.0f ) {
		return -1.3803835004508848e-8f;
	}
	if ( x < 0.0f ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0f ) {
		s1 = -1.3803835004508848e-8f + (x * (0.5000004915854026f + (x * (1.6077979838469347f + (x * (2.5645435828098253f + (x * (2.0534873203680393f + (x * 0.7456698111156592f)))))))));
		s2 = 1.0f + (x * (2.882278766237617f + (x * (4.168166055409092f + (x * (2.7853527819234465f + (x * (0.7496767184804479f + (x * -0.0005706911241624681f)))))))));
	} else {
		ix = 1.0f / x;
		s1 = 0.7456698111156592f + (ix * (2.0534873203680393f + (ix * (2.5645435828098253f + (ix * (1.6077979838469347f + (ix * (0.5000004915854026f + (ix * -1.3803835004508848e-8f)))))))));
		s2 = -0.0005706911241624681f + (ix * (0.7496767184804479f + (ix * (2.7853527819234465f + (ix * (4.168166055409092f + (ix * (2.882278766237617f + (ix * 1.0f)))))))));
	}
	return s1 / s2;
}

// END: rational_p24q24

// BEGIN: rational_p4infq4inf

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
static float rational_p4infq4inf( const float x ) {
	float ax;
	float ix;
	float s1;
	float s2;
	if ( x == 0.0f ) {
		return 6.894758194870125e-18f;
	}
	if ( x < 0.0f ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0f ) {
		s1 = 6.894758194870125e-18f + (x * (0.49999999999998973f + (x * (1.0177274392923794f + (x * (2.498208511343429f + (x * (2.1921221359427596f + (x * (1.5897035272532765f + (x * 0.40154388356961734f)))))))))));
		s2 = 1.0f + (x * (1.7021215452463931f + (x * (4.4290431747556465f + (x * (2.9745631894384923f + (x * (2.3013614809773615f + (x * (0.28360399799075753f + (x * 0.022892987908906898f)))))))))));
	} else {
		ix = 1.0f / x;
		s1 = 0.40154388356961734f + (ix * (1.5897035272532765f + (ix * (2.1921221359427596f + (ix * (2.498208511343429f + (ix * (1.0177274392923794f + (ix * (0.49999999999998973f + (ix * 6.894758194870125e-18f)))))))))));
		s2 = 0.022892987908906898f + (ix * (0.28360399799075753f + (ix * (2.3013614809773615f + (ix * (2.9745631894384923f + (ix * (4.4290431747556465f + (ix * (1.7021215452463931f + (ix * 1.0f)))))))))));
	}
	return s1 / s2;
}

// END: rational_p4infq4inf

/* End auto-generated functions. */

/**
* Evaluates the trigamma function for a single-precision floating-point number.
*
* @param x    input value
* @return     function value
*
* @example
* float v = stdlib_base_trigammaf( -2.5f );
* // returns ~9.539f
*/
float stdlib_base_trigammaf( const float x ) {
	float result;
	float xc;
	float s;
	float y;
	float z;

	result = 0.0f;

	// Check for negative arguments and use reflection:
	if ( x <= 0.0f ) {
		if ( stdlib_base_floorf( x ) == x ) {
			return 0.0f / 0.0f; // NaN
		}
		// Reflect:
		z = 1.0f - x;
		if ( z < 1.0f ) {
			result = 1.0f / ( z * z );
			z += 1.0f;
		}
		s = ( stdlib_base_absf( x ) < stdlib_base_absf( z ) ) ? stdlib_base_sinpif( x ) : stdlib_base_sinpif( z );
		return result - stdlib_base_trigammaf( z ) + ( STDLIB_CONSTANT_FLOAT32_PI_SQUARED / ( s*s ) );
	}
	xc = x;
	if ( xc < 1.0f ) {
		result = 1.0f / ( xc*xc );
		xc += 1.0f;
	}
	if ( xc <= 2.0f ) {
		result += ( YOFFSET12 + rational_p12q12( xc ) ) / ( xc * xc );
	} else if ( xc <= 4.0f ) {
		y = 1.0f / xc;
		result += ( 1.0f + rational_p24q24( y ) ) / xc;
	} else {
		y = 1.0f / xc;
		result += ( 1.0f + rational_p4infq4inf( y ) ) / xc;
	}
	return result;
}
