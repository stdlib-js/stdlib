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

#include "stdlib/math/base/special/atanf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/constants/float32/half_pi.h"
#include "stdlib/constants/float32/fourth_pi.h"
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
	return -0.333329491539f + (x * (0.199777106478f + (x * (-0.138776856032f + (x * 0.0805374449538f)))));
}

// END: poly_p

/* End auto-generated functions. */

/**
* Computes the arctangent of a single-precision floating-point number.
*
* ## Method
*
* -   Range reduction is from four intervals into the interval from zero to  tan( pi/8 ). A polynomial approximates the function in this basic interval.
*
* ## Notes
*
* -   Relative error:
*
*     | arithmetic | domain  | # trials | peak    | rms     |
*     |:-----------|:--------|:---------|:--------|:--------|
*     | IEEE       | -10, 10 | 10^5     | 1.9e-7  | 4.1e-8  |
*
* @param x    input value
* @return     arctangent (in radians)
*
* @example
* float out = stdlib_base_atanf( 0.0f );
* // returns 0.0f
*/
float stdlib_base_atanf( const float x ) {
	int8_t sgn;
	float ax;
	float y;
	float z;

	if ( stdlib_base_is_nanf( x ) ) {
		return 0.0f / 0.0f; // NaN
	}
	ax = x;
	if ( x < 0.0f ) {
		sgn = -1;
		ax = -x;
	} else {
		sgn = 1;
	}
	// Range reduction...
	if ( ax > 2.414213562373095f ) { // tan(3*pi/8)
		y = STDLIB_CONSTANT_FLOAT32_HALF_PI;
		ax = -( 1.0f / ax );
	} else if ( ax > 0.4142135623730950f ) { // tan(pi/8)
		y = STDLIB_CONSTANT_FLOAT32_FOURTH_PI;
		ax = ( ax - 1.0f ) / ( ax + 1.0f );
	} else {
		y = 0.0f;
	}
	z = ax * ax;
	y += ( poly_p( z ) * z * ax ) + ax;
	if ( sgn < 0 ) {
		y = -y;
	}
	return y;
}
