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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_asinh.c?view=markup}. The implementation follows the original, but has been modified for JavaScript.
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

var isinfinite = require( '@stdlib/math/base/assert/is-infinite' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var log1p = require( '@stdlib/math/base/special/log1p' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var LN2 = require( '@stdlib/constants/math/float64-ln-two' );
var ln = require( '@stdlib/math/base/special/ln' );


// VARIABLES //

var NEAR_ZERO = 1.0 / (1 << 28); // 2**-28
var HUGE = 1 << 28; // 2**28


// MAIN //

/**
* Computes the hyperbolic arcsine of a number.
*
* ## Method
*
* Based on
*
* ```tex
* \operatorname{asinh}(x) = \operatorname{sgn}(x) \cdot \log \left( |x| + \sqrt{x^2 + 1} \right)
* ```
*
* we have
*
* ```tex
* \operatorname{asinh}(x) = \begin{cases}
* x  & \text{ if }  1+x^2 =1, \\
* \operatorname{sgn}(x) \cdot \left( \log(x) + \tfrac{\ln}{2} \right) & \text{ if large } |x| \\
* \operatorname{sgn}(x) \cdot \log\left( 2 |x| + 1 / ( |x|+ \sqrt{x^2+1} ) \right) & \text{ if } |x| > 2 \\
* \operatorname{sgn}(x) \cdot \operatorname{log1p}\left( |x| + \tfrac{x^2}{1 + \sqrt{1+x^2}} \right) & \text{otherwise}
* \end{cases}
* ```
*
* @param {number} x - input value
* @returns {number} hyperbolic arcsine (in radians)
*
* @example
* var v = asinh( 0.0 );
* // returns 0.0
*
* @example
* var v = asinh( 2.0 );
* // returns ~1.444
*
* @example
* var v = asinh( -2.0 );
* // returns ~-1.444
*
* @example
* var v = asinh( NaN );
* // returns NaN
*/
function asinh( x ) {
	var sgn;
	var xx;
	var t;
	if ( isnan( x ) || isinfinite( x ) ) {
		return x;
	}
	if ( x < 0.0 ) {
		x = -x;
		sgn = true;
	}
	// Case: |x| < 2**-28
	if ( x < NEAR_ZERO ) {
		t = x;
	}
	// Case: |x| > 2**28
	else if ( x > HUGE ) {
		t = ln( x ) + LN2;
	}
	// Case: 2**28 > |x| > 2.0
	else if ( x > 2.0 ) {
		t = ln( (2.0*x) + ( 1.0 / (sqrt( (x*x) + 1.0 ) + x) ) );
	}
	// Case: 2.0 > |x| > 2**-28
	else {
		xx = x * x;
		t = log1p( x + ( xx/(1.0 + sqrt(1.0 + xx)) ) );
	}
	return ( sgn ) ? -t : t;
}


// EXPORTS //

module.exports = asinh;
