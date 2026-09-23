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
* The following copyright and license were part of the original implementation available as part of FreeBSD [k_sincosf.h]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/k_sincosf.h}. The implementation follows the original, but has been modified for JavaScript.
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
var polyvalS12 = require( './polyval_s12.js' );
var polyvalS34 = require( './polyval_s34.js' );
var polyvalC23 = require( './polyval_c23.js' );


// VARIABLES //

var C0 = -0.499999997251031003120; // -0x1ffffffd0c5e81.0p-5
var C1 = 0.0416666233237390631894; // 0x155553e1053a42.0p-57


// MAIN //

/**
* Simultaneously computes the sine and cosine of an angle measured in radians on `[-π/4, π/4]` in single-precision floating-point format, and stores the results in a provided output array.
*
* @param {number} x - input value (in radians, assumed to be bounded by `~π/4` in magnitude)
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} sine and cosine
*
* @example
* var v = kernelSincosf( 0.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~0.0, ~1.0 ]
*
* @example
* var v = kernelSincosf( 3.141592653589793/2.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~1.0, ~0.0 ]
*
* @example
* var v = kernelSincosf( -3.141592653589793/6.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~-0.5, ~0.866 ]
*
* @example
* var v = kernelSincosf( NaN, [ 0.0, 0.0 ], 1, 0 );
* // returns [ NaN, NaN ]
*/
function kernelSincosf( x, out, stride, offset ) {
	var r;
	var s;
	var w;
	var z;

	z = x * x;
	w = z * z;
	r = polyvalS34( z );
	s = z * x;
	out[ offset ] = f32( ( x + ( s * polyvalS12( z ) ) ) + ( s*w*r ) );
	r = polyvalC23( z );
	out[ offset + stride ] = f32( ( ( 1.0 + ( z*C0 ) ) + ( w*C1 ) ) + ( ( w*z ) * r ) );
	return out;
}


// EXPORTS //

module.exports = kernelSincosf;
