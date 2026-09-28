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
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_log10f.c}. The implementation follows the original, but has been modified according to project conventions.
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

#include "stdlib/math/base/special/log10f.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/number/float32/base/to_word.h"
#include "stdlib/constants/float32/abs_mask.h"
#include "stdlib/constants/float32/ninf.h"
#include "stdlib/constants/float32/exponent_bias.h"
#include "stdlib/constants/float32/exponent_mask.h"
#include "stdlib/constants/float32/significand_mask.h"
#include "stdlib/number/float32/base/from_word.h"
#include "stdlib/math/base/special/kernel_log1pf.h"
#include <stdint.h>

// 2^25 = 33554432 => 0 10011000 00000000000000000000000 => 0x4c000000 = 1275068416
static const float TWO25 = 3.3554432000e+07f;

// 1/ln(10) high part = 4.3432617188e-01 => 0 01111101 10111100110000000000000 => 0x3ede6000 = 1054760960
static const float IVLN10HI = 4.3432617188e-01f;

// 1/ln(10) low part = -3.1689971365e-05 => 1 01110000 00001001110101011011001 => 0xb804ead9 = -1207637287
static const float IVLN10LO = -3.1689971365e-05f;

// log10(2) high part = 3.0102920532e-01 => 0 01111101 00110100010000010000000 => 0x3e9a2080 = 1050288256
static const float LOG10_2HI = 3.0102920532e-01f;

// log10(2) low part = 7.9034151668e-07 => 0 01101010 10101000010011111011011 => 0x355427db = 894707675
static const float LOG10_2LO = 7.9034151668e-07f;

// 2^-126 => 0 00000001 00000000000000000000000 => 0x00800000 = 8388608
static const int32_t MIN_NORMAL_WORD = 0x00800000;

// 1.0 => 0 01111111 00000000000000000000000 => 0x3f800000 = 1065353216
static const int32_t ONE_WORD = 0x3f800000;

// Normalization offset:
static const int32_t NORM_OFFSET = 0x4afb0d;

// High word mask:
static const uint32_t HI_MASK = 0xfffff000;

/**
* Evaluates the common logarithm (base ten) of a single-precision floating-point number.
*
* @param x    input value
* @return     output value
*
* @example
* float out = stdlib_base_log10f( 4.0f );
* // returns ~0.602f
*/
float stdlib_base_log10f( const float x ) {
	uint32_t hx;
	int32_t ihx;
	float hfsq;
	int32_t k;
	int32_t i;
	float xc;
	float hi;
	float lo;
	float f;
	float r;
	float y;

	if ( stdlib_base_is_nanf( x ) || x < 0.0f ) {
		return 0.0f / 0.0f; // NaN
	}
	xc = x;
	stdlib_base_float32_to_word( xc, &hx );
	ihx = (int32_t)hx;
	k = 0;

	if ( ihx < MIN_NORMAL_WORD ) { // x < 2^-126
		if ( ( ihx & STDLIB_CONSTANT_FLOAT32_ABS_MASK ) == 0 ) {
			return STDLIB_CONSTANT_FLOAT32_NINF;
		}
		k -= 25;

		// Subnormal number, scale up x:
		xc *= TWO25;
		stdlib_base_float32_to_word( xc, &hx );
		ihx = (int32_t)hx;
	}
	if ( hx >= STDLIB_CONSTANT_FLOAT32_EXPONENT_MASK ) {
		return xc + xc;
	}
	// Case: log(1) = +0
	if ( ihx == ONE_WORD ) {
		return 0.0f;
	}
	k += ( ( ihx >> 23 ) - STDLIB_CONSTANT_FLOAT32_EXPONENT_BIAS );
	ihx &= STDLIB_CONSTANT_FLOAT32_SIGNIFICAND_MASK;
	i = ( ihx + NORM_OFFSET ) & MIN_NORMAL_WORD;

	// Normalize x or x/2:
	stdlib_base_float32_from_word( (uint32_t)( ihx | ( i ^ ONE_WORD ) ), &xc );
	k += ( i >> 23 );
	y = (float)k;
	f = xc - 1.0f;
	hfsq = 0.5f * f * f;
	r = stdlib_base_kernel_log1pf( f );

	hi = f - hfsq;
	stdlib_base_float32_to_word( hi, &hx );
	stdlib_base_float32_from_word( hx & HI_MASK, &hi );
	lo = ( f - hi ) - hfsq + r;
	return ( y*LOG10_2LO ) + ( ( lo+hi )*IVLN10LO ) + ( lo*IVLN10HI ) + ( hi*IVLN10HI ) + ( y*LOG10_2HI );
}
