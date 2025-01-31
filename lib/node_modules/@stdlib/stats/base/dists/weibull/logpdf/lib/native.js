/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Evaluates the natural logarithm of the probability density function (PDF) for a Weibull distribution with shape parameter `k` and scale parameter `lambda` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {PositiveNumber} k - shape parameter
* @param {PositiveNumber} lambda - scale parameter
* @returns {number} evaluated logarithm of probability density function
*
* @example
* var y = logpdf( 2.0, 1.0, 0.5 );
* // returns ~-3.307
*
* @example
* var y = logpdf( 0.1, 1.0, 1.0 );
* // returns ~-0.1
*
* @example
* var y = logpdf( -1.0, 4.0, 2.0 );
* // returns -Infinity
*
* @example
* var y = logpdf( NaN, 0.6, 1.0 );
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
* var y = logpdf( 2.0, 0.0, -1.0 );
* // returns NaN
*/
function logpdf( x, k, lambda ) {
	return addon( x, k, lambda );
}


// EXPORTS //

module.exports = logpdf;
