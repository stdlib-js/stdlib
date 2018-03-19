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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_acosh.c?view=markup}. The implementation follows the original, but has been modified for JavaScript.
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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var log1p = require( '@stdlib/math/base/special/log1p' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var LN2 = require( '@stdlib/constants/math/float64-ln-two' );
var ln = require( '@stdlib/math/base/special/ln' );


// VARIABLES //

var HUGE = 1 << 28; // 2**28


// MAIN //

/**
* Computes the hyperbolic arccosine of a number.
*
* ## Method
*
* Based on
*
* ```tex
* \operatorname{acosh}(x) = \log \left[ x + \sqrt{ x^2 - 1 } \right]
* ```
*
* we have
*
* ```tex
* \operatorname{acosh}(x) = \begin{cases}
* \log(x) + \tfrac{\ln}{2} & \text{ if x is large } \\
* \log \left( 2x-\tfrac{1}{\sqrt{x^2-1}+x} \right) & \text{ if } x > 2 \\
* \operatorname{log1p}\left( x - 1 + \sqrt{ 2 \cdot (x-1) + (x-1)^2 } \right) & \text{ otherwise }
* \end{cases}
* ```
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* \operatorname{acosh}(x) &= \mathrm{NaN}\ \text{ if } x < 1 \\
* \end{align*}
* ```
*
* @param {number} x - input value
* @returns {number} hyperbolic arccosine (in radians)
*
* @example
* var v = acosh( 1.0 );
* // returns 0.0
*
* @example
* var v = acosh( 2.0 );
* // returns ~1.317
*
* @example
* var v = acosh( NaN );
* // returns NaN
*/
function acosh( x ) {
	var t;
	if ( isnan( x ) ) {
		return NaN;
	}
	if ( x < 1.0 ) {
		return NaN;
	}
	if ( x === 1.0 ) {
		return 0.0;
	}
	if ( x >= HUGE ) {
		return ln( x ) + LN2;
	}
	if ( x > 2.0 ) {
		return ln( (2.0*x) - ( 1.0 / ( x + sqrt( (x*x) - 1.0 ) ) ) );
	}
	// Case: 2 >= x > 1
	t = x - 1.0;
	return log1p( t + sqrt( (2.0*t) + (t*t) ) );
}


// EXPORTS //

module.exports = acosh;
