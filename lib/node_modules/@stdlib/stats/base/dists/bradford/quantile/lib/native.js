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
* Evaluates the quantile function for a Bradford distribution with shape parameter `c` at a probability `p`.
*
* @private
* @param {Probability} p - input value
* @param {PositiveNumber} c - shape parameter
* @returns {NonNegativeNumber} evaluated quantile function
*
* @example
* var y = quantile( 0.1, 0.1 );
* // returns ~0.096
*
* @example
* var y = quantile( 0.5, 5.0 );
* // returns ~0.290
*
* @example
* var y = quantile( 1.0, 10.0 );
* // returns 1.0
*
* @example
* var y = quantile( 0.5, 0.0 );
* // returns NaN
*
* @example
* var y = quantile( 2.0, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( -1.0, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 1.0, NaN );
* // returns NaN
*/
function quantile( p, c ) {
	return addon( p, c );
}


// EXPORTS //

module.exports = quantile;
