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

var abs = require( '@stdlib/math/base/special/abs' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var ln = require( '@stdlib/math/base/special/ln' );
var expm1 = require( '@stdlib/math/base/special/expm1' );
var NINF = require( '@stdlib/constants/math/float64-ninf' );


// MAIN //

/**
* Computes a one-parameter Box-Cox transformation.
*
* ## Method
*
* -   If \\( \lambda << 1 \\) and \\( \ln( x ) < 1.0 \\), then the product \\( \lambda \cdot \ln(x) \\) can lose precision, and, furthermore, \\( \operatorname{expm1}(x) = x \\) for \\( x < \epsilon \\).
* -   For double-precision floating-point numbers, the range of the natural log is \\( \[-744.44, 709.78\] and \\( \epsilon \\) is the smallest value produced.
* -   The value range means that we will have \\( |\lambda \cdot \ln(x)| < \epsilon \\) whenever \\( |\lambda| \leq \frac{\epsilon}{-\ln(d) \\), where \\( d \\) is the minimum double-precision floating-point number, thus corresponding to the value \\( \approx 2.98 \times 10^{-19} \\).
*
* @param {number} x - input value
* @param {number} lambda - power parameter
* @returns {number} Box-Cox transformation
*
* @example
* var v = boxcox( 1.0, 2.5 );
* // returns 0.0
*
* @example
* var v = boxcox( 4.0, 2.5 );
* // returns 12.4
*
* @example
* var v = boxcox( 10.0, 2.5 );
* // returns ~126.0911
*
* @example
* var v = boxcox( 2.0, 0.0 );
* // returns ~0.6931
*
* @example
* var v = boxcox( -1.0, 2.5 );
* // returns NaN
*
* @example
* var v = boxcox( 0.0, -1.0 );
* // returns -Infinity
*/
function boxcox( x, lambda ) {
	if ( isnan( x ) || isnan( lambda ) ) {
		return NaN;
	}
	if ( isPositiveZero( x ) && lambda < 0.0 ) {
		return NINF;
	}
	if ( abs( lambda ) < 1.0e-19 ) {
		return ln( x );
	}
	return expm1( lambda*ln( x ) ) / lambda;
}


// EXPORTS //

module.exports = boxcox;
