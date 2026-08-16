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

#include "stdlib/math/base/special/cospif.h"
#include "stdlib/number/float32/base/to_word.h"
#include "stdlib/number/float32/base/from_word.h"
#include "stdlib/math/base/special/kernel_cosf.h"
#include "stdlib/math/base/special/kernel_sinf.h"
#include "stdlib/constants/float64/pi.h"
#include "stdlib/constants/float32/abs_mask.h"
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
static const uint32_t TWO_23_WORD = 0x4b000000;

// 2^24 = 16777216 => 0 00000010 00000000000000000000000 => 0x4b800000 = 1266679808
static const uint32_t TWO_24_WORD = 0x4b800000;

// Mask for extracting the exponent bits of a 32-bit float:
static const uint32_t FLOAT32_EXPONENT_FIELD_MASK = 0xff;

/**
* Computes the value of `cos(πx)` in single-precision floating-point format.
*
* ## Notes
*
* -   The function computes `cos(πx)` more accurately than the obvious approach, especially for large `x`.
*
* @param x    input value
* @return     function value
*
* @example
* float y = stdlib_base_cospif( 0.5f );
* // returns 0.0f
*/
float stdlib_base_cospif( const float x ) {
	uint32_t hx;
	uint32_t ix;
	uint32_t j0;
	float ax;
	float fx;
	float c;

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
					return 1.0f;
				}
			}
			return stdlib_base_kernel_cosf( STDLIB_CONSTANT_FLOAT64_PI * (double)x );
		}
		// Case: |x| < 0.5
		if ( ix < HALF_WORD ) {
			c = stdlib_base_kernel_sinf( STDLIB_CONSTANT_FLOAT64_PI * (double)(0.5f - ax) );
		} else if ( ix < THREE_QUARTER_WORD ) { // Case: |x| < 0.75
			if ( ix == HALF_WORD ) {
				return 0.0f;
			}
			c = -stdlib_base_kernel_sinf( STDLIB_CONSTANT_FLOAT64_PI * (double)(ax - 0.5f) );
		} else {
			c = -stdlib_base_kernel_cosf( STDLIB_CONSTANT_FLOAT64_PI * (double)(1.0f - ax) );
		}
		return c;
	}
	// Case: 1 <= |x| < 2^23
	if ( ix < TWO_23_WORD ) {
		// Fast floor by bitwise manipulation:
		j0 = ( ( ix >> STDLIB_CONSTANT_FLOAT32_NUM_SIGNIFICAND_BITS ) & FLOAT32_EXPONENT_FIELD_MASK ) - STDLIB_CONSTANT_FLOAT32_EXPONENT_BIAS;
		ix &= ~( STDLIB_CONSTANT_FLOAT32_SIGNIFICAND_MASK >> j0 );
		stdlib_base_float32_from_word( ix, &fx );

		ax -= fx;
		stdlib_base_float32_to_word( ax, &ix );

		// Case: |x| < 0.5
		if ( ix < HALF_WORD ) {
			// Case: |x| < 0.25
			if ( ix < QUARTER_WORD ) {
				c = ( ix == 0 ) ? 1.0f : stdlib_base_kernel_cosf( STDLIB_CONSTANT_FLOAT64_PI * (double)ax );
			} else {
				c = stdlib_base_kernel_sinf( STDLIB_CONSTANT_FLOAT64_PI * (double)(0.5f - ax) );
			}
		} else {
			// Case: |x| < 0.75
			if ( ix < THREE_QUARTER_WORD ) {
				if ( ix == HALF_WORD ) {
					return 0.0f;
				}
				c = -stdlib_base_kernel_sinf( STDLIB_CONSTANT_FLOAT64_PI * (double)(ax - 0.5f) );
			} else {
				c = -stdlib_base_kernel_cosf( STDLIB_CONSTANT_FLOAT64_PI * (double)(1.0f - ax) );
			}
		}
		j0 = (uint32_t)fx;
		return ( j0 & 1 ) ? -c : c;
	}
	// Case: x is NaN or infinity
	if ( ix >= STDLIB_CONSTANT_FLOAT32_EXPONENT_MASK ) {
		return 0.0f / 0.0f; // NaN
	}
	// Case: 2^23 <= |x| < 2^24 - determine if x is an even or odd integer to return +1 or -1.
	if ( ix < TWO_24_WORD ) {
		return ( ix & 1 ) ? -1.0f : 1.0f;
	}
	// Case: |x| >= 2^24 is always an even integer, so return +1.
	return 1.0f;
}
