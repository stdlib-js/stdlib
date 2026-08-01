/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Computes the modified Huber loss gradient with respect to a model parameter.
*
* ## Notes
*
* -   If `y` is not +1 or -1, the function returns `NaN`.
*
* ## References
*
* -   Zhang, Tong. 2004. "Solving Large Scale Linear Prediction Problems Using Stochastic Gradient Descent Algorithms." In _Proceedings of the Twenty-First International Conference on Machine Learning_, 116. New York, NY, USA: Association for Computing Machinery. doi:[10.1145/1015330.1015332][@zhang:2004a].
*
* [@zhang:2004a]: https://doi.org/10.1145/1015330.1015332
*
* @param {number} x - input value
* @param {number} y - true target value
* @param {number} p - predicted value
* @returns {number} modified Huber loss gradient
*
* @example
* var v = modifiedHuberGradient( 3.4, 1.0, 0.782 );
* // returns ~-1.482
*
* @example
* var v = modifiedHuberGradient( -5.0, 1.0, 0.202 );
* // returns 7.98
*
* @example
* var v = modifiedHuberGradient( 2.3, 1.0, -0.999 );
* // returns ~-9.195
*
* @example
* var v = modifiedHuberGradient( 4.4, -1.0, 0.234 );
* // returns ~10.859
*
* @example
* var v = modifiedHuberGradient( 1.0, -1.0, 0.2 );
* // returns 2.4
*
* @example
* var v = modifiedHuberGradient( -5.1, 1.0, -0.9 );
* // returns 19.38
*/
function modifiedHuberGradient( x, y, p ) {
	var z;

	if (
		isnan( x ) || isnan( y ) || isnan( p ) ||
		( y !== -1.0 && y !== 1.0 )
	) {
		return NaN;
	}
	z = y * p;
	if ( z >= 1.0 ) {
		return 0.0;
	}
	if ( z >= -1.0 ) {
		return -2.0 * ( 1.0 - z ) * y * x;
	}
	return -4.0 * y * x;
}


// EXPORTS //

module.exports = modifiedHuberGradient;
