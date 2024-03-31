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
*/

#include "stdlib/math/base/special/log2.h"
#include "stdlib/number/float64/base/get_high_word.h"
#include "stdlib/number/float64/base/set_high_word.h"
#include "stdlib/number/float64/base/set_low_word.h"
#include "stdlib/number/float64/base/to_words.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/high_word_abs_mask.h"
#include "stdlib/constants/float64/high_word_significand_mask.h"
#include "stdlib/constants/float64/exponent_bias.h"
#include "stdlib/constants/float64/ninf.h"
#include <stdint.h>

// 0x000fffff = 1048575 => 0 00000000000 11111111111111111111
static const int32_t HIGH_SIGNIFICAND_MASK = 0x000fffff;

// 1/3
static const double ONE_THIRD = 0.33333333333333333;

static const double TWO54 = 1.80143985094819840000e+16;   // 0x43500000, 0x00000000

static const double IVLN2HI = 1.44269504072144627571e+00; // 0x3ff71547, 0x65200000

static const double IVLN2LO = 1.67517131648865118353e-10; // 0x3de705fc, 0x2eefa200

// 0x7ff00000 = 2146435072 => 0 11111111111 00000000000000000000 => biased exponent: 2047 = 1023+1023 => 2^1023
static const int32_t HIGH_MAX_NORMAL_EXP = 0x7ff00000;

// 0x00100000 = 1048576 => 0 00000000001 00000000000000000000 => biased exponent: 1 = -1022+1023 => 2^-1022
static const int32_t HIGH_MIN_NORMAL_EXP = 0x00100000;

// 0x3ff00000 = 1072693248 => 0 01111111111 00000000000000000000 => biased exponent: 1023 = 0+1023 => 2^0 = 1
static const int32_t HIGH_BIASED_EXP_0 = 0x3ff00000;

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: polyval_p

/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the polynomial
* @return     evaluated polynomial
*/
static double polyval_p( const double x ) {
	return 0.3999999999940942 + (x * (0.22222198432149784 + (x * 0.15313837699209373)));
}

// END: polyval_p

// BEGIN: polyval_q

/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the polynomial
* @return     evaluated polynomial
*/
static double polyval_q( const double x ) {
	return 0.6666666666666735 + (x * (0.2857142874366239 + (x * (0.1818357216161805 + (x * 0.14798198605116586)))));
}

// END: polyval_q

/* End auto-generated functions. */

/**
* Return log(x) - (x-1) for x in ~[sqrt(2)/2, sqrt(2)].
*
* @param x    input value
* @return     output value
*/
double klog( const double x ) {
	double hfsq;
	uint32_t hx;
	int32_t i;
	int32_t j;
	double t1;
	double t2;
	double f;
	double R;
	double s;
	double z;
	double w;

	stdlib_base_float64_get_high_word( x, &hx );
	f = x - 1.0;
	if ( ( HIGH_SIGNIFICAND_MASK & ( 2 + hx ) ) < 3 ) {
		// Case: -2**-20 <= f < 2**-20
		if ( f == 0.0 ) {
			return 0.0;
		}
		return f * f * ( ( ONE_THIRD*f )- 0.5 );
	}
	s = f / ( 2.0 + f );
	z = s * s;
	hx &= HIGH_SIGNIFICAND_MASK;
	i = ( hx - 0x6147a );
	w = z * z;
	j = ( 0x6b851 - hx );
	t1 = w * polyval_p( w );
	t2 = z * polyval_q( w );
	i |= j;
	R = t2 + t1;
	if ( i > 0 ) {
		hfsq = 0.5 * f * f;
		return ( s * (hfsq+R) ) - hfsq;
	}
	return s * (R-f);
}

/**
* Evaluates the binary logarithm (base two).
*
* @param x    input value
* @return     output value
*/
double stdlib_base_log2( const double x ) {
	uint32_t hx;
	uint32_t lx;
	double hi;
	int32_t i;
	int32_t k;
	double lo;
	double xc;
	double f;

	xc = x;
	if ( stdlib_base_is_nan( x ) || x < 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	stdlib_base_float64_to_words( xc, &hx, &lx );
	k = 0;
	if ( hx < HIGH_MIN_NORMAL_EXP ) {
		// Case: x < 2**-1022
		if ( ( ( hx & STDLIB_CONSTANT_FLOAT64_HIGH_WORD_ABS_MASK ) | lx ) == 0 ) {
			return STDLIB_CONSTANT_FLOAT64_NINF;
		}
		k -= 54;

		// Subnormal number, scale up x:
		xc *= TWO54;
		stdlib_base_float64_get_high_word( xc, &hx );
	}
	if ( hx >= HIGH_MAX_NORMAL_EXP ) {
		return xc + xc;
	}
	k += ( ( hx>>20 ) - STDLIB_CONSTANT_FLOAT64_EXPONENT_BIAS );
	hx &= HIGH_SIGNIFICAND_MASK;
	i = ( ( hx + 0x95f64 ) & 0x100000 );

	// Normalize x or x/2...
	stdlib_base_float64_set_high_word( hx|( i^HIGH_BIASED_EXP_0 ), &xc );
	k += (i>>20);
	f = klog( xc );
	xc -= 1;
	hi = xc;
	stdlib_base_float64_set_low_word( 0, &hi );
	lo = xc - hi;
	return ( ( xc + f ) * IVLN2LO ) + ( ( lo + f ) * IVLN2HI ) + ( hi * IVLN2HI ) + k;
}
