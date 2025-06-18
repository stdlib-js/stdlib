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
* Evaluates the quantile function for a Weibull distribution with shape parameter `k` and scale parameter `lambda` at a probability `p`.
*
* @private
* @param {number} p - input probability
* @param {number} k - shape parameter
* @param {number} lambda - scale parameter
* @returns {number} evaluated quantile
*
* @example
* var y = quantile( 0.5, 1.0, 1.0 );
* // returns ~0.693
*
* @example
* var y = quantile( 0.5, 2.0, 4.0 );
* // returns ~3.33
*
* @example
* var y = quantile( +Infinity, 2.0, 4.0 );
* // returns NaN
*
* @example
* var y = quantile( -Infinity, 2.0, 4.0 );
* // returns NaN
*
* @example
* var y = quantile( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 1.0, NaN );
* // returns NaN
*
* @example
* var y = quantile( 0.5, -1.0, 1.0 );
* // returns NaN
*/
function quantile( p, k, lambda ) {
	return addon( p, k, lambda );
}


// EXPORTS //

module.exports = quantile;
