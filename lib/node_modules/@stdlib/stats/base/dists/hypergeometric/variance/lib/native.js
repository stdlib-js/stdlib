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
* Returns the variance of a hypergeometric distribution.
*
* @private
* @param {NonNegativeInteger} N - population size
* @param {NonNegativeInteger} K - subpopulation size
* @param {NonNegativeInteger} n - number of draws
* @returns {NonNegativeNumber} variance
*
* @example
* var v = variance( 16, 11, 4 );
* // returns ~0.688
*
* @example
* var v = variance( 2, 1, 1 );
* // returns 0.25
*
* @example
* var v = variance( 10, 5, 12 );
* // returns NaN
*
* @example
* var v = variance( -2, 4, 2 );
* // returns NaN
*
* @example
* var v = variance( 20, -1, 10 );
* // returns NaN
*
* @example
* var v = variance( 40, 20, -2 );
* // returns NaN
*/
function variance( N, K, n ) {
	return addon( N, K, n );
}


// EXPORTS //

module.exports = variance;
