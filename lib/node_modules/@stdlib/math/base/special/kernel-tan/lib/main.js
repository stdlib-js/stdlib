/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_tan.c}. The implementation follows the original, but has been modified for JavaScript.
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

'use strict';

// MODULES //

var getHighWord = require( '@stdlib/number/float64/base/get-high-word' );
var setLowWord = require( '@stdlib/number/float64/base/set-low-word' );
var polyvalOdd = require( './polyval_t_odd.js' );
var polyvalEven = require( './polyval_t_even.js' );


// VARIABLES //

var PIO4 = 7.85398163397448278999e-01;
var PIO4LO = 3.06161699786838301793e-17;
var T0 = 3.33333333333334091986e-01; // 3FD55555, 55555563

// Absolute value mask: 2147483647 => 0x7fffffff => 01111111111111111111111111111111
var HIGH_WORD_ABS_MASK = 0x7fffffff|0; // asm type annotation


// MAIN //

/**
* Computes the tangent on \\( \approx\[-\pi/4, \pi/4] \\) (except on -0), \\( \pi/4 \approx 0.7854 \\).
*
* ## Method
*
* -   Since \\( \tan(-x) = -\tan(x) \\), we need only to consider positive \\( x \\).
*
* -   Callers must return \\( \tan(-0) = -0 \\) without calling here since our odd polynomial is not evaluated in a way that preserves \\( -0 \\). Callers may do the optimization \\( \tan(x) \approx x \\) for tiny \\( x \\).
*
* -   \\( \tan(x) \\) is approximated by a odd polynomial of degree 27 on \\( \[0, 0.67434] \\)
*
*     ```tex
*     \tan(x) \approx x + T_1 x^3 + \ldots + T_{13} x^{27}
*     ```
*     where
*
*     ```tex
*     \left| \frac{\tan(x)}{x} - \left( 1 + T_1 x^2 + T_2 x^4 + \ldots + T_{13} x^{26} \right) \right|  \le 2^{-59.2}
*     ```
*
* -   Note: \\( \tan(x+y) = \tan(x) + \tan'(x) \cdot y \approx \tan(x) + ( 1 + x \cdot x ) \cdot y \\). Therefore, for better accuracy in computing \\( \tan(x+y) \\), let
*
*     ```tex
*     r = x^3 \cdot \left( T_2+x^2 \cdot (T_3+x^2 \cdot (\ldots+x^2 \cdot (T_{12}+x^2 \cdot T_{13}))) \right)
*     ```
*
*     then
*
*     ```tex
*     \tan(x+y) = x^3 + \left( T_1 \cdot x^2 + (x \cdot (r+y)+y) \right)
*     ```
*
* -   For \\( x \\) in \\( \[0.67434, \pi/4] \\),  let \\( y = \pi/4 - x \\), then
*
*     ```tex
*     \tan(x) = \tan\left(\tfrac{\pi}{4}-y\right) = \frac{1-\tan(y)}{1+\tan(y)} \\
*     = 1 - 2 \cdot \left( \tan(y) - \tfrac{\tan(y)^2}{1+\tan(y)} \right)
*     ```
*
*
* @param {number} x - input value (in radians, assumed to be bounded by ~π/4 in magnitude)
* @param {number} y - tail of `x`
* @param {integer} k - indicates whether tan (if k = 1) or -1/tan (if k = -1) is returned
* @returns {number} tangent
*
* @example
* var out = kernelTan( 3.141592653589793/4.0, 0.0, 1 );
* // returns ~1.0
*
* @example
* var out = kernelTan( 3.141592653589793/4.0, 0.0, -1 );
* // returns ~-1.0
*
* @example
* var out = kernelTan( 3.141592653589793/6.0, 0.0, 1 );
* // returns ~0.577
*
* @example
* var out = kernelTan( 0.664, 5.288e-17, 1 );
* // returns ~0.783
*
* @example
* var out = kernelTan( NaN, 0.0, 1 );
* // returns NaN
*
* @example
* var out = kernelTan( 3.0, NaN, 1 );
* // returns NaN
*
* @example
* var out = kernelTan( NaN, NaN, 1 );
* // returns NaN
*/
function kernelTan( x, y, k ) {
	var hx;
	var ix;
	var a;
	var r;
	var s;
	var t;
	var v;
	var w;
	var z;

	hx = getHighWord( x );

	// High word of |x|:
	ix = (hx & HIGH_WORD_ABS_MASK)|0; // asm type annotation

	// Case: |x| >= 0.6744
	if ( ix >= 0x3FE59428 ) {
		if ( x < 0 ) {
			x = -x;
			y = -y;
		}
		z = PIO4 - x;
		w = PIO4LO - y;
		x = z + w;
		y = 0.0;
	}
	z = x * x;
	w = z * z;

	// Break x^5*(T[1]+x^2*T[2]+...) into x^5(T[1]+x^4*T[3]+...+x^20*T[11]) + x^5(x^2*(T[2]+x^4*T[4]+...+x^22*T[12]))...
	r = polyvalOdd( w );
	v = z * polyvalEven( w );
	s = z * x;
	r = y + (z * ((s * (r + v)) + y));
	r += T0 * s;
	w = x + r;
	if ( ix >= 0x3FE59428 ) {
		v = k;
		return ( 1.0 - ( (hx >> 30) & 2 ) ) * ( v - (2.0 * (x - ((w * w / (w + v)) - r)) )); // eslint-disable-line max-len
	}
	if ( k === 1 ) {
		return w;
	}
	// Compute -1/(x+r) accurately...
	z = w;
	setLowWord( z, 0 );
	v = r - (z - x); // z + v = r + x
	a = -1.0 / w; // a = -1/w
	t = a;
	setLowWord( t, 0 );
	s = 1.0 + (t * z);
	return t + (a * (s + (t * v)));
}


// EXPORTS //

module.exports = kernelTan;
