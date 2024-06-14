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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_tan.c}. The implementation follows the original, but has been modified for JavaScript.
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

#include "stdlib/math/base/special/tan.h"
#include "stdlib/number/float64/base/get_high_word.h"
#include "stdlib/constants/float64/high_word_abs_mask.h"
#include "stdlib/constants/float64/high_word_exponent_mask.h"
#include "stdlib/math/base/special/kernel_tan.h"
#include "stdlib/math/base/special/rempio2.h"
#include <stdint.h>

// High word for pi/4: 0x3fe921fb => 00111111111010010010000111111011
static const int32_t HIGH_WORD_PIO4 = 0x3fe921fb;

// High word for a small value: 2^-27 = 7.450580596923828e-9 => high word => 0x3e400000 => 00111110010000000000000000000000
static const int32_t HIGH_WORD_TWO_NEG_27 = 0x3e400000;

/**
* Evaluates the tangent of a number.
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
*     | 0 |    S   |    C   |   T    |
*     | 1 |    C   |   -S   |  -1/T  |
*     | 2 |   -S   |   -C   |   T    |
*     | 3 |   -C   |    S   |  -1/T  |
*
* @param x    input value (in radians)
* @return     tangent
*
* @example
* double y = stdlib_base_tan( -3.141592653589793 / 4.0 );
* // returns ~-1.0
*/
double stdlib_base_tan( const double x ) {
	double Y[ 2 ];
	uint32_t uix;
	int32_t ix;
	int32_t n;

	stdlib_base_float64_get_high_word( x, &uix );
	ix = (int32_t)uix;
	ix &= STDLIB_CONSTANT_FLOAT64_HIGH_WORD_ABS_MASK;

	// Case: |x| ~< π/4
	if ( ix <= HIGH_WORD_PIO4 ) {
		// Case: |x| < 2**-27
		if ( ix < HIGH_WORD_TWO_NEG_27 ) {
			return x;
		}
		return stdlib_base_kernel_tan( x, 0.0, 1 );
	}
	// Case: tan(Inf or NaN) is NaN
	if ( ix >= STDLIB_CONSTANT_FLOAT64_HIGH_WORD_EXPONENT_MASK ) {
		return 0.0 / 0.0; // NaN
	}
	// Argument reduction...
	n = stdlib_base_rempio2( x, &Y[ 0 ], &Y[ 1 ] );
	return stdlib_base_kernel_tan( Y[ 0 ], Y[ 1 ], 1 - ( ( n & 1 ) << 1 ) );
}
