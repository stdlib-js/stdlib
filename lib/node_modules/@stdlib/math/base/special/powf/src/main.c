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
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_powf.c}. The implementation follows the original, but has been modified according to stdlib conventions.
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

#include "stdlib/math/base/special/powf.h"
#include "stdlib/math/base/special/copysignf.h"
#include "stdlib/math/base/special/absf.h"
#include "stdlib/math/base/special/ldexpf.h"
#include "stdlib/math/base/special/sqrtf.h"
#include "stdlib/number/float32/base/from_word.h"
#include "stdlib/number/float32/base/to_word.h"
#include "stdlib/math/base/assert/is_oddf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_infinitef.h"
#include "stdlib/math/base/assert/is_integerf.h"
#include "stdlib/constants/float32/pinf.h"
#include "stdlib/constants/float32/ninf.h"
#include "stdlib/constants/float32/ln_two.h"
#include "stdlib/constants/float32/abs_mask.h"
#include "stdlib/constants/float32/exponent_bias.h"
#include "stdlib/constants/float32/significand_mask.h"
#include "stdlib/constants/float32/num_significand_bits.h"

// 2^27 = 134217728.0 => 1 0011010 00000000000000000000000 => 0x4d000000 = 1291845632
static const int32_t Y_LARGE_WORD = 0x4d000000;

// 0.9999994039535522 => 0 01111110 11111111111111111110110 => 0x3f7ffff6 = 1065353206
static const int32_t X_BELOW_ONE_WORD = 0x3f7ffff6;

// 1.0000008344650269 => 0 01111111 00000000000000000000111 => 0x3f800007 = 1065353223
static const int32_t X_ABOVE_ONE_WORD = 0x3f800007;

// Mask to clear lower 12 significand bits:
static const int32_t TRUNC_MASK_12 = 0xfffff000;

// 128 => 0 10000110 00000000000000000000000 => 0x43000000 = 1124073472
static const int32_t Z_OVF_WORD = 0x43000000;

// 150 => 0 10000110 00101100000000000000000 => 0x43160000 = 1125515264
static const int32_t Z_UNF_WORD = 0x43160000;

// -150 => 1 10000110 00101100000000000000000 => 0xc3160000 = 3272998912
static const int32_t Z_NEG_UNF_WORD = 0xc3160000;

// 1.1754943508222875e-38 => 0 00000001 00000000000000000000000 => 0x00800000 = 8388608
static const int32_t MIN_NORM_WORD = 0x00800000;

// 0.5 => 0 01111110 00000000000000000000000 => 0x3f000000 = 1056964608
static const int32_t HALF_WORD = 0x3f000000;

// Mask to clear lower 15 significand bits:
static const int32_t TRUNC_MASK_15 = 0xffff8000;

// 1.0 => 0 01111111 00000000000000000000000 => 0x3f800000 = 1065353216
static const int32_t ONE_WORD = 0x3f800000;

// 0x20000000 = 536870912 => 0 01000000 00000000000000000000000
static const int32_t SIGNIFICAND_HALF_WORD = 0x20000000;

// 0x00400000 = 4194304 => 0 00000000000 10000000000000000000
static const int32_t EXP_CORRECTION_WORD = 0x00400000;

static const float HUGE_VALUE = 1.0e30f;

static const float TINY_VALUE = 1.0e-30f;

// High: LN2
static const float LN2_HI = 6.93145752e-01f;       // 0x3f317200

// Low: LN2
static const float LN2_LO = 1.42860654e-06f;       // 0x35bfbe8c

// 1/LN2
static const float INV_LN2 = 1.4426950216e+00f;    // 0x3fb8aa3b

// High (16 bits): 1/LN2
static const float INV_LN2_HI = 1.4426879883e+00f; // 0x3fb8aa00

// Low: 1/LN2
static const float INV_LN2_LO = 7.0526075433e-06f; // 0x36eca570

static const float TWO24 = 16777216.0f;	           // 0x4b800000

// 2/(3*LN2)
static const float CP = 9.6179670095e-01f;         // 0x3f76384f

// (float)CP
static const float CP_HI = 9.6191406250e-01f;      // 0x3f764000 =12b cp

// Low: CP_HI
static const float CP_LO = -1.1736857402e-04f;     // 0xb8f623c6

static const float BP [2] = { 1.0f, 1.5f };

static const float DP_HI [2] = { 0.0f, 5.84960938e-01f }; // 0x3F800000, 0x3F800000

