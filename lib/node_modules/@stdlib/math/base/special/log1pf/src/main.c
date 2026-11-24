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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_log1pf.c}. The implementation follows the original, but has been modified according to project conventions.
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

#include "stdlib/math/base/special/log1pf.h"
#include "stdlib/constants/float32/ninf.h"
#include "stdlib/constants/float32/abs_mask.h"
#include "stdlib/constants/float32/precision.h"
#include "stdlib/constants/float32/exponent_bias.h"
#include "stdlib/constants/float32/exponent_mask.h"
#include "stdlib/constants/float32/significand_mask.h"
#include "stdlib/number/float32/base/to_word.h"
#include "stdlib/number/float32/base/from_word.h"
#include <stdint.h>

// VARIABLES //

// High and low words of ln(2):
static const float LN2_HI = 6.9313812256e-01f; // 0x3f317180
static const float LN2_LO = 9.0580006145e-06f; // 0x3717f7d1

// 2**25:
static const float TWO25 = 3.355443200e+07f; // 0x4c000000

// 2/3:
static const float TWO_THIRDS = 6.666666865348816e-01f;

// 2**53 = 9007199254740992 => 0 10110100 00000000000000000000000 => 0x5a000000 = 1509949440
static const int32_t TWO53 = 0x5a000000;

// 2**-15 = 0.000030517578125 => 0 01110000 00000000000000000000000 => 0x38000000 = 939524096
static const int32_t TWO_NEG_15 = 0x38000000;

// 2**-24 = 5.960464477539063e-8 => 0 01100111 00000000000000000000000 => 0x33800000 = 864026624
static const int32_t TWO_NEG_24 = 0x33800000;

// 1 => 0 01111111 00000000000000000000000 => 0x3f800000 = 1065353216
static const int32_t ONE_WORD = 0x3f800000;

// 1/2 = 0.5 => 0 01111110 00000000000000000000000 => 0x3f000000 = 1056964608
static const int32_t HALF_WORD = 0x3f000000;

// sqrt(2)-1 = 0.41421353816986084 => 0 01111101 10101000001001111010000 => 0x3ed413d0 = 1054086096
static const int32_t SQRT2M1 = 0x3ed413d0;

// sqrt(2)/2-1 = -0.2928932309150696 => 1 01111101 00101011111011000011001 => 0xbe95f619 = 3197498905
static const int32_t SQRT2HALFM1 = 0xbe95f619;

// 2**-126 = 1.1754943508222875e-38 => 0 00000001 00000000000000000000000 => 0x00800000 = 8388608
static const int32_t TINY = 0x00800000;

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: polyval_lp

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
static float polyval_lp( const float x ) {
	return 0.66666668653f + (x * (0.40000000596f + (x * (0.28571429849f + (x * (0.22222198546f + (x * (0.1818357259f + (x * (0.15313838422f + (x * 0.1479819864f)))))))))));
}

// END: polyval_lp

/* End auto-generated functions. */

/**
* Evaluates the natural logarithm of \\(1+x\\) as a single-precision floating-point number.
*
* @param x    input value
* @return	  the natural logarithm of `1+x`
*
* @example
* float out = stdlib_base_log1pf( 4.0f );
* // returns ~1.609f
*/
float stdlib_base_log1pf( const float x ) {
	uint32_t uhu;
	uint32_t uhx;
	int32_t hu;
	int32_t ax;
	int32_t hx;
	float hfsq;
	int32_t k;
	float f;
	float c;
	float s;
	float z;
	float R;
	float u;

	stdlib_base_float32_to_word( x, &uhx );
	hx = (int32_t)uhx;
	ax = hx & STDLIB_CONSTANT_FLOAT32_ABS_MASK;
	k = 1;
	if ( hx < SQRT2M1 ) { // 1+x < sqrt(2)+
		if ( ax >= ONE_WORD ) { // x <= -1.0
			if ( x == -1.0f ) {
				return STDLIB_CONSTANT_FLOAT32_NINF;
			}
			return 0.0f / 0.0f; // NaN
		}
		if ( ax < TWO_NEG_15 ) { // |x| < 2**-15
			if ( ( TWO25 + x > 0.0f ) && ( ax < TWO_NEG_24 ) ) { // |x| < 2**-24
				return x;
			}
			return x - ( x * x * 0.5f );
		}
		// cppcheck-suppress knownConditionTrueFalse
		if ( ( hx > 0 ) || ( hx <= SQRT2HALFM1 ) ) { // sqrt(2)/2- <= 1+x < sqrt(2)+
			k = 0;
			f = x;
			hu = 1;
		}
	}
	if ( hx >= STDLIB_CONSTANT_FLOAT32_EXPONENT_MASK ) {
		return x + x;
	}
	if ( k != 0 ) {
		if ( hx < TWO53 ) {
			u = 1.0f + x;
			stdlib_base_float32_to_word( u, &uhu );
			hu = (int32_t)uhu;
			k = ( hu >> ( STDLIB_CONSTANT_FLOAT32_PRECISION-1 ) ) - STDLIB_CONSTANT_FLOAT32_EXPONENT_BIAS;

			// Correction term:
			c = ( k > 0 ) ? ( 1.0f - ( u - x ) ) : ( x - ( u - 1.0f ) );
			c /= u;
		} else {
			u = x;
			stdlib_base_float32_to_word( u, &uhu );
			hu = (int32_t)uhu;
			k = ( hu >> ( STDLIB_CONSTANT_FLOAT32_PRECISION-1 ) ) - STDLIB_CONSTANT_FLOAT32_EXPONENT_BIAS;
			c = 0;
		}
		hu &= STDLIB_CONSTANT_FLOAT32_SIGNIFICAND_MASK;

		// Earlier sqrt(2) checks should be slightly looser than this one, so we never reach this point with k == 0 after deciding to use the correction term...
		if ( hu < 0x3504f4 ) { // u < sqrt(2)
			stdlib_base_float32_from_word( (uint32_t)( hu | ONE_WORD ), &u ); // normalize u
		} else {
			k += 1;
			stdlib_base_float32_from_word( (uint32_t)( hu | HALF_WORD ), &u ); // normalize u/2
			hu = ( TINY - hu ) >> 2;
		}
		f = u - 1.0f;
	}
	hfsq = 0.5f * f * f;
	if ( hu == 0 ) { // |f| < 2**-20
		if ( f == 0.0f ) {
			if ( k == 0 ) {
				return 0.0f;
			}
			c += ( k * LN2_LO );
			return ( k * LN2_HI ) + c;
		}
		R = hfsq * ( 1.0f - ( TWO_THIRDS * f ) );
		if ( k == 0 ) {
			return f - R;
		}
		return ( k*LN2_HI ) - ( ( R - ( ( k*LN2_LO ) + c ) ) - f );
	}
	s = f / ( 2.0f + f );
	z = s * s;
	R = z * polyval_lp( z );
	if ( k == 0 ) {
		return f - ( hfsq - ( s * ( hfsq+R ) ) );
	}
	return ( k*LN2_HI ) - ( ( hfsq - ( ( s * ( hfsq+R ) ) + ( ( k*LN2_LO ) + c ) ) ) - f );
}
