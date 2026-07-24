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
* Evaluates the cumulative distribution function (CDF) for a binomial distribution with number of trials `n` and success probability `p` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {NonNegativeInteger} n - number of trials
* @param {Probability} p - success probability
* @returns {Probability} evaluated CDF
*
* @example
* var y = cdf( 3, 20, 0.2 );
* // returns ~0.411
*
* @example
* var y = cdf( 21, 20, 0.2 );
* // returns 1.0
*
* @example
* var y = cdf( 5, 10, 0.4 );
* // returns ~0.834
*
* @example
* var y = cdf( 0, 10, 0.4 );
* // returns ~0.006
*
* @example
* var y = cdf( 0, 20, NaN );
* // returns NaN
*
* @example
* var y = cdf( 2, -2, 0.5 );
* // returns NaN
*
* @example
* var y = cdf( 2, 20, -1.0 );
* // returns NaN
*
* @example
* var y = cdf( 2, 20, 1.5 );
* // returns NaN
*/
function cdf( x, n, p ) {
	return addon( x, n, p );
}


// EXPORTS //

module.exports = cdf;
