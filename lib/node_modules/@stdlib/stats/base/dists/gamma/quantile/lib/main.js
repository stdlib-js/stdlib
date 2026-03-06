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
var gammaincinv = require( '@stdlib/math/base/special/gammaincinv' );


// MAIN //

/**
* Evaluates the quantile function for a gamma distribution with shape parameter `alpha` and rate parameter `beta` at a probability `p`.
*
* @param {Probability} p - input value
* @param {NonNegativeNumber} alpha - shape parameter
* @param {PositiveNumber} beta - rate parameter
* @returns {number} evaluated quantile function
*
* @example
* var y = quantile( 0.8, 2.0, 1.0 );
* // returns ~2.994
*
* @example
* var y = quantile( 0.5, 4.0, 2.0 );
* // returns ~1.836
*
* @example
* var y = quantile( 1.1, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( -0.2, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.0, 1.0, NaN );
* // returns NaN
*
* @example
* // Non-positive shape parameter:
* var y = quantile( 0.5, -1.0, 1.0 );
* // returns NaN
*
* @example
* // Non-positive rate parameter:
* var y = quantile( 0.5, 1.0, -1.0 );
* // returns NaN
*/
function quantile( p, alpha, beta ) {
	if (
		isnan( alpha ) ||
		isnan( beta ) ||
		isnan( p ) ||
		alpha < 0.0 ||
		beta <= 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return NaN;
	}
	if ( alpha === 0.0 ) {
		return 0.0;
	}
	return ( 1.0 / beta ) * gammaincinv( p, alpha );
}


// EXPORTS //

module.exports = quantile;
