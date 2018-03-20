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
* The original C++ code and copyright notice are from the [Boost library]{@link https://github.com/boostorg/math/blob/develop/include/boost/math/special_functions/detail/bessel_j0.hpp}. The implementation has been modified for JavaScript.
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

var sqrt = require( '@stdlib/math/base/special/sqrt' );
var sincos = require( '@stdlib/math/base/special/sincos' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );
var poly1 = require( './rational_p1q1.js' );
var poly2 = require( './rational_p2q2.js' );
var polyC = require( './rational_pcqc.js' );
var polyS = require( './rational_psqs.js' );


// VARIABLES //

var ONE_DIV_SQRT_PI = 0.5641895835477563;
var x1 = 2.4048255576957727686e+00;
var x2 = 5.5200781102863106496e+00;
var x11 = 6.160e+02;
var x12 = -1.42444230422723137837e-03;
var x21 = 1.4130e+03;
var x22 = 5.46860286310649596604e-04;

// `sincos` workspace:
var sc = [ 0.0, 0.0 ]; // WARNING: not thread safe


// MAIN //

/**
* Computes the Bessel function of the first kind of order zero.
*
* @param {number} x - input value
* @returns {number} evaluated Bessel function
*
* @example
* var v = j0( 0.0 );
* // returns 1.0
*
* v = j0( 1.0 );
* // returns ~0.765
*
* v = j0( Infinity );
* // returns 0.0
*
* v = j0( -Infinity );
* // returns 0.0
*
* v = j0( NaN );
* // returns NaN
*/
function j0( x ) {
	var rc;
	var rs;
	var y2;
	var r;
	var y;
	var f;

	if ( x < 0 ) {
		x = -x;
	}
	if ( x === PINF ) {
		return 0.0;
	}
	if ( x === 0 ) {
		return 1.0;
	}
	if ( x <= 4.0 ) {
		y = x * x;
		r = poly1( y );
		f = ( x+x1 ) * ( (x - (x11/256.0)) - x12 );
		return f * r;
	}
	if ( x <= 8.0 ) {
		y = 1.0 - ( ( x*x )/64.0 );
		r = poly2( y );
		f = ( x+x2 ) * ( (x - (x21/256.0)) - x22 );
		return f * r;
	}
	y = 8.0 / x;
	y2 = y * y;
	rc = polyC( y2 );
	rs = polyS( y2 );
	f = ONE_DIV_SQRT_PI / sqrt(x);

	/*
	* What follows is really just:
	*
	* ```
	* var z = x - pi/4;
	* return f * (rc * cos(z) - y * rs * sin(z));
	* ```
	*
	* But using the addition formulae for sin and cos, plus the special values for sin/cos of `π/4`.
	*/
	sincos( sc, x );
	return f * ( ( rc * (sc[1]+sc[0]) ) - ( (y*rs) * (sc[0]-sc[1]) ) );
}


// EXPORTS //

module.exports = j0;
