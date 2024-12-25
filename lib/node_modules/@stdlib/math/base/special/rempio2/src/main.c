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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_rem_pio2.c}. The implementation follows the original, but has been modified according to project conventions.
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

#include "stdlib/math/base/special/rempio2.h"
#include "stdlib/math/base/special/round.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/special/ldexp.h"
#include "stdlib/number/float64/base/get_high_word.h"
#include "stdlib/number/float64/base/get_low_word.h"
#include "stdlib/number/float64/base/from_words.h"
#include "stdlib/constants/float64/high_word_abs_mask.h"
#include "stdlib/constants/float64/high_word_exponent_mask.h"
#include "stdlib/constants/float64/high_word_significand_mask.h"
#include <stdint.h>

static const double ZERO =  0.00000000000000000000e+00;       // 0x00000000, 0x00000000
static const double TWO24 =  1.67772160000000000000e+07;      // 0x41700000, 0x00000000
static const double TWON24 = 5.96046447753906250000e-08;      // 0x3E700000, 0x00000000
static const double INVPIO2 =  6.36619772367581382433e-01;    // 0x3FE45F30, 0x6DC9C883
static const double PIO2_1  =  1.57079632673412561417e+00;    // 0x3FF921FB, 0x54400000
static const double PIO2_1T =  6.07710050650619224932e-11;    // 0x3DD0B461, 0x1A626331
static const double PIO2_2  =  6.07710050630396597660e-11;    // 0x3DD0B461, 0x1A600000
static const double PIO2_2T =  2.02226624879595063154e-21;    // 0x3BA3198A, 0x2E037073
static const double PIO2_3  =  2.02226624871116645580e-21;    // 0x3BA3198A, 0x2E000000
static const double PIO2_3T =  8.47842766036889956997e-32;    // 0x397B839A, 0x252049C1

// High word significand for π and π/2: 0x921fb = 598523 => 00000000000010010010000111111011
static const int32_t PI_HIGH_WORD_SIGNIFICAND = 0x921fb;

// High word for π/4: 0x3fe921fb = 1072243195 => 00111111111010010010000111111011
static const int32_t PIO4_HIGH_WORD = 0x3fe921fb;

// High word for 3π/4: 0x4002d97c = 1073928572 => 01000000000000101101100101111100
static const int32_t THREE_PIO4_HIGH_WORD = 0x4002d97c;

// High word for 5π/4: 0x400f6a7a = 1074752122 => 01000000000011110110101001111010
static const int32_t FIVE_PIO4_HIGH_WORD = 0x400f6a7a;

// High word for 6π/4: 0x4012d97c = 1074977148 => 01000000000100101101100101111100
static const int32_t THREE_PIO2_HIGH_WORD = 0x4012d97c;

// High word for 7π/4: 0x4015fdbc = 1075183036 => 01000000000101011111110110111100
static const int32_t SEVEN_PIO4_HIGH_WORD = 0x4015fdbc;

// High word for 8π/4: 0x401921fb = 1075388923 => 01000000000110010010000111111011
static const int32_t TWO_PI_HIGH_WORD = 0x401921fb;

// High word for 9π/4: 0x401c463b = 1075594811 => 01000000000111000100011000111011
static const int32_t NINE_PIO4_HIGH_WORD = 0x401c463b;

// 2^20*π/2 = 1647099.3291652855 => 0100000100111001001000011111101101010100010001000010110100011000 => high word => 0x413921fb = 1094263291 => 01000001001110010010000111111011
static const int32_t MEDIUM = 0x413921fb;

// Exponent mask (2047 => 0x7ff):
static const int32_t EXPONENT_MASK = 0x7ff;


