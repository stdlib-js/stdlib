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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_sin.c}. The implementation follows the original, but has been modified for JavaScript.
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

#include "stdlib/math/base/special/sin.h"
#include "stdlib/number/float64/base/get_high_word.h"
#include "stdlib/constants/float64/high_word_abs_mask.h"
#include "stdlib/constants/float64/high_word_exponent_mask.h"
#include "stdlib/math/base/special/kernel_cos.h"
#include "stdlib/math/base/special/kernel_sin.h"
#include "stdlib/math/base/special/rempio2.h"
#include <stdint.h>

// High word for PI/4: 0x3fe921fb = 1072243195 => 00111111111010010010000111111011
static const int32_t PIO4_HIGH_WORD = 0x3fe921fb;

// 2^-26 = 1.4901161193847656e-8 => 0011111001010000000000000000000000000000000000000000000000000000 => high word => 00111110010100000000000000000000 => 0x3e500000 = 1045430272
static const int32_t SMALL_HIGH_WORD = 0x3e500000;

/**
* Computes the sine of a number.
*
* ## Method
*
* -   Let \\(S\\), \\(C\\), and \\(T\\) denote the \\(\sin\\), \\(\cos\\), and \\(\tan\\), respectively, on \\(\[-\pi/4, +\pi/4\]\\).
*
* -   Reduce the argument \\(x\\) to \\(y1+y2 = x-k\pi/2\\) in \\(\[-\pi/4, +\pi/4\]\\), and let \\(n = k \mod 4\\).
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
* double y = stdlib_base_sin( 3.141592653589793 / 2.0 );
* // returns ~1.0
*/
double stdlib_base_sin( const double x ) {
	double Y[ 2 ];
	uint32_t uix;
	int32_t ix;
	int32_t n;

	stdlib_base_float64_get_high_word( x, &uix );
	ix = (int32_t)uix;
	ix &= STDLIB_CONSTANT_FLOAT64_HIGH_WORD_ABS_MASK;

	// Case: |x| ~< π/4
	if ( ix <= PIO4_HIGH_WORD ) {
		// Case: |x| ~< 2^-26
		if ( ix < SMALL_HIGH_WORD ) {
			return x;
		}
		return stdlib_base_kernel_sin( x, 0.0 );
	}
	// Case: x is NaN or infinity
	if ( ix >= STDLIB_CONSTANT_FLOAT64_HIGH_WORD_EXPONENT_MASK ) {
		return 0.0 / 0.0; // NaN
	}
	// Argument reduction...
	n = stdlib_base_rempio2( x, &Y[ 0 ], &Y[ 1 ] );
	switch ( n & 3 ) {
	case 0:
		return stdlib_base_kernel_sin( Y[ 0 ], Y[ 1 ] );
	case 1:
		return stdlib_base_kernel_cos( Y[ 0 ], Y[ 1 ] );
	case 2:
		return -stdlib_base_kernel_sin( Y[ 0 ], Y[ 1 ] );
	default:
		return -stdlib_base_kernel_cos( Y[ 0 ], Y[ 1 ] );
	}
}
