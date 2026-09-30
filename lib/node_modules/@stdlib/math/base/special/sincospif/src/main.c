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
* The following copyright, license, and disclaimer were part of the original implementation available as part of FreeBSD [s_sinpif.c]{@link https://github.com/freebsd/freebsd-src/blob/main/lib/msun/src/s_sinpif.c} and [s_cospif.c]{@link https://github.com/freebsd/freebsd-src/blob/main/lib/msun/src/s_cospif.c}. The implementation follows the originals, but has been modified according to stdlib conventions and combined into a single function.
*
* ```text
* Copyright (c) 2017,2023 Steven G. Kargl
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions
* are met:
* 1. Redistributions of source code must retain the above copyright
*    notice unmodified, this list of conditions, and the following
*    disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright
*    notice, this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
*
* THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
* IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
* OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
* IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
* INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
* NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
* THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*/

#include "stdlib/math/base/special/sincospif.h"
#include "stdlib/math/base/special/kernel_sincosf.h"
#include "stdlib/math/base/special/copysignf.h"
#include "stdlib/number/float32/base/to_word.h"
#include "stdlib/number/float32/base/from_word.h"
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
static const uint32_t TWO_23_WORD = 0x4b000000;

// 2^24 = 16777216 => 0 10010111 00000000000000000000000 => 0x4b800000 = 1266679808
static const uint32_t TWO_24_WORD = 0x4b800000;

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
* Simultaneously computes the sine and cosine of a single-precision floating-point number times π.
*
* ## Notes
*
* -   The function computes `sin(πx)` and `cos(πx)` more accurately than the obvious approach, especially for large `x`.
*
* @param x         input value
* @param sine      destination to store the sine
* @param cosine    destination to store the cosine
*
* @example
* float x = 0.0f;
*
* float cosine;
* float sine;
* stdlib_base_sincospif( x, &sine, &cosine );
*/
void stdlib_base_sincospif( const float x, float* sine, float* cosine ) {
	uint32_t hx;
	uint32_t ix;
	uint32_t j0;
	float ks;
	float kc;
	float hi;
	float lo;
	float ax;
	float fx;
	float s;
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
					*sine = x;
					*cosine = 1.0f;
					return;
				}
				stdlib_base_kernel_sincosf( STDLIB_CONSTANT_FLOAT64_PI * (double)ax, &ks, &kc );

				// Compute sin(πx) via argument scaling in order to avoid a loss of precision (mirrors `sinpif`):
				stdlib_base_float32_from_word( hx & HIGH_16_MASK, &hi );
				hi *= TWO_23;
				lo = ( x * TWO_23 ) - hi;
				s = ( ( PI_LOW + PI_HIGH ) * lo ) + ( PI_LOW * hi ) + ( PI_HIGH * hi );
				*sine = s * TWO_N23;
				*cosine = kc;
				return;
			}
			stdlib_base_kernel_sincosf( STDLIB_CONSTANT_FLOAT64_PI * (double)ax, &ks, &kc );
			*sine = ( hx & STDLIB_CONSTANT_FLOAT32_SIGN_MASK ) ? -ks : ks;
			*cosine = kc;
			return;
		}
		// Case: |x| < 0.5
		if ( ix < HALF_WORD ) {
			stdlib_base_kernel_sincosf( STDLIB_CONSTANT_FLOAT64_PI * (double)( 0.5f - ax ), &ks, &kc );
			s = kc;
			c = ks;
		} else if ( ix == HALF_WORD ) { // Case: |x| == 0.5, in which case sin(πx) is ±1 and cos(πx) is +0
			s = 1.0f;
			c = 0.0f;
		} else if ( ix < THREE_QUARTER_WORD ) { // Case: |x| < 0.75
			stdlib_base_kernel_sincosf( STDLIB_CONSTANT_FLOAT64_PI * (double)( ax - 0.5f ), &ks, &kc );
			s = kc;
			c = -ks;
		} else {
			stdlib_base_kernel_sincosf( STDLIB_CONSTANT_FLOAT64_PI * (double)( 1.0f - ax ), &ks, &kc );
			s = ks;
			c = -kc;
		}
		*sine = ( hx & STDLIB_CONSTANT_FLOAT32_SIGN_MASK ) ? -s : s;
		*cosine = c;
		return;
	}
	// Case: 1 <= |x| < 2^23
	if ( ix < TWO_23_WORD ) {
		// Fast floor by bitwise manipulation:
		j0 = ( ( ix >> STDLIB_CONSTANT_FLOAT32_NUM_SIGNIFICAND_BITS ) & FLOAT32_EXPONENT_FIELD_MASK ) - STDLIB_CONSTANT_FLOAT32_EXPONENT_BIAS;
		ix &= ~( STDLIB_CONSTANT_FLOAT32_SIGNIFICAND_MASK >> j0 );
		stdlib_base_float32_from_word( ix, &fx );

		ax -= fx;
		stdlib_base_float32_to_word( ax, &ix );

		j0 = (uint32_t)fx;

		// Case: x is an integer, in which case sin(πx) is ±0 and cos(πx) is ±1...
		if ( ix == 0 ) {
			*sine = stdlib_base_copysignf( 0.0f, x );
			*cosine = ( j0 & 1 ) ? -1.0f : 1.0f;
			return;
		}
		// Case: the fractional part of |x| is 0.5, in which case sin(πx) is ±1 and cos(πx) is +0...
		if ( ix == HALF_WORD ) {
			s = ( j0 & 1 ) ? -1.0f : 1.0f;
			*sine = ( hx & STDLIB_CONSTANT_FLOAT32_SIGN_MASK ) ? -s : s;
			*cosine = 0.0f;
			return;
		}
		// Case: |x| < 0.5
		if ( ix < HALF_WORD ) {
			// Case: |x| < 0.25
			if ( ix < QUARTER_WORD ) {
				stdlib_base_kernel_sincosf( STDLIB_CONSTANT_FLOAT64_PI * (double)ax, &ks, &kc );
				s = ks;
				c = kc;
			} else {
				stdlib_base_kernel_sincosf( STDLIB_CONSTANT_FLOAT64_PI * (double)( 0.5f - ax ), &ks, &kc );
				s = kc;
				c = ks;
			}
		} else if ( ix < THREE_QUARTER_WORD ) { // Case: |x| < 0.75
			stdlib_base_kernel_sincosf( STDLIB_CONSTANT_FLOAT64_PI * (double)( ax - 0.5f ), &ks, &kc );
			s = kc;
			c = -ks;
		} else {
			stdlib_base_kernel_sincosf( STDLIB_CONSTANT_FLOAT64_PI * (double)( 1.0f - ax ), &ks, &kc );
			s = ks;
			c = -kc;
		}
		if ( j0 & 1 ) {
			s = -s;
			c = -c;
		}
		*sine = ( hx & STDLIB_CONSTANT_FLOAT32_SIGN_MASK ) ? -s : s;
		*cosine = c;
		return;
	}
	// Case: x is NaN or infinity
	if ( ix >= STDLIB_CONSTANT_FLOAT32_EXPONENT_MASK ) {
		*sine = 0.0f / 0.0f;   // NaN
		*cosine = 0.0f / 0.0f; // NaN
		return;
	}
	// Case: 2^23 <= |x| < 2^24, in which case x is an integer whose parity is given by the lowest bit of the word...
	if ( ix < TWO_24_WORD ) {
		*sine = stdlib_base_copysignf( 0.0f, x );
		*cosine = ( ix & 1 ) ? -1.0f : 1.0f;
		return;
	}
	// Case: |x| >= 2^24 is always an even integer, so sin(πx) is ±0 and cos(πx) is 1...
	*sine = stdlib_base_copysignf( 0.0f, x );
	*cosine = 1.0f;
	return;
}
