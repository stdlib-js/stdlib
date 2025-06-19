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
* Evaluates the logarithm of the probability density function (PDF) for a raised cosine distribution with location parameter `mu` and scale parameter `s` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {number} mu - location parameter
* @param {NonNegativeNumber} s - scale parameter
* @returns {number} evaluated logPDF
*
* @example
* var y = logpdf( 2.0, 0.0, 3.0 );
* // returns ~-2.485
*
* @example
* var y = logpdf( 1.5, 4.0, 4.0 );
* // returns ~-2.562
*
* @example
* var y = logpdf( NaN, 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = logpdf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = logpdf( 0.0, 0.0, NaN );
* // returns NaN
*
* @example
* // Negative scale parameter:
* var y = logpdf( 2.0, 0.0, -1.0 );
* // returns NaN
*
* @example
* var y = logpdf( 2.0, 8.0, 0.0 );
* // returns -Infinity
*
* @example
* var y = logpdf( 8.0, 8.0, 0.0 );
* // returns Infinity
*/
function logpdf( x, mu, s ) {
	return addon( x, mu, s );
}


// EXPORTS //

module.exports = logpdf;
