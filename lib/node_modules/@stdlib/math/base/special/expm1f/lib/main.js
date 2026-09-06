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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_expm1f.c}. The implementation follows the original, but has been modified for JavaScript.
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

'use strict';

// MODULES //

var toWordf = require( '@stdlib/number/float32/base/to-word' );
var fromWordf = require( '@stdlib/number/float32/base/from-word' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var FLOAT32_EXPONENT_BIAS = require( '@stdlib/constants/float32/exponent-bias' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var polyval = require( './polyval_q.js' );


// VARIABLES //

// Overflow threshold = 8.8721679688e+01 => 0 10000101 01100010111000110000000 => 0x42b17180 = 1118925184
var OVERFLOW_THRESHOLD = f32( 8.8721679688e+01 );

// High word of ln(2) = 6.9313812256e-01 => 0 01111110 01100010111000110000000 => 0x3f317180 = 1060204928
var LN2_HI = f32( 6.9313812256e-01 );

// Low word of ln(2) = 9.0580006145e-06 => 0 01101110 00101111111011111010001 => 0x3717f7d1 = 924317649
var LN2_LO = f32( 9.0580006145e-06 );

// 1/ln(2) = 1.4426950216e+00 => 0 01111111 01110001010101000111011 => 0x3fb8aa3b = 1069066811
var INV_LN2 = f32( 1.4426950216e+00 );

// 2^127 = 1.7014118346046923e+38 => 0 11111110 00000000000000000000000 => 0x7f000000 = 2130706432
var TWO127 = f32( 1.7014118346046923e+38 );

var NEG_QUARTER = f32( -0.25 );
var NEG_ONE = f32( -1.0 );
var NEG_TWO = f32( -2.0 );
var HALF = f32( 0.5 );
var ONE = f32( 1.0 );
var TWO = f32( 2.0 );
var THREE = f32( 3.0 );
var SIX = f32( 6.0 );


// MAIN //

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
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var v = expm1f( 0.2 );
* // returns ~0.221
*
* @example
* var v = expm1f( -9.0 );
* // returns ~-1.0
*
* @example
* var v = expm1f( 0.0 );
* // returns 0.0
*
* @example
* var v = expm1f( NaN );
* // returns NaN
*/
function expm1f( x ) {
	var twopk;
	var xsb;
	var hfx;
	var hxs;
	var r1;
	var hi;
	var lo;
	var hx;
	var c;
	var t;
	var e;
	var y;
	var k;

	x = f32( x );
	hx = toWordf( x );
	xsb = hx & 0x80000000; // sign bit of x
	hx = ( hx & 0x7fffffff ) >>> 0; // high word of |x|

	// Filter out huge and non-finite arguments...
	if ( hx >= 0x4195b844 ) { // if |x| >= 27*ln(2)
		if ( hx >= 0x42b17218 ) { // if |x| >= 88.721...
			if ( hx > 0x7f800000 ) {
				return x; // NaN
			}
			if ( hx === 0x7f800000 ) {
				// Case: exp(+-inf) = {inf, -1}
				return ( xsb === 0 ) ? x : NEG_ONE;
			}
			if ( x > OVERFLOW_THRESHOLD ) {
				return PINF; // overflow
			}
		}
		if ( xsb !== 0 ) { // if x <= -27*ln(2)
			return NEG_ONE;
		}
	}

	// Argument reduction...
	if ( hx > 0x3eb17218 ) { // if |x| > 0.5*ln(2)
		if ( hx < 0x3f851592 ) { // if |x| < 1.5*ln(2)
			if ( xsb === 0 ) {
				hi = f32( x - LN2_HI );
				lo = LN2_LO;
				k = 1;
			} else {
				hi = f32( x + LN2_HI );
				lo = -LN2_LO;
				k = -1;
			}
		} else {
			if ( xsb === 0 ) {
				k = f32( f32( INV_LN2 * x ) + HALF );
			} else {
				k = f32( f32( INV_LN2 * x ) - HALF );
			}
			k |= 0; // use a bitwise OR to cast `k` to an integer (see also asm.js type annotations: http://asmjs.org/spec/latest/#annotations)
			t = k;
			hi = f32( x - f32( t * LN2_HI ) ); // t*ln2_hi is exact here
			lo = f32( t * LN2_LO );
		}
		x = f32( hi - lo );
		c = f32( f32( hi - x ) - lo );
	} else if ( hx < 0x33000000 ) { // if |x| < 2**-25
		return x;
	} else {
		k = 0;
	}

	// x is now in primary range...
	hfx = f32( HALF * x );
	hxs = f32( x * hfx );
	r1 = f32( ONE + f32( hxs * polyval( hxs ) ) );
	t = f32( THREE - f32( r1 * hfx ) );
	e = f32( hxs * f32( f32( r1 - t ) / f32( SIX - f32( x * t ) ) ) );
	if ( k === 0 ) {
		return f32( x - f32( f32( x * e ) - hxs ) ); // c is 0
	}
	twopk = fromWordf( ( ( FLOAT32_EXPONENT_BIAS + k ) << 23 ) >>> 0 ); // 2^k
	e = f32( f32( x * f32( e - c ) ) - c );
	e = f32( e - hxs );
	if ( k === -1 ) {
		return f32( f32( HALF * f32( x - e ) ) - HALF );
	}
	if ( k === 1 ) {
		if ( x < NEG_QUARTER ) {
			return f32( NEG_TWO * f32( e - f32( x + HALF ) ) );
		}
		return f32( ONE + f32( TWO * f32( x - e ) ) );
	}
	if ( k <= -2 || k > 56 ) { // suffice to return exp(x)-1
		y = f32( ONE - f32( e - x ) );
		if ( k === 128 ) {
			y = f32( f32( y * TWO ) * TWO127 );
		} else {
			y = f32( y * twopk );
		}
		return f32( y - ONE );
	}
	if ( k < 23 ) {
		t = fromWordf( ( 0x3f800000 - ( ( 0x1000000 >> k ) >>> 0 ) ) >>> 0 ); // t=1-2^-k
		y = f32( t - f32( e - x ) );
		y = f32( y * twopk );
	} else {
		t = fromWordf( ( ( FLOAT32_EXPONENT_BIAS - k ) << 23 ) >>> 0 ); // 2^-k
		y = f32( x - f32( e + t ) );
		y = f32( y + ONE );
		y = f32( y * twopk );
	}
	return y;
}


// EXPORTS //

module.exports = expm1f;