/*
* Table of constants for `2/π` (`396` hex digits, `476` decimal).
*
* Integer array which contains the (`24*i`)-th to (`24*i+23`)-th bit of `2/π` after binary point. The corresponding floating value is
*
* ```tex
* \operatorname{ipio2}[i] \cdot 2^{-24(i+1)}
* ```
*
* This table must have at least `(e0-3)/24 + jk` terms. For quad precision (`e0 <= 16360`, `jk = 6`), this is `686`.
*/
static const int32_t IPIO2[] = {
	0xA2F983, 0x6E4E44, 0x1529FC, 0x2757D1, 0xF534DD, 0xC0DB62,
	0x95993C, 0x439041, 0xFE5163, 0xABDEBB, 0xC561B7, 0x246E3A,
	0x424DD2, 0xE00649, 0x2EEA09, 0xD1921C, 0xFE1DEB, 0x1CB129,
	0xA73EE8, 0x8235F5, 0x2EBB44, 0x84E99C, 0x7026B4, 0x5F7E41,
	0x3991D6, 0x398353, 0x39F49C, 0x845F8B, 0xBDF928, 0x3B1FF8,
	0x97FFDE, 0x05980F, 0xEF2F11, 0x8B5A0A, 0x6D1F6D, 0x367ECF,
	0x27CB09, 0xB74F46, 0x3F669E, 0x5FEA2D, 0x7527BA, 0xC7EBE5,
	0xF17B3D, 0x0739F7, 0x8A5292, 0xEA6BFB, 0x5FB11F, 0x8D5D08,
	0x560330, 0x46FC7B, 0x6BABF0, 0xCFBC20, 0x9AF436, 0x1DA9E3,
	0x91615E, 0xE61B08, 0x659985, 0x5F14A0, 0x68408D, 0xFFD880,
	0x4D7327, 0x310606, 0x1556CA, 0x73A8C9, 0x60E27B, 0xC08C6B
};

// Double precision array, obtained by cutting `π/2` into `24` bits chunks...
static const double PIO2[] = {
	1.57079625129699707031e+00, // 0x3FF921FB, 0x40000000
	7.54978941586159635335e-08, // 0x3E74442D, 0x00000000
	5.39030252995776476554e-15, // 0x3CF84698, 0x80000000
	3.28200341580791294123e-22, // 0x3B78CC51, 0x60000000
	1.27065575308067607349e-29, // 0x39F01B83, 0x80000000
	1.22933308981111328932e-36, // 0x387A2520, 0x40000000
	2.73370053816464559624e-44, // 0x36E38222, 0x80000000
	2.16741683877804819444e-51  // 0x3569F31D, 0x00000000
};

