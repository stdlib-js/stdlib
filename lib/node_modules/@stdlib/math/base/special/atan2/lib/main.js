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
* The original code, copyright and license are from [Go]{@link https://golang.org/src/math/atan2.go}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*/

'use strict';

// MODULES //

var isinfinite = require( '@stdlib/math/base/assert/is-infinite' );
var copysign = require( '@stdlib/math/base/special/copysign' );
var signbit = require( '@stdlib/number/float64/base/signbit' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var atan = require( '@stdlib/math/base/special/atan' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );
var PI = require( '@stdlib/constants/math/float64-pi' );


// MAIN //

/**
* Computes the angle in the plane (in radians) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)`.
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* \operatorname{atan2}(y,\mathrm{NaN}) &= \mathrm{NaN}\\
* \operatorname{atan2}(\mathrm{NaN},x) &= \mathrm{NaN}\\
* \operatorname{atan2}( +0,x \ge 0 ) &= +0 \\
* \operatorname{atan2}( -0, x \ge 0 ) &= -0 \\
* \operatorname{atan2}( +0,x \le -0 ) &= +\Pi \\
* \operatorname{atan2}( -0, x \le -0 ) &= -\Pi \\
* \operatorname{atan2}(+\infty, +\infty) &= +\tfrac{\Pi}{4} \\
* \operatorname{atan2}(-\infty, +\infty) &= -\tfrac{\Pi}{4} \\
* \operatorname{atan2}(+\infty, -\infty) &= +\tfrac{3\Pi}{4} \\
* \operatorname{atan2}(-\infty, -\infty) &= -\tfrac{3\Pi}{4} \\
* \operatorname{atan2}(y, +\infty) &= 0.0 \\
* \operatorname{atan2}(y>0, -\infty) &= +\Pi \\
* \operatorname{atan2}(y<0, -\infty) &= -\Pi \\
* \operatorname{atan2}(+\infty, x ) &= +\tfrac{\Pi}{2} \\
* \operatorname{atan2}(-\infty, x ) &= -\tfrac{\Pi}{2} \\
* \end{align*}
* ```
*
* @param {number} y - `y` coordinate
* @param {number} x - `x` coordinate
* @returns {number} angle (in radians)
*
* @example
* var v = atan2( 2.0, 2.0 ); // => atan(1.0)
* // returns ~0.785
*
* @example
* var v = atan2( 6.0, 2.0 ); // => atan(3.0)
* // returns ~1.249
*
* @example
* var v = atan2( -1.0, -1.0 ); // => atan(1.0) - π
* // returns ~-2.356
*
* @example
* var v = atan2( 3.0, 0.0 ); // => π/2
* // returns ~1.571
*
* @example
* var v = atan2( -2.0, 0.0 ); // => -π/2
* // returns ~-1.571
*
* @example
* var v = atan2( 0.0, 0.0 );
* // returns 0.0
*
* @example
* var v = atan2( 3.0, NaN );
* // returns NaN
*
* @example
* var v = atan2( NaN, 2.0 );
* // returns NaN
*/
function atan2( y, x ) {
	var q;
	if ( isnan( x ) || isnan( y ) ) {
		return NaN;
	}
	if ( isinfinite( x ) ) {
		if ( x === PINF ) {
			if ( isinfinite( y ) ) {
				return copysign( PI / 4.0, y );
			}
			return copysign( 0.0, y );
		}
		// Case: x is -Infinity
		if ( isinfinite( y ) ) {
			return copysign( 3.0*PI/4.0, y );
		}
		return copysign( PI, y );
	}
	if ( isinfinite( y ) ) {
		return copysign( PI / 2.0, y );
	}
	if ( y === 0.0 ) {
		if ( x >= 0.0 && !signbit( x ) ) {
			return copysign( 0.0, y );
		}
		return copysign( PI, y );
	}
	if ( x === 0.0 ) {
		return copysign( PI / 2.0, y );
	}
	q = atan( y / x );
	if ( x < 0.0 ) {
		if ( q <= 0.0 ) {
			return q + PI;
		}
		return q - PI;
	}
	return q;
}


// EXPORTS //

module.exports = atan2;
