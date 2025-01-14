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
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/

#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/high_word_abs_mask.h"
#include "stdlib/number/float64/base/get_high_word.h"
#include "stdlib/math/base/assert/is_odd.h"
#include "stdlib/math/base/special/copysign.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/number/float64/base/set_high_word.h"
#include "stdlib/number/float64/base/set_low_word.h"
#include "stdlib/math/base/special/ldexp.h"
#include "stdlib/constants/float64/ln_two.h"
#include "stdlib/constants/float64/exponent_bias.h"
#include "stdlib/constants/float64/high_word_significand_mask.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/math/base/assert/is_integer.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/number/float64/base/to_words.h"
#include "stdlib/constants/float64/num_high_word_significand_bits.h"

// 0x3fefffff = 1072693247 => 0 01111111110 11111111111111111111 => biased exponent: 1022 = -1+1023 => 2^-1
static const int32_t HIGH_MAX_NEAR_UNITY = 0x3fefffff;

static const double HUGE_VALUE = 1.0e300;

static const double TINY_VALUE = 1.0e-300;

// 0x00100000 = 1048576 => 0 00000000001 00000000000000000000 => biased exponent: 1 = -1022+1023 => 2^-1022
static const int32_t HIGH_MIN_NORMAL_EXP = 0x00100000;

// 0x3fe00000 = 1071644672 => 0 01111111110 00000000000000000000 => biased exponent: 1022 = -1+1023 => 2^-1
static const int32_t HIGH_BIASED_EXP_NEG_1 = 0x3fe00000;

// High: LN2
static const double LN2_HI = 6.93147182464599609375e-01; // 0x3FE62E43, 0x00000000

// Low: LN2
static const double LN2_LO = -1.90465429995776804525e-09; // 0xBE205C61, 0x0CA86C39

// 1/LN2
static const double INV_LN2 = 1.44269504088896338700e+00; // 0x3FF71547, 0x652B82FE

// High (24 bits): 1/LN2
static const double INV_LN2_HI = 1.44269502162933349609e+00; // 0x3FF71547, 0x60000000

// Low: 1/LN2
static const double INV_LN2_LO = 1.92596299112661746887e-08; // 0x3E54AE0B, 0xF85DDF44

// 0x000fffff = 1048575 => 0 00000000000 11111111111111111111
static const int32_t HIGH_SIGNIFICAND_MASK = 0x000fffff;

// 0x3ff00000 = 1072693248 => 0 01111111111 00000000000000000000 => biased exponent: 1023 = 0+1023 => 2^0 = 1
static const int32_t HIGH_BIASED_EXP_0 = 0x3ff00000;

// 0x20000000 = 536870912 => 0 01000000000 00000000000000000000 => biased exponent: 512 = -511+1023
static const int32_t HIGH_BIASED_EXP_NEG_512 = 0x20000000;

// 0x00080000 = 524288 => 0 00000000000 10000000000000000000
static const int32_t HIGH_SIGNIFICAND_HALF = 0x00080000;

static const double TWO53 = 9007199254740992.0;	// 0x43400000, 0x00000000

// 2/(3*LN2)
static const double CP = 9.61796693925975554329e-01; // 0x3FEEC709, 0xDC3A03FD

// (float)CP
static const double CP_HI = 9.61796700954437255859e-01; // 0x3FEEC709, 0xE0000000

// Low: CP_HI
static const double CP_LO = -7.02846165095275826516e-09; // 0xBE3E2FE0, 0x145B01F5

static const double BP [2] = { 1.0, 1.5 };

static const double DP_HI [2] = { 0.0, 5.84962487220764160156e-01 }; // 0x3FE2B803, 0x40000000

static const double DP_LO [2] = { 0.0, 1.35003920212974897128e-08 }; // 0x3E4CFDEB, 0x43CFD006

// 0x41e00000 = 1105199104 => 0 10000011110 00000000000000000000 => biased exponent: 1054 = 31+1023 => 2^31
static const int32_t HIGH_BIASED_EXP_31 = 0x41e00000;

// 0x43f00000 = 1139802112 => 0 10000111111 00000000000000000000 => biased exponent: 1087 = 64+1023 => 2^64
static const int32_t HIGH_BIASED_EXP_64 = 0x43f00000;

