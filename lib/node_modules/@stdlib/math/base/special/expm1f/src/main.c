/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_expm1f.c}. The implementation follows the original, but has been modified according to project conventions.
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

#include "stdlib/math/base/special/expm1f.h"
#include "stdlib/number/float32/base/to_word.h"
#include "stdlib/number/float32/base/from_word.h"
#include "stdlib/constants/float32/exponent_bias.h"
#include "stdlib/constants/float32/pinf.h"
#include <stdint.h>

// VARIABLES //

// Overflow threshold = 8.8721679688e+01 => 0 10000101 01100010111000110000000 => 0x42b17180 = 1118925184
static const float OVERFLOW_THRESHOLD = 8.8721679688e+01f;

// High word of ln(2) = 6.9313812256e-01 => 0 01111110 01100010111000110000000 => 0x3f317180 = 1060204928
static const float LN2_HI = 6.9313812256e-01f;

// Low word of ln(2) = 9.0580006145e-06 => 0 01101110 00101111111011111010001 => 0x3717f7d1 = 924317649
static const float LN2_LO = 9.0580006145e-06f;

// 1/ln(2) = 1.4426950216e+00 => 0 01111111 01110001010101000111011 => 0x3fb8aa3b = 1069066811
static const float INV_LN2 = 1.4426950216e+00f;

// 2^127 = 1.7014118346046923e+38 => 0 11111110 00000000000000000000000 => 0x7f000000 = 2130706432
static const float TWO127 = 1.7014118346046923e+38f;

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

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
static float polyval_q( const float x ) {
	return -0.033333212137f + (x * 0.0015807170421f);
}

// END: polyval_q

/* End auto-generated functions. */

