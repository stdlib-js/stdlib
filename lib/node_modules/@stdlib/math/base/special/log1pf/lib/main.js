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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_log1pf.c}. The implementation follows the original, but has been modified for JavaScript.
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

var FLOAT32_NINF = require( '@stdlib/constants/float32/ninf' );
var FLOAT32_ABS_MASK = require( '@stdlib/constants/float32/abs-mask' );
var FLOAT32_PRECISION = require( '@stdlib/constants/float32/precision' );
var FLOAT32_EXPONENT_BIAS = require( '@stdlib/constants/float32/exponent-bias' );
var FLOAT32_EXPONENT_MASK = require( '@stdlib/constants/float32/exponent-mask' );
var FLOAT32_SIGNIFICAND_MASK = require( '@stdlib/constants/float32/significand-mask' );
var toWordf = require( '@stdlib/number/float32/base/to-word' );
var fromWordf = require( '@stdlib/number/float32/base/from-word' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var polyval = require( './polyval_lp.js' );


// VARIABLES //

// High and low words of ln(2):
var LN2_HI = f32( 6.9313812256e-01 ); // 0x3f317180
var LN2_LO = f32( 9.0580006145e-06 ); // 0x3717f7d1

// 2**25:
var TWO25 = f32( 3.355443200e+07 ); // 0x4c000000

// 2/3:
var TWO_THIRDS = f32( 0.66666666666666666 );

// 2**53 = 9007199254740992 => 0 10110100 00000000000000000000000 => 0x5a000000 = 1509949440
var TWO53 = 0x5a000000|0; // asm type annotation

// 2**-15 = 0.000030517578125 => 0 01110000 00000000000000000000000 => 0x38000000 = 939524096
var TWO_NEG_15 = 0x38000000|0; // asm type annotation

// 2**-24 = 5.960464477539063e-8 => 0 01100111 00000000000000000000000 => 0x33800000 = 864026624
var TWO_NEG_24 = 0x33800000|0; // asm type annotation

// 1 => 0 01111111 00000000000000000000000 => 0x3f800000 = 1065353216
var ONE_WORD = 0x3f800000|0; // asm type annotation

// 1/2 = 0.5 => 0 01111110 00000000000000000000000 => 0x3f000000 = 1056964608
var HALF_WORD = 0x3f000000|0; // asm type annotation

// sqrt(2)-1 = 0.41421353816986084 => 0 01111101 10101000001001111010000 => 0x3ed413d0 = 1054086096
var SQRT2M1 = 0x3ed413d0|0; // asm type annotation

// sqrt(2)/2-1 = -0.2928932309150696 => 1 01111101 00101011111011000011001 => 0xbe95f619 = 3197498905
var SQRT2HALFM1 = 0xbe95f619|0; // asm type annotation

// 2**-126 = 1.1754943508222875e-38 => 0 00000001 00000000000000000000000 => 0x00800000 = 8388608
var TINY = 0x00800000|0; // asm type annotation

var NEG_ONE = f32( -1.0 );
var ZERO = f32( 0.0 );
var HALF = f32( 0.5 );
var ONE = f32( 1.0 );
var TWO = f32( 2.0 );


// MAIN //

/**
* Evaluates the natural logarithm of \\(1+x\\) as a single-precision floating-point number.
*
* @param {number} x - input value
* @returns {number} the natural logarithm of `1+x`
*
* @example
* var v = log1pf( 4.0 );
* // returns ~1.609
*
* @example
* var v = log1pf( -1.0 );
* // returns -Infinity
*
* @example
* var v = log1pf( 0.0 );
* // returns 0.0
*
* @example
* var v = log1pf( -0.0 );
* // returns -0.0
*
* @example
* var v = log1pf( -2.0 );
* // returns NaN
*
* @example
* var v = log1pf( NaN );
* // returns NaN
*/
function log1pf( x ) {
	var hfsq;
	var hx;
	var ax;
	var hu;
	var f;
	var c;
	var s;
	var z;
	var R;
	var u;
	var k;

	x = f32( x );
	hx = toWordf( x ) | 0; // asm type annotation
	ax = (hx & FLOAT32_ABS_MASK)|0; // asm type annotation

	k = 1;
	if ( hx < SQRT2M1 ) { // 1+x < sqrt(2)+
		if ( ax >= ONE_WORD ) { // x <= -1.0
			if ( x === NEG_ONE ) {
				return FLOAT32_NINF;
			}
			return NaN;
		}
		if ( ax < TWO_NEG_15 ) { // |x| < 2**-15
			if ( ( f32( TWO25 + x ) > ZERO ) && ax < TWO_NEG_24 ) { // |x| < 2**-24
				return x;
			}
			return f32( x - f32( x * f32( x * HALF ) ) );
		}
		if ( ( hx > 0 ) || ( hx <= SQRT2HALFM1 ) ) { // sqrt(2)/2- <= 1+x < sqrt(2)+
			k = 0;
			f = x;
			hu = 1;
		}
	}
	if ( hx >= FLOAT32_EXPONENT_MASK ) {
		return f32( x + x );
	}
	if ( k !== 0 ) {
		if ( hx < TWO53 ) {
			u = f32( ONE + x );
			hu = toWordf( u ) | 0; // asm type annotation
			k = ( hu >> ( FLOAT32_PRECISION - 1 ) ) - FLOAT32_EXPONENT_BIAS;

			// Correction term:
			c = ( k > 0 ) ? f32( ONE - f32( u-x ) ) : f32( x - f32( u-ONE ) );
			c = f32( c / u );
		} else {
			u = x;
			hu = toWordf( u ) | 0;
			k = ( hu >> ( FLOAT32_PRECISION - 1 ) ) - FLOAT32_EXPONENT_BIAS;
			c = 0;
		}
		hu &= FLOAT32_SIGNIFICAND_MASK;

		// Earlier sqrt(2) checks should be slightly looser than this one, so we never reach this point with k == 0 after deciding to use the correction term...
		if ( hu < 0x3504f4 ) { // u < sqrt(2)
			u = fromWordf( hu | ONE_WORD ); // normalize u
		} else {
			k += 1;
			u = fromWordf( hu | HALF_WORD ); // normalize u/2
			hu = ( TINY - hu ) >> 2;
		}
		f = f32( u - ONE );
	}
	hfsq = f32( HALF * f32( f * f ) );
	if ( hu === 0 ) { // |f| < 2**-20
		if ( f === ZERO ) {
			if ( k === 0 ) {
				return ZERO;
			}
			c = f32( c + f32( k * LN2_LO ) );
			return f32( f32( k * LN2_HI ) + c );
		}
		R = f32( hfsq * f32( ONE - f32( TWO_THIRDS * f ) ) );
		if ( k === 0 ) {
			return f32( f - R );
		}
		// eslint-disable-next-line max-len
		return f32( f32( k*LN2_HI ) - f32( f32( R - f32( f32( k*LN2_LO ) + c ) ) - f ) );
	}
	s = f32( f / f32( TWO + f ) );
	z = f32( s * s );
	R = f32( z * polyval( z ) );
	if ( k === 0 ) {
		return f32( f - f32( hfsq - f32( s * f32( hfsq + R ) ) ) );
	}
	// eslint-disable-next-line max-len
	return f32( f32( k*LN2_HI ) - f32( f32( hfsq - f32( f32( s * f32( hfsq+R ) ) + f32( f32( k*LN2_LO ) + c ) ) ) - f ) );
}


// EXPORTS //

module.exports = log1pf;
