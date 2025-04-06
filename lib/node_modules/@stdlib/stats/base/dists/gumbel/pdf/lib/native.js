/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Evaluates the probability density function (PDF) for a Gumbel distribution with location parameter `mu` and scale parameter `beta` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {number} mu - location parameter
* @param {PositiveNumber} beta - scale parameter
* @returns {Probability} evaluated CDF
*
* @example
* var y = pdf( 0.0, 0.0, 2.0 );
* // returns ~0.184
*
* @example
* var y = pdf( 0.0, 0.0, 1.0 );
* // returns ~0.368
*
* @example
* var y = pdf( 1.0, 3.0, 2.0 );
* // returns ~0.09
*
* @example
* var y = pdf( NaN, 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = pdf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = pdf( 0.0, 0.0, NaN );
* // returns NaN
*
* @example
* // Negative scale parameter:
* var y = pdf( 2.0, 0.0, -1.0 );
* // returns NaN
*/
function pdf( x, mu, beta ) {
	return addon( x, mu, beta );
}


// EXPORTS //

module.exports = pdf;