// 0x40900000 = 1083179008 => 0 10000001001 00000000000000000000 => biased exponent: 1033 = 10+1023 => 2^10 = 1024
static const int32_t HIGH_BIASED_EXP_10 = 0x40900000;

// 0x4090cc00 = 1083231232 => 0 10000001001 00001100110000000000
static const int32_t HIGH_1075 = 0x4090cc00;

// 0xc090cc00 = 3230714880 => 1 10000001001 00001100110000000000
static const uint32_t HIGH_NEG_1075 = 0xc090cc00;

static const int32_t HIGH_NUM_NONSIGN_BITS = 31;

// -(1024-log2(ovfl+.5ulp))
static const double OVT = 8.0085662595372944372e-17;

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: polyval_l

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
static double polyval_l( const double x ) {
	return 0.5999999999999946 + (x * (0.4285714285785502 + (x * (0.33333332981837743 + (x * (0.272728123808534 + (x * (0.23066074577556175 + (x * 0.20697501780033842)))))))));
}

// END: polyval_l

// BEGIN: polyval_w

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
static double polyval_w( const double x ) {
	return 0.5 + (x * (-0.3333333333333333 + (x * 0.25)));
}

// END: polyval_w

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
	return 0.16666666666666602 + (x * (-0.0027777777777015593 + (x * (0.00006613756321437934 + (x * (-0.0000016533902205465252 + (x * 4.1381367970572385e-8)))))));
}

// END: polyval_p

/* End auto-generated functions. */

/**
* Evaluates the exponential function when \\( y = \pm \infty\\).
*
* @param x    base
* @param y    exponent
* @return     output value
*
* @example
* double out = y_is_infinite( -1.0, 1.0/0.0 );
* // returns NaN
*
* @example
* double out = y_is_infinite( 1.5, -1.0/0.0 );
* // returns 0.0
*/
static double y_is_infinite( const double x, const double y ) {
	if ( x == -1.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x == 1.0 ) {
		return 1.0;
	}
	// (|x| > 1 && y == NINF) || (|x| < 1 && y === PINF)
	if ( ( stdlib_base_abs( x ) < 1.0 ) == ( y == STDLIB_CONSTANT_FLOAT64_PINF ) ) {
		return 0.0;
	}
	// (|x| > 1 && y == PINF) || (|x| < 1 && y == NINF)
	return STDLIB_CONSTANT_FLOAT64_PINF;
}

/**
* Evaluates the exponential function when \\(|y| > 2^64\\).
*
* @param x    base
* @param y    exponent
* @return     output value
*
* @example
* double out = y_is_huge( 9.0, 3.6893488147419103e19 );
* // returns Infinity
*
* @example
* double out = y_is_huge( -3.14, -3.6893488147419103e19 );
* // returns 0.0
*/
static double y_is_huge( const double x, const double y ) {
	uint32_t ahx;
	uint32_t hx;

	stdlib_base_float64_get_high_word( x, &hx );
	ahx = ( hx & STDLIB_CONSTANT_FLOAT64_HIGH_WORD_ABS_MASK );

	if ( ahx <= HIGH_MAX_NEAR_UNITY ) {
		if ( y < 0 ) {
			// Signal overflow...
			return HUGE_VALUE * HUGE_VALUE;
		}
		// Signal underflow...
		return TINY_VALUE * TINY_VALUE;
	}
	// `x` has a biased exponent greater than or equal to `0`...

	if ( y > 0 ) {
		// Signal overflow...
		return HUGE_VALUE * HUGE_VALUE;
	}
	// Signal underflow...
	return TINY_VALUE * TINY_VALUE;
}

