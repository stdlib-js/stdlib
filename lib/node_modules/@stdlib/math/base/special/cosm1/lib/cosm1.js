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
* Copyright 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/

'use strict';

// MODULES //

var cos = require( '@stdlib/math/base/special/cos' );
var polyval = require( './polyval_p.js' );


// VARIABLES //

var PIO4 = 7.85398163397448309616e-1; // 4/π


// MAIN //

/**
* Computes the cosine of a number minus one.
*
* @param {number} x - input value (in radians)
* @returns {number} cosine minus one
*
* @example
* var v = cosm1( 0.0 );
* // returns 0.0
*
* @example
* var PI = require( '@stdlib/constants/math/float64-pi' );
*
* var v = cosm1( PI/4.0 );
* // returns ~-0.293
*
* @example
* var PI = require( '@stdlib/constants/math/float64-pi' );
*
* var v = cosm1( -PI/6.0 );
* // returns ~-0.134
*
* @example
* var v = cosm1( NaN );
* // returns NaN
*/
function cosm1( x ) {
	var x2;
	if ( x < -PIO4 || x > PIO4 ) {
		return cos( x ) - 1.0;
	}
	x2 = x * x;
	return ( -0.5*x2 ) + ( x2*x2*polyval( x2 ) );
}


// EXPORTS //

module.exports = cosm1;
