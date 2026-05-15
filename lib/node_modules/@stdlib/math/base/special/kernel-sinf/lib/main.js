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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/k_sinf.c}. The implementation follows the original, but has been modified according to project conventions.
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

var f32 = require( '@stdlib/number/float64/base/to-float32' );
var polyval12 = require( './polyval_s12.js' );
var polyval34 = require( './polyval_s34.js' );


// MAIN //

/**
* Computes the sine of a number on \\( \[-\pi/4, \pi/4] \\) in single-precision floating-point format, where \\( \pi/4 \approx 0.785398164 \\).
*
* ## Notes
*
* -   \\( | \sin(x) - s(x) | < 2^{-37.5} \\), where \\( 2^{-37.5} \approx \[ -4.89 \times 10^{-12}, 4.824 \times 10^{-12} \] \\).
*
* @param {number} x - input value (in radians, assumed to be bounded by ~pi/4 in magnitude)
* @returns {number} sine
*
* @example
* var v = kernelSinf( 0.0 );
* // returns ~0.0
*
* @example
* var v = kernelSinf( 3.141592653589793/6.0 );
* // returns ~0.5
*
* @example
* var v = kernelSinf( 0.619 );
* // returns ~0.580
*
* @example
* var v = kernelSinf( NaN );
* // returns NaN
*/
function kernelSinf( x ) {
	var r;
	var s;
	var w;
	var z;

	z = x * x;
	w = z * z;
	r = polyval34( z );
	s = z * x;
	return f32( ( x + ( s * polyval12( z ) ) ) + ( s*w*r ) );
}


// EXPORTS //

module.exports = kernelSinf;
