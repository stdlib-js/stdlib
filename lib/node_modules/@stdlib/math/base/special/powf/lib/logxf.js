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
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_powf.c}. The implementation follows the original, but has been modified for JavaScript.
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

var fromWordf = require( '@stdlib/number/float32/base/from-word' );
var toWordf = require( '@stdlib/number/float32/base/to-word' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var polyvalW = require( './polyval_w.js' );


// VARIABLES //

// Mask to clear lower 12 mantissa bits:
var TRUNC_MASK = 0xfffff000|0; // asm type annotation

// 1/LN2
var INV_LN2 = f32( 1.4426950216e+00 );    // 0x3fb8aa3b

// High (16 bits): 1/LN2
var INV_LN2_HI = f32( 1.4426879883e+00 ); // 0x3fb8aa00

// Low: 1/LN2
var INV_LN2_LO = f32( 7.0526075433e-06 ); // 0x36eca570

var ONE = f32( 1.0 );


// MAIN //

/**
* Computes \\(\operatorname{log}(x)\\) assuming \\(|1-x|\\) is small and using the approximation \\(x - x^2/2 + x^3/3 - x^4/4\\).
*
* @private
* @param {Array} out - output array
* @param {number} ax - absolute value of `x`
* @returns {Array} output array containing a tuple comprised of high and low parts
*
* @example
* var t = logxf( [ 0.0, 0.0 ], 9.0 );
* // returns [ -1265.5, ~-0.224 ]
*/
function logxf( out, ax ) {
	var tmp;
	var t2;
	var t1;
	var t;
	var w;
	var u;
	var v;

	t = f32( ax - ONE ); // `t` has `20` trailing zeros
	w = f32( f32( t * t ) * polyvalW( t ) );
	u = f32( INV_LN2_HI * t ); // `INV_LN2_HI` has `16` significant bits
	v = f32( f32( t*INV_LN2_LO ) - f32( w*INV_LN2 ) );
	t1 = f32( u + v );
	tmp = toWordf( t1 ) | 0; // asm type annotation
	t1 = fromWordf( tmp & TRUNC_MASK );
	t2 = f32( v - f32( t1 - u ) );

	out[ 0 ] = t1;
	out[ 1 ] = t2;
	return out;
}


// EXPORTS //

module.exports = logxf;
