/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_log10.c}. The implementation follows the original, but has been modified for JavaScript.
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

#include "stdlib/math/base/special/log10.h"
#include "stdlib/number/float64/base/to_words.h"
#include "stdlib/number/float64/base/get_high_word.h"
#include "stdlib/number/float64/base/set_high_word.h"
#include "stdlib/number/float64/base/set_low_word.h"
#include "stdlib/constants/float64/high_word_abs_mask.h"
#include "stdlib/constants/float64/high_word_significand_mask.h"
#include "stdlib/constants/float64/exponent_bias.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/kernel_log1p.h"
#include <stdint.h>

static const double TWO54 = 1.80143985094819840000e+16;     // 0x43500000, 0x00000000
static const double IVLN10HI = 4.34294481878168880939e-01;  // 0x3fdbcb7b, 0x15200000
static const double IVLN10LO = 2.50829467116452752298e-11;  // 0x3dbb9438, 0xca9aadd5
static const double LOG10_2HI = 3.01029995663611771306e-01; // 0x3FD34413, 0x509F6000
static const double LOG10_2LO = 3.69423907715893078616e-13; // 0x3D59FEF3, 0x11F12B36

// 0x7ff00000 = 2146435072 => 0 11111111111 00000000000000000000 => biased exponent: 2047 = 1023+1023 => 2^1023
static const int32_t HIGH_MAX_NORMAL_EXP = 0x7ff00000;

// 0x00100000 = 1048576 => 0 00000000001 00000000000000000000 => biased exponent: 1 = -1022+1023 => 2^-1022
static const int32_t HIGH_MIN_NORMAL_EXP = 0x00100000;

// 0x3ff00000 = 1072693248 => 0 01111111111 00000000000000000000 => biased exponent: 1023 = 0+1023 => 2^0 = 1
static const int32_t HIGH_BIASED_EXP_0 = 0x3ff00000;

/**
* Evaluates the common logarithm (base ten).
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_log10( 4.0 );
* // returns ~0.602
*/
double stdlib_base_log10( const double x ) {
	double valLo;
	double valHi;
	uint32_t hx;
	uint32_t lx;
	int32_t ihx;
	double hfsq;
	double hi;
	int32_t i;
	int32_t k;
	double lo;
	double xc;
	double y2;
	double f;
	double R;
	double w;
	double y;

	if ( stdlib_base_is_nan( x ) || x < 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	xc = x;
	stdlib_base_float64_to_words( xc, &hx, &lx );
	ihx = (int32_t)hx;
	k = 0;
	if ( ihx < HIGH_MIN_NORMAL_EXP ) {
		// Case: x < 2**-1022
		if ( ( ( ihx & STDLIB_CONSTANT_FLOAT64_HIGH_WORD_ABS_MASK ) | lx ) == 0 ) {
			return STDLIB_CONSTANT_FLOAT64_NINF;
		}
		k -= 54;

		// Subnormal number, scale up x:
		xc *= TWO54;
		stdlib_base_float64_get_high_word( xc, &hx );
		ihx = (int32_t)hx;
	}
	if ( ihx >= HIGH_MAX_NORMAL_EXP ) {
		return xc + xc;
	}
	// Case: log(1) = +0
	if ( ihx == HIGH_BIASED_EXP_0 && lx == 0 ) {
		return 0;
	}
	k += ( ( ihx >> 20 ) - STDLIB_CONSTANT_FLOAT64_EXPONENT_BIAS );
	ihx &= STDLIB_CONSTANT_FLOAT64_HIGH_WORD_SIGNIFICAND_MASK;
	i = ( ihx + 0x95f64 ) & HIGH_MIN_NORMAL_EXP;

	// Normalize x or x/2...
	stdlib_base_float64_set_high_word( (uint32_t)( ihx | ( i ^ HIGH_BIASED_EXP_0 ) ), &xc );
	k += ( i >> 20 );
	y = (double)k;
	f = xc - 1.0;
	hfsq = 0.5 * f * f;
	R = stdlib_base_kernel_log1p( f );

	/*
	* Notes:
	*
	* -   `f-hfsq` must (for args near `1`) be evaluated in extra precision to avoid a large cancellation when `x` is near `sqrt(2)` or `1/sqrt(2)`. This is fairly efficient since `f-hfsq` only depends on `f`, so can be evaluated in parallel with `R`. Not combining `hfsq` with `R` also keeps `R` small (though not as small as a true `lo` term would be), so that extra precision is not needed for terms involving `R`.
	* -   When implemented in C, compiler bugs involving extra precision used to break Dekker's theorem for spitting `f-hfsq` as `hi+lo`. These problems are now automatically avoided as a side effect of the optimization of combining the Dekker splitting step with the clear-low-bits step.
	* -   This implementation uses Dekker's theorem to normalize `y+val_hi`, so, when implemented in C, compiler bugs may reappear in some configurations.
	* -   The multi-precision calculations for the multiplications are routine.
	*/
	hi = f - hfsq;
	stdlib_base_float64_set_low_word( 0, &hi );
	lo = ( f - hi ) - hfsq + R;
	valHi = hi * IVLN10HI;
	y2 = y * LOG10_2HI;
	valLo = ( y * LOG10_2LO ) + ( ( lo + hi ) * IVLN10LO ) + ( lo * IVLN10HI );

	/*
	* Note:
	*
	* -   Extra precision for adding `y*log10_2hi` is not strictly needed since there is no very large cancellation near `x = sqrt(2)` or `x = 1/sqrt(2)`, but we do it anyway since it costs little on CPUs with some parallelism and it reduces the error for many args.
	*/
	w = y2 + valHi;
	valLo += ( y2 - w ) + valHi;
	valHi = w;

	return valLo + valHi;
}
