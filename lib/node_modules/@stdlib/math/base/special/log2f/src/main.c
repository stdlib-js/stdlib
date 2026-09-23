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
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_log2f.c}. The implementation follows the original, but has been modified according to project conventions.
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

#include "stdlib/math/base/special/log2f.h"
#include "stdlib/number/float32/base/to_word.h"
#include "stdlib/number/float32/base/from_word.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/constants/float32/abs_mask.h"
#include "stdlib/constants/float32/significand_mask.h"
#include "stdlib/constants/float32/exponent_bias.h"
#include "stdlib/constants/float32/exponent_mask.h"
#include "stdlib/constants/float32/num_significand_bits.h"
#include "stdlib/constants/float32/ninf.h"
#include "stdlib/math/base/special/kernel_log1pf.h"
#include <stdint.h>

// 2^25 = 33554432 => 0 10011000 00000000000000000000000 => 0x4c000000 = 1275068416
static const float TWO25 = 3.3554432000e+07f;

// 1/ln(2) high part = 1.4428710938 => 0 01111111 01110001011000000000000 => 0x3fb8b000 = 1068875776
static const float IVLN2HI = 1.4428710938e+00f;

// 1/ln(2) low part = -1.7605285393e-04 => 1 01110011 00010001001101011010100 => 0xb9389ad4 = -1187821868
static const float IVLN2LO = -1.7605285393e-04f;

// 2^-126 => 0 00000001 00000000000000000000000 => 0x00800000 = 8388608
static const int32_t MIN_NORMAL_WORD = 0x00800000;

// 1.0 => 0 01111111 00000000000000000000000 => 0x3f800000 = 1065353216
static const int32_t ONE_WORD = 0x3f800000;

// Normalization offset:
static const int32_t NORM_OFFSET = 0x4afb0d;

// High word mask:
static const uint32_t HI_MASK = 0xfffff000;

/**
* Evaluates the binary logarithm (base two) of a single-precision floating-point number.
*
* @param x    input value
* @return     output value
*
* @example
* float out = stdlib_base_log2f( 4.0f );
* // returns 2.0f
*/
float stdlib_base_log2f( const float x ) {
	uint32_t hx;
	int32_t ihx;
	float hfsq;
	int32_t i;
	int32_t k;
	float hi;
	float lo;
	float xc;
	float f;
	float r;
	float y;

	if ( stdlib_base_is_nanf( x ) || x < 0.0f ) {
		return 0.0f / 0.0f; // NaN
	}
	xc = x;
	stdlib_base_float32_to_word( x, &hx );
	ihx = (int32_t)hx;
	k = 0;
	if ( ihx < MIN_NORMAL_WORD ) {
		// Case: x < 2**-126
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
	k += ( ( ihx >> STDLIB_CONSTANT_FLOAT32_NUM_SIGNIFICAND_BITS ) - STDLIB_CONSTANT_FLOAT32_EXPONENT_BIAS );
	ihx &= STDLIB_CONSTANT_FLOAT32_SIGNIFICAND_MASK;
	i = ( ihx + NORM_OFFSET ) & MIN_NORMAL_WORD;

	// Normalize x or x/2...
	stdlib_base_float32_from_word( (uint32_t)( ihx | ( i ^ ONE_WORD ) ), &xc );
	k += ( i >> STDLIB_CONSTANT_FLOAT32_NUM_SIGNIFICAND_BITS );
	y = (float)k;
	f = xc - 1.0f;
	hfsq = 0.5f * f * f;
	r = stdlib_base_kernel_log1pf( f );
	hi = f - hfsq;
	stdlib_base_float32_to_word( hi, &hx );
	stdlib_base_float32_from_word( hx & HI_MASK, &hi );
	lo = ( f - hi ) - hfsq + r;
	return ( (lo+hi)*IVLN2LO ) + ( lo*IVLN2HI ) + ( hi*IVLN2HI ) + y;
}
