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
* Returns the skewness of a hypergeometric distribution.
*
* @private
* @param {NonNegativeInteger} N - population size
* @param {NonNegativeInteger} K - subpopulation size
* @param {NonNegativeInteger} n - number of draws
* @returns {number} skewness
*
* @example
* var v = skewness( 16, 11, 4 );
* // returns ~-0.258
*
* @example
* var v = skewness( 4, 2, 2 );
* // returns 0.0
*
* @example
* var v = skewness( 10, 5, 12 );
* // returns NaN
*
* @example
* var v = skewness( 20, -2, 10 );
* // returns NaN
*
* @example
* var v = skewness( -2, 4, 2 );
* // returns NaN
*/
function skewness( N, K, n ) {
	return addon( N, K, n );
}


// EXPORTS //

module.exports = skewness;
