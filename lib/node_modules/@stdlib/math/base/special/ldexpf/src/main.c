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
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_scalbnf.c?view=markup}. The implementation follows the original, but has been modified for use in stdlib.
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

#include "stdlib/math/base/special/ldexpf.h"
#include "stdlib/number/float32/base/to_word.h"
#include "stdlib/number/float32/base/from_word.h"
#include "stdlib/math/base/special/copysignf.h"
#include "stdlib/constants/float32/pinf.h"
#include "stdlib/constants/float32/exponent_mask.h"
#include "stdlib/constants/float32/precision.h"
#include "stdlib/constants/float32/abs_mask.h"
#include <stdint.h>

static const float TWO25 = 33554432.0f; // 0x4c000000
static const float TWOM25 = 2.9802322387695312e-8f; // 0x33000000
static const int32_t FLOAT32_SIGNIFICAND_MASK_WITH_SIGN = 0x807fffff; // 1 00000000 11111111111111111111111
static const int32_t ALL_ONES = 0xff; // 0xff = 255 => 11111111

/**
* Multiplies a single-precision floating-point number by an integer power of two.
*
* @param frac    input value
* @param exp     integer power of two
* @return        product
*
* @example
* float out = stdlib_base_ldexpf( 0.5f, 3 ); // 0.5 * 2^3 = 0.5 * 8
* // returns 4.0f
*/
float stdlib_base_ldexpf( const float frac, const int32_t exp ) {
	uint32_t uix;
	float fracc;
	int32_t ix;
	int32_t k;

	stdlib_base_float32_to_word( frac, &uix );
	ix = (int32_t)uix;

	// Extract exponent:
	k = ( ix & STDLIB_CONSTANT_FLOAT32_EXPONENT_MASK ) >> ( STDLIB_CONSTANT_FLOAT32_PRECISION - 1 );

	// 0 or subnormal frac:
	fracc = frac;
	if ( k == 0 ) {
		if ( ( ix & STDLIB_CONSTANT_FLOAT32_ABS_MASK ) == 0 ) {
			// +-0:
			return frac;
		}
		fracc = frac * TWO25;
		stdlib_base_float32_to_word( fracc, &uix );
		ix = (int32_t)uix;
		k = ( ( ix & STDLIB_CONSTANT_FLOAT32_EXPONENT_MASK ) >> ( STDLIB_CONSTANT_FLOAT32_PRECISION - 1 ) ) - 25;
		if ( exp < -50000 ) {
			// Underflow:
			return 0.0;
		}
	}

	// NaN or Inf:
	if ( k == ALL_ONES ) {
		return fracc + fracc;
	}
	k += exp;
	if ( k > ALL_ONES - 1 ) {
		// Overflow:
		return stdlib_base_copysignf( STDLIB_CONSTANT_FLOAT32_PINF, fracc );
	}
	if ( k > 0 ) {
		// Normal result:
		stdlib_base_float32_from_word( (uint32_t)( ( ix & FLOAT32_SIGNIFICAND_MASK_WITH_SIGN ) | ( k << ( STDLIB_CONSTANT_FLOAT32_PRECISION - 1 ) ) ), &fracc );
		return fracc;
	}
	if ( k <= -25 ) {
		if ( exp > 50000 ) {
			// In case of integer overflow in n + k:
			return stdlib_base_copysignf( STDLIB_CONSTANT_FLOAT32_PINF, fracc );
		}

		// Underflow:
		return stdlib_base_copysignf( 0.0f, fracc );
	}

	// Subnormal result:
	k += 25;
	stdlib_base_float32_from_word( (uint32_t)( ( ix & FLOAT32_SIGNIFICAND_MASK_WITH_SIGN ) | ( k << ( STDLIB_CONSTANT_FLOAT32_PRECISION - 1 ) ) ), &fracc );
	return fracc * TWOM25;
}
