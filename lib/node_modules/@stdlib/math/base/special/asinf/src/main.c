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
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified according to project conventions.
*
* ```text
* Copyright 1984, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/

#include "stdlib/math/base/special/asinf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/special/sqrtf.h"
#include "stdlib/constants/float32/half_pi.h"
#include <stdint.h>

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: poly_p

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
static float poly_p( const float x ) {
	return 0.16666752422f + (x * (0.074953002686f + (x * (0.045470025998f + (x * (0.024181311049f + (x * 0.042163199048f)))))));
}

// END: poly_p

/* End auto-generated functions. */

/**
* Computes the arcsine of a single-precision floating-point number.
*
* ## Method
*
* -   A polynomial of the form
*
*     ```tex
*     x + x^3 P(x^2)
*     ```
*
*     is used for \\(\|x\|\\) in the interval \\(\[0, 0.5\]\\). If \\(\|x\| > 0.5\\), it is transformed by the identity
*
*     ```tex
*     \operatorname{asinf}(x) = \frac{\pi}{2} - 2 \operatorname{asinf}( \sqrt{ (1-x)/2 } )
*     ```
*
* ## Notes
*
* -   Relative error:
*
*     | arithmetic | domain | # trials | peak    | rms     |
*     |:-----------|:-------|:---------|:--------|:--------|
*     | IEEE       | -1, 1  | 10^5     | 2.5e-7  | 5.0e-8  |
*
* @param x    input value
* @return    arcsine (in radians)
*
* @example
* float out = stdlib_base_asinf( 0.0f );
* // returns 0.0f
*/
float stdlib_base_asinf( const float x ) {
	int32_t flag;
	int32_t sgn;
	float ax;
	float z;

	if ( stdlib_base_is_nanf( x ) ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( x > 0.0f ) {
		sgn = 1;
		ax = x;
	} else {
		sgn = 0;
		ax = -x;
	}
	if ( ax > 1.0f ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( ax < 1.0e-4f ) {
		return x;
	}
	if ( ax > 0.5f ) {
		z = 0.5f * ( 1.0f - ax );
		ax = stdlib_base_sqrtf( z );
		flag = 1;
	} else {
		z = ax * ax;
		flag = 0;
	}
	z = ( poly_p( z ) * z * ax ) + ax;
	if ( flag != 0 ) {
		z += z;
		z = STDLIB_CONSTANT_FLOAT32_HALF_PI - z;
	}
	return ( sgn == 1 ) ? z : -z;
}
