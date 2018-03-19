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
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_atanh.c?view=markup}. The implementation follows the original, but has been modified for JavaScript.
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
var PINF = require( '@stdlib/constants/math/float64-pinf' );
var NINF = require( '@stdlib/constants/math/float64-ninf' );


// VARIABLES //

var NEAR_ZERO = 1.0 / (1 << 28); // 2**-28


// MAIN //

/**
* Computes the hyperbolic arctangent of a number.
*
* ## Method
*
* 1.  Reduce \\( x \\) to positive by \\( \operatorname{atanh}(-x) = -\operatorname{atanh}(x) \\)
*
* 2.  For \\( x \ge 0.5 \\), we calculate
*
*     ```tex
*     \operatorname{atanh}(x) = \frac{1}{2} \cdot \log\left( 1 + \tfrac{2x}{1-x} \right) = \frac{1}{2} \cdot \operatorname{log1p}\left( 2 \tfrac{x}{1-x} \right)
*     ```
*
*     For \\( x < 0.5 \\), we have
*
*     ```tex
*     \operatorname{atanh}(x) = \frac{1}{2} \cdot \operatorname{log1p}\left( 2x + \tfrac{2x^2}{1-x} \right)
*     ```
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* \operatorname{atanh}(\mathrm{NaN}) &= \mathrm{NaN}\\
* \operatorname{atanh}(1.0) &= \infty \\
* \operatorname{atanh}(-1.0) &= -\infty \\
* \end{align*}
* ```
*
* @param {number} x - input value
* @returns {number} hyperbolic arctangent (in radians)
*
* @example
* var v = atanh( 0.0 );
* // returns 0.0
*
* @example
* var v = atanh( 0.9 );
* // returns ~1.472
*
* @example
* var v = atanh( 1.0 );
* // returns Infinity
*
* @example
* var v = atanh( -1.0 );
* // returns -Infinity
*
* @example
* var v = atanh( NaN );
* // returns NaN
*/
function atanh( x ) {
	var sgn;
	var t;
	if ( isnan( x ) ) {
		return NaN;
	}
	if ( x < -1.0 || x > 1.0 ) {
		return NaN;
	}
	if ( x === 1.0 ) {
		return PINF;
	}
	if ( x === -1.0 ) {
		return NINF;
	}
	if ( x < 0.0 ) {
		sgn = true;
		x = -x;
	}
	// Case: |x| < 2**-28
	if ( x < NEAR_ZERO ) {
		return ( sgn ) ? -x : x;
	}
	if ( x < 0.5 ) {
		t = x + x;
		t = 0.5 * log1p( t + ( t*x/(1-x) ) );
	} else {
		t = 0.5 * log1p( (x+x) / (1-x) );
	}
	return ( sgn ) ? -t : t;
}


// EXPORTS //

module.exports = atanh;
