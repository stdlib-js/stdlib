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
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1985, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/

'use strict';

// MODULES //

var evalpoly = require( '@stdlib/math/base/tools/evalpoly' ).factory; // TODO: replace with compiled polyval functions
var floor = require( '@stdlib/math/base/special/floor' );
var ldexp = require( '@stdlib/math/base/special/ldexp' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isinfinite = require( '@stdlib/math/base/assert/is-infinite' );


// VARIABLES //

var DP1 = 7.85398125648498535156e-1; // 0x3fe921fb40000000, Pi/4 split into three parts
var DP2 = 3.77489470793079817668e-8; // 0x3e64442d00000000,
var DP3 = 2.69515142907905952645e-15; // 0x3ce8469898cc5170,
var PIO4 = 7.85398163397448309616E-1; // 4/pi
var SIN_COEF = [
	-1.66666666666666307295e-1, // 0xbfc5555555555548
	8.33333333332211858878e-3, // 0x3f8111111110f7d0
	-1.98412698295895385996e-4, // 0xbf2a01a019bfdf03
	2.75573136213857245213e-6, // 0x3ec71de3567d48a1
	-2.50507477628578072866e-8, // 0xbe5ae5e5a9291f5d
	1.58962301576546568060e-10 // 0x3de5d8fd1fd19ccd
];
var COS_COEF = [
	4.16666666666665929218e-2, // 0x3fa555555555554b
	-1.38888888888730564116e-3, // 0xbf56c16c16c14f91
	2.48015872888517045348e-5, // 0x3efa01a019c844f5
	-2.75573141792967388112e-7, // 0xbe927e4f7eac4bc6
	2.08757008419747316778e-9, // 0x3e21ee9d7b4e3f05
	-1.13585365213876817300e-11 // 0xbda8fa49a0861a9b
];


// FUNCTIONS //

// Compile functions to evaluate polynomial functions based on the above coefficients...
var polyvalSIN = evalpoly( SIN_COEF );
var polyvalCOS = evalpoly( COS_COEF );


// MAIN //

/**
* Computes the cosine of a number.
*
* @param {number} x - input value
* @returns {number} cosine (in radians)
*
* @example
* var v = cos( 0.0 );
* // returns 1.0
*
* @example
* var v = cos( 3.14/4.0 );
* // returns ~0.707
*
* @example
* var v = cos( -3.14/6.0 );
* // returns ~0.866
*
* @example
* var v = cos( NaN );
* // returns NaN
*/
function cos( x ) {
	var sgn;
	var zz;
	var i;
	var j;
	var y;
	var z;

	if ( isnan( x ) || isinfinite( x ) ) {
		return NaN;
	}

	// Make argument positive...
	sgn = 1;
	if ( x < 0 ) {
		x = -x;
	}

	y = floor( x/PIO4 );
	z = ldexp( y, -4 );
	z = floor( z ); // Integer part of y/8
	z = y - ldexp( z, 4 ); // y - 16 * (y/16)

	// Integer and fractional part modulo one octant...
	i = y;

	// Map zeros to origin...
	if ( i & 1 ) {
		i += 1;
		y += 1.0;
	}
	j = i & 7;
	if ( j > 3 ) {
		j -= 4;
		sgn = -sgn;
	}
	if ( j > 1 ) {
		sgn = -sgn;
	}

	// Extended precision modular arithmetic...
	z = ( ( x - ( y*DP1 ) ) - ( y*DP2 ) ) - ( y * DP3 );
	zz = z * z;

	if ( j === 1 || j === 2 ) {
		y = z + ( z * z * z * polyvalSIN( zz ) );
	} else {
		y = 1.0 - ldexp( zz, -1 ) + ( zz * zz * polyvalCOS( zz ) );
	}

	if ( sgn < 0 ) {
		y = -y;
	}
	return y;
}


// EXPORTS //

module.exports = cos;
