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
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_log2.c}. The implementation follows the original, but has been modified for JavaScript.
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

var getHighWord = require( '@stdlib/number/float64/base/get-high-word' );
var setHighWord = require( '@stdlib/number/float64/base/set-high-word' );
var setLowWord = require( '@stdlib/number/float64/base/set-low-word' );
var toWords = require( '@stdlib/number/float64/base/to-words' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var BIAS = require( '@stdlib/constants/math/float64-exponent-bias' );
var NINF = require( '@stdlib/constants/math/float64-ninf' );
var klog = require( './klog.js' );


// VARIABLES //

var TWO54 = 1.80143985094819840000e+16;   // 0x43500000, 0x00000000
var IVLN2HI = 1.44269504072144627571e+00; // 0x3ff71547, 0x65200000
var IVLN2LO = 1.67517131648865118353e-10; // 0x3de705fc, 0x2eefa200

// 0x000fffff = 1048575 => 0 00000000000 11111111111111111111
var HIGH_SIGNIFICAND_MASK = 0x000fffff|0; // asm type annotation

// 0x7ff00000 = 2146435072 => 0 11111111111 00000000000000000000 => biased exponent: 2047 = 1023+1023 => 2^1023
var HIGH_MAX_NORMAL_EXP = 0x7ff00000|0; // asm type annotation

// 0x00100000 = 1048576 => 0 00000000001 00000000000000000000 => biased exponent: 1 = -1022+1023 => 2^-1022
var HIGH_MIN_NORMAL_EXP = 0x00100000|0; // asm type annotation

// 0x3ff00000 = 1072693248 => 0 01111111111 00000000000000000000 => biased exponent: 1023 = 0+1023 => 2^0 = 1
var HIGH_BIASED_EXP_0 = 0x3ff00000|0; // asm type annotation

// 0x7fffffff = 2147483647 => 0 11111111111 11111111111111111111
var ABS_MASK = 0x7fffffff|0; // asm type annotation

// High/low words workspace:
var WORDS = [ 0|0, 0|0 ]; // WARNING: not thread safe


// MAIN //

/**
* Evaluates the binary logarithm (base two).
*
* @param {NonNegativeNumber} x - input value
* @returns {number} function value
*
* @example
* var v = log2( 4.0 );
* // returns 2.0
*
* @example
* var v = log2( 8.0 );
* // returns 3.0
*
* @example
* var v = log2( 0.0 );
* // returns -Infinity
*
* @example
* var v = log2( Infinity );
* // returns Infinity
*
* @example
* var v = log2( NaN );
* // returns NaN
*
* @example
* var v = log2( -4.0 );
* // returns NaN
*/
function log2( x ) {
	var hi;
	var lo;
	var hx;
	var lx;
	var f;
	var i;
	var k;

	if ( isnan( x ) || x < 0.0 ) {
		return NaN;
	}
	toWords( WORDS, x );
	hx = WORDS[ 0 ];
	lx = WORDS[ 1 ];
	k = 0|0; // asm type annotation
	if ( hx < HIGH_MIN_NORMAL_EXP ) {
		// Case: x < 2**-1022
		if ( ( (hx&ABS_MASK) | lx ) === 0 ) {
			return NINF;
		}
		k -= 54|0; // asm type annotation

		// Subnormal number, scale up x:
		x *= TWO54;
		hx = getHighWord( x );
	}
	if ( hx >= HIGH_MAX_NORMAL_EXP ) {
		return x + x;
	}
	k += ( (hx>>20) - BIAS )|0; // asm type annotation
	hx &= HIGH_SIGNIFICAND_MASK;
	i = ( ( hx+0x95f64 ) & 0x100000 )|0; // asm type annotation

	// Normalize x or x/2...
	x = setHighWord( x, hx|(i^HIGH_BIASED_EXP_0) );
	k += (i>>20)|0; // asm type annotation
	f = klog( x );
	x -= 1;
	hi = setLowWord( x, 0 );
	lo = x - hi;
	return ( (x+f)*IVLN2LO ) + ( (lo+f)*IVLN2HI ) + ( hi*IVLN2HI ) + k;
}


// EXPORTS //

module.exports = log2;