/**
* Evaluates the exponential function when \\(|x| = 0\\).
*
* @param x    base
* @param y    exponent
* @return     output value
*
* @example
* double out = x_is_zero( 0.0, 2 );
* // returns 0.0
*
* @example
* double out = x_is_zero( 0.0, -9 );
* // returns Infinity
*/
static double x_is_zero( const double x, const double y ) {
	if ( y == STDLIB_CONSTANT_FLOAT64_NINF ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	if ( y == STDLIB_CONSTANT_FLOAT64_PINF ) {
		return 0.0;
	}
	if ( y > 0.0 ) {
		if ( stdlib_base_is_odd( y ) ) {
			return x; // handles +-0
		}
		return 0.0;
	}
	// y < 0.0
	if ( stdlib_base_is_odd( y ) ) {
		return stdlib_base_copysign( STDLIB_CONSTANT_FLOAT64_PINF, x ); // handles +-0
	}
	return STDLIB_CONSTANT_FLOAT64_PINF;
}

/**
* Computes \\(2^{\mathrm{hp} + \mathrm{lp}\\).
*
* @param j     high word of `hp + lp`
* @param hp    first power summand
* @param lp    second power summand
* @return      function value
*
* @example
* double out = pow2( 1065961648, -0.3398475646972656, -0.000002438187359100815 );
* // returns ~0.79
*/
static double pow2( uint32_t j, const double hp, const double lp ) {
	uint32_t tmp;
	double hpc;
	int32_t jc;
	int32_t nc;
	int32_t i;
	int32_t k;
	int32_t n;
	double t1;
	double t;
	double r;
	double u;
	double v;
	double w;
	double z;

	hpc = hp;
	jc = (int32_t)j;
	i = ( j & STDLIB_CONSTANT_FLOAT64_HIGH_WORD_ABS_MASK );
	k = ( ( i >> STDLIB_CONSTANT_FLOAT64_NUM_HIGH_WORD_SIGNIFICAND_BITS ) - STDLIB_CONSTANT_FLOAT64_EXPONENT_BIAS );
	n = 0;
	nc = (int32_t)n;

	// `|z| > 0.5`, set `n = z+0.5`
	if ( i > HIGH_BIASED_EXP_NEG_1 ) {
		n = ( j + ( HIGH_MIN_NORMAL_EXP >> ( k + 1 ) ) );
		k = ( ( ( n & STDLIB_CONSTANT_FLOAT64_HIGH_WORD_ABS_MASK ) >> STDLIB_CONSTANT_FLOAT64_NUM_HIGH_WORD_SIGNIFICAND_BITS ) - STDLIB_CONSTANT_FLOAT64_EXPONENT_BIAS ); // new k for n
		tmp = ( ( n & ~( HIGH_SIGNIFICAND_MASK >> k ) ) );
		t = 0.0;
		stdlib_base_float64_set_high_word( tmp, &t );
		n = ( ( ( n & HIGH_SIGNIFICAND_MASK ) | HIGH_MIN_NORMAL_EXP ) >> ( STDLIB_CONSTANT_FLOAT64_NUM_HIGH_WORD_SIGNIFICAND_BITS - k ) );
		nc = (int32_t)n;
		if ( jc < 0 ) {
			nc = -nc;
		}
		hpc -= t;
	}
	t = lp + hpc;
	stdlib_base_float64_set_low_word( 0, &t );
	u = t * LN2_HI;
	v = ( ( lp - ( t - hpc ) ) * STDLIB_CONSTANT_FLOAT64_LN2 ) + ( t * LN2_LO );
	z = u + v;
	w = v - ( z - u );
	t = z * z;
	t1 = z - ( t * polyval_p( t ) );
	r = ( ( z * t1 ) / ( t1 - 2.0 ) ) - ( w + ( z * w ) );
	z = 1.0 - ( r - z );
	stdlib_base_float64_get_high_word( z, &j );
	j = j + ( nc << STDLIB_CONSTANT_FLOAT64_NUM_HIGH_WORD_SIGNIFICAND_BITS );
	jc = (int32_t)j;

	// Check for subnormal output...
	if ( ( jc >> STDLIB_CONSTANT_FLOAT64_NUM_HIGH_WORD_SIGNIFICAND_BITS ) <= 0 ) {
		z = stdlib_base_ldexp( z, nc );
	} else {
		stdlib_base_float64_set_high_word( j, &z );
	}
	return z;
}

/**
* Computes \\(\operatorname{log}(x)\\) assuming \\(|1-x|\\) is small and using the approximation \\(x - x^2/2 + x^3/3 - x^4/4\\).
*
* @param ax    absolute value of x
* @param o1    destination for output1
* @param o2    destination for output2
*
* @example
* logx( 9.0, &o1, &o2 );
*/
void logx( const double ax, double *o1, double *o2 ) {
	double t2;
	double t1;
	double t;
	double w;
	double u;
	double v;

	t = ax - 1.0; // `t` has `20` trailing zeros
	w = t * t * polyval_w( t );
	u = INV_LN2_HI * t; // `INV_LN2_HI` has `21` significant bits
	v = ( t * INV_LN2_LO ) - ( w * INV_LN2 );
	t1 = u + v;
	stdlib_base_float64_set_low_word( 0, &t1 );
	t2 = v - (t1 - u);

	*o1 = t1;
	*o2 = t2;
}

/**
* Computes \\(\operatorname{log2}(ax)\\).
*
* @param ax     absolute value of x
* @param ahx    high word of ax
* @param o1     destination for output1
* @param o2     destination for output2
*
* @example
* log2ax( 9.0, 1075970048, &o1, &o2 );
*/
void log2ax( const double ax, const int32_t ahx, double *o1, double *o2 ) {
	uint32_t ahxcc;
	uint32_t tmp;
	int32_t ahxc;
	double axc;
	int32_t n;
	int32_t j;
	int32_t k;
	double ss; // hs + ls
	double s2; // ss squared
	double hs;
	double ls;
	double ht;
	double lt;
	double bp; // BP constant
	double dp; // DP constant
	double hp;
	double lp;
	double hz;
	double lz;
	double t1;
	double t2;
	double t;
	double r;
	double u;
	double v;

	n = 0;
	axc = ax;
	ahxc = ahx;
	ahxcc = (uint32_t)ahx;
	// Check if `x` is subnormal...
	if ( ahxc < HIGH_MIN_NORMAL_EXP ) {
		axc *= TWO53;
		n -= 53;
		stdlib_base_float64_get_high_word( axc, &ahxcc );
		ahxc = (int32_t)ahxcc;
	}
	// Extract the unbiased exponent of `x`:
	n += ( ( ahxc >> STDLIB_CONSTANT_FLOAT64_NUM_HIGH_WORD_SIGNIFICAND_BITS ) - STDLIB_CONSTANT_FLOAT64_EXPONENT_BIAS );

	// Isolate the significand bits of `x`:
	j = ( ahxc & HIGH_SIGNIFICAND_MASK );

	// Normalize `ahx` by setting the (biased) exponent to `1023`:
	ahxc = ( j|HIGH_BIASED_EXP_0 );

	// Determine the interval of `|x|` by comparing significand bits...

	// |x| < sqrt(3/2)
	if ( j <= 0x3988E ) { // 0 00000000000 00111001100010001110
		k = 0;
	}
	// |x| < sqrt(3)
	else if ( j < 0xBB67A ) { // 0 00000000000 10111011011001111010
		k = 1;
	}
	// |x| >= sqrt(3)
	else {
		k = 0;
		n += 1;
		ahxc -= HIGH_MIN_NORMAL_EXP;
	}
	ahxcc = (uint32_t)ahxc;

	// Load the normalized high word into `|x|`:
	stdlib_base_float64_set_high_word( ahxcc, &axc );

	// Compute `ss = hs + ls = (x-1)/(x+1)` or `(x-1.5)/(x+1.5)`:
	bp = BP[ k ]; // BP[0] = 1.0, BP[1] = 1.5
	u = axc - bp; // (x-1) || (x-1.5)
	v = 1.0 / (axc + bp); // 1/(x+1) || 1/(x+1.5)
	ss = u * v;
	hs = ss;
	stdlib_base_float64_set_low_word( 0, &hs ); // set all low word (less significant significand) bits to 0s

	// Compute `ht = ax + bp` (via manipulation, i.e., bit flipping, of the high word):
	tmp = ( ( ahxc >> 1 ) | HIGH_BIASED_EXP_NEG_512) + HIGH_SIGNIFICAND_HALF;
	tmp += ( k << 18 ); // `(k<<18)` can be considered the word equivalent of `1.0` or `1.5`
	ht = 0.0;
	stdlib_base_float64_set_high_word( tmp, &ht );
	lt = axc - ( ht - bp );
	ls = v * ( ( u - ( hs * ht ) ) - ( hs * lt ) );

	// Compute `log(ax)`...

	s2 = ss * ss;
	r = s2 * s2 * polyval_l( s2 );
	r += ls * (hs + ss);
	s2 = hs * hs;
	ht = 3.0 + s2 + r;
	stdlib_base_float64_set_low_word( 0, &ht );
	lt = r - ( ( ht - 3.0 ) - s2 );

	// u+v = ss*(1+...):
	u = hs * ht;
	v = ( ls * ht ) + ( lt * ss );

	// 2/(3LN2) * (ss+...):
	hp = u + v;
	stdlib_base_float64_set_low_word( 0, &hp );
	lp = v - ( hp - u );
	hz = CP_HI * hp; // CP_HI+CP_LO = 2/(3*LN2)
	lz = ( CP_LO * hp ) + ( lp*CP ) + DP_LO[ k ];

	// log2(ax) = (ss+...)*2/(3*LN2) = n + dp + hz + lz
	dp = DP_HI[ k ];
	t = n;
	t1 = ( ( hz + lz ) + dp ) + t; // log2(ax)
	stdlib_base_float64_set_low_word( 0, &t1 );
	t2 = lz - ( ( ( t1 - t ) - dp ) - hz );

	*o1 = t1;
	*o2 = t2;
}

/**
* Evaluates the exponential function.
*
* @param x    base
* @param y    exponent
* @return     function value
*
* @example
* double out = stdlib_base_pow( 2.0, 3.0 );
* // returns 8.0
*
* @example
* double out = stdlib_base_pow( 4.0, 0.5 );
* // returns 2.0
*/
double stdlib_base_pow( const double x, const double y ) {
	uint32_t hx; // high word `x`
	uint32_t lx; // low word `x`
	uint32_t hy; // high word `y`
	uint32_t ly; // low word `y`
	int32_t ahx; // absolute value high word `x`
	int32_t ahy; // absolute value high word `y`
	uint32_t i;
	uint32_t j;
	int32_t ic;
	int32_t jc;
	int32_t sx;  // sign `x`
	int32_t sy;  // sign `y`
	double ax;   // absolute value `x`
	double y1;
	double hp;
	double lp;
	double t1;
	double t2;
	double xc;
	double z;    // y prime

	xc = x;
	if ( stdlib_base_is_nan( xc ) || stdlib_base_is_nan( y ) ) {
		return 0.0/0.0; // NaN
	}

	// Split `y` into high and low words:
	stdlib_base_float64_to_words( y, &hy, &ly );

	// Special cases `y`...
	if ( ly == 0 ) {
		if ( y == 0.0 ) {
			return 1.0;
		}
		if ( y == 1.0 ) {
			return xc;
		}
		if ( y == -1.0 ) {
			return 1.0 / xc;
		}
		if ( y == 0.5 ) {
			return stdlib_base_sqrt( xc );
		}
		if ( y == -0.5 ) {
			return 1.0 / stdlib_base_sqrt( xc );
		}
		if ( y == 2.0 ) {
			return xc * xc;
		}
		if ( y == 3.0 ) {
			return xc * xc * xc;
		}
		if ( y == 4.0 ) {
			xc *= xc;
			return xc * xc;
		}
		if ( stdlib_base_is_infinite( y ) ) {
			return y_is_infinite( xc, y );
		}
	}
	// Split `x` into high and low words:
	stdlib_base_float64_to_words( xc, &hx, &lx );

	// Special cases `x`...
	if ( lx == 0 ) {
		if ( hx == 0 ) {
			return x_is_zero( xc, y );
		}
		if ( xc == 1.0 ) {
			return 1.0;
		}
		if (
			xc == -1.0 &&
			stdlib_base_is_odd( y )
		) {
			return -1.0;
		}
		if ( stdlib_base_is_infinite( xc ) ) {
			if ( xc == STDLIB_CONSTANT_FLOAT64_NINF ) {
				// `stdlib_base_pow( 1/x, -y )`
				return stdlib_base_pow( -0.0, -y );
			}
			if ( y < 0.0 ) {
				return 0.0;
			}
			return STDLIB_CONSTANT_FLOAT64_PINF;
		}
	}
	if (
		xc < 0.0 &&
		stdlib_base_is_integer( y ) == false
	) {
		// Signal NaN...
		return 0.0/0.0;
	}
	ax = stdlib_base_abs( x );

	// Remove the sign bits (i.e., get absolute values):
	ahx = ( hx & STDLIB_CONSTANT_FLOAT64_HIGH_WORD_ABS_MASK );
	ahy = ( hy & STDLIB_CONSTANT_FLOAT64_HIGH_WORD_ABS_MASK );

	// Extract the sign bits:
	sx = ( hx >> HIGH_NUM_NONSIGN_BITS );
	sy = ( hy >> HIGH_NUM_NONSIGN_BITS );

	// Determine the sign of the result...
	if ( sx && stdlib_base_is_odd( y ) ) {
		sx = -1;
	} else {
		sx = 1;
	}
	// Case 1: `|y|` is huge...

	// |y| > 2^31
	if ( ahy > HIGH_BIASED_EXP_31 ) {
		// `|y| > 2^64`, then must over- or underflow...
		if ( ahy > HIGH_BIASED_EXP_64 ) {
			return y_is_huge( xc, y );
		}
		// Over- or underflow if `x` is not close to unity...
		if ( ahx < HIGH_MAX_NEAR_UNITY ) {
			// y < 0
			if ( sy == 1 ) {
				// Signal overflow...
				return sx * HUGE_VALUE * HUGE_VALUE;
			}
			// Signal underflow...
			return sx * TINY_VALUE * TINY_VALUE;
		}
		if ( ahx > HIGH_BIASED_EXP_0 ) {
			// y > 0
			if ( sy == 0 ) {
				// Signal overflow...
				return sx * HUGE_VALUE * HUGE_VALUE;
			}
			// Signal underflow...
			return sx * TINY_VALUE * TINY_VALUE;
		}
		// At this point, `|1-x|` is tiny (`<= 2^-20`). Suffice to compute `log(x)` by `x - x^2/2 + x^3/3 - x^4/4`.
		logx( ax, &t1, &t2 );
	}
	// Case 2: `|y|` is not huge...
	else {
		log2ax( ax, ahx, &t1, &t2 );
	}

	// Split `y` into `y1 + y2` and compute `(y1+y2) * (t1+t2)`...
	y1 = y;
	stdlib_base_float64_set_low_word( 0, &y1 );
	lp = ( ( y - y1 ) * t1 ) + ( y * t2 );
	hp = y1 * t1;
	z = lp + hp;

	// Note: *can* be more performant to use `getHighWord` and `getLowWord` directly, but using `toWords` looks cleaner.
	stdlib_base_float64_to_words( z, &j, &i );
	jc = (int32_t)j;
	ic = (int32_t)i;

	// z >= 1024
	if ( jc >= HIGH_BIASED_EXP_10 ) {
		// z > 1024
		if ( ( ( jc - HIGH_BIASED_EXP_10 )|ic ) != 0 ) {
			// Signal overflow...
			return sx * HUGE_VALUE * HUGE_VALUE;
		}
		if ( ( lp + OVT ) > ( z - hp ) ) {
			// Signal overflow...
			return sx * HUGE_VALUE * HUGE_VALUE;
		}
	}
	// z <= -1075
	else if ( ( j & STDLIB_CONSTANT_FLOAT64_HIGH_WORD_ABS_MASK ) >= HIGH_1075 ) {
		// z < -1075
		if ( ( ( j - HIGH_NEG_1075 )|i ) != 0 ) {
			// Signal underflow...
			return sx * TINY_VALUE * TINY_VALUE;
		}
		if ( lp <= ( z - hp ) ) {
			// Signal underflow...
			return sx * TINY_VALUE * TINY_VALUE;
		}
	}
	// Compute `2^(hp+lp)`...
	z = pow2( j, hp, lp );
	return sx * z;
}
