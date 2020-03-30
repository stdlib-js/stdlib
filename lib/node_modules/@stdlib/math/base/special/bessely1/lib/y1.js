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
* The original C++ code and copyright notice are from the [Boost library]{@link https://github.com/boostorg/math/blob/develop/include/boost/math/special_functions/detail/bessel_y1.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright Xiaogang Zhang, 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var ln = require( '@stdlib/math/base/special/ln' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var PI = require( '@stdlib/constants/math/float64-pi' );
var SQRT_PI = require( '@stdlib/constants/math/float64-sqrt-pi' );
var NINF = require( '@stdlib/constants/math/float64-ninf' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );
var sincos = require( '@stdlib/math/base/special/sincos' );
var besselj1 = require( '@stdlib/math/base/special/besselj1' );
var poly1 = require( './rational_p1q1.js' );
var poly2 = require( './rational_p2q2.js' );
var polyC = require( './rational_pcqc.js' );
var polyS = require( './rational_psqs.js' );


// VARIABLES //

var ONE_DIV_SQRT_PI = 1.0 / SQRT_PI;
var TWO_DIV_PI = 2.0 / PI;

var x1 = 2.1971413260310170351e+00;
var x2 = 5.4296810407941351328e+00;
var x11 = 5.620e+02;
var x12 = 1.8288260310170351490e-03;
var x21 = 1.3900e+03;
var x22 = -6.4592058648672279948e-06;

// `sincos` workspace:
var sc = [ 0.0, 0.0 ]; // WARNING: not thread safe


// MAIN //

/**
* Computes the Bessel function of the second kind of order one.
*
* ## Notes
*
* -   Accuracy for subnormal `x` is very poor. Full accuracy is achieved at `1.0e-308` but trends progressively to zero at `5e-324`. This suggests that underflow (or overflow, perhaps due to a reciprocal) is effectively cutting off digits of precision until the computation loses all accuracy at `5e-324`.
*
* @param {number} x - input value
* @returns {number} evaluated Bessel function
*
* @example
* var v = y1( 0.0 );
* // returns -Infinity
*
* v = y1( 1.0 );
* // returns ~-0.781
*
* v = y1( -1.0 );
* // returns NaN
*
* v = y1( Infinity );
* // returns 0.0
*
* v = y1( -Infinity );
* // returns NaN
*
* v = y1( NaN );
* // returns NaN
*/
function y1( x ) {
	var rc;
	var rs;
	var y2;
	var r;
	var y;
	var z;
	var f;

	if ( x < 0.0 ) {
		return NaN;
	}
	if ( x === 0.0 ) {
		return NINF;
	}
	if ( x === PINF ) {
		return 0.0;
	}
	if ( x <= 4.0 ) {
		y = x * x;
		z = ( ln( x/x1 ) * besselj1( x ) ) * TWO_DIV_PI;
		r = poly1( y );
		f = ( ( x+x1 ) * ( (x - (x11/256.0)) - x12 ) ) / x;
		return z + ( f*r );
	}
	if ( x <= 8.0 ) {
		y = x * x;
		z = ( ln( x/x2 ) * besselj1( x ) ) * TWO_DIV_PI;
		r = poly2( y );
		f = ( ( x+x2 ) * ( (x - (x21/256.0)) - x22 ) ) / x;
		return z + ( f*r );
	}
	y = 8.0 / x;
	y2 = y * y;
	rc = polyC( y2 );
	rs = polyS( y2 );
	f = ONE_DIV_SQRT_PI / sqrt( x );

	/*
	* This code is really just:
	*
	* ```
	* z = x - 0.75 * PI;
	* return f * (rc * sin(z) + y * rs * cos(z));
	* ```
	*
	* But using the sin/cos addition rules, plus constants for sin/cos of `3π/4` which then cancel out with corresponding terms in "f".
	*/
	sincos( sc, x );
	return f * ( ( ( (y*rs) * (sc[0]-sc[1]) ) - ( rc * (sc[0]+sc[1]) ) ) );
}


// EXPORTS //

module.exports = y1;
