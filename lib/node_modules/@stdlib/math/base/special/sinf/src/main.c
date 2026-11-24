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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_sinf.c}. The implementation follows the original, but has been modified according to stdlib conventions.
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

#include "stdlib/math/base/special/sinf.h"
#include "stdlib/math/base/special/kernel_cosf.h"
#include "stdlib/math/base/special/kernel_sinf.h"
#include "stdlib/math/base/special/rempio2f.h"
#include "stdlib/constants/float64/half_pi.h"
#include "stdlib/constants/float32/abs_mask.h"
#include "stdlib/constants/float32/exponent_mask.h"
#include "stdlib/number/float32/base/to_word.h"
#include <stdint.h>

// PI/4 = 0.7853981256484985 => 0 01111110 10010010000111111011010 => 0x3f490fda = 1061752768
static const int32_t PIO4_WORD = 0x3f490fda;

// 3*PI/4 = 2.356194257736206 => 0 10000000 00101101100101111100011 => 0x4016cbe3 = 1075235811
static const int32_t THREE_PIO4_WORD = 0x4016cbe3;

// 5*PI/4 = 3.9269907474517822 => 0 10000000 11110110101001111010001 => 0x407b53d1 = 1081824209
static const int32_t FIVE_PIO4_WORD = 0x407b53d1;

// 7*PI/4 = 5.497786998748779 => 0 10000001 01011111110110111011111 => 0x40afeddf = 1085271519
static const int32_t SEVEN_PIO4_WORD = 0x40afeddf;

// 9*PI/4 = 7.068583011627197 => 0 10000001 11000100011000111010101 => 0x40e231d5 = 1088565717
static const int32_t NINE_PIO4_WORD = 0x40e231d5;

// 2^-12 = 0.000244140625 => 0 01110011 00000000000000000000000 => 0x39800000 = 964689920
static const int32_t SMALL_WORD = 0x39800000;

// Small multiples of PI/2 in double-precision floating-point format:
static const double PIO2 = STDLIB_CONSTANT_FLOAT64_HALF_PI;             // 0x3FF921FB, 0x54442D18
static const double PI = 2.0 * STDLIB_CONSTANT_FLOAT64_HALF_PI;         // 0x400921FB, 0x54442D18
static const double THREE_PIO2 = 3.0 * STDLIB_CONSTANT_FLOAT64_HALF_PI; // 0x4012D97C, 0x7F3321D2
static const double TWO_PI = 4.0 * STDLIB_CONSTANT_FLOAT64_HALF_PI;     // 0x401921FB, 0x54442D18

/**
* Computes the sine of a single-precision floating-point number (in radians).
*
* ## Method
*
* -   Let \\(S\\), \\(C\\), and \\(T\\) denote the \\(\sin\\), \\(\cos\\), and \\(\tan\\), respectively, on \\(\[-\pi/4, +\pi/4\]\\).
*
* -   Reduce the argument \\(x\\) to \\(y = x-k\pi/2\\) in \\(\[-\pi/4, +\pi/4\]\\), and let \\(n = k \mod 4\\).
*
* -   We have
*
*     | n | sin(x) | cos(x) | tan(x) |
*     | - | ------ | ------ | ------ |
*     | 0 |   S    |   C    |    T   |
*     | 1 |   C    |  -S    |  -1/T  |
*     | 2 |  -S    |  -C    |    T   |
*     | 3 |  -C    |   S    |  -1/T  |
*
* @param x    input value (in radians)
* @return     sine
*
* @example
* float y = stdlib_base_sinf( 3.141592653589793f / 2.0f );
* // returns 1.0f
*/
float stdlib_base_sinf( const float x ) {
	uint32_t uix;
	int32_t ix;
	int32_t n;
	double y;

	stdlib_base_float32_to_word( x, &uix );
	ix = (int32_t)uix;
	ix &= STDLIB_CONSTANT_FLOAT32_ABS_MASK;

	// Case: |x| ~<= π/4
	if ( ix <= PIO4_WORD ) {
		// Case: |x| < 2^-12
		if ( ix < SMALL_WORD ) {
			return x;
		}
		return stdlib_base_kernel_sinf( (double)x );
	}
	// Case: |x| ~<= 5π/4
	if ( ix <= FIVE_PIO4_WORD ) {
		// Case: |x| ~<= 3π/4
		if ( ix <= THREE_PIO4_WORD ) {
			if ( (int32_t)uix > 0 ) {
				return stdlib_base_kernel_cosf( (double)x - PIO2 );
			}
			return -stdlib_base_kernel_cosf( (double)x + PIO2 );
		}
		if ( (int32_t)uix > 0 ) {
			return stdlib_base_kernel_sinf( PI - (double)x );
		}
		return -stdlib_base_kernel_sinf( PI + (double)x );
	}
	// Case: |x| ~<= 9π/4
	if ( ix <= NINE_PIO4_WORD ) {
		// Case: |x| ~<= 7π/4
		if ( ix <= SEVEN_PIO4_WORD ) {
			if ( (int32_t)uix > 0 ) {
				return -stdlib_base_kernel_cosf( (double)x - THREE_PIO2 );
			}
			return stdlib_base_kernel_cosf( (double)x + THREE_PIO2 );
		}
		if ( (int32_t)uix > 0 ) {
			return stdlib_base_kernel_sinf( (double)x - TWO_PI );
		}
		return stdlib_base_kernel_sinf( (double)x + TWO_PI );
	}
	// Case: x is NaN or infinity
	if ( ix >= STDLIB_CONSTANT_FLOAT32_EXPONENT_MASK ) {
		return 0.0f / 0.0f; // NaN
	}
	// Argument reduction...
	n = stdlib_base_rempio2f( x, &y );
	switch ( n & 3 ) {
	case 0:
		return stdlib_base_kernel_sinf( y );
	case 1:
		return stdlib_base_kernel_cosf( y );
	case 2:
		return -stdlib_base_kernel_sinf( y );
	default:
		return -stdlib_base_kernel_cosf( y );
	}
}
