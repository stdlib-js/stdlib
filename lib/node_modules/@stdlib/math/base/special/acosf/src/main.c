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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_acosf.c?view=markup}. The implementation follows the original, but has been modified according to project conventions.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/

#include "stdlib/math/base/special/acosf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/special/sqrtf.h"
#include "stdlib/number/float32/base/from_word.h"
#include "stdlib/number/float32/base/to_word.h"
#include "stdlib/constants/float32/abs_mask.h"
#include <stdint.h>

static const float ALMOST_PI = 3.1415925026e+00f;  // 0 10000000 10010010000111111011010 => 0x40490fda
static const float PIO2_HI = 1.5707962513e+00f;    // 0 01111111 10010010000111111011010 => 0x3fc90fda
static volatile float PIO2_LO = 7.5497894159e-08f; // 0 01100111 01000100010000101101000 => 0x33a22168
static const int32_t ONE = 0x3f800000;             // 1.0 => 0 01111111 00000000000000000000000 => 1065353216 => 0x3f800000
static const int32_t ONE_HALF = 0x3f000000;        // 0.5 => 0 01111110 00000000000000000000000 => 1056964608 => 0x3f000000
static const int32_t SMALL = 0x32800000;           // 2^-26 => 0 01100101 00000000000000000000000 => 847249408 => 0x32800000
static const int32_t MASK_LO = 0xfffff000;         // 1 11111111 11111111111000000000000 => 4294963200 => 0xfffff000
static const float QS1 = -7.0662963390e-01;

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
	return 0.16666586697f + (x * (-0.042743422091f + (x * -0.008656363003f)));
}

// END: poly_p

/* End auto-generated functions. */

/**
* Computes the arccosine of a single-precision floating-point number.
*
* @param x    input value
* @return     arccosine (in radians)
*
* @example
* float out = stdlib_base_acosf( 1.0f );
* // returns 0.0f
*/
float stdlib_base_acosf( const float x ) {
	uint32_t uidf;
	uint32_t uhx;
	int32_t idf;
	int32_t hx;
	int32_t ix;
	float df;
	float z;
	float p;
	float q;
	float r;
	float w;
	float s;
	float c;

	if ( stdlib_base_is_nanf( x ) ) {
		return 0.0f / 0.0f; // NaN
	}
	// Reinterpret the input value as a 32-bit integer word:
	stdlib_base_float32_to_word( x, &uhx );
	hx = (int32_t)uhx;

	// Turn off the sign bit:
	ix = hx & STDLIB_CONSTANT_FLOAT32_ABS_MASK;

	// Case: |x| >= 1
	if ( ix >= ONE ) {
		// Case: |x| == 1
		if ( ix == ONE ) {
			// Case: x == 1
			if ( hx > 0 ) {
				return 0.0f; // acos(1) = 0
			}
			// Case: x == -1
			return ALMOST_PI + ( 2.0f * PIO2_LO ); // acos(-1) = π
		}
		return 0.0f / 0.0f; // NaN as |x|>1 is outside the domain of acos
	}
	// Case: |x| < 0.5
	if ( ix < ONE_HALF ) {
		// Case: |x| < 2^-26
		if ( ix <= SMALL ) {
			return PIO2_HI + PIO2_LO; // acos(~0) = π/2
		}
		z = x * x;
		p = z * poly_p( z );
		q = 1.0f + ( z * QS1 );
		r = p / q;
		return PIO2_HI - ( x - ( PIO2_LO - ( x * r ) ) );
	}
	// Case: x < -0.5
	if ( hx < 0 ) {
		z = 0.5f * ( 1.0f + x );
		p = z * poly_p( z );
		q = 1.0f + ( z * QS1 );
		s = stdlib_base_sqrtf( z );
		r = p / q;
		w = ( r * s ) - PIO2_LO;
		return ALMOST_PI - ( 2.0f * ( s + w ) );
	}
	// Case: x > 0.5
	z = 0.5f * ( 1.0f - x );
	s = stdlib_base_sqrtf( z );

	df = s;
	stdlib_base_float32_to_word( df, &uidf );

	idf = (int32_t)uidf;
	stdlib_base_float32_from_word( (uint32_t)( idf&MASK_LO ), &df );

	c = ( z - ( df * df ) ) / ( s + df );
	p = z * poly_p( z );
	q = 1.0f + ( z * QS1 );
	r = p / q;
	w = ( r * s ) + c;
	return 2.0f * ( df + w );
}