/**
* Computes `exp(x) - 1` for a single-precision floating-point number.
*
* ## Method
*
* 1.  Given \\(x\\), we use argument reduction to find \\(r\\) and an integer \\(k\\) such that
*
*     ```tex
*     x = k \cdot \ln(2) + r
*     ```
*
*     where
*
*     ```tex
*     |r| \leq \frac{\ln(2)}{2} \approx 0.34658
*     ```
*
*     <!-- <note> -->
*
*     A correction term \\(c\\) will need to be computed to compensate for the error in \\(r\\) when rounded to a floating-point number.
*
*     <!-- </note> -->
*
* 2.  To approximate \\(\operatorname{expm1f}(r)\\), we define \\(\operatorname{R1}(r^2)\\) by
*
*     ```tex
*     r \frac{e^r + 1}{e^r - 1} = 2 + \frac{r^2}{6} \operatorname{R1}(r^2)
*     ```
*
*     We use a polynomial of degree \\(2\\) in \\(r^2\\) on the interval \\(\[-0.34568,0.34568]\\) to approximate \\(\mathrm{R1}\\). The maximum error of this polynomial approximation is bounded by \\(2^{-30.04}\\). In other words,
*
*     ```tex
*     \operatorname{R1}(z) \approx 1 + \mathrm{Q1} \cdot z + \mathrm{Q2} \cdot z^2
*     ```
*
*     where \\(z = r^2\\) and
*
*     ```tex
*     \begin{align*}
*     \mathrm{Q1} &= -1.6666606069\mbox{e-}2 \\
*     \mathrm{Q2} &= 3.9517926052\mbox{e-}4
*     \end{align*}
*     ```
*
*     \\(\operatorname{expm1f}(r) = e^r - 1\\) is then computed by the following specific way which minimizes the accumulated rounding error
*
*     ```tex
*     \operatorname{expm1f}(r) = r + \frac{r^2}{2} + \frac{r^3}{2} \biggl( \frac{3 - (\mathrm{R1} + \mathrm{R1} \cdot \frac{r}{2})}{6 - r ( 3 - \mathrm{R1} \cdot \frac{r}{2})} \biggr)
*     ```
*
* 3.  To scale back to obtain \\(\operatorname{expm1f}(x)\\), we have (from step 1)
*
*     ```tex
*     \operatorname{expm1f}(x) = \begin{cases}
*     2^k (\operatorname{expm1f}(r) + 1) - 1 \\
*     2^k (\operatorname{expm1f}(r) + (1-2^{-k}))
*     \end{cases}
*     ```
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* \operatorname{expm1f}(\infty) &= \infty \\
* \operatorname{expm1f}(-\infty) &= -1 \\
* \operatorname{expm1f}(\mathrm{NaN}) &= \mathrm{NaN}
* \end{align*}
* ```
*
* ## Notes
*
* -   For finite arguments, only \\(\operatorname{expm1f}(0) = 0\\) is exact.
* -   To save one multiplication, we scale the coefficient \\(\mathrm{Qi}\\) to \\(\mathrm{Qi} \cdot {2^i}\\) and replace \\(z\\) by \\(\frac{x^2}{2}\\).
* -   For IEEE 754 single, if \\(x > 8.8721679688\mbox{e+}01\\), then \\(\operatorname{expm1f}(x)\\) will overflow.
* -   The hexadecimal values listed in the source are the intended ones for the implementation constants. Decimal values may be used, provided that the compiler will convert from decimal to binary accurately enough to produce the intended hexadecimal values.
* -   According to an error analysis, the error is always less than \\(1\\) ulp (unit in the last place).
*
* @param x    input value
* @return     output value
*
* @example
* float out = stdlib_base_expm1f( 0.2f );
* // returns ~0.221f
*/
float stdlib_base_expm1f( const float x ) {
	uint32_t hx;
	int32_t xsb;
	float twopk;
	int32_t k;
	float hxs;
	float hfx;
	float hi;
	float lo;
	float r1;
	float xv;
	float y;
	float c;
	float t;
	float e;

	xv = x;
	stdlib_base_float32_to_word( xv, &hx );
	xsb = hx & 0x80000000; // sign bit of x
	hx &= 0x7fffffff; // high word of |x|

	// Filter out huge and non-finite arguments...
	if ( hx >= 0x4195b844 ) { // if |x| >= 27*ln(2)
		if ( hx >= 0x42b17218 ) { // if |x| >= 88.721...
			if ( hx > 0x7f800000 ) {
				return xv + xv; // NaN
			}
			if ( hx == 0x7f800000 ) {
				// Case: exp(+-inf) = {inf, -1}
				return ( xsb == 0 ) ? xv : -1.0f;
			}
			if ( xv > OVERFLOW_THRESHOLD ) {
				return STDLIB_CONSTANT_FLOAT32_PINF; // overflow
			}
		}
		if ( xsb != 0 ) { // if x <= -27*ln(2)
			return -1.0f;
		}
	}

	c = 0.0f;

	// Argument reduction...
	if ( hx > 0x3eb17218 ) { // if |x| > 0.5*ln(2)
		if ( hx < 0x3f851592 ) { // if |x| < 1.5*ln(2)
			if ( xsb == 0 ) {
				hi = xv - LN2_HI;
				lo = LN2_LO;
				k = 1;
			} else {
				hi = xv + LN2_HI;
				lo = -LN2_LO;
				k = -1;
			}
		} else {
			if ( xsb == 0 ) {
				k = (int32_t)( ( INV_LN2 * xv ) + 0.5f );
			} else {
				k = (int32_t)( ( INV_LN2 * xv ) - 0.5f );
			}
			t = (float)k;
			hi = xv - ( t * LN2_HI ); // t*ln2_hi is exact here
			lo = t * LN2_LO;
		}
		xv = hi - lo;
		c = ( hi - xv ) - lo;
	} else if ( hx < 0x33000000 ) { // if |x| < 2**-25
		return xv;
	} else {
		k = 0;
	}

	// x is now in primary range...
	hfx = 0.5f * xv;
	hxs = xv * hfx;
	r1 = 1.0f + ( hxs * polyval_q( hxs ) );
	t = 3.0f - ( r1 * hfx );
	e = hxs * ( ( r1 - t ) / ( 6.0f - ( xv * t ) ) );
	if ( k == 0 ) {
		return xv - ( ( xv * e ) - hxs ); // c is 0
	}
	stdlib_base_float32_from_word( ( (uint32_t)( STDLIB_CONSTANT_FLOAT32_EXPONENT_BIAS + k ) ) << 23, &twopk ); // 2^k
	e = ( xv * ( e - c ) ) - c;
	e -= hxs;
	if ( k == -1 ) {
		return ( 0.5f * ( xv - e ) ) - 0.5f;
	}
	if ( k == 1 ) {
		if ( xv < -0.25f ) {
			return -2.0f * ( e - ( xv + 0.5f ) );
		}
		return 1.0f + ( 2.0f * ( xv - e ) );
	}
	if ( k <= -2 || k > 56 ) { // suffice to return exp(x)-1
		y = 1.0f - ( e - xv );
		if ( k == 128 ) {
			y = ( y * 2.0f ) * TWO127;
		} else {
			y = y * twopk;
		}
		return y - 1.0f;
	}
	if ( k < 23 ) {
		stdlib_base_float32_from_word( (uint32_t)0x3f800000 - ( (uint32_t)0x1000000 >> (uint32_t)k ), &t ); // t=1-2^-k
		y = t - ( e - xv );
		y = y * twopk;
	} else {
		stdlib_base_float32_from_word( ( (uint32_t)( STDLIB_CONSTANT_FLOAT32_EXPONENT_BIAS - k ) ) << 23, &t ); // 2^-k
		y = xv - ( e + t );
		y += 1.0f;
		y = y * twopk;
	}
	return y;
}
