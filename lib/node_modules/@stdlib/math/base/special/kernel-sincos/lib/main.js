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
* The following copyright and license were part of the original implementation available as part of FreeBSD [k_sin.c]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_sin.c} and [k_cos.c]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_cos.c}. The implementation follows the original sine and cosine kernels, but has been modified for JavaScript and combined into a single function.
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

var polyvalC13 = require( './polyval_c13.js' );
var polyvalC46 = require( './polyval_c46.js' );
var polyvalS24 = require( './polyval_s24.js' );
var polyvalS56 = require( './polyval_s56.js' );


// VARIABLES //

var S1 = -1.66666666666666324348e-01; // 0xBFC55555, 0x55555549


// MAIN //

/**
* Simultaneously computes the sine and cosine of an angle measured in radians within the interval \\( \approx \[-\pi/4, \pi/4\] \\) (except for \\(-0\\)), where \\( \pi/4 \approx 0.7854 \\), and stores the results in a provided output array.
*
* @param {number} x - input value (in radians, assumed to be bounded by `~π/4` in magnitude)
* @param {number} y - tail of `x`
* @param {Array<number>} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Array<number>} sine and cosine
*
* @example
* var v = kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~0.0, ~1.0 ]
*
* @example
* var v = kernelSincos( 3.141592653589793/2.0, 0.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~1.0, ~0.0 ]
*
* @example
* var v = kernelSincos( -3.141592653589793/6.0, 0.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~-0.5, ~0.866 ]
*
* @example
* var v = kernelSincos( NaN, 0.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ NaN, NaN ]
*/
function kernelSincos( x, y, out, stride, offset ) {
	var hz;
	var r;
	var v;
	var w;
	var z;

	z = x * x;
	w = z * z;
	r = polyvalS24( z ) + (z * w * polyvalS56( z ));
	v = z * x;
	if ( y === 0.0 ) {
		out[ offset ] = x + (v * (S1 + (z*r)));
	} else {
		out[ offset ] = x - (((z*((0.5*y) - (v*r))) - y) - (v*S1));
	}
	r = z * polyvalC13( z );
	r += w * w * polyvalC46( z );
	hz = 0.5 * z;
	w = 1.0 - hz;
	out[ offset + stride ] = w + ( ((1.0-w) - hz) + ((z*r) - (x*y)) );

	return out;
}


// EXPORTS //

module.exports = kernelSincos;
