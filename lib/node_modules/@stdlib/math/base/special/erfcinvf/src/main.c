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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_92_0/boost/math/special_functions/detail/erf_inv.hpp}. This implementation follows the original, but has been modified according to project conventions.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Matt Borland 2024.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

#include "stdlib/math/base/special/erfcinvf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/special/sqrtf.h"
#include "stdlib/math/base/special/lnf.h"
#include "stdlib/constants/float32/pinf.h"
#include "stdlib/constants/float32/ninf.h"
#include <stdint.h>

static const float Y1 = 8.91314744949340820313e-2f;
static const float Y2 = 2.249481201171875f;
static const float Y3 = 8.07220458984375e-1f;
static const float Y4 = 9.3995571136474609375e-1f;
static const float Y5 = 9.8362827301025390625e-1f;

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
static float rational_p1q1( const float x ) {
	float ax;
	float ix;
	float s1;
	float s2;
	if ( x == 0.0f ) {
		return -0.0005087819496582806f;
	}
	if ( x < 0.0f ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0f ) {
		s1 = -0.0005087819496582806f + (x * (-0.008368748197417368f + (x * (0.03348066254097446f + (x * (-0.012692614766297404f + (x * (-0.03656379714117627f + (x * (0.02198786811111689f + (x * (0.008226878746769157f + (x * (-0.005387729650712429f + (x * (0.0f + (x * 0.0f)))))))))))))))));
		s2 = 1.0f + (x * (-0.9700050433032906f + (x * (-1.5657455823417585f + (x * (1.5622155839842302f + (x * (0.662328840472003f + (x * (-0.7122890234154284f + (x * (-0.05273963823400997f + (x * (0.07952836873415717f + (x * (-0.0023339375937419f + (x * 0.0008862163904564247f)))))))))))))))));
	} else {
		ix = 1.0f / x;
		s1 = 0.0f + (ix * (0.0f + (ix * (-0.005387729650712429f + (ix * (0.008226878746769157f + (ix * (0.02198786811111689f + (ix * (-0.03656379714117627f + (ix * (-0.012692614766297404f + (ix * (0.03348066254097446f + (ix * (-0.008368748197417368f + (ix * -0.0005087819496582806f)))))))))))))))));
		s2 = 0.0008862163904564247f + (ix * (-0.0023339375937419f + (ix * (0.07952836873415717f + (ix * (-0.05273963823400997f + (ix * (-0.7122890234154284f + (ix * (0.662328840472003f + (ix * (1.5622155839842302f + (ix * (-1.5657455823417585f + (ix * (-0.9700050433032906f + (ix * 1.0f)))))))))))))))));
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
static float rational_p2q2( const float x ) {
	float ax;
	float ix;
	float s1;
	float s2;
	if ( x == 0.0f ) {
		return -0.20243350835593876f;
	}
	if ( x < 0.0f ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0f ) {
		s1 = -0.20243350835593876f + (x * (0.10526468069939171f + (x * (8.3705032834312f + (x * (17.644729840837403f + (x * (-18.851064805871424f + (x * (-44.6382324441787f + (x * (17.445385985570866f + (x * (21.12946554483405f + (x * -3.6719225470772936f)))))))))))))));
		s2 = 1.0f + (x * (6.242641248542475f + (x * (3.971343795334387f + (x * (-28.66081804998f + (x * (-20.14326346804852f + (x * (48.560921310873994f + (x * (10.826866735546016f + (x * (-22.643693341313973f + (x * 1.7211476576120028f)))))))))))))));
	} else {
		ix = 1.0f / x;
		s1 = -3.6719225470772936f + (ix * (21.12946554483405f + (ix * (17.445385985570866f + (ix * (-44.6382324441787f + (ix * (-18.851064805871424f + (ix * (17.644729840837403f + (ix * (8.3705032834312f + (ix * (0.10526468069939171f + (ix * -0.20243350835593876f)))))))))))))));
		s2 = 1.7211476576120028f + (ix * (-22.643693341313973f + (ix * (10.826866735546016f + (ix * (48.560921310873994f + (ix * (-20.14326346804852f + (ix * (-28.66081804998f + (ix * (3.971343795334387f + (ix * (6.242641248542475f + (ix * 1.0f)))))))))))))));
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
static float rational_p3q3( const float x ) {
	float ax;
	float ix;
	float s1;
	float s2;
	if ( x == 0.0f ) {
		return -0.1311027816799519f;
	}
	if ( x < 0.0f ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0f ) {
		s1 = -0.1311027816799519f + (x * (-0.16379404719331705f + (x * (0.11703015634199525f + (x * (0.38707973897260434f + (x * (0.3377855389120359f + (x * (0.14286953440815717f + (x * (0.029015791000532906f + (x * (0.0021455899538880526f + (x * (-6.794655751811263e-7f + (x * (2.8522533178221704e-8f + (x * -6.81149956853777e-10f)))))))))))))))))));
		s2 = 1.0f + (x * (3.4662540724256723f + (x * (5.381683457070069f + (x * (4.778465929458438f + (x * (2.5930192162362027f + (x * (0.848854343457902f + (x * (0.15226433829533179f + (x * (0.011059242293464892f + (x * (0.0f + (x * (0.0f + (x * 0.0f)))))))))))))))))));
	} else {
		ix = 1.0f / x;
		s1 = -6.81149956853777e-10f + (ix * (2.8522533178221704e-8f + (ix * (-6.794655751811263e-7f + (ix * (0.0021455899538880526f + (ix * (0.029015791000532906f + (ix * (0.14286953440815717f + (ix * (0.3377855389120359f + (ix * (0.38707973897260434f + (ix * (0.11703015634199525f + (ix * (-0.16379404719331705f + (ix * -0.1311027816799519f)))))))))))))))))));
		s2 = 0.0f + (ix * (0.0f + (ix * (0.0f + (ix * (0.011059242293464892f + (ix * (0.15226433829533179f + (ix * (0.848854343457902f + (ix * (2.5930192162362027f + (ix * (4.778465929458438f + (ix * (5.381683457070069f + (ix * (3.4662540724256723f + (ix * 1.0f)))))))))))))))))));
	}
	return s1 / s2;
}

// END: rational_p3q3

// BEGIN: rational_p4q4

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
static float rational_p4q4( const float x ) {
	float ax;
	float ix;
	float s1;
	float s2;
	if ( x == 0.0f ) {
		return -0.0350353787183178f;
	}
	if ( x < 0.0f ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0f ) {
		s1 = -0.0350353787183178f + (x * (-0.0022242652921344794f + (x * (0.018557330651423107f + (x * (0.009508047013259196f + (x * (0.0018712349281955923f + (x * (0.00015754461742496055f + (x * (0.00000460469890584318f + (x * (-2.304047769118826e-10f + (x * 2.6633922742578204e-12f)))))))))))))));
		s2 = 1.0f + (x * (1.3653349817554064f + (x * (0.7620591645536234f + (x * (0.22009110576413124f + (x * (0.03415891436709477f + (x * (0.00263861676657016f + (x * (0.00007646752923027944f + (x * (0.0f + (x * 0.0f)))))))))))))));
	} else {
		ix = 1.0f / x;
		s1 = 2.6633922742578204e-12f + (ix * (-2.304047769118826e-10f + (ix * (0.00000460469890584318f + (ix * (0.00015754461742496055f + (ix * (0.0018712349281955923f + (ix * (0.009508047013259196f + (ix * (0.018557330651423107f + (ix * (-0.0022242652921344794f + (ix * -0.0350353787183178f)))))))))))))));
		s2 = 0.0f + (ix * (0.0f + (ix * (0.00007646752923027944f + (ix * (0.00263861676657016f + (ix * (0.03415891436709477f + (ix * (0.22009110576413124f + (ix * (0.7620591645536234f + (ix * (1.3653349817554064f + (ix * 1.0f)))))))))))))));
	}
	return s1 / s2;
}

// END: rational_p4q4

// BEGIN: rational_p5q5

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
static float rational_p5q5( const float x ) {
	float ax;
	float ix;
	float s1;
	float s2;
	if ( x == 0.0f ) {
		return -0.016743100507663373f;
	}
	if ( x < 0.0f ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0f ) {
		s1 = -0.016743100507663373f + (x * (-0.0011295143874558028f + (x * (0.001056288621524929f + (x * (0.00020938631748758808f + (x * (0.000014962478375834237f + (x * (4.4969678992770644e-7f + (x * (4.625961635228786e-9f + (x * (-2.811287356288318e-14f + (x * 9.905570997331033e-17f)))))))))))))));
		s2 = 1.0f + (x * (0.5914293448864175f + (x * (0.1381518657490833f + (x * (0.016074608709367652f + (x * (0.0009640118070051656f + (x * (0.000027533547476472603f + (x * (2.82243172016108e-7f + (x * (0.0f + (x * 0.0f)))))))))))))));
	} else {
		ix = 1.0f / x;
		s1 = 9.905570997331033e-17f + (ix * (-2.811287356288318e-14f + (ix * (4.625961635228786e-9f + (ix * (4.4969678992770644e-7f + (ix * (0.000014962478375834237f + (ix * (0.00020938631748758808f + (ix * (0.001056288621524929f + (ix * (-0.0011295143874558028f + (ix * -0.016743100507663373f)))))))))))))));
		s2 = 0.0f + (ix * (0.0f + (ix * (2.82243172016108e-7f + (ix * (0.000027533547476472603f + (ix * (0.0009640118070051656f + (ix * (0.016074608709367652f + (ix * (0.1381518657490833f + (ix * (0.5914293448864175f + (ix * 1.0f)))))))))))))));
	}
	return s1 / s2;
}

// END: rational_p5q5

/* End auto-generated functions. */

/**
* Evaluates the inverse complementary error function for a single-precision floating-point number.
*
* Note that
*
* ```tex
* \operatorname{erfc^{-1}}(1-z) = \operatorname{erf^{-1}}(z)
* ```
*
* ## Method
*
* 1.  For \\(|x| \leq 0.5\\), we evaluate the inverse error function using the rational approximation
*
*     ```tex
*     \operatorname{erf^{-1}}(x) = x(x+10)(\mathrm{Y} + \operatorname{R}(x))
*     ```
*
*     where \\(Y\\) is a constant and \\(\operatorname{R}(x)\\) is optimized for a low absolute error compared to \\(|Y|\\).
*
*     <!-- <note> -->
*
*     Max error \\(2.001849\mbox{e-}18\\). Maximum deviation found (error term at infinite precision) \\(8.030\mbox{e-}21\\).
*
*     <!-- </note> -->
*
* 2.  For \\(0.5 > 1-|x| \geq 0\\), we evaluate the inverse error function using the rational approximation
*
*     ```tex
*     \operatorname{erf^{-1}} = \frac{\sqrt{-2 \cdot \ln(1-x)}}{\mathrm{Y} + \operatorname{R}(1-x)}
*     ```
*
*     where \\(Y\\) is a constant, and \\(\operatorname{R}(q)\\) is optimized for a low absolute error compared to \\(Y\\).
*
*     <!-- <note> -->
*
*     Max error \\(7.403372\mbox{e-}17\\). Maximum deviation found (error term at infinite precision) \\(4.811\mbox{e-}20\\).
*
*     <!-- </note> -->
*
* 3.  For \\(1-|x| < 0.25\\), we have a series of rational approximations all of the general form
*
*     ```tex
*     p = \sqrt{-\ln(1-x)}
*     ```
*
*     Accordingly, the result is given by
*
*     ```tex
*     \operatorname{erf^{-1}}(x) = p(\mathrm{Y} + \operatorname{R}(p-B))
*     ```
*
*     where \\(Y\\) is a constant, \\(B\\) is the lowest value of \\(p\\) for which the approximation is valid, and \\(\operatorname{R}(x-B)\\) is optimized for a low absolute error compared to \\(Y\\).
*
*     <!-- <note> -->
*
*     Almost all code will only go through the first or maybe second approximation. After that we are dealing with very small input values.
*
*     -   If \\(p < 3\\), max error \\(1.089051\mbox{e-}20\\).
*     -   If \\(p < 6\\), max error \\(8.389174\mbox{e-}21\\).
*     -   If \\(p < 18\\), max error \\(1.481312\mbox{e-}19\\).
*     -   If \\(p < 44\\), max error \\(5.697761\mbox{e-}20\\).
*     -   If \\(p \geq 44\\), max error \\(1.279746\mbox{e-}20\\).
*
*     <!-- </note> -->
*
*     <!-- <note> -->
*
*     The Boost library can accommodate \\(80\\) and \\(128\\) bit long doubles. This implementation only supports a \\(32\\) bit single-precision floating-point number (IEEE 754). Accordingly, the largest \\(p\\) is \\(\sqrt{-\ln(\sim1.4\mbox{e-}45)} = 10.162624164231985\\), and, thus, only the first three approximation regimes are reachable.
*
*     <!-- </note> -->
*
* @param x    input value
* @return     output value
*
* @example
* float out = stdlib_base_erfcinvf( 0.5f );
* // returns ~0.4769f
*/
float stdlib_base_erfcinvf( const float x ) {
	int32_t sign;
	float xc;
	float qs;
	float q;
	float g;
	float r;

	// Special case: NaN
	if ( stdlib_base_is_nanf( x ) ) {
		return 0.0f / 0.0f; // NaN
	}
	// Special case: 0
	if ( x == 0.0f ) {
		return STDLIB_CONSTANT_FLOAT32_PINF;
	}
	// Special case: 2
	if ( x == 2.0f ) {
		return STDLIB_CONSTANT_FLOAT32_NINF;
	}
	// Special case: 1
	if ( x == 1.0f ) {
		return 0.0f;
	}
	// Special case: x < 0 or x > 2 (range error)
	if ( x > 2.0f || x < 0.0f ) {
		return 0.0f / 0.0f; // NaN
	}
	// Argument reduction (reduce to interval [0,1]). If `x` is outside [0,1], we can take advantage of the complementary error function reflection formula: `erfc(-z) = 2 - erfc(z)`, by negating the result once finished.
	if ( x > 1.0f ) {
		sign = -1;
		q = 2.0f - x;
	} else {
		sign = 1;
		q = x;
	}
	xc = 1.0f - q;

	// x = 1-q <= 0.5
	if ( xc <= 0.5f ) {
		g = xc * ( xc + 10.0f );
		r = rational_p1q1( xc );
		return sign * ( ( g * Y1 ) + ( g * r ) );
	}
	// q >= 0.25
	if ( q >= 0.25f ) {
		g = stdlib_base_sqrtf( -2.0f * stdlib_base_lnf( q ) );
		q -= 0.25f;
		r = rational_p2q2( q );
		return sign * ( g / ( Y2 + r ) );
	}
	q = stdlib_base_sqrtf( -stdlib_base_lnf( q ) );

	// q < 3
	if ( q < 3.0f ) {
		qs = q - 1.125f;
		r = rational_p3q3( qs );
		return sign * ( ( Y3 * q ) + ( r * q ) );
	}
	// q < 6
	if ( q < 6.0f ) {
		qs = q - 3.0f;
		r = rational_p4q4( qs );
		return sign * ( ( Y4 * q ) + ( r * q ) );
	}
	// q < 18
	qs = q - 6.0f;
	r = rational_p5q5( qs );
	return sign * ( ( Y5 * q ) + ( r * q ) );
}
