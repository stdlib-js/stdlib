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
* * The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified according to project conventions.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
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

#include "stdlib/math/base/special/expf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/special/ldexpf.h"
#include "stdlib/constants/float32/ninf.h"
#include "stdlib/constants/float32/pinf.h"
#include <stdint.h>

static const float LN2_HI = 6.9314575195e-01f;         // 0x3F317200
static const float LN2_LO = 1.4286067653e-06f;         // 0x35BFBE8E
static const float INVLN2 = 1.4426950216e+00f;         // 0x3FB8AA3B
static const float EXP_OVERFLOW = 8.8722831726e+01f;   // 0x42B17217
static const float EXP_UNDERFLOW = -1.0397208405e+02f; // 0xC2CFF1B5
static const float NEARZERO = 1.0f / (1 << 13);        // 0x39000000
static const float NEG_NEARZERO = -NEARZERO;           // 0xB9000000

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
static float polyval_p( const float x ) {
	return 0.1666662544f + (x * -0.0027667332906f);
}

// END: polyval_p

/* End auto-generated functions. */

/**
* Computes \\(e^{r} 2^k\\) for a single-precision floating-point number, where \\(r = \mathrm{hi} - \mathrm{lo}\\) and \\(|r| \leq \ln(2)/2\\).
*
* @param hi    upper bound
* @param lo    lower bound
* @param k     power of 2
* @return      function value
*/
static float expmultif( const float hi, const float lo, const int32_t k ) {
	float r;
	float t;
	float c;
	float y;

	r = hi - lo;
	t = r * r;
	c = r - ( t * polyval_p( t ) );
	y = 1.0f - ( lo - ( ( r * c ) / ( 2.0f - c ) ) - hi );

	return stdlib_base_ldexpf( y, k );
}

/**
* Evaluates the natural exponential function for a single-precision floating-point number.
*
* ## Method
*
* 1.  We reduce \\( x \\) to an \\( r \\) so that \\( |r| \leq 0.5 \cdot \ln(2) \approx 0.34658 \\). Given \\( x \\), we find an \\( r \\) and integer \\( k \\) such that
*
*     ```tex
*     \begin{align*}
*     x &= k \cdot \ln(2) + r \\
*     |r| &\leq 0.5 \cdot \ln(2)
*     \end{align*}
*     ```
*
*     <!-- <note> -->
*
*     \\( r \\) can be represented as \\( r = \mathrm{hi} - \mathrm{lo} \\) for better accuracy.
*
*     <!-- </note> -->
*
* 2.  We approximate of \\( e^{r} \\) by a special rational function on the interval \\(\[0,0.34658]\\):
*
*     ```tex
*     \begin{align*}
*     R\left(r^2\right) &= r \cdot \frac{ e^{r}+1 }{ e^{r}-1 } \\
*     &= 2 + \frac{r^2}{6} - \frac{r^4}{360} + \ldots
*     \end{align*}
*     ```
*
*     We use a special Remes algorithm on \\(\[0,0.34658]\\) to generate a polynomial of degree \\(2\\) to approximate \\(R\\). The maximum error of this polynomial approximation is bounded by \\(2^{-27.74}\\). In other words,
*
*     ```tex
*     R(z) \sim 2 + P_1 z + P_2 z^2
*     ```
*
*     where \\( z = r^2 \\) and
*
*     ```tex
*     \left|  2 + P_1 z + P_2 z^2  - R(z) \right| \leq 2^{-27.74}
*     ```
*
*     <!-- <note> -->
*
*     The values of \\( P_1 \\) to \\( P_2 \\) are listed in the source code.
*
*     <!-- </note> -->
*
*     The computation of \\( e^{r} \\) thus becomes
*
*     ```tex
*     \begin{align*}
*     e^{r} &= 1 + \frac{2r}{R-r} \\
*           &= 1 + r + \frac{r \cdot R_1(r)}{2 - R_1(r)}\ \text{for better accuracy}
*     \end{align*}
*     ```
*
*     where
*
*     ```tex
*     R_1(r) = r - P_1\ r^2 + P_2\ r^4
*     ```
*
* 3.  We scale back to obtain \\( e^{x} \\). From step 1, we have
*
*     ```tex
*     e^{x} = 2^k e^{r}
*     ```
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* e^\infty &= \infty \\
* e^{-\infty} &= 0 \\
* e^{\mathrm{NaN}} &= \mathrm{NaN} \\
* e^0 &= 1\ \mathrm{is\ exact\ for\ finite\ argument\ only}
* \end{align*}
* ```
*
* ## Notes
*
* -   The hexadecimal values included in the source code are the intended ones for the used constants. Decimal values may be used, provided that the compiler will convert from decimal to binary accurately enough to produce the intended hexadecimal values.
*
* @param x    input value
* @return     output value
*
* @example
* float out = stdlib_base_expf( 0.0f );
* // returns 1.0f
*/
float stdlib_base_expf( const float x ) {
	int32_t k;
	float hi;
	float lo;

	if ( stdlib_base_is_nanf( x ) || x == STDLIB_CONSTANT_FLOAT32_PINF ) {
		return x;
	}
	if ( x == STDLIB_CONSTANT_FLOAT32_NINF ) {
		return 0.0f;
	}
	if ( x > EXP_OVERFLOW ) {
		return STDLIB_CONSTANT_FLOAT32_PINF;
	}
	if ( x < EXP_UNDERFLOW ) {
		return 0.0f;
	}
	if ( x > NEG_NEARZERO && x < NEARZERO ) {
		return 1.0f + x;
	}
	// Reduce and compute `r = hi - lo` for extra precision...
	if ( x < 0.0f ) {
		k = (int32_t)( ( INVLN2 * x ) - 0.5f );
	} else {
		k = (int32_t)( ( INVLN2 * x ) + 0.5f );
	}
	hi = x - ( k * LN2_HI );
	lo = k * LN2_LO;

	return expmultif( hi, lo, k );
}
