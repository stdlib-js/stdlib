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
* Evaluates the quantile function for a log-logistic distribution with scale parameter `alpha` and shape parameter `beta` at a probability `p`.
*
* @private
* @param {Probability} p - input probability
* @param {PositiveNumber} alpha - scale parameter
* @param {PositiveNumber} beta - shape parameter
* @returns {number} evaluated quantile function
*
* @example
* var y = quantile( 0.5, 1.0, 1.0 );
* // returns 1.0
*
* @example
* var y = quantile( 0.5, 4.0, 2.0 );
* // returns 4.0
*
* @example
* var y = quantile( 0.8, 1.0, 1.0 );
* // returns 4.0
*
* @example
* var y = quantile( -0.5, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 1.5, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 1.0, NaN );
* // returns NaN
*
* @example
* var y = quantile( 0.5, -1.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 1.0, -1.0 );
* // returns NaN
*/
function quantile( p, alpha, beta ) {
	return addon( p, alpha, beta );
}


// EXPORTS //

module.exports = quantile;
