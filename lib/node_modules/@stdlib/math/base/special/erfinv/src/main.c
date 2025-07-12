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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_48_0/boost/math/special_functions/detail/erf_inv.hpp}. This implementation follows the original, but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

#include "stdlib/math/base/special/erfinv.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/ninf.h"
#include <stdint.h>

static const double Y1 = 8.91314744949340820313e-2;
static const double Y2 = 2.249481201171875;
static const double Y3 = 8.07220458984375e-1;
static const double Y4 = 9.3995571136474609375e-1;
static const double Y5 = 9.8362827301025390625e-1;

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
		return -0.0005087819496582806;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -0.0005087819496582806 + (x * (-0.008368748197417368 + (x * (0.03348066254097446 + (x * (-0.012692614766297404 + (x * (-0.03656379714117627 + (x * (0.02198786811111689 + (x * (0.008226878746769157 + (x * (-0.005387729650712429 + (x * (0.0 + (x * 0.0)))))))))))))))));
		s2 = 1.0 + (x * (-0.9700050433032906 + (x * (-1.5657455823417585 + (x * (1.5622155839842302 + (x * (0.662328840472003 + (x * (-0.7122890234154284 + (x * (-0.05273963823400997 + (x * (0.07952836873415717 + (x * (-0.0023339375937419 + (x * 0.0008862163904564247)))))))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 0.0 + (ix * (0.0 + (ix * (-0.005387729650712429 + (ix * (0.008226878746769157 + (ix * (0.02198786811111689 + (ix * (-0.03656379714117627 + (ix * (-0.012692614766297404 + (ix * (0.03348066254097446 + (ix * (-0.008368748197417368 + (ix * -0.0005087819496582806)))))))))))))))));
		s2 = 0.0008862163904564247 + (ix * (-0.0023339375937419 + (ix * (0.07952836873415717 + (ix * (-0.05273963823400997 + (ix * (-0.7122890234154284 + (ix * (0.662328840472003 + (ix * (1.5622155839842302 + (ix * (-1.5657455823417585 + (ix * (-0.9700050433032906 + (ix * 1.0)))))))))))))))));
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
		return -0.20243350835593876;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -0.20243350835593876 + (x * (0.10526468069939171 + (x * (8.3705032834312 + (x * (17.644729840837403 + (x * (-18.851064805871424 + (x * (-44.6382324441787 + (x * (17.445385985570866 + (x * (21.12946554483405 + (x * -3.6719225470772936)))))))))))))));
		s2 = 1.0 + (x * (6.242641248542475 + (x * (3.971343795334387 + (x * (-28.66081804998 + (x * (-20.14326346804852 + (x * (48.560921310873994 + (x * (10.826866735546016 + (x * (-22.643693341313973 + (x * 1.7211476576120028)))))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = -3.6719225470772936 + (ix * (21.12946554483405 + (ix * (17.445385985570866 + (ix * (-44.6382324441787 + (ix * (-18.851064805871424 + (ix * (17.644729840837403 + (ix * (8.3705032834312 + (ix * (0.10526468069939171 + (ix * -0.20243350835593876)))))))))))))));
		s2 = 1.7211476576120028 + (ix * (-22.643693341313973 + (ix * (10.826866735546016 + (ix * (48.560921310873994 + (ix * (-20.14326346804852 + (ix * (-28.66081804998 + (ix * (3.971343795334387 + (ix * (6.242641248542475 + (ix * 1.0)))))))))))))));
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
		return -0.1311027816799519;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -0.1311027816799519 + (x * (-0.16379404719331705 + (x * (0.11703015634199525 + (x * (0.38707973897260434 + (x * (0.3377855389120359 + (x * (0.14286953440815717 + (x * (0.029015791000532906 + (x * (0.0021455899538880526 + (x * (-6.794655751811263e-7 + (x * (2.8522533178221704e-8 + (x * -6.81149956853777e-10)))))))))))))))))));
		s2 = 1.0 + (x * (3.4662540724256723 + (x * (5.381683457070069 + (x * (4.778465929458438 + (x * (2.5930192162362027 + (x * (0.848854343457902 + (x * (0.15226433829533179 + (x * (0.011059242293464892 + (x * (0.0 + (x * (0.0 + (x * 0.0)))))))))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = -6.81149956853777e-10 + (ix * (2.8522533178221704e-8 + (ix * (-6.794655751811263e-7 + (ix * (0.0021455899538880526 + (ix * (0.029015791000532906 + (ix * (0.14286953440815717 + (ix * (0.3377855389120359 + (ix * (0.38707973897260434 + (ix * (0.11703015634199525 + (ix * (-0.16379404719331705 + (ix * -0.1311027816799519)))))))))))))))))));
		s2 = 0.0 + (ix * (0.0 + (ix * (0.0 + (ix * (0.011059242293464892 + (ix * (0.15226433829533179 + (ix * (0.848854343457902 + (ix * (2.5930192162362027 + (ix * (4.778465929458438 + (ix * (5.381683457070069 + (ix * (3.4662540724256723 + (ix * 1.0)))))))))))))))))));
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
static double rational_p4q4( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return -0.0350353787183178;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -0.0350353787183178 + (x * (-0.0022242652921344794 + (x * (0.018557330651423107 + (x * (0.009508047013259196 + (x * (0.0018712349281955923 + (x * (0.00015754461742496055 + (x * (0.00000460469890584318 + (x * (-2.304047769118826e-10 + (x * 2.6633922742578204e-12)))))))))))))));
		s2 = 1.0 + (x * (1.3653349817554064 + (x * (0.7620591645536234 + (x * (0.22009110576413124 + (x * (0.03415891436709477 + (x * (0.00263861676657016 + (x * (0.00007646752923027944 + (x * (0.0 + (x * 0.0)))))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 2.6633922742578204e-12 + (ix * (-2.304047769118826e-10 + (ix * (0.00000460469890584318 + (ix * (0.00015754461742496055 + (ix * (0.0018712349281955923 + (ix * (0.009508047013259196 + (ix * (0.018557330651423107 + (ix * (-0.0022242652921344794 + (ix * -0.0350353787183178)))))))))))))));
		s2 = 0.0 + (ix * (0.0 + (ix * (0.00007646752923027944 + (ix * (0.00263861676657016 + (ix * (0.03415891436709477 + (ix * (0.22009110576413124 + (ix * (0.7620591645536234 + (ix * (1.3653349817554064 + (ix * 1.0)))))))))))))));
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
static double rational_p5q5( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return -0.016743100507663373;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -0.016743100507663373 + (x * (-0.0011295143874558028 + (x * (0.001056288621524929 + (x * (0.00020938631748758808 + (x * (0.000014962478375834237 + (x * (4.4969678992770644e-7 + (x * (4.625961635228786e-9 + (x * (-2.811287356288318e-14 + (x * 9.905570997331033e-17)))))))))))))));
		s2 = 1.0 + (x * (0.5914293448864175 + (x * (0.1381518657490833 + (x * (0.016074608709367652 + (x * (0.0009640118070051656 + (x * (0.000027533547476472603 + (x * (2.82243172016108e-7 + (x * (0.0 + (x * 0.0)))))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 9.905570997331033e-17 + (ix * (-2.811287356288318e-14 + (ix * (4.625961635228786e-9 + (ix * (4.4969678992770644e-7 + (ix * (0.000014962478375834237 + (ix * (0.00020938631748758808 + (ix * (0.001056288621524929 + (ix * (-0.0011295143874558028 + (ix * -0.016743100507663373)))))))))))))));
		s2 = 0.0 + (ix * (0.0 + (ix * (2.82243172016108e-7 + (ix * (0.000027533547476472603 + (ix * (0.0009640118070051656 + (ix * (0.016074608709367652 + (ix * (0.1381518657490833 + (ix * (0.5914293448864175 + (ix * 1.0)))))))))))))));
	}
	return s1 / s2;
}

// END: rational_p5q5

/* End auto-generated functions. */

/**
* Evaluates the inverse error function.
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_erfinv( 0.5 );
* // returns ~0.4769
*/
double stdlib_base_erfinv( const double x ) {
	double sign;
	double ax;
	double qs;
	double q;
	double g;
	double r;

	// Special case: NaN
	if ( stdlib_base_is_nan( x ) ) {
		return 0.0 / 0.0; // NaN
	}
	// Special case: 1
	if ( x == 1.0 ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	// Special case: -1
	if ( x == -1.0 ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	// Special case: +-0
	if ( x == 0.0 ) {
		return x;
	}
	// Special case: |x| > 1 (range error)
	if ( x > 1.0 || x < -1.0 ) {
		return 0.0 / 0.0; // NaN
	}
	// Argument reduction (reduce to interval [0,1]). If `x` is negative, we can safely negate the value, taking advantage of the error function being an odd function; i.e., `erf(-x) = -erf(x)`.
	if ( x < 0.0 ) {
		sign = -1.0;
		ax = -x;
	} else {
		sign = 1.0;
		ax = x;
	}
	q = 1.0 - ax;

	// |x| <= 0.5
	if ( ax <= 0.5 ) {
		g = ax * ( ax + 10.0 );
		r = rational_p1q1( ax );
		return sign * ( ( g * Y1 ) + ( g * r ) );
	}
	// 1-|x| >= 0.25
	if ( q >= 0.25 ) {
		g = stdlib_base_sqrt( -2.0 * stdlib_base_ln( q ) );
		q -= 0.25;
		r = rational_p2q2( q );
		return sign * ( g / ( Y2 + r ) );
	}
	q = stdlib_base_sqrt( -stdlib_base_ln( q ) );

	// q < 3
	if ( q < 3.0 ) {
		qs = q - 1.125;
		r = rational_p3q3( qs );
		return sign * ( ( Y3 * q ) + ( r * q ) );
	}
	// q < 6
	if ( q < 6.0 ) {
		qs = q - 3.0;
		r = rational_p4q4( qs );
		return sign * ( ( Y4 * q ) + ( r * q ) );
	}
	// q < 18
	qs = q - 6.0;
	r = rational_p5q5( qs );
	return sign * ( ( Y5 * q ) + ( r * q ) );
}
