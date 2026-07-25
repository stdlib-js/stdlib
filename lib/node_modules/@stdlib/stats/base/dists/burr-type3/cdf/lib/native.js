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
* Evaluates the cumulative distribution function (CDF) for a Burr (type III) distribution with first shape parameter `c` and second shape parameter `d` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {PositiveNumber} c - first shape parameter
* @param {PositiveNumber} d - second shape parameter
* @returns {Probability} evaluated CDF
*
* @example
* var y = cdf( 0.1, 1.0, 1.0 );
* // returns ~0.091
*
* @example
* var y = cdf( 0.2, 2.0, 2.0 );
* // returns ~0.0015
*
* @example
* var y = cdf( 0.3, 2.0, 2.0 );
* // returns ~0.007
*
* @example
* var y = cdf( 1.0, 0.1, 1.0 );
* // returns 0.5
*
* @example
* var y = cdf( 2.0, -1.0, 0.5 );
* // returns NaN
*
* @example
* var y = cdf( 2.0, 0.5, -1.0 );
* // returns NaN
*
* @example
* var y = cdf( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, 1.0, NaN );
* // returns NaN
*/
function cdf( x, c, d ) {
	return addon( x, c, d );
}


// EXPORTS //

module.exports = cdf;
