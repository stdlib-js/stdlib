/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* The original Julia code and copyright notice are from the [Julia library]{@link https://github.com/JuliaMath/SpecialFunctions.jl/blob/master/src/ellip.jl}. The implementation has been modified for JavaScript.
*
* ```text
* The MIT License (MIT)
*
* Copyright (c) 2017 Jeff Bezanson, Stefan Karpinski, Viral B. Shah, and others:
*
* https://github.com/JuliaMath/SpecialFunctions.jl/graphs/contributors
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
* ```
*/

'use strict';

// MODULES //

var sqrt = require( '@stdlib/math/base/special/sqrt' );
var ln = require( '@stdlib/math/base/special/ln' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );
var HALF_PI = require( '@stdlib/constants/math/float64-half-pi' );
var poly1 = require( './poly_p1.js' );
var poly2 = require( './poly_p2.js' );
var poly3 = require( './poly_p3.js' );
var poly4 = require( './poly_p4.js' );
var poly5 = require( './poly_p5.js' );
var poly6 = require( './poly_p6.js' );
var poly7 = require( './poly_p7.js' );
var poly8 = require( './poly_p8.js' );
var poly9 = require( './poly_p9.js' );
var poly10 = require( './poly_p10.js' );
var poly11 = require( './poly_p11.js' );
var poly12 = require( './poly_p12.js' );


// VARIABLES //

var ONE_DIV_PI = 0.3183098861837907;


// MAIN //

/**
* Computes the complete elliptic integral of the first kind.
*
* ## Method
*
* -   The function computes the complete elliptic integral of the first kind in terms of parameter \\( m \\), instead of the elliptic modulus \\( k \\).
*
*     ```tex
*     K(m) = \int_0^{\pi/2} \frac{1}{\sqrt{1 - m sin^2\theta}} d\theta
*     ```
*
* -   The function uses a piecewise approximation polynomial as given in Fukushima (2009).
*
* -   For \\( m < 0 \\), the implementation follows Fukushima (2015). Namely, we use Equation 17.4.17 from the _Handbook of Mathematical Functions_ (Abramowitz and Stegun) to compute the function for \\( m < 0 \\) in terms of the piecewise polynomial representation of \\( m > 0 )).
*
*     ```tex
*     F(\phi|-m) = (1+m)^(-1/2) K(m/(1+m)) - (1+m)^(-1/2) F(\pi/2-\phi|m/(1+m))
*     ```
*
*     Since \\( K(m) \\) is equivalent to \\( F(\phi|m) \\), the above reduces to
*
*     ```tex
*     F(\phi|-m) = (1+m)^(-1/2) K(m/(1+m))
*     ```
*
* ## References
*
* -   Fukushima, Toshio. 2009. "Fast computation of complete elliptic integrals and Jacobian elliptic functions." _Celestial Mechanics and Dynamical Astronomy_ 105 (4): 305. doi:[10.1007/s10569-009-9228-z](https://doi.org/10.1007/s10569-009-9228-z).
* -   Fukushima, Toshio. 2015. "Precise and fast computation of complete elliptic integrals by piecewise minimax rational function approximation." _Journal of Computational and Applied Mathematics_ 282 (July): 71–76. doi:[10.1016/j.cam.2014.12.038](https://doi.org/10.1016/j.cam.2014.12.038).
*
* @param {number} m - input value
* @returns {number} evaluated elliptic integral
*
* @example
* var v = ellipk( 0.5 );
* // returns ~1.854
*
* v = ellipk( 2.0 );
* // returns NaN
*
* v = ellipk( -1.0 );
* // returns ~1.311
*
* v = ellipk( Infinity );
* // returns NaN
*
* v = ellipk( -Infinity );
* // returns NaN
*
* v = ellipk( NaN );
* // returns NaN
*/
function ellipk( m ) {
	var FLG;
	var kdm;
	var td;
	var qd;
	var t;
	var x;

	x = m;
	if ( m < 0.0 ) {
		x = m / ( m - 1.0 );
		FLG = true;
	}
	if ( x === 0.0 ) {
		return HALF_PI;
	}
	if ( x === 1.0 ) {
		return PINF;
	}
	if ( x > 1.0 ) {
		return NaN;
	}
	if ( x < 0.1 ) {
		t = poly1( x - 0.05 );
	} else if ( x < 0.2 ) {
		t = poly2( x - 0.15 );
	} else if ( x < 0.3 ) {
		t = poly3( x - 0.25 );
	} else if ( x < 0.4 ) {
		t = poly4( x - 0.35 );
	} else if ( x < 0.5 ) {
		t = poly5( x - 0.45 );
	} else if ( x < 0.6 ) {
		t = poly6( x - 0.55 );
	} else if ( x < 0.7 ) {
		t = poly7( x - 0.65 );
	} else if ( x < 0.8 ) {
		t = poly8( x - 0.75 );
	} else if ( x < 0.85 ) {
		t = poly9( x - 0.825 );
	} else if ( x < 0.9 ) {
		t = poly10( x - 0.875 );
	} else {
		td = 1.0 - x;
		qd = poly11( td );
		kdm = poly12( td - 0.05 );
		t = -ln( qd ) * ( kdm * ONE_DIV_PI );
	}
	if ( FLG ) {
		// Complete the transformation mentioned above for m < 0:
		return t / sqrt( 1.0 - m );
	}
	return t;
}


// EXPORTS //

module.exports = ellipk;
