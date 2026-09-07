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
* Computes the squared hinge loss gradient with respect to a model parameter.
*
* ## Notes
*
* -   If `y` is not +1 or -1, the function returns `NaN`.
* -   When `t = 1.0`, we get the loss used by SVM.
*
* @param {number} x - input value
* @param {number} t - margin threshold
* @param {number} y - true target value
* @param {number} p - predicted value
* @returns {number} squared hinge loss gradient
*
* @example
* var v = squaredHingeGradient( 3.0, 1.0, 1.0, 0.782 );
* // returns ~-1.308
*
* @example
* var v = squaredHingeGradient( 2.5, 1.0, 1.0, 0.202 );
* // returns -3.99
*
* @example
* var v = squaredHingeGradient( -1.3, 1.0, 1.0, -0.999 );
* // returns ~5.197
*
* @example
* var v = squaredHingeGradient( -2.0, 1.0, -1.0, 0.234 );
* // returns -4.936
*
* @example
* var v = squaredHingeGradient( -2.0, 1.0, -1.0, 0.2 );
* // returns -4.8
*
* @example
* var v = squaredHingeGradient( -1.3, 1.0, 1.0, -0.9 );
* // returns ~4.94
*/
function squaredHingeGradient( x, t, y, p ) {
	var z;
	if (
		isnan( x ) || isnan( t ) || isnan( y ) || isnan( p ) ||
		( y !== -1.0 && y !== 1.0 )
	) {
		return NaN;
	}
	z = t - ( y*p );
	if ( z > 0.0 ) {
		return -2.0 * x * y * z;
	}
	return 0.0;
}


// EXPORTS //

module.exports = squaredHingeGradient;
