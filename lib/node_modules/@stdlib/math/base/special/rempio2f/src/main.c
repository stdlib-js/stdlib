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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_rem_pio2f.c}. The implementation follows the original, but has been modified according to project conventions.
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

#include "stdlib/math/base/special/rempio2f.h"
#include "stdlib/math/base/special/roundf.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/special/ldexp.h"
#include "stdlib/number/float32/base/from_word.h"
#include "stdlib/number/float32/base/to_word.h"
#include "stdlib/constants/float32/abs_mask.h"
#include "stdlib/constants/float32/exponent_mask.h"
#include <stdint.h>

static const double ZERO =  0.00000000000000000000e+00;       // 0x00000000, 0x00000000
static const double TWO24 =  1.67772160000000000000e+07;      // 0x41700000, 0x00000000
static const double TWON24 = 5.96046447753906250000e-08;      // 0x3E700000, 0x00000000
static const double INVPIO2 =  6.36619772367581382433e-01;    // 0x3FE45F30, 0x6DC9C883
static const double PIO2_1  =  1.57079631090164184570e+00;    // 0x3FF921FB, 0x50000000
static const double PIO2_1T =  1.58932547735281966916e-08;    // 0x3E5110b4, 0x611A6263

// 2^28*π/2 = 421657428.2663131 => 0100000110111001001000011111101101010100010001000010110100011000 => high word => 0x4dc90fdb = 1102651899 => 01000001101110010010000111111011
static const int32_t MEDIUM = 0x4dc90fdb;


/*
* Table of constants for `2/π` (`396` hex digits, `476` decimal).
*
* Integer array which contains the (`24*i`)-th to (`24*i+23`)-th bit of `2/π` after binary point. The corresponding floating value is
*
* ```tex
* \operatorname{ipio2}[i] \cdot 2^{-24(i+1)}
* ```
*
* This table must have at least `(e0-3)/24 + jk` terms. For single precision (`e0 <= 127`, `jk = 3`), this is `9`.
*/
static const int32_t IPIO2[] = {
	0xA2F983, 0x6E4E44, 0x1529FC, 0x2757D1, 0xF534DD, 0xC0DB62,
	0x95993C, 0x439041, 0xFE5163
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
* Returns the last three binary digits of `N` with `y = x - Nπ/2` so that `|y| < π/2` (single-precision).
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
* @param e0      the exponent of `x[0]` (must be <= 127)
* @param nx      dimension of `x[]`
* @return        last 3 binary digits
*/
int32_t rempio2fKernel( const double* x, double *y, int32_t e0, int32_t nx ) {
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

	// Initialize `jk` for single-precision floating-point numbers:
	jk = 3;
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
	return n & 7;
}


/**
* Computes `x - nπ/2 = r` (single-precision).
*
* @param x       input value
* @param rem     remainder element
* @return        factor of `π/2`
*
* @example
* #include <stdint.h>
*
* double rem;
* int32_t n = stdlib_base_rempio2f( 128.0f, &rem );
*/
int32_t stdlib_base_rempio2f( const float x, double *rem ) {
	double TX[ 1 ];
	double TY[ 1 ];
	uint32_t uhx;
	int32_t ix;
	int32_t hx;
	int32_t e0;
	int32_t n;
	double w;
	double r;
	float z;

	// high word of x
	stdlib_base_float32_to_word( x, &uhx );
	hx = ( int32_t )uhx;
	ix = hx & STDLIB_CONSTANT_FLOAT32_ABS_MASK;

	// Case: |x| ~< 2^28*π/2 (medium size)
	if ( ix < MEDIUM ) {
		n = stdlib_base_roundf( x * INVPIO2 );
		r = x - ( n * PIO2_1 );
		w = n * PIO2_1T;
		*rem = r - w;
		return n;
	}
	// Case: x is NaN or infinity
	if( ix >= STDLIB_CONSTANT_FLOAT32_EXPONENT_MASK ) {
		*rem = 0.0 / 0.0; // NaN
		return 0;
	}
	// Set z = scalbn(|x|, ilogb(|x|)-23)...
	e0 = ( ix >> 23 ) - 150; // `e0 = ilogb(|x|) - 23` => unbiased exponent minus 23
	stdlib_base_float32_from_word( ix - ( int32_t ) ( e0 << 23 ), &z );
	TX[ 0 ] = z;
	n = rempio2fKernel( TX, TY, e0, 1 );
	if ( hx < 0 ) {
		*rem = -TY[ 0 ];
		return -n;
	}
	*rem = TY[ 0 ];
	return n;
}
