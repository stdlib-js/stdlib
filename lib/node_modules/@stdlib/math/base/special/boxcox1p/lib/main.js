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
*/

'use strict';

// MODULES //

var log1p = require( '@stdlib/math/base/special/log1p' );
var abs = require( '@stdlib/math/base/special/abs' );
var expm1 = require( '@stdlib/math/base/special/expm1' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var NINF = require( '@stdlib/constants/math/float64-ninf' );


// MAIN //

/**
* Computes a one-parameter Box-Cox transformation of `1+x`.
*
* ## Method
*
* When computing a one-parameter Box-Cox transformation
*
* -   If \\( \lambda << 1 \\) and \\( \ln( x ) < 1.0 \\), then the product \\( \lambda \cdot \ln(x) \\) can lose precision, and, furthermore, \\( \operatorname{expm1}(x) = x \\) for \\( x < \epsilon \\).
* -   For double-precision floating-point numbers, the range of the natural log is \\( \[-744.44, 709.78\] and \\( \epsilon \\) is the smallest value produced.
* -   The value range means that we will have \\( |\lambda \cdot \ln(x)| < \epsilon \\) whenever \\( |\lambda| \leq \frac{\epsilon}{-\ln(d) \\), where \\( d \\) is the minimum double-precision floating-point number, thus corresponding to the value \\( \approx 2.98 \times 10^{-19} \\).
*
* For small `x` values, the same method described above applies with the modification that the smallest value returned by \\( \operatorname{log1p}(x) \\) is the minimum representable value, not \\( \epsilon \\). Furthermore, we need to guard against underflow when \\( \operatorname{log1p}(x) < \epsilon \\).
*
* @param {number} x - input value
* @param {number} lambda - power parameter
* @returns {number} Box-Cox transformation of `1+x`
*
* @example
* var v = boxcox1p( 1.0, 2.5 );
* // returns ~1.8627
*
* @example
* var v = boxcox1p( 4.0, 2.5 );
* // returns ~21.9607
*
* @example
* var v = boxcox1p( 10.0, 2.5 );
* // returns ~160.1246
*
* @example
* var v = boxcox1p( 2.0, 0.0 );
* // returns ~1.0986
*
* @example
* var v = boxcox1p( -1.0, 2.5 );
* // returns -0.4
*
* @example
* var v = boxcox1p( 0.0, -1.0 );
* // returns 0.0
*
* @example
* var v = boxcox1p( -1.0, -1.0 );
* // returns -Infinity
*/
function boxcox1p( x, lambda ) {
	var lgx;
	if ( isnan( x ) || isnan( lambda ) || x < -1.0 ) {
		return NaN;
	}
	if ( x === -1.0 && lambda < 0.0 ) {
		return NINF;
	}
	lgx = log1p( x );
	if (
		abs( lambda ) < 1.0e-19 ||

		// Guard against underflow...
		(
			abs( lgx ) < 1.0e-289 &&
			abs( lambda ) < 1.0e273
		)
	) {
		return lgx;
	}
	return expm1( lambda*lgx ) / lambda;
}


// EXPORTS //

module.exports = boxcox1p;