/**
* Returns the last three binary digits of `N` with `y = x - Nπ/2` so that `|y| < π/2`.
*
* ## Method
*
* -   The method is to compute the integer (mod 8) and fraction parts of (2/π) * x without doing the full multiplication. In general, we skip the part of the product that are known to be a huge integer (more accurately, = 0 mod 8 ). Thus the number of operations are independent of the exponent of the input.
*
* -   (2/π) is represented by an array of 24-bit integers in `ipio2[]`.
*
* -   Input parameters:
*
*     -   `x[]` The input value (must be positive) is broken into `nx` pieces of 24-bit integers in double precision format. `x[i]` will be the i-th 24 bit of x. The scaled exponent of `x[0]` is given in input parameter `e0` (i.e., `x[0]*2^e0` match x's up to 24 bits).
*
*         Example of breaking a double positive `z` into `x[0]+x[1]+x[2]`:
*
*         ```tex
*         e0 = \mathrm{ilogb}(z) - 23
*         z = \mathrm{scalbn}(z, -e0)
*         ```
*
*         for `i = 0,1,2`
*
*         ```tex
*         x[i] = \lfloor z \rfloor
*         z = (z - x[i]) \times 2^{24}
*         ```
*
*     -   `y[]` output result in an array of double precision numbers.
*
*         The dimension of `y[]` is:
*         24-bit precision     1
*         53-bit precision     2
*         64-bit precision     2
*         113-bit precision    3
*
*         The actual value is the sum of them. Thus, for 113-bit precision, one may have to do something like:
*
*         ```tex
*         \mathrm{long\ double} \: t, w, r_{\text{head}}, r_{\text{tail}}; \\
*         t &= (\mathrm{long\ double}) y[2] + (\mathrm{long\ double}) y[1]; \\
*         w &= (\mathrm{long\ double}) y[0]; \\
*         r_{\text{head}} &= t + w; \\
*         r_{\text{tail}} &= w - (r_{\text{head}} - t);
*         ```
*
*     -   `e0` The exponent of `x[0]`. Must be <= 16360 or you need to expand the `ipio2` table.
*
*     -   `nx` dimension of `x[]`
*
*     -   `prec` an integer indicating the precision:
*         0 24 bits (single)
*         1 53 bits (double)
*         2 64 bits (extended)
*         3 113 bits (quad)
*
* -   External function:
*
*     -   double `scalbn()`, `floor()`;
*
* -   Here is the description of some local variables:
*
*     -   `jk` `jk+1` is the initial number of terms of `ipio2[]` needed in the computation. The minimum and recommended value for `jk` is 3,4,4,6 for single, double, extended, and quad. `jk+1` must be 2 larger than you might expect so that our recomputation test works. (Up to 24 bits in the integer part (the 24 bits of it that we compute) and 23 bits in the fraction part may be lost to cancellation before we recompute.)
*
*     -   `jz` local integer variable indicating the number of terms of `ipio2[]` used.
*
*     -   `jx` `nx - 1`
*
*     -   `jv` index for pointing to the suitable `ipio2[]` for the computation. In general, we want
*
*         ```tex
*         \frac{{2^{e0} \cdot x[0] \cdot \mathrm{ipio2}[jv-1] \cdot 2^{-24jv}}}{{8}}
*         ```
*
*         to be an integer. Thus
*
*         ```tex
*         e0 - 3 - 24 \cdot jv \geq 0 \quad \text{or} \quad \frac{{e0 - 3}}{{24}} \geq jv
*         ```
*
*         Hence
*
*         ```tex
*         jv = \max(0, \frac{{e0 - 3}}{{24}})
*         ```
*
*     -   `jp` `jp+1` is the number of terms in `PIo2[]` needed, `jp = jk`.
*
*     -   `q[]` double array with integral value, representing the 24-bits chunk of the product of `x` and `2/π`.
*
*     -   `q0` the corresponding exponent of `q[0]`. Note that the exponent for `q[i]` would be `q0-24*i`.
*
*     -   `PIo2[]` double precision array, obtained by cutting `π/2` into 24 bits chunks.
*
*     -   `f[]` `ipso2[]` in floating point
*
*     -   `iq[]` integer array by breaking up `q[]` in 24-bits chunk.
*
*     -   `fq[]` final product of `x*(2/π)` in `fq[0],..,fq[jk]`
*
*     -   `ih` integer. If >0 it indicates `q[]` is >= 0.5, hence it also indicates the _sign_ of the result.
*
* -   Constants:
*
*     -   The hexadecimal values are the intended ones for the following constants. The decimal values may be used, provided that the compiler will convert from decimal to binary accurately enough to produce the hexadecimal values shown.
*
* @param x       input value
* @param y       output array to store the remainder
* @param e0      the exponent of `x[0]` (must be <= 16360)
* @param nx      dimension of `x[]`
* @return        last 3 binary digits
*/
int32_t rempio2Kernel( const double* x, double *y, int32_t e0, int32_t nx ) {
	double F[ 20 ] = { 0.0 };
	double Q[ 20 ] = { 0.0 };
	int32_t IQ[ 20 ];
	double FQ[ 20 ];
	int32_t carry;
	int32_t jz;
	int32_t jx;
	int32_t jv;
	int32_t jp;
	int32_t jk;
	int32_t q0;
	int32_t ih;
	int32_t n;
	int32_t i;
	int32_t j;
	int32_t k;
	int32_t m;
	double fw;
	double z;

	// Initialize `jk` for double-precision floating-point numbers:
	jk = 4;
	jp = jk;

	// Determine `jx`, `jv`, `q0` (note that `q0 < 3`):
	jx = nx - 1;
	jv = ( e0 - 3 ) / 24;
	if ( jv < 0 ) {
		jv = 0;
	}
	q0 = e0 - ( 24 * ( jv + 1 ) );

	// Set up `F[0]` to `F[jx+jk]` where `F[jx+jk] = IPIO2[jv+jk]`:
	j = jv - jx;
	m = jx + jk;
	for ( i = 0; i <= m; i++ ) {
		if ( j < 0 ) {
			F[ i ] = ZERO;
		} else {
			F[ i ] = ( double )IPIO2[ j ];
		}
		j++;
	}

	// Compute `Q[0],Q[1],...,Q[jk]`:
	for ( i = 0; i <= jk; i++ ) {
		fw = 0.0;
		for ( j = 0; j <= jx; j++ ) {
			fw += x[ j ] * F[ jx + ( i - j ) ];
		}
		Q[ i ] = fw;
	}

	jz = jk;
recompute:
	// Distill `q[]` into `IQ[]` in reverse order...
	z = Q[ jz ];
	j = jz;
	for ( i = 0; j > 0; i++ ) {
		fw = ( double )( ( int32_t )( TWON24 * z ) );
		IQ[ i ] = (int32_t)( z - ( TWO24 * fw ) );
		z = Q[ j - 1 ] + fw;
		j--;
	}
	// Compute `n`...
	z = stdlib_base_ldexp( z, q0 );
	z -= 8.0 * stdlib_base_floor( z * 0.125 ); // Trim off integer >= 8
	n = ( int32_t )z;
	z -= ( double )n;
	ih = 0;
	if ( q0 > 0 ) {
		// Need `IQ[jz-1]` to determine `n`...
		i = ( IQ[ jz - 1 ] >> ( 24 - q0 ) );
		n += i;
		IQ[ jz - 1 ] -= ( i << ( 24 - q0 ) );
		ih = ( IQ[ jz - 1 ] >> ( 23 - q0 ) );
	} else if ( q0 == 0 ) {
		ih = ( IQ[ jz - 1 ] >> 23 );
	} else if ( z >= 0.5 ) {
		ih = 2;
	}

	// Case: q > 0.5
	if ( ih > 0 ) {
		n += 1;
		carry = 0;
		// Compute `1-q`:
		for ( i = 0; i < jz; i++ ) {
			j = IQ[ i ];
			if ( carry == 0 ) {
				if ( j != 0 ) {
					carry = 1;
					IQ[ i ] = 0x1000000 - j;
				}
			} else {
				IQ[ i ] = 0xffffff - j;
			}
		}
		if ( q0 > 0 ) {
			// Rare case: chance is 1 in 12...
			switch ( q0 ) {
			case 1:
				IQ[ jz - 1 ] &= 0x7fffff;
				break;
			case 2:
				IQ[ jz - 1 ] &= 0x3fffff;
				break;
			}
		}
		if ( ih == 2 ) {
			z = 1.0 - z;
			if ( carry != 0 ) {
				z -= stdlib_base_ldexp( 1.0, q0 );
			}
		}
	}

	// Check if re-computation is needed...
	if ( z == ZERO ) {
		j = 0;
		for ( i = jz - 1; i >= jk; i-- ) {
			j |= IQ[ i ];
		}
		if ( j == 0 ) {
			// Need re-computation...
			for ( k = 1; IQ[ jk - k ] == 0; k++ ) {
				// `k` is the number of terms needed...
			}

			for ( i = jz + 1; i <= jz + k; i++ ) {
				// Add `q[jz+1]` to `q[jz+k]`...
				F[ jx + i ] = ( double )IPIO2[ jv + i ];
				fw = 0.0;
				for ( j = 0; j <= jx; j++ ) {
					fw += x[ j ] * F[ jx + ( i - j ) ];
				}
				Q[ i ] = fw;
			}
			jz += k;
			goto recompute;
		}
		// Chop off zero terms...
		jz -= 1;
		q0 -= 24;
		while ( IQ[ jz ] == 0 ) {
			jz--;
			q0 -= 24;
		}
	} else {
		// Break `z` into 24-bit if necessary...
		z = stdlib_base_ldexp( z, -q0 );
		if ( z >= TWO24 ) {
			fw = ( double )( ( int32_t )( TWON24 * z ) );
			IQ[ jz ] = ( int32_t )( z - ( TWO24 * fw ) );
			jz += 1;
			q0 += 24;
			IQ[ jz ] = ( int32_t )fw;
		} else {
			IQ[ jz ] = ( int32_t )z;
		}
	}

	// Convert integer "bit" chunk to floating-point value...
	fw = stdlib_base_ldexp( 1.0, q0 );
	for ( i = jz; i >= 0; i-- ) {
		Q[ i ] = fw * ( double )IQ[ i ];
		fw *= TWON24;
	}

	// Compute `PIO2[0,...,jp]*q[jz,...,0]`...
	for ( i = jz; i >= 0; i-- ) {
		fw = 0.0;
		for ( k = 0; k <= jp && k <= jz - i; k++ ) {
			fw += PIO2[ k ] * Q[ i + k ];
		}
		FQ[ jz - i ] = fw;
	}
	// Compress `FQ[]` into `y[]`...
	fw = 0.0;
	for ( i = jz; i >= 0; i-- ) {
		fw += FQ[ i ];
	}
	if ( ih == 0 ) {
		y[ 0 ] = fw;
	} else {
		y[ 0 ] = -fw;
	}
	fw = FQ[ 0 ] - fw;
	for ( i = 1; i <= jz; i++ ) {
		fw += FQ[i];
	}
	if ( ih == 0 ) {
		y[ 1 ] = fw;
	} else {
		y[ 1 ] = -fw;
	}
	return n & 7;
}


