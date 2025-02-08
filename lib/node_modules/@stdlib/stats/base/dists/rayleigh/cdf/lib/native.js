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
* Evaluates the cumulative distribution function (CDF) for a Rayleigh distribution with scale parameter `sigma` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {NonNegativeNumber} sigma - scale parameter
* @returns {Probability} evaluated CDF
*
* @example
* var y = cdf( 2.0, 3.0 );
* // returns ~0.199
*
* @example
* var y = cdf( 1.0, 2.0 );
* // returns ~0.118
*
* @example
* var y = cdf( -1.0, 4.0 );
* // returns 0.0
*
* @example
* var y = cdf( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, NaN );
* // returns NaN
*
* @example
* // Negative scale parameter:
* var y = cdf( 2.0, -1.0 );
* // returns NaN
*/
function cdf( x, sigma ) {
	return addon( x, sigma );
}


// EXPORTS //

module.exports = cdf;
