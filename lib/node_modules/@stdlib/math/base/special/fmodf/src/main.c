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
* The following copyright and license were part of the original implementation available as part of [Openlibm]{@link https://github.com/JuliaMath/openlibm/blob/master/src/e_fmodf.c}. The implementation follows the original, but has been modified for use in stdlib.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunSoft, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/

#include "stdlib/math/base/special/fmodf.h"
#include "stdlib/number/float32/base/to_word.h"
#include "stdlib/number/float32/base/from_word.h"
#include "stdlib/constants/float32/sign_mask.h"
#include "stdlib/constants/float32/abs_mask.h"
#include "stdlib/constants/float32/exponent_mask.h"
#include "stdlib/constants/float32/exponent_bias.h"
#include "stdlib/constants/float32/min_base2_exponent.h"
#include "stdlib/constants/float32/precision.h"
#include <stdint.h>

static const float ZERO[] = { 0.0f, -0.0f };

/**
* Evaluates the modulus function for single-precision floating-point numbers.
*
* @param x    dividend
* @param y    divisor
* @return     remainder
*
* @example
* float out = stdlib_base_fmodf( 8.9f, 3.0f );
* // returns 2.9f
*/
float stdlib_base_fmodf( const float x, const float y ) {
	uint32_t uhx;
	uint32_t uhy;
	int32_t hx;
	int32_t hy;
	int32_t hz;
	int32_t ix;
	int32_t iy;
	int32_t sx;
	int32_t n;
	int32_t i;
	float xc;

	stdlib_base_float32_to_word( x, &uhx );
	hx = (int32_t)uhx;
	stdlib_base_float32_to_word( y, &uhy );
	hy = (int32_t)uhy;

	// sign of x
	sx = hx & STDLIB_CONSTANT_FLOAT32_SIGN_MASK;

	// |x|
	hx ^= sx;

	// |y|
	hy &= STDLIB_CONSTANT_FLOAT32_ABS_MASK;

	// Purge off exception values
	if ( ( hy == 0 ) || ( hx >= STDLIB_CONSTANT_FLOAT32_EXPONENT_MASK ) || ( hy > STDLIB_CONSTANT_FLOAT32_EXPONENT_MASK ) ) {
		// y=0, x not finite, or y is NaN
		return ( x * y ) / ( x * y );
	}
	if ( hx < hy ) {
		// |x|<|y| return x
		return x;
	}
	if ( hx == hy ) {
		// |x|=|y| return x*0
		return ZERO[ (uint32_t)sx >> 31 ];
	}

	// Determine ix = ilogb(x)
	if ( hx < 0x00800000 ) {
		// subnormal x
		ix = STDLIB_CONSTANT_FLOAT32_MIN_BASE2_EXPONENT;
		for ( i = ( hx << 8 ); i > 0; i <<= 1 ) {
			ix -= 1;
		}
	} else {
		ix = ( hx >> ( STDLIB_CONSTANT_FLOAT32_PRECISION - 1 ) ) - STDLIB_CONSTANT_FLOAT32_EXPONENT_BIAS;
	}

	// determine iy = ilogb(y)
	if ( hy < 0x00800000 ) {
		// subnormal y
		iy = STDLIB_CONSTANT_FLOAT32_MIN_BASE2_EXPONENT;
		for ( i = ( hy << 8 ); i >= 0; i <<= 1 ) {
			iy -= 1;
		}
	} else {
		iy = ( hy >> ( STDLIB_CONSTANT_FLOAT32_PRECISION - 1 ) ) - STDLIB_CONSTANT_FLOAT32_EXPONENT_BIAS;
	}

	// set up {hx,lx}, {hy,ly} and align y to x
	if ( ix >= STDLIB_CONSTANT_FLOAT32_MIN_BASE2_EXPONENT ) {
		hx = 0x00800000 | ( 0x007fffff & hx );
	} else {
		// subnormal x, shift x to normal
		n = STDLIB_CONSTANT_FLOAT32_MIN_BASE2_EXPONENT - ix;
		hx = hx << n;
	}
	if ( iy >= STDLIB_CONSTANT_FLOAT32_MIN_BASE2_EXPONENT ) {
		hy = 0x00800000 | ( 0x007fffff & hy );
	} else {
		// subnormal y, shift y to normal
		n = STDLIB_CONSTANT_FLOAT32_MIN_BASE2_EXPONENT - iy;
		hy = hy << n;
	}

	// Fixed point fmod
	n = ix - iy;
	while ( n-- ) {
		hz = hx - hy;
		if ( hz < 0 ) {
			hx += hx;
		} else {
			if ( hz == 0 ) {
				// return sign(x)*0
				return ZERO[ (uint32_t)sx >> 31 ];
			}
			hx = hz + hz;
		}
	}
	hz = hx - hy;
	if ( hz >= 0 ) {
		hx = hz;
	}

	// Convert back to floating value and restore the sign
	if ( hx == 0 ) {
		// return sign(x)*0
		return ZERO[ (uint32_t)sx >> 31 ];
	}
	while ( hx < 0x00800000 ) {
		// normalize x
		hx += hx;
		iy -= 1;
	}
	if ( iy >= STDLIB_CONSTANT_FLOAT32_MIN_BASE2_EXPONENT ) {
		// normalize output
		hx = ( ( hx - 0x00800000 ) | ( ( iy + STDLIB_CONSTANT_FLOAT32_EXPONENT_BIAS ) << ( STDLIB_CONSTANT_FLOAT32_PRECISION - 1 ) ) );
		stdlib_base_float32_from_word( (uint32_t)( hx | sx ), &xc );
	} else {
		// subnormal output
		n = STDLIB_CONSTANT_FLOAT32_MIN_BASE2_EXPONENT - iy;
		hx >>= n;
		stdlib_base_float32_from_word( (uint32_t)( hx | sx ), &xc );

		// create necessary signal
		xc *= 1.0f;
	}

	// exact output
	return xc;
}
