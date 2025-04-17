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
* The following copyright and license were part of the original implementation available as part of [Openlibm]{@link https://github.com/JuliaMath/openlibm/blob/master/src/e_fmod.c}. The implementation follows the original, but has been modified for JavaScript.
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

#include "stdlib/math/base/special/fmod.h"
#include "stdlib/number/float64/base/to_words.h"
#include "stdlib/number/float64/base/from_words.h"
#include "stdlib/constants/float64/high_word_abs_mask.h"
#include "stdlib/constants/float64/high_word_sign_mask.h"
#include "stdlib/constants/float64/high_word_exponent_mask.h"
#include "stdlib/constants/float64/exponent_bias.h"
#include "stdlib/constants/float64/high_word_significand_mask.h"
#include "stdlib/constants/float64/min_base2_exponent.h"
#include <stdint.h>

/**
* Evaluates the modulus function.
*
* @param x    dividend
* @param y    divisor
* @return     remainder
*
* @example
* double out = stdlib_base_fmod( 8.9, 3.0 );
* // returns 2.9
*/
double stdlib_base_fmod( const double x, const double y ) {
	const double ZERO[] = { 0.0, -0.0 };
	uint32_t uhx;
	uint32_t uhy;
	uint32_t lx;
	uint32_t ly;
	uint32_t lz;
	int32_t hx;
	int32_t hy;
	int32_t hz;
	int32_t ix;
	int32_t iy;
	int32_t sx;
	int32_t n;
	int32_t i;
	double xc;

	stdlib_base_float64_to_words( x, &uhx, &lx );
	hx = (int32_t)uhx;
	stdlib_base_float64_to_words( y, &uhy, &ly );
	hy = (int32_t)uhy;

	// sign of x
	sx = hx & STDLIB_CONSTANT_FLOAT64_HIGH_WORD_SIGN_MASK;

	// |x|
	hx ^= sx;

	// |y|
	hy &= STDLIB_CONSTANT_FLOAT64_HIGH_WORD_ABS_MASK;

	// Purge off exception values
	if ( ( hy | ly ) == 0 || ( hx >= STDLIB_CONSTANT_FLOAT64_HIGH_WORD_EXPONENT_MASK ) || ( ( hy | ( ( ly | -ly ) >> 31 ) ) > STDLIB_CONSTANT_FLOAT64_HIGH_WORD_EXPONENT_MASK ) ) {
		// y=0, x not finite, or y is NaN
		return ( x * y ) / ( x * y );
	}
	if ( hx <= hy ) {
		if ( ( hx < hy ) || ( lx < ly ) ) {
			// |x|<|y| return x
			return x;
		}
		if ( lx == ly ) {
			// |x|=|y| return x*0
			return ZERO[ (uint32_t)sx >> 31 ];
		}
	}

	// Determine ix = ilogb(x)
	if ( hx < 0x00100000 ) {
		// subnormal x
		if ( hx == 0 ) {
			ix = -1043;
			for ( i = lx; i > 0; i <<= 1 ) {
				ix -=1;
			}
		} else {
			ix = STDLIB_CONSTANT_FLOAT64_MIN_BASE2_EXPONENT;
			for ( i = ( hx << 11 ); i > 0; i <<= 1 ) {
				ix -=1;
			}
		}
	} else {
		ix = ( hx >> 20 ) - STDLIB_CONSTANT_FLOAT64_EXPONENT_BIAS;
	}

	// determine iy = ilogb(y)
	if ( hy < 0x00100000 ) {
		// subnormal y
		if ( hy == 0 ) {
			iy = -1043;
			for ( i = ly; i > 0; i <<= 1 ) {
				iy -=1;
			}
		} else {
			iy = STDLIB_CONSTANT_FLOAT64_MIN_BASE2_EXPONENT;
			for ( i = ( hy << 11 ); i > 0; i <<= 1 ) {
				iy -=1;
			}
		}
	} else {
		iy = ( hy >> 20 ) - STDLIB_CONSTANT_FLOAT64_EXPONENT_BIAS;
	}

	// set up {hx,lx}, {hy,ly} and align y to x
	if ( ix >= STDLIB_CONSTANT_FLOAT64_MIN_BASE2_EXPONENT ) {
		hx = 0x00100000 | ( STDLIB_CONSTANT_FLOAT64_HIGH_WORD_SIGNIFICAND_MASK & hx );
	} else {
		// subnormal x, shift x to normal
		n = STDLIB_CONSTANT_FLOAT64_MIN_BASE2_EXPONENT - ix;
		if ( n <= 31 ) {
			hx = ( (uint32_t)hx << n ) | ( lx >> ( 32 - n ) );
			lx <<= n;
		} else {
			hx = lx << ( n - 32 );
			lx = 0;
		}
	}
	if ( iy >= STDLIB_CONSTANT_FLOAT64_MIN_BASE2_EXPONENT ) {
		hy = 0x00100000 | ( STDLIB_CONSTANT_FLOAT64_HIGH_WORD_SIGNIFICAND_MASK & hy );
	} else {
		// subnormal y, shift y to normal
		n = STDLIB_CONSTANT_FLOAT64_MIN_BASE2_EXPONENT - iy;
		if ( n <= 31 ) {
			hy = ( (uint32_t)hy << n ) | ( ly >> ( 32 - n ) );
			ly <<= n;
		} else {
			hy = ly << ( n - 32 );
			ly = 0;
		}
	}
	n = ix - iy;
	while ( n-- ) {
		hz = hx - hy;
		lz = lx - ly;
		if ( lx < ly ) {
			hz -= 1;
		}
		if ( hz < 0 ) {
			hx = hx + hx + ( lx >> 31 );
			lx += lx;
		} else {
			if ( ( hz | lz ) == 0 ) {
				// return sign(x)*0
				return ZERO[ (uint32_t)sx >> 31 ];
			}
			hx = hz + hz + ( lz >> 31 );
			lx = lz + lz;
		}
	}
	hz = hx - hy;
	lz = lx - ly;
	if ( lx < ly ) {
		hz -= 1;
	}
	if ( hz >= 0 ) {
		hx = hz;
		lx = lz;
	}

	// Convert back to floating value and restore the sign
	if ( ( hx | lx ) == 0 ) {
		// return sign(x)*0
		return ZERO[ (uint32_t)sx >> 31 ];
	}
	while ( hx < 0x00100000 ) {
		// normalize x
		hx = hx + hx + ( lx >> 31 );
		lx += lx;
		iy -= 1;
	}
	if ( iy >= STDLIB_CONSTANT_FLOAT64_MIN_BASE2_EXPONENT ) {
		// normalize output
		hx = ( ( hx - 0x00100000 ) | ( ( iy + STDLIB_CONSTANT_FLOAT64_EXPONENT_BIAS ) << 20 ) );
		stdlib_base_float64_from_words( (uint32_t)( hx | sx ), lx, &xc );
	} else {
		// subnormal output
		n = STDLIB_CONSTANT_FLOAT64_MIN_BASE2_EXPONENT - iy;
		if ( n <= 20 ) {
			lx = ( lx >> n ) | ( (uint32_t)hx << ( 32 - n ) );
			hx >>= n;
		} else if ( n <= 31 ) {
			lx = ( hx << ( 32 - n ) ) | ( lx >> n );
			hx = sx;
		} else {
			lx = hx >> ( n - 32 );
			hx = sx;
		}
		stdlib_base_float64_from_words( (uint32_t)( hx | sx ), lx, &xc );

		// create necessary signal
		xc *= 1.0;
	}

	// exact output
	return xc;
}
