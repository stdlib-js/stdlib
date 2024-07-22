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
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_log.c}. The implementation follows the original, but has been modified according to project conventions.
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

#include "stdlib/math/base/special/lnf.h"
#include "stdlib/number/float32/base/to_word.h"
#include "stdlib/number/float32/base/from_word.h"
#include "stdlib/constants/float32/ninf.h"
#include "stdlib/constants/float32/exponent_bias.h"
#include "stdlib/constants/float32/exponent_mask.h"
#include "stdlib/constants/float32/abs_mask.h"
#include "stdlib/constants/float32/significand_mask.h"
#include <stdint.h>

static const float LN2_HI = 6.9313812256e-01f; // 0x3f317180
static const float LN2_LO = 9.0580006145e-06f; // 0x3717f7d1
static const float TWO25 = 3.355443200e+07f;   // 0x4c000000
static const float ONE_THIRD = 0.33333333333333333f;

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: polyval_p

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
static float polyval_p( const float x ) {
	return 0.40000972152f + (x * 0.24279078841f);
}

// END: polyval_p

// BEGIN: polyval_q

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
static float polyval_q( const float x ) {
	return 0.66666662693f + (x * 0.28498786688f);
}

// END: polyval_q

/* End auto-generated functions. */

/**
* Evaluates the natural-logarithm of a single-precision floating-point number.
*
* @param x    input value
* @return     natural logarithm
*
* @example
* float out = stdlib_base_lnf( 2.0f );
* // returns ~0.693f
*/
float stdlib_base_lnf( const float x ) {
	uint32_t uix;
	int32_t ix;
	float hfsq;
	int32_t k;
	int32_t i;
	int32_t j;
	float dk;
	float t1;
	float t2;
	float xc;
	float f;
	float R;
	float s;
	float z;
	float w;

	stdlib_base_float32_to_word( x, &uix );
	ix = (int32_t)uix;
	xc = x;
	k = 0;
	// x < 2**-126
	if ( ix < 0x00800000 ) {
		if ( ( ix & STDLIB_CONSTANT_FLOAT32_ABS_MASK ) == 0 ) {
			// log(+-0)=-inf
			return -TWO25 / 0.0f;
		}
		if ( ix < 0 ) {
			// log(-#) = NaN
			return 0.0f / 0.0f; // NaN
		}
		k -= 25;
		// subnormal number, scale up x
		xc *= TWO25;
		stdlib_base_float32_to_word( xc, &uix );
		ix = (int32_t)uix;
	}
	if ( ix >= STDLIB_CONSTANT_FLOAT32_EXPONENT_MASK ) {
		return ( xc + xc );
	}
	k += ( ( ix >> 23 ) - STDLIB_CONSTANT_FLOAT32_EXPONENT_BIAS );
	ix &= STDLIB_CONSTANT_FLOAT_SIGNIFICAND_MASK;
	i = ( ix + ( 0x95f64 << 3 ) ) & 0x800000;
	// normalize x or x/2
	stdlib_base_float32_from_word( (uint32_t)( ix | ( i ^ 0x3f800000 ) ), &xc );
	k += ( i >> 23 );
	f = ( xc - 1.0f );
	// -2**-9 <= f < 2**-9
	if ( ( STDLIB_CONSTANT_FLOAT_SIGNIFICAND_MASK & ( 0x8000 + ix ) ) < 0xc000 ) {
		if ( f == 0.0f ) {
			if ( k == 0 ) {
				return 0.0f;
			}
			dk = (float)k;
			return ( ( dk * LN2_HI ) + ( dk * LN2_LO ) );
		}
		R = ( ( f * f ) * ( 0.5f - ( ONE_THIRD * f ) ) );
		if ( k == 0 ) {
			return ( f - R );
		}
		dk = (float)k;
		return ( ( dk * LN2_HI ) - ( ( R - ( dk * LN2_LO ) ) - f ) );
	}
	s = ( f / ( 2.0f + f ) );
	dk = (float)k;
	z = ( s * s );
	i = ( ix - ( 0x6147a << 3 ) );
	w = ( z * z );
	j = ( ( 0x6b851 << 3 ) - ix );
	t1 = ( w * ( polyval_p( w ) ) );
	t2 = ( z * ( polyval_q( w ) ) );
	i |= j;
	R = ( t2 + t1 );
	if ( i > 0 ) {
		hfsq = ( 0.5f * ( f * f ) );
		if ( k == 0 ) {
			return ( f - ( hfsq - ( s * ( hfsq + R ) ) ) );
		}
		return ( ( dk * LN2_HI ) - ( ( hfsq - ( s * ( hfsq + R ) + ( dk * LN2_LO ) ) ) - f ) );
	}
	if ( k == 0 ) {
		return ( f - ( s * ( f - R ) ) );
	}
	return ( ( dk * LN2_HI ) - ( ( ( s * ( f - R ) ) - ( dk * LN2_LO ) ) - f ) );
}
