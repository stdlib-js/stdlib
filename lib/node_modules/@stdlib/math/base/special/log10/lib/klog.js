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
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_log.h}. The implementation follows the original, but has been modified for JavaScript.
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
var polyvalP = require( './polyval_p.js' );
var polyvalQ = require( './polyval_q.js' );


// VARIABLES //

// 0x000fffff = 1048575 => 0 00000000000 11111111111111111111
var HIGH_SIGNIFICAND_MASK = 0x000fffff|0; // asm type annotation

// 1/3
var ONE_THIRD = 0.33333333333333333;


// MAIN //

/**
* Return `log(x) - (x-1)` for `x` in `~[sqrt(2)/2, sqrt(2)]`.
*
* @private
* @param {number} x - input value
* @returns {number} function value
*/
function klog( x ) {
	var hfsq;
	var t1;
	var t2;
	var hx;
	var f;
	var s;
	var z;
	var R;
	var w;
	var i;
	var j;

	hx = getHighWord( x );
	f = x - 1.0;
	if ( ( HIGH_SIGNIFICAND_MASK & (2+hx) ) < 3 ) {
		// Case: -2**-20 <= f < 2**-20
		if ( f === 0.0 ) {
			return 0.0;
		}
		return f * f * ( (ONE_THIRD*f) - 0.5 );
	}
	s = f / ( 2.0 + f );
	z = s * s;
	hx &= HIGH_SIGNIFICAND_MASK;
	i = (hx - 0x6147a)|0; // asm type annotation
	w = z * z;
	j = (0x6b851 - hx)|0; // asm type annotation
	t1 = w * polyvalP( w );
	t2 = z * polyvalQ( w );
	i |= j;
	R = t2 + t1;
	if ( i > 0 ) {
		hfsq = 0.5 * f * f;
		return ( s * (hfsq+R) ) - hfsq;
	}
	return s * (R-f);
}


// EXPORTS //

module.exports = klog;
