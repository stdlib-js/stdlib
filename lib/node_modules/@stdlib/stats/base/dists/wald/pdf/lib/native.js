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
* Evaluates the probability density function (PDF) for a Wald distribution with mean `mu` and shape parameter `lambda` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {PositiveNumber} mu - mean
* @param {PositiveNumber} lambda - shape parameter
* @returns {number} evaluated probability density function
*
* @example
* var y = pdf( 2.0, 1.0, 1.0 );
* // returns ~0.110
*
* @example
* var y = pdf( 0.5, 2.0, 3.0 );
* // returns ~0.362
*
* @example
* var y = pdf( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = pdf( 1.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = pdf( 1.0, 1.0, NaN );
* // returns NaN
*
* @example
* // Non-positive mean:
* var y = pdf( 2.0, 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = pdf( 2.0, -1.0, 1.0 );
* // returns NaN
*
* @example
* // Negative shape parameter:
* var y = pdf( 2.0, 1.0, -1.0 );
* // returns NaN
*
* @example
* // Zero shape parameter (degenerate distribution):
* var y = pdf( 2.0, 1.0, 0.0 );
* // returns 0.0
*
* @example
* var y = pdf( 1.0, 1.0, 0.0 );
* // returns Infinity
*
* @example
* // Non-positive x:
* var y = pdf( 0.0, 1.0, 1.0 );
* // returns 0.0
*
* @example
* var y = pdf( -1.0, 1.0, 1.0 );
* // returns 0.0
*/
function pdf( x, mu, lambda ) {
	return addon( x, mu, lambda );
}


// EXPORTS //

module.exports = pdf;
