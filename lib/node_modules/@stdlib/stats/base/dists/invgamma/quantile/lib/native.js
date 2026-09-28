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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Evaluates the quantile function for an inverse gamma distribution with shape parameter `alpha` and scale parameter `beta` at a probability `p`.
*
* @private
* @param {Probability} p - input value
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} beta - scale parameter
* @returns {number} evaluated quantile function
*
* @example
* var y = quantile( 0.8, 2.0, 1.0 );
* // returns ~1.213
*
* @example
* var y = quantile( 0.5, 4.0, 2.0 );
* // returns ~0.545
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
* // Non-positive scale parameter:
* var y = quantile( 0.5, 1.0, -1.0 );
* // returns NaN
*/
function quantile( p, alpha, beta ) {
	return addon( p, alpha, beta );
}


// EXPORTS //

module.exports = quantile;