/**
* Computes `x - nπ/2 = r`.
*
* ## Notes
*
* -   Returns `n` and stores the remainder `r` as two numbers `rem1` and `rem2`, such that `rem1+rem2 = r`.
*
* @param x       input value
* @param rem1    remainder element 1
* @param rem2    remainder element 2
* @return        factor of `π/2`
*
* @example
* #include <stdint.h>
*
* double rem1;
* double rem2;
* int32_t n = stdlib_base_rempio2( 128.0, &rem1, &rem2 );
*/
int32_t stdlib_base_rempio2( const double x, double *rem1, double *rem2 ) {
	double TX[ 3 ];
	double TY[ 2 ];
	uint32_t uhigh;
	uint32_t ulow;
	uint32_t uhx;
	int32_t high;
	int32_t low;
	int32_t ix;
	int32_t hx;
	int32_t e0;
	int32_t nx;
	int32_t i;
	int32_t j;
	int32_t n;
	double z;
	double w;
	double t;
	double r;

	// high word of x
	stdlib_base_float64_get_high_word( x, &uhx );
	hx = ( int32_t )uhx;
	ix = hx & STDLIB_CONSTANT_FLOAT64_HIGH_WORD_ABS_MASK;

	// Case: |x| ~<= π/4 (no need for reduction)
	if ( ix <= PIO4_HIGH_WORD ) {
		*rem1 = x;
		*rem2 = 0;
		return 0;
	}
	// Case: |x| ~<= 5π/4
	if ( ix <= FIVE_PIO4_HIGH_WORD ) {
		// Case: |x| ~= π/2 or π
		if ( ( ix & STDLIB_CONSTANT_FLOAT64_HIGH_WORD_SIGNIFICAND_MASK ) == PI_HIGH_WORD_SIGNIFICAND ) {
			// Cancellation => use medium case
			goto medium;
		}
		// Case: |x| ~<= 3π/4
		if ( ix <= THREE_PIO4_HIGH_WORD ) {
			if ( hx > 0 ) {
				// one round good to 85 bits
				z = x - PIO2_1;
				*rem1 = z - PIO2_1T;
				*rem2 = ( z - *rem1 ) - PIO2_1T;
				return 1;
			} else {
				z = x + PIO2_1;
				*rem1 = z + PIO2_1T;
				*rem2 = ( z - *rem1 ) + PIO2_1T;
				return -1;
			}
		} else {
			if ( hx > 0 ) {
				z = x - ( 2.0 * PIO2_1 );
				*rem1 = z - ( 2 * PIO2_1T );
				*rem2 = ( z - *rem1 ) - ( 2 * PIO2_1T );
				return 2;
			} else {
				z = x + ( 2.0 * PIO2_1 );
				*rem1 = z + ( 2.0 * PIO2_1T );
				*rem2 = ( z - *rem1 ) + ( 2.0 * PIO2_1T );
				return -2;
			}
		}
	}
	// Case: |x| ~<= 9π/4
	if ( ix <= NINE_PIO4_HIGH_WORD ) {
		// Case: |x| ~<= 7π/4
		if ( ix <= SEVEN_PIO4_HIGH_WORD ) {
			// Case: |x| ~= 3π/2
			if ( ix == THREE_PIO2_HIGH_WORD ) {
				goto medium;
			}
			if ( hx > 0 ) {
				z = x - ( 3 * PIO2_1 );
				*rem1 = z - ( 3 * PIO2_1T );
				*rem2 = ( z - *rem1 ) - ( 3 * PIO2_1T );
				return 3;
			} else {
				z = x + ( 3 * PIO2_1 );
				*rem1 = z + ( 3 * PIO2_1T );
				*rem2 = ( z - *rem1 ) + ( 3.0 * PIO2_1T );
				return -3;
			}
		} else {
		// Case: |x| ~= 4π/2
			if ( ix == TWO_PI_HIGH_WORD ) {
				goto medium;
			}
			if ( hx > 0 ) {
				z = x - ( 4 * PIO2_1 );
				*rem1 = z - ( 4 * PIO2_1T );
				*rem2 = ( z - *rem1 ) - ( 4 * PIO2_1T );
				return 4;
			} else {
				z = x + ( 4 * PIO2_1 );
				*rem1 = z + ( 4 * PIO2_1T );
				*rem2 = ( z - *rem1 ) + ( 4 * PIO2_1T );
				return -4;
			}
		}
	}
	// Case: |x| ~< 2^20*π/2 (medium size)
	if ( ix < MEDIUM ) {
medium:
		n = stdlib_base_round( x * INVPIO2 );
		r = x - ( n * PIO2_1 );
		w = n * PIO2_1T;

		// First rounding (good to 85 bits)...
		j = ix >> 20;
		*rem1 = r - w;
		stdlib_base_float64_get_high_word( *rem1, &uhigh );
		high = ( int32_t )uhigh;
		i = j - ( ( high >> 20 ) & EXPONENT_MASK );

		// Check if a second iteration is needed (good to 118 bits)...
		if ( i > 16 ) {
			t = r;
			w = n * PIO2_2;
			r = t - w;
			w = ( n * PIO2_2T ) - ( ( t - r ) - w );
			*rem1 = r - w;
			stdlib_base_float64_get_high_word( *rem1, &uhigh );
			high = ( int32_t )uhigh;
			i = j - ( ( high >> 20 ) & EXPONENT_MASK );

			// Check if a third iteration is needed (151 bits accumulated)...
			if ( i > 49 ) {
				// will cover all possible cases
				t = r;
				w = n * PIO2_3;
				r = t - w;
				w = ( n * PIO2_3T ) - ( ( t - r ) - w );
				*rem1 = r - w;
			}
		}
		*rem2 = ( r - *rem1 ) - w;
		return n;
	}
	// Case: x is NaN or infinity
	if( ix >= STDLIB_CONSTANT_FLOAT64_HIGH_WORD_EXPONENT_MASK ) {
		*rem1 = 0.0 / 0.0; // NaN
		*rem2 = 0.0 / 0.0; // NaN
		return 0;
	}
	// Set z = scalbn(|x|, ilogb(x)-23)...
	stdlib_base_float64_get_low_word( x, &ulow );
	low = ( int32_t )ulow;
	e0 = ( ix >> 20 ) - 1046; // `e0 = ilogb(z) - 23` => unbiased exponent minus 23
	stdlib_base_float64_from_words( ix - ( int32_t ) ( e0 << 20 ), low, &z );
	for ( i = 0; i < 2; i++ ) {
		TX[ i ] = ( double )( ( int32_t )z );
		z = ( z - TX[ i ] ) * TWO24;
	}
	TX[ 2 ] = z;
	nx = 3;
	while ( TX[ nx - 1 ] == ZERO ) {
		// Skip zero term...
		nx--;
	}
	n = rempio2Kernel( TX, TY, e0, nx);
	if ( hx < 0 ) {
		*rem1 = -TY[ 0 ];
		*rem2 = -TY[ 1 ];
		return -n;
	}
	*rem1 = TY[ 0 ];
	*rem2 = TY[ 1 ];
	return n;
}
