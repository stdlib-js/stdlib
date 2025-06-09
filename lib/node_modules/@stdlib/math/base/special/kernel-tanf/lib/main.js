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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/k_tanf.c}. The implementation follows the original, but has been modified for JavaScript.
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

var f32 = require( '@stdlib/number/float64/base/to-float32' );


// VARIABLES //

var T = [
	0.333331395030791399758,   // 0x15554d3418c99f.0p-54
	0.133392002712976742718,   // 0x1112fd38999f72.0p-55
	0.0533812378445670393523,  // 0x1b54c91d865afe.0p-57
	0.0245283181166547278873,  // 0x191df3908c33ce.0p-58
	0.00297435743359967304927, // 0x185dadfcecf44e.0p-61
	0.00946564784943673166728  // 0x1362b9bf971bcd.0p-59
];


// MAIN //

/**
* Computes the tangent of a number on \\( \[-\pi/4, \pi/4] \\) in single-precision floating-point format, where \\( \pi/4 \approx 0.785398164 \\).
*
* ## Notes
*
* -   \\( | \frac{\tan(x)}{x} - t(x) | < 2^{-25.5} \\), where \\( 2^{-25.5} \approx \[ -2.0 \times 10^{-8}, 2.0 \times 10^{-8} \] \\).
*
* @param {number} x - input value (in radians, assumed to be bounded by ~π/4 in magnitude)
* @param {integer} iy - indicates whether tan (if iy = 1) or -1/tan (if iy = -1) is returned
* @returns {number} tangent
*
* @example
* var out = kernelTanf( 3.141592653589793/4.0, 1 );
* // returns ~1.0
*
* @example
* var out = kernelTanf( 3.141592653589793/4.0, -1 );
* // returns ~-1.0
*
* @example
* var out = kernelTanf( 3.141592653589793/6.0, 1 );
* // returns ~0.577
*
* @example
* var out = kernelTanf( 0.664, 1 );
* // returns ~0.783
*
* @example
* var out = kernelTanf( NaN, 1 );
* // returns NaN
*/
function kernelTanf( x, iy ) {
	var z;
	var r;
	var w;
	var s;
	var t;
	var u;

	z = x * x;

	/*
	* Split up the polynomial into small independent terms to give opportunities for parallel evaluation. The chosen splitting is a micro-optimization for specific hardware, as originally documented in FreeBSD's fdlibm. The splitting costs 2 multiplications relative to Horner's method on sequential machines.
	*
	* We add the small terms from lowest degree up for efficiency on non-sequential machines (the lowest degree terms tend to be ready earlier). Apart from this, we don't care about order of operations, and don't need to care since we have precision to spare. However, the chosen splitting is good for accuracy, too, and would give results as accurate as Horner's method if the small terms were added from highest degree down.
	*/
	r = T[ 4 ] + ( z * T[ 5 ] );
	t = T[ 2 ] + ( z * T[ 3 ] );
	w = z * z;
	s = z * x;
	u = T[ 0 ] + ( z * T[ 1 ] );
	r = ( x + ( s*u ) ) + ( ( s*w ) * ( t + ( w*r ) ) );
	if ( iy === 1 ) {
		return f32( r );
	}
	return f32( f32( -1.0 ) / f32( r ) );
}


// EXPORTS //

module.exports = kernelTanf;
