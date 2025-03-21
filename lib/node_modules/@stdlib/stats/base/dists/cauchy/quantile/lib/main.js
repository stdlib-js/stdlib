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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var tan = require( '@stdlib/math/base/special/tan' );
var PI = require( '@stdlib/constants/float64/pi' );


// MAIN //

/**
* Evaluates the quantile function for a Cauchy distribution with location parameter `x0` and scale parameter `gamma` at a probability `p`.
*
* @param {Probability} p - input value
* @param {number} x0 - location parameter
* @param {PositiveNumber} gamma - scale parameter
* @returns {number} evaluated quantile function
*
* @example
* var y = quantile( 0.3, 2.0, 2.0 );
* // returns ~0.547
*
* @example
* var y = quantile( 0.8, 10, 2.0 );
* // returns ~12.753
*
* @example
* var y = quantile( 0.1, 10.0, 2.0 );
* // returns ~3.845
*
* @example
* var y = quantile( 1.1, 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( -0.2, 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( NaN, 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.0, 0.0, NaN );
* // returns NaN
*
* @example
* // Negative scale parameter:
* var y = quantile( 0.5, 0.0, -1.0 );
* // returns NaN
*/
function quantile( p, x0, gamma ) {
	if (
		isnan( x0 ) ||
		isnan( gamma ) ||
		gamma <= 0.0 ||
		isnan( p ) ||
		p < 0.0 ||
		p > 1.0
	) {
		return NaN;
	}
	return x0 + ( gamma * tan( PI*( p-0.5 ) ) );
}


// EXPORTS //

module.exports = quantile;
