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
var asin = require( '@stdlib/math/base/special/asin' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var HALF_PI = require( '@stdlib/constants/float64/half-pi' );


// MAIN //

/**
* Evaluates the quantile function for an anglit distribution with location parameter `mu` and scale parameter `sigma` at a probability `p`.
*
* @param {Probability} p - cumulative probability
* @param {number} mu - location parameter
* @param {NonNegativeNumber} sigma - scale parameter
* @returns {number} evaluated quantile function
*
* @example
* var y = quantile( 0.5, 0.0, 1.0 );
* // returns ~0.0
*
* @example
* var y = quantile( 0.8, 2.0, 4.0 );
* // returns ~3.287
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
* var y = quantile( 0.5, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 0.0, NaN );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 0.0, -1.0 );
* // returns NaN
*/
function quantile( p, mu, sigma ) {
	if (
		isnan( p ) ||
		isnan( mu ) ||
		isnan( sigma ) ||
		sigma < 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return NaN;
	}
	if ( sigma === 0.0 ) {
		return mu;
	}
	return mu + ( sigma * ( asin( sqrt( p ) ) - ( 0.5 * HALF_PI ) ) );
}


// EXPORTS //

module.exports = quantile;
