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
var BIAS = require( '@stdlib/constants/float32/exponent-bias' );
var SIGNIFICAND_MASK = require( '@stdlib/constants/float32/significand-mask' );
var NUM_SIGNIFICAND_BITS = require( '@stdlib/constants/float32/num-significand-bits' );
var polyvalL = require( './polyval_l.js' );


// VARIABLES //

// 1.1754943508222875e-38 => 0 00000001 00000000000000000000000 => 0x00800000 = 8388608
var MIN_NORM_WORD = 0x00800000|0; // asm type annotation

// 1.0 => 0 01111111 00000000000000000000000 => 0x3f800000 = 1065353216
var ONE_WORD = 0x3f800000|0; // asm type annotation

// Mask to clear lower 12 mantissa bits:
var TRUNC_MASK = 0xfffff000|0; // asm type annotation

// 0x20000000 = 536870912 => 0 01000000 00000000000000000000000
var SIGNIFICAND_HALF_WORD = 0x20000000|0; // asm type annotation

// 0x00400000 = 4194304 => 0 00000000000 10000000000000000000
var EXP_CORRECTION_WORD = 0x00400000|0; // asm type annotation

var TWO24 = f32( 16777216.0 );	        // 0x4b800000

// 2/(3*LN2)
var CP = f32( 9.6179670095e-01 );       // 0x3f76384f

// (float)CP
var CP_HI = f32( 9.6191406250e-01 );    // 0x3f764000 =12b cp

// Low: CP_HI
var CP_LO = f32( -1.1736857402e-04 );   // 0xb8f623c6

var BP = [
	f32( 1.0 ),
	f32( 1.5 )
];
var DP_HI = [
	f32( 0.0 ),
	f32( 5.84960938e-01 )               // 0x3f15c000
];
var DP_LO = [
	f32( 0.0 ),
	f32( 1.56322085e-06 )               // 0x35d1cfdc
];

var ONE = f32( 1.0 );
var THREE = f32( 3.0 );


// MAIN //

/**
* Computes \\(\operatorname{log2}(ax)\\).
*
* @private
* @param {Array} out - output array
* @param {number} ax - absolute value of `x`
* @param {number} ahx - word of `ax`
* @returns {Array} output array containing a tuple comprised of high and low parts
*
* @example
* var t = log2axf( [ 0.0, 0.0 ], 9.0, 1075970048 ); // => [ t1, t2 ]
* // returns [ 3.169923782348633, 0.0000012190936795504075 ]
*/
function log2axf( out, ax, ahx ) {
	var tmp;
	var ss; // `hs + ls`
	var s2; // `ss` squared
	var hs;
	var ls;
	var ht;
	var lt;
	var bp; // `BP` constant
	var dp; // `DP` constant
	var hp;
	var lp;
	var hz;
	var lz;
	var t1;
	var t2;
	var t;
	var r;
	var u;
	var v;
	var n;
	var j;
	var k;

	n = 0|0; // asm type annotation

	// Check if `x` is subnormal...
	if ( ahx < MIN_NORM_WORD ) {
		ax = f32( ax * TWO24 );
		n -= 24|0; // asm type annotation
		ahx = toWordf( ax ) | 0; // asm type annotation
	}
	// Extract the unbiased exponent of `x`:
	n += ((ahx >> NUM_SIGNIFICAND_BITS) - BIAS)|0; // asm type annotation

	// Isolate the significand bits of `x`:
	j = (ahx & SIGNIFICAND_MASK)|0; // asm type annotation

	// Normalize `ahx` by setting the (biased) exponent to `127`:
	ahx = (j | ONE_WORD)|0; // asm type annotation

	// Determine the interval of `|x|` by comparing significand bits...

	// |x| < sqrt(3/2)
	if ( j <= 0x1CC471 ) { // 0 00000000001 11001100100010001110
		k = 0;
	}
	// |x| < sqrt(3)
	else if ( j < 0x5DB3D7 ) { // 0 00000000010 11101101100111110111
		k = 1;
	}
	// |x| >= sqrt(3)
	else {
		k = 0;
		n += 1|0; // asm type annotation
		ahx -= MIN_NORM_WORD;
	}
	// Load the normalized word into `|x|`:
	ax = fromWordf( ahx );

	// Compute `ss = hs + ls = (x-1)/(x+1)` or `(x-1.5)/(x+1.5)`:
	bp = BP[ k ]; // BP[0] = 1.0, BP[1] = 1.5
	u = f32( ax - bp ); // (x-1) || (x-1.5)
	v = f32( ONE / f32( ax + bp ) ); // 1/(x+1) || 1/(x+1.5)
	ss = f32( u * v );
	tmp = toWordf( ss ) | 0; // asm type annotation
	hs = fromWordf( tmp & TRUNC_MASK );

	// Compute `ht = ax + bp` (via manipulation, i.e., bit flipping):
	tmp = ((ahx>>1) & TRUNC_MASK) | SIGNIFICAND_HALF_WORD;
	tmp += EXP_CORRECTION_WORD;
	tmp += (k << 21); // `(k<<21)` can be considered the word equivalent of `1.0` or `1.5`
	ht = fromWordf( tmp );
	lt = f32( ax - f32( ht - bp ) );
	ls = f32( v * f32( f32( u - f32(hs*ht) ) - f32( hs*lt ) ) );

	// Compute `log(ax)`...

	s2 = f32( ss * ss );
	r = f32( f32( s2 * s2 ) * polyvalL( s2 ) );
	r = f32( r + f32( ls * f32(hs + ss) ) );
	s2 = f32( hs * hs );
	ht = f32( f32( THREE + s2 ) + r );
	tmp = toWordf( ht ) | 0; // asm type annotation
	ht = fromWordf( tmp & TRUNC_MASK );
	lt = f32( r - f32( f32(ht-THREE) - s2 ) );

	// u+v = ss*(1+...):
	u = f32( hs * ht );
	v = f32( f32( ls*ht ) + f32( lt*ss ) );

	// 2/(3LN2) * (ss+...):
	hp = f32( u + v );
	tmp = toWordf( hp ) | 0; // asm type annotation
	hp = fromWordf( tmp & TRUNC_MASK );
	lp = f32( v - f32( hp - u ) );
	hz = f32( CP_HI * hp ); // CP_HI+CP_LO = 2/(3*LN2)
	lz = f32( f32( f32( CP_LO*hp ) + f32( lp*CP ) ) + DP_LO[ k ] );

	// log2(ax) = (ss+...)*2/(3*LN2) = n + dp + hz + lz
	dp = DP_HI[ k ];
	t = f32( n );
	t1 = f32( f32( f32(hz+lz) + dp ) + t ); // log2(ax)
	tmp = toWordf( t1 ) | 0; // asm type annotation
	t1 = fromWordf( tmp & TRUNC_MASK );
	t2 = f32( lz - f32( f32( f32(t1-t) - dp ) - hz ) );

	out[ 0 ] = t1;
	out[ 1 ] = t2;
	return out;
}


// EXPORTS //

module.exports = log2axf;
