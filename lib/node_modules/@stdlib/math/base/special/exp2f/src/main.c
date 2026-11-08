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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_exp2f.c}. The implementation follows the original, but has been modified according to project conventions.
*
* ```text
* Copyright (c) 2005 David Schultz <das@FreeBSD.ORG>
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions
* are met:
* 1. Redistributions of source code must retain the above copyright
*    notice, this list of conditions and the following disclaimer.
* 2. Redistributions in binary form must reproduce the above copyright
*    notice, this list of conditions and the following disclaimer in the
*    documentation and/or other materials provided with the distribution.
*
* THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
* ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
* DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
* OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
* HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
* LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
* OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
* SUCH DAMAGE.
* ```
*/

#include "stdlib/math/base/special/exp2f.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/number/float32/base/to_word.h"
#include "stdlib/number/float64/base/from_words.h"
#include "stdlib/constants/float32/pinf.h"
#include "stdlib/constants/float32/ninf.h"
#include <stdint.h>

// Table size: 2^4 = 16
#define TBLSIZE 16

// Number of bits used to index into the table:
#define TBLBITS 4

// 2^(i/16) for i = -8, -7, ..., 7 (in double-precision, offset by 8):
static const double TBL[ TBLSIZE ] = {
	0.7071067811865476,  // 0x1.6a09e667f3bcdp-1
	0.7384130729697497,  // 0x1.7a11473eb0187p-1
	0.7711054127039704,  // 0x1.8ace5422aa0dbp-1
	0.8052451659746271,  // 0x1.9c49182a3f090p-1
	0.8408964152537145,  // 0x1.ae89f995ad3adp-1
	0.8781260801866497,  // 0x1.c199bdd85529cp-1
	0.9170040432046712,  // 0x1.d5818dcfba487p-1
	0.9576032806985737,  // 0x1.ea4afa2a490dap-1
	1.0,                 // 0x1.0000000000000p+0
	1.0442737824274138,  // 0x1.0b5586cf9890fp+0
	1.0905077326652577,  // 0x1.172b83c7d517bp+0
	1.1387886347566916,  // 0x1.2387a6e756238p+0
	1.189207115002721,   // 0x1.306fe0a31b715p+0
	1.241857812073484,   // 0x1.3dea64c123422p+0
	1.2968395546510096,  // 0x1.4bfdad5362a27p+0
	1.3542555469368927   // 0x1.5ab07dd485429p+0
};

// Reduction constant: 1.5*2^23/16 = 786432 => 0 10010010 10000000000000000000000 => 0x49400000 = 1228931072
static const float REDUX = 786432.0f;

// Overflow threshold: 2^x overflows for x >= 128
static const float OVERFLOW_THRESHOLD = 128.0f;

// Underflow threshold: 2^x underflows to 0 for x <= -150
static const float UNDERFLOW_THRESHOLD = -150.0f;

// Near-zero threshold: 2^-25 => 0 01100110 00000000000000000000000 => 0x33000000 = 855638016
static const float NEARZERO = 1.0f / ( 1 << 25 );

// High word of 1.0 => 0 01111111111 00000000000000000000 => 0x3ff00000 = 1072693248
static const uint32_t ONE_HIGH_WORD = 0x3ff00000;

// BEGIN: polyval_p12

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
static double polyval_p12( const double x ) {
	return 0.6931471824645996 + (x * 0.24022650718688965);
}

// END: polyval_p12

// BEGIN: polyval_p34

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
static double polyval_p34( const double x ) {
	return 0.055505409836769104 + (x * 0.009618354961276054);
}

// END: polyval_p34

/**
* Evaluates the base `2` exponential function in single-precision floating-point format.
*
* ## Method
*
* (equally-spaced tables)
*
* -   Reduce \\( x \\):
*
*     ```tex
*     x = k + y
*     ```
*
*     for integer \\( k \\) and \\( |y| \leq 1/2 \\). Thus we have \\( \operatorname{exp2f}(x) = 2^k \cdot \operatorname{exp2}(y) \\).
*
* -   Reduce \\( y \\):
*
*     ```tex
*     y = i/\mathrm{TBLSIZE} + z
*     ```
*
*     for integer \\( i \\) near \\( y \cdot \mathrm{TBLSIZE} \\). Thus we have \\( \operatorname{exp2}(y) = \operatorname{exp2}(i/\mathrm{TBLSIZE}) \cdot \operatorname{exp2}(z) \\), with \\( |z| \leq 2^{-(\mathrm{TBLBITS}+1)} \\).
*
* -   We compute \\( \operatorname{exp2}(i/\mathrm{TBLSIZE}) \\) via table lookup and \\( \operatorname{exp2}(z) \\) via a degree-4 minimax polynomial with maximum error under \\( 1.4 \cdot 2^{-33} \\). Using double precision for everything except the reduction makes roundoff error insignificant and simplifies the scaling step.
*
* This method is due to Tang, but the implementation does not use his suggested parameters.
*
* ## Notes
*
* -   Accuracy: peak error < 0.501 ulp; location of peak: -0.030110927.
*
* ## References
*
* -   Tang, Ping-Tak Peter. 1989. "Table-driven implementation of the exponential function in IEEE floating-point arithmetic." _ACM Transactions on Mathematical Software_ 15 (2): 144–57. doi:[10.1145/63522.214389](https://doi.org/10.1145/63522.214389).
*
* @param x    input value
* @return     output value
*
* @example
* float out = stdlib_base_exp2f( 3.0f );
* // returns 8.0f
*/
float stdlib_base_exp2f( const float x ) {
	uint32_t i0;
	uint32_t hi;
	double twopk;
	double tv;
	double z;
	double u;
	float t;

	if ( stdlib_base_is_nanf( x ) || x == STDLIB_CONSTANT_FLOAT32_PINF ) {
		return x;
	}
	if ( x == STDLIB_CONSTANT_FLOAT32_NINF ) {
		return 0.0f;
	}
	if ( x >= OVERFLOW_THRESHOLD ) {
		return STDLIB_CONSTANT_FLOAT32_PINF;
	}
	if ( x <= UNDERFLOW_THRESHOLD ) {
		return 0.0f;
	}
	if ( x > -NEARZERO && x < NEARZERO ) {
		return 1.0f + x;
	}
	// Reduce `x`, computing `z`, `i0`, and `k` (the high word of 2^k)...
	t = x + REDUX;
	stdlib_base_float32_to_word( t, &i0 );
	i0 += TBLSIZE / 2;
	hi = ONE_HIGH_WORD + ( ( i0 >> TBLBITS ) << 20 );
	i0 &= TBLSIZE - 1;
	t -= REDUX;
	z = (double)x - (double)t;
	stdlib_base_float64_from_words( hi, 0, &twopk );

	// Compute r = exp2(y) = TBL[ i0 ] * p(z)...
	tv = TBL[ i0 ];
	u = tv * z;
	tv = tv + ( u * polyval_p12( z ) ) + ( u * ( z * z ) * polyval_p34( z ) );

	// Scale by 2^k:
	return (float)( tv * twopk );
}
