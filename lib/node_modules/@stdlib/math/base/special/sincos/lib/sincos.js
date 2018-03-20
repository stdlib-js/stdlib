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

var getHighWord = require( '@stdlib/number/float64/base/get-high-word' );
var rempio2 = require( '@stdlib/math/base/special/rempio2' );
var kernelSincos = require( './kernel_sincos.js' );


// VARIABLES //

// Absolute value mask: 0x7fffffff = 2147483647 => 01111111111111111111111111111111
var ABS_MASK = 0x7fffffff|0; // asm type annotation

// Exponent mask: 0x7ff00000 = 2146435072 => 01111111111100000000000000000000
var EXPONENT_MASK = 0x7ff00000|0; // asm type annotation

// High word for PI/4: 0x3fe921fb = 1072243195 => 00111111111010010010000111111011
var PIO4_HIGH_WORD = 0x3fe921fb|0; // asm type annotation

// The smaller of the two cutoffs for the sine and cosine kernels: 2^-27 = 0x3e400000 => 00111110010000000000000000000000
var SMALL_HIGH_WORD = 0x3e400000|0; // asm type annotation

// Array for storing remainder elements:
var Y = [ 0.0, 0.0 ];


// MAIN //

/**
* Simultaneously computes the sine and cosine of a number.
*
* ## Method
*
* -   Let \\(S\\), \\(C\\), and \\(T\\) denote the \\(\sin\\), \\(\cos\\) and \\(\tan\\), respectively, on \\(\[-\pi/4, +\pi/4\]\\).
*
* -   Reduce the argument \\(x\\) to \\(y1+y2 = x-k\pi/2\\) in \\(\[-\pi/4, +\pi/4\]\\), and let \\(n = k \mod 4\\).
*
* -   We have
*
*     | n | sin(x) | cos(x) | tan(x) |
*     | - | ------ | ------ | ------ |
*     | 0 |    S   |    C   |   T    |
*     | 1 |    C   |   -S   |  -1/T  |
*     | 2 |   -S   |   -C   |   T    |
*     | 3 |   -C   |    S   |  -1/T  |
*
*
* @private
* @param {(Array|TypedArray|Object)} out - destination array
* @param {number} x - input value (in radians)
* @returns {(Array|TypedArray|Object)} sine and cosine
*
* @example
* var v = sincos( [ 0.0, 0.0 ], 0.0 );
* // returns [ ~0.0, ~1.0 ]
*
* @example
* var v = sincos( [ 0.0, 0.0 ], 3.141592653589793/2.0 );
* // returns [ ~1.0, ~0.0 ]
*
* @example
* var v = sincos( [ 0.0, 0.0 ], -3.141592653589793/6.0 );
* // returns [ ~-0.5, ~0.866 ]
*
* @example
* var v = sincos( [ 0.0, 0.0 ], NaN );
* // returns [ NaN, NaN ]
*/
function sincos( out, x ) {
	var ix;
	var n;

	ix = getHighWord( x );

	// Case: |x| ~< π/4
	ix &= ABS_MASK;
	if ( ix <= PIO4_HIGH_WORD ) {
		// Case: |x| ~< 2^-26
		if ( ix < SMALL_HIGH_WORD ) {
			if ( (x|0) === 0 ) {
				out[ 0 ] = x;
				out[ 1 ] = 0.0;
			}
		}
		return kernelSincos( out, x, 0.0 );
	}
	// Case: x is NaN or infinity
	if ( ix >= EXPONENT_MASK ) {
		out[ 0 ] = NaN;
		out[ 1 ] = NaN;
		return out;
	}
	// Argument reduction...
	n = rempio2( x, Y );

	// Compute the sine and cosine together:
	kernelSincos( out, Y[ 0 ], Y[ 1 ] );

	switch ( n & 3 ) {
	case 1:
		ix = out[ 1 ];
		out[ 1 ] = -out[ 0 ];
		out[ 0 ] = ix;
		return out;
	case 2:
		out[ 0 ] *= -1;
		out[ 1 ] *= -1;
		return out;
	case 3:
		// Passing
		ix = -out[ 1 ];
		out[ 1 ] = out[ 0 ];
		out[ 0 ] = ix;
		return out;
	default:
		return out;
	}
}


// EXPORTS //

module.exports = sincos;
