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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://github.com/freebsd/freebsd-src/blob/main/lib/msun/src/s_sinpif.c}. The implementation follows the original, but has been modified according to stdlib conventions.
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

#include "stdlib/math/base/special/sinpif.h"
#include "stdlib/number/float32/base/to_word.h"
#include "stdlib/number/float32/base/from_word.h"
#include "stdlib/math/base/special/kernel_cosf.h"
#include "stdlib/math/base/special/kernel_sinf.h"
#include "stdlib/math/base/special/copysignf.h"
#include "stdlib/constants/float64/pi.h"
#include "stdlib/constants/float32/abs_mask.h"
#include "stdlib/constants/float32/sign_mask.h"
#include "stdlib/constants/float32/exponent_mask.h"
#include "stdlib/constants/float32/significand_mask.h"
#include "stdlib/constants/float32/exponent_bias.h"
#include "stdlib/constants/float32/num_significand_bits.h"
#include <stdint.h>

// 1 => 0 01111111 00000000000000000000000 => 0x3f800000 = 1065353216
static const uint32_t ONE_WORD = 0x3f800000;

// 1/2 = 0.5 => 0 01111110 00000000000000000000000 => 0x3f000000 = 1056964608
static const uint32_t HALF_WORD = 0x3f000000;

// 1/4 = 0.25 => 0 01111101 00000000000000000000000 => 0x3e800000 = 1048576000
static const uint32_t QUARTER_WORD = 0x3e800000;

// 3/4 = 0.75 => 0 01111110 10000000000000000000000 => 0x3f400000 = 1061158912
static const uint32_t THREE_QUARTER_WORD = 0x3f400000;

// 2^-14 = 0.00006103515625 => 0 01110001 00000000000000000000000 => 0x38800000 = 947912704
static const uint32_t SMALL_WORD = 0x38800000;

// 2^23 = 8388608 => 0 10010110 00000000000000000000000 => 0x4b000000 = 1258291200
static const uint32_t LARGE_WORD = 0x4b000000;

// High and low parts of π in single-precision floating-point format:
static const float PI_HIGH = 3.14160156f;    // 0x40491000
static const float PI_LOW = -8.90890988e-6f; // 0xb715777a

// Mask for extracting the high 16 bits of a 32-bit integer:
static const uint32_t HIGH_16_MASK = 0xffff0000;

// Mask for extracting the exponent bits of a 32-bit float:
static const uint32_t FLOAT32_EXPONENT_FIELD_MASK = 0xff;

static const float TWO_23 = 8388608.0f; // 2^23
static const float TWO_N23 = 1.1920928955078125e-7f; // 2^-23

/**
* Computes the value of `sin(πx)` in single-precision floating-point format.
*
* @param x    input value (in radians)
* @return     function value
*
* @example
* float y = stdlib_base_sinpif( 0.5f );
* // returns 1.0f
*/
float stdlib_base_sinpif( const float x ) {
	uint32_t hx;
	uint32_t ix;
	uint32_t j0;
	float hi;
	float lo;
	float ax;
	float fx;
	float s;

	stdlib_base_float32_to_word( x, &hx );
	ix = hx & STDLIB_CONSTANT_FLOAT32_ABS_MASK;
	stdlib_base_float32_from_word( ix, &ax );

	// Case: |x| < 1
	if ( ix < ONE_WORD ) {
		// Case: |x| < 0.25
		if ( ix < QUARTER_WORD ) {
			// Case: |x| < 2^-14
			if ( ix < SMALL_WORD ) {
				if ( x == 0.0f ) {
					return x;
				}
				stdlib_base_float32_from_word( hx & HIGH_16_MASK, &hi );
				hi = hi * TWO_23;
				lo = ( x * TWO_23 ) - hi;
				s = ( PI_LOW+PI_HIGH )*lo + ( PI_LOW*hi ) + ( PI_HIGH*hi );
				return s * TWO_N23;
			}
			s = stdlib_base_kernel_sinf( STDLIB_CONSTANT_FLOAT64_PI * (double)ax );
			return ( hx & STDLIB_CONSTANT_FLOAT32_SIGN_MASK ) ? -s : s;
		}
		// Case: |x| < 0.5
		if ( ix < HALF_WORD ) {
			s = stdlib_base_kernel_cosf( STDLIB_CONSTANT_FLOAT64_PI * (double)(0.5f - ax) );
		} else if ( ix < THREE_QUARTER_WORD ) { // Case: |x| < 0.75
			s = stdlib_base_kernel_cosf( STDLIB_CONSTANT_FLOAT64_PI * (double)(ax - 0.5f) );
		} else {
			s = stdlib_base_kernel_sinf( STDLIB_CONSTANT_FLOAT64_PI * (double)(1.0f - ax) );
		}
		return ( hx & STDLIB_CONSTANT_FLOAT32_SIGN_MASK ) ? -s : s;
	}
	// Case: 1 <= |x| < 2^23
	if ( ix < LARGE_WORD ) {
		// Fast floor by bitwise manipulation:
		j0 = ( ( ix >> STDLIB_CONSTANT_FLOAT32_NUM_SIGNIFICAND_BITS ) & FLOAT32_EXPONENT_FIELD_MASK ) - STDLIB_CONSTANT_FLOAT32_EXPONENT_BIAS;
		ix &= ~( STDLIB_CONSTANT_FLOAT32_SIGNIFICAND_MASK >> j0 );
		stdlib_base_float32_from_word( ix, &fx );

		ax -= fx;
		stdlib_base_float32_to_word( ax, &ix );
		if ( ix == 0 ) {
			s = 0.0f;
		} else {
			// Case: |x| < 0.5
			if ( ix < HALF_WORD ) {
				// Case: |x| < 0.25
				if ( ix < QUARTER_WORD ) {
					s = stdlib_base_kernel_sinf( STDLIB_CONSTANT_FLOAT64_PI * (double)ax );
				} else {
					s = stdlib_base_kernel_cosf( STDLIB_CONSTANT_FLOAT64_PI * (double)(0.5f - ax) );
				}
			} else {
				// Case: |x| < 0.75
				if ( ix < THREE_QUARTER_WORD ) {
					s = stdlib_base_kernel_cosf( STDLIB_CONSTANT_FLOAT64_PI * (double)(ax - 0.5f) );
				} else {
					s = stdlib_base_kernel_sinf( STDLIB_CONSTANT_FLOAT64_PI * (double)(1.0f - ax) );
				}
			}
			j0 = (uint32_t)fx;
			s = ( j0 & 1 ) ? -s : s;
		}
		return ( hx & STDLIB_CONSTANT_FLOAT32_SIGN_MASK ) ? -s : s;
	}
	// Case: x is NaN or infinity
	if ( ix >= STDLIB_CONSTANT_FLOAT32_EXPONENT_MASK ) {
		return 0.0f / 0.0f; // NaN
	}
	// Case: |x| >= 2^23 is always an integer, so return +-0.
	return stdlib_base_copysignf( 0.0f, x );
}
