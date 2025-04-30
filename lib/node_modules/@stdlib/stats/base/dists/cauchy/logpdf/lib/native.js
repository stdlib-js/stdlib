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
* Evaluates the natural logarithm of the probability density function (logPDF) for a Cauchy distribution with location parameter `x0` and scale parameter `gamma` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {number} x0 - location parameter
* @param {PositiveNumber} gamma - scale parameter
* @returns {Probability} evaluated logPDF
*
* @example
* var y = logpdf( 2.0, 1.0, 1.0 );
* // returns ~-1.838
*
* @example
* var y = logpdf( 4.0, 3.0, 0.1 );
* // returns ~-3.457
*
* @example
* var y = logpdf( 4.0, 3.0, 3.0 );
* // returns ~-2.349
*
* @example
* var y = logpdf( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = logpdf( 2.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = logpdf( 2.0, 1.0, NaN );
* // returns NaN
*
* @example
* // Negative scale parameter:
* var y = logpdf( 2.0, 1.0, -2.0 );
* // returns NaN
*/
function logpdf( x, x0, gamma ) {
	return addon( x, x0, gamma );
}


// EXPORTS //

module.exports = logpdf;
