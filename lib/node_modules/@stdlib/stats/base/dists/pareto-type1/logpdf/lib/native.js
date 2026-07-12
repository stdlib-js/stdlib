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
* Evaluates the natural logarithm of the probability density function (PDF) for a Pareto (Type I) distribution with shape parameter `alpha` and scale parameter `beta` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} beta - scale parameter
* @returns {number} evaluated logPDF
*
* @example
* var y = logpdf( 4.0, 1.0, 1.0 );
* // returns ~-2.773
*
* @example
* var y = logpdf( 20.0, 1.0, 10.0 );
* // returns ~-3.689
*
* @example
* var y = logpdf( 7.0, 2.0, 6.0 );
* // returns ~-1.561
*
* @example
* var y = logpdf( 7.0, 6.0, 3.0 );
* // returns ~-5.238
*
* @example
* var y = logpdf( 1.0, 4.0, 2.0 );
* // returns -Infinity
*
* @example
* var y = logpdf( 1.5, 4.0, 2.0 );
* // returns -Infinity
*
* @example
* var y = logpdf( 0.5, -1.0, 0.5 );
* // returns NaN
*
* @example
* var y = logpdf( 0.5, 0.5, -1.0 );
* // returns NaN
*
* @example
* var y = logpdf( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = logpdf( 0.5, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = logpdf( 0.5, 1.0, NaN );
* // returns NaN
*/
function logpdf( x, alpha, beta ) {
	return addon( x, alpha, beta );
}


// EXPORTS //

module.exports = logpdf;