static const float DP_LO [2] = { 0.0f, 1.56322085e-06f }; // 0x3F800000, 0x35d1cfdc

// -(128-log2(ovfl+.5ulp))
static const float OVT = 4.2995665694e-08f;

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
static float polyval_l( const float x ) {
	return 0.60000002384f + (x * (0.42857143283f + (x * (0.33333334327f + (x * (0.27272811532f + (x * (0.23066075146f + (x * 0.20697501302f)))))))));
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
static float polyval_w( const float x ) {
	return 0.5f + (x * (-0.333333343f + (x * 0.25f)));
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
static float polyval_p( const float x ) {
	return 0.16666667163f + (x * (-0.002777777845f + (x * (0.00006613755977f + (x * (-0.0000016533901999f + (x * 4.1381369442e-8f)))))));
}

// END: polyval_p

/* End auto-generated functions. */

/**
* Evaluates the exponential function when \\( y = \pm \infty\\).
*
* @param x    base
* @param y    exponent
* @return     function value
*
* @example
* float out = y_is_infinitef( -1.0f, 1.0f/0.0f );
* // returns NaN
*/
static float y_is_infinitef( const float x, const float y ) {
	if ( x == -1.0f ) {
		return 1.0f;
	}
	if ( x == 1.0f ) {
		return 1.0f;
	}
	// (|x| > 1 && y == NINF) || (|x| < 1 && y == PINF)
	if ( ( stdlib_base_absf( x ) < 1.0f ) == ( y == STDLIB_CONSTANT_FLOAT32_PINF ) ) {
		return 0.0f;
	}
	// (|x| > 1 && y == PINF) || (|x| < 1 && y == NINF)
	return STDLIB_CONSTANT_FLOAT32_PINF;
}

/**
* Evaluates the exponential function when \\(|x| = 0\\).
*
* @param x    base
* @param y    exponent
* @return     function value
*
* @example
* float out = x_is_zerof( 0.0f, 2.0f );
* // returns 0.0f
*/
static float x_is_zerof( const float x, const float y ) {
	if ( y == STDLIB_CONSTANT_FLOAT32_NINF ) {
		return STDLIB_CONSTANT_FLOAT32_PINF;
	}
	if ( y == STDLIB_CONSTANT_FLOAT32_PINF ) {
		return 0.0f;
	}
	if ( y > 0.0f ) {
		if ( stdlib_base_is_oddf( y ) ) {
			return x; // handles +-0
		}
		return 0.0f;
	}
	// y < 0.0
	if ( stdlib_base_is_oddf( y ) ) {
		return stdlib_base_copysignf( STDLIB_CONSTANT_FLOAT32_PINF, x ); // handles +-0
	}
	return STDLIB_CONSTANT_FLOAT32_PINF;
}

/**
* Computes \\(2^{\mathrm{hp} + \mathrm{lp}\\).
*
* @param j     word of `hp + lp`
* @param hp    first power summand
* @param lp    second power summand
* @return      function value
*
* @example
* float out = pow2f( 1065961648, -0.3398475646972656f, -0.000002438187359100815f );
* // returns ~0.79f
*/
static float pow2f( uint32_t j, const float hp, const float lp ) {
	uint32_t tmp;
	int32_t jc;
	int32_t nc;
	int32_t i;
	int32_t k;
	int32_t n;
	float hpc;
	float t1;
	float t;
	float r;
	float u;
	float v;
	float w;
	float z;

	hpc = hp;
	jc = (int32_t)j;
	i = ( j & STDLIB_CONSTANT_FLOAT32_ABS_MASK );
	k = ( (i>>STDLIB_CONSTANT_FLOAT32_NUM_SIGNIFICAND_BITS) - STDLIB_CONSTANT_FLOAT32_EXPONENT_BIAS );
	n = 0;
	nc = (int32_t)n;

	// `|z| > 0.5`, set `n = z+0.5`
	if ( i > HALF_WORD ) {
		n = ( j + (MIN_NORM_WORD>>(k+1)) );
		k = (((n & STDLIB_CONSTANT_FLOAT32_ABS_MASK)>>STDLIB_CONSTANT_FLOAT32_NUM_SIGNIFICAND_BITS) - STDLIB_CONSTANT_FLOAT32_EXPONENT_BIAS); // new k for n
		tmp = ((n & ~(STDLIB_CONSTANT_FLOAT32_SIGNIFICAND_MASK >> k)));
		stdlib_base_float32_from_word( tmp, &t );
		n = (((n & STDLIB_CONSTANT_FLOAT32_SIGNIFICAND_MASK)|MIN_NORM_WORD) >> (STDLIB_CONSTANT_FLOAT32_NUM_SIGNIFICAND_BITS-k));
		nc = (int32_t)n;
		if ( jc < 0 ) {
			nc = -nc;
		}
		hpc -= t;
	}
	t = lp + hpc;
	stdlib_base_float32_to_word( t, &tmp );
	stdlib_base_float32_from_word( tmp & TRUNC_MASK_15, &t );
	u = t * LN2_HI;
	v = ( ( lp - ( t - hpc ) ) * STDLIB_CONSTANT_FLOAT32_LN2 ) + ( t * LN2_LO );
	z = u + v;
	w = v - ( z - u );
	t = z * z;
	t1 = z - ( t * polyval_p( t ) );
	r = ( ( z * t1 ) / ( t1 - 2.0f ) ) - ( w + ( z * w ) );
	z = 1.0f - ( r - z );
	stdlib_base_float32_to_word( z, &j );
	jc = (int32_t)j;
	jc += ( (uint32_t)nc << STDLIB_CONSTANT_FLOAT32_NUM_SIGNIFICAND_BITS );

	// Check for subnormal output...
	if ( ( jc >> STDLIB_CONSTANT_FLOAT32_NUM_SIGNIFICAND_BITS ) <= 0 ) {
		z = stdlib_base_ldexpf( z, nc );
	} else {
		stdlib_base_float32_from_word( (uint32_t)jc, &z );
	}
	return z;
}

/**
* Computes \\(\operatorname{log}(x)\\) assuming \\(|1-x|\\) is small and using the approximation \\(x - x^2/2 + x^3/3 - x^4/4\\).
*
* @param ax    absolute value of `x`
* @param o1    destination for output1
* @param o2    destination for output2
*
* @example
* logxf( 9.0f, &o1, &o2 );
*/
void logxf( const float ax, float *o1, float *o2 ) {
	uint32_t tmp;
	float t2;
	float t1;
	float t;
	float w;
	float u;
	float v;

	t = ax - 1.0f; // `t` has `20` trailing zeros
	w = t * t * polyval_w( t );
	u = INV_LN2_HI * t; // `INV_LN2_HI` has `16` significant bits
	v = ( t * INV_LN2_LO ) - ( w * INV_LN2 );
	t1 = u + v;
	stdlib_base_float32_to_word( t1, &tmp );
	stdlib_base_float32_from_word( tmp & TRUNC_MASK_12, &t1 );
	t2 = v - ( t1 - u );

	*o1 = t1;
	*o2 = t2;
}

/**
* Computes \\(\operatorname{log2}(ax)\\).
*
* @param ax     absolute value of `x`
* @param ahx    word of `ax`
* @param o1     destination for output1
* @param o2     destination for output2
*
* @example
* log2axf( 9.0f, 1075970048, &o1, &o2 );
*/
void log2axf( const float ax, const int32_t ahx, float *o1, float *o2 ) {
	uint32_t ahxcc;
	uint32_t tmp;
	int32_t ahxc;
	float axc;
	int32_t n;
	int32_t j;
	int32_t k;
	float ss; // hs + ls
	float s2; // ss squared
	float hs;
	float ls;
	float ht;
	float lt;
	float bp; // BP constant
	float dp; // DP constant
	float hp;
	float lp;
	float hz;
	float lz;
	float t1;
	float t2;
	float t;
	float r;
	float u;
	float v;

	n = 0;
	axc = ax;
	ahxc = ahx;
	ahxcc = (uint32_t)ahx;

	// Check if `x` is subnormal...
	if ( ahxc < MIN_NORM_WORD ) {
		axc *= TWO24;
		n -= 24;
		stdlib_base_float32_to_word( axc, &ahxcc );
		ahxc = (int32_t)ahxcc;
	}
	// Extract the unbiased exponent of `x`:
	n += ( ( ahxc >> STDLIB_CONSTANT_FLOAT32_NUM_SIGNIFICAND_BITS ) - STDLIB_CONSTANT_FLOAT32_EXPONENT_BIAS );

	// Isolate the significand bits of `x`:
	j = ( ahxc & STDLIB_CONSTANT_FLOAT32_SIGNIFICAND_MASK );

	// Normalize `ahx` by setting the (biased) exponent to `127`:
	ahxc = j | ONE_WORD;

	// Determine the interval of `|x|` by comparing significand bits...

	// |x| < sqrt(3/2)
	if ( j <= 0x1CC471 ) { // 0 00000000001 11001100100010001110
		k = 0;
	}
	// |x| < sqrt(3)
	else if ( j < 0x5DB3D7 ) { // 0 00000000010 11101101100111110111
		k = 1;
	}
	// |x| >= sqrt(3)
	else {
		k = 0;
		n += 1;
		ahxc -= MIN_NORM_WORD;
	}
	ahxcc = (uint32_t)ahxc;

	// Load the normalized high word into `|x|`:
	stdlib_base_float32_from_word( ahxcc, &axc );

	// Compute `ss = hs + ls = (x-1)/(x+1)` or `(x-1.5)/(x+1.5)`:
	bp = BP[ k ]; // BP[0] = 1.0, BP[1] = 1.5
	u = axc - bp; // (x-1) || (x-1.5)
	v = 1.0f / ( axc + bp ); // 1/(x+1) || 1/(x+1.5)
	ss = u * v;
	stdlib_base_float32_to_word( ss, &tmp );
	stdlib_base_float32_from_word( tmp & TRUNC_MASK_12, &hs );

	// Compute `ht = ax + bp` (via manipulation, i.e., bit flipping):
	tmp = ( ( ahxc >> 1 ) & TRUNC_MASK_12 ) | SIGNIFICAND_HALF_WORD;
	tmp += EXP_CORRECTION_WORD;
	tmp += ( k << 21 ); // `(k<<21)` can be considered the word equivalent of `1.0` or `1.5`
	stdlib_base_float32_from_word( tmp, &ht );
	lt = axc - ( ht - bp );
	ls = v * ( ( u - ( hs * ht ) ) - ( hs * lt ) );

	// Compute `log(ax)`...

	s2 = ss * ss;
	r = s2 * s2 * polyval_l( s2 );
	r += ls * (hs + ss);
	s2 = hs * hs;
	ht = 3.0f + s2 + r;
	stdlib_base_float32_to_word( ht, &tmp );
	stdlib_base_float32_from_word( tmp & TRUNC_MASK_12, &ht );
	lt = r - ( ( ht - 3.0f ) - s2 );

	// u+v = ss*(1+...):
	u = hs * ht;
	v = ( ls * ht ) + ( lt * ss );

	// 2/(3LN2) * (ss+...):
	hp = u + v;
	stdlib_base_float32_to_word( hp, &tmp );
	stdlib_base_float32_from_word( tmp & TRUNC_MASK_12, &hp );
	lp = v - ( hp - u );
	hz = CP_HI * hp; // CP_HI+CP_LO = 2/(3*LN2)
	lz = ( CP_LO * hp ) + ( lp*CP ) + DP_LO[ k ];

	// log2(ax) = (ss+...)*2/(3*LN2) = n + dp + hz + lz
	dp = DP_HI[ k ];
	t = n;
	t1 = ( ( hz + lz ) + dp ) + t; // log2(ax)
	stdlib_base_float32_to_word( t1, &tmp );
	stdlib_base_float32_from_word( tmp & TRUNC_MASK_12, &t1 );
	t2 = lz - ( ( ( t1 - t ) - dp ) - hz );

	*o1 = t1;
	*o2 = t2;
}

/**
* Evaluates the exponential function for a single-precision floating-point number.
*
* @param x    base
* @param y    exponent
* @return     function value
*
* @example
* float out = stdlib_base_powf( 2.0f, 3.0f );
* // returns 8.0f
*/
float stdlib_base_powf( const float x, const float y ) {
	uint32_t tmp;
	uint32_t hx; // word representation of `x`
	uint32_t hy; // word representation of `y`
	int32_t ahx; // absolute value high word `x`
	int32_t ahy; // absolute value high word `y`
	uint32_t j;
	int32_t jc;
	int32_t sn;  // sign of the result
	float ax;    // absolute value `x`
	float y1;
	float hp;
	float lp;
	float t1;
	float t2;
	float z;     // y prime

	if ( y == 0.0f ) {
		return 1.0f;
	}
	if ( x == 1.0f ) {
		return 1.0f;
	}
	if ( stdlib_base_is_nanf( x ) || stdlib_base_is_nanf( y ) ) {
		return 0.0f/0.0f; // NaN
	}

	// Other special cases `y`...
	if ( y == 1.0f ) {
		return x;
	}
	if ( y == -1.0f ) {
		return 1.0f / x;
	}
	if ( y == 0.5f ) {
		return stdlib_base_sqrtf( x );
	}
	if ( y == -0.5f ) {
		return 1.0f / stdlib_base_sqrtf( x );
	}
	if ( y == 2.0f ) {
		return x * x;
	}
	if ( y == 3.0f ) {
		return x * x * x;
	}
	if ( stdlib_base_is_infinitef( y ) ) { // y is +-inf
		return y_is_infinitef( x, y );
	}

	// Other special cases `x`...
	if ( x == 0.0f ) {
		return x_is_zerof( x, y );
	}
	if ( x == -1.0f ) {
		if ( stdlib_base_is_integerf( y ) ) {
			return ( stdlib_base_is_oddf( y ) ) ? -1.0f : 1.0f;
		}
	}
	if ( stdlib_base_is_infinitef( x ) ) {
		if ( x == STDLIB_CONSTANT_FLOAT32_NINF ) {
			// `pow( 1/x, -y )`
			return stdlib_base_powf( -0.0f, -y );
		}
		if ( y < 0.0f ) {
			return 0.0f;
		}
		return STDLIB_CONSTANT_FLOAT32_PINF;
	}
	if (
		x < 0.0f &&
		stdlib_base_is_integerf( y ) == false
	) {
		// Signal NaN...
		return 0.0f/0.0f; // (-1)**non-int is NaN
	}
	ax = stdlib_base_absf( x );
	stdlib_base_float32_to_word( x, &hx );
	stdlib_base_float32_to_word( y, &hy );

	// Remove the sign bits (i.e., get absolute values):
	ahx = ( hx & STDLIB_CONSTANT_FLOAT32_ABS_MASK );
	ahy = ( hy & STDLIB_CONSTANT_FLOAT32_ABS_MASK );

	// Determine the sign of the result...
	if ( x < 0.0f && stdlib_base_is_oddf( y ) ) {
		sn = -1;
	} else {
		sn = 1;
	}

	// Case 1: `|y|` is huge
	// If |y| > 2^27
	if ( ahy > Y_LARGE_WORD ) {
		// Over- or underflow if `x` is not close to unity...
		if ( ahx < X_BELOW_ONE_WORD ) {
			// y < 0
			if ( y < 0.0f ) {
				// Signal overflow...
				return sn * HUGE_VALUE * HUGE_VALUE;
			}
			// Signal underflow...
			return sn * TINY_VALUE * TINY_VALUE;
		}
		if ( ahx > X_ABOVE_ONE_WORD ) {
			// y > 0
			if ( y > 0.0f ) {
				// Signal overflow...
				return sn * HUGE_VALUE * HUGE_VALUE;
			}
			// Signal underflow...
			return sn * TINY_VALUE * TINY_VALUE;
		}
		// At this point, `|1-x|` is tiny (`<= 2^-20`). Suffice to compute `log(x)` by `x - x^2/2 + x^3/3 - x^4/4`.
		logxf( ax, &t1, &t2 );
	}
	// Case 2: `|y|` is not huge...
	else {
		log2axf( ax, ahx, &t1, &t2 );
	}
	// Split `y` into `y1 + y2` and compute `(y1+y2) * (t1+t2)`...
	stdlib_base_float32_to_word( y, &tmp );
	stdlib_base_float32_from_word( tmp & TRUNC_MASK_12, &y1 );
	lp = ( ( y - y1 ) * t1 ) + ( y * t2 );
	hp = y1 * t1;
	z = lp + hp;

	stdlib_base_float32_to_word( z, &j );
	jc = (int32_t)j;

	// z > 128
	if ( jc > Z_OVF_WORD ) {
		// Signal overflow...
		return sn * HUGE_VALUE * HUGE_VALUE;
	}
	// z == 128
	if ( jc == Z_OVF_WORD ) {
		if ( ( lp + OVT ) > ( z - hp ) ) {
			// Signal overflow...
			return sn * HUGE_VALUE * HUGE_VALUE;
		}
	}
	// z < -150
	if ( (jc & STDLIB_CONSTANT_FLOAT32_ABS_MASK) > Z_UNF_WORD ) {
		// Signal underflow...
		return sn * TINY_VALUE * TINY_VALUE;
	}
	// z == -150
	if ( jc == Z_NEG_UNF_WORD ) { // cppcheck-suppress knownConditionTrueFalse
		if ( lp <= ( z - hp ) ) {
			// Signal underflow...
			return sn * TINY_VALUE * TINY_VALUE;
		}
	}
	// Compute `2^(hp+lp)`...
	z = pow2f( j, hp, lp );
	return sn * z;
}
