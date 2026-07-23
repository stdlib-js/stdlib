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
* Evaluates the quantile function for a binomial distribution with number of trials `n` and success probability `p` at a probability `r`.
*
* @private
* @param {Probability} r - input value
* @param {NonNegativeInteger} n - number of trials
* @param {Probability} p  - success probability
* @returns {NonNegativeInteger} evaluated quantile function
*
* @example
* var y = quantile( 0.4, 20, 0.2 );
* // returns 3
*
* @example
* var y = quantile( 0.8, 20, 0.2 );
* // returns 5
*
* @example
* var y = quantile( 0.5, 10, 0.4 );
* // returns 4
*
* @example
* var y = quantile( 0.0, 10, 0.4 );
* // returns 0
*
* @example
* var y = quantile( 1.0, 10, 0.4 );
* // returns 10
*
* @example
* var y = quantile( NaN, 20, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( 0.2, NaN, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( 0.2, 20, NaN );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 1.5, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, -2.0, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 20, -1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 20, 1.5 );
* // returns NaN
*/
function quantile( r, n, p ) {
	return addon( r, n, p );
}


// EXPORTS //

module.exports = quantile;
