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
* Returns the mode of a hypergeometric distribution.
*
* @private
* @param {NonNegativeInteger} N - population size
* @param {NonNegativeInteger} K - subpopulation size
* @param {NonNegativeInteger} n - number of draws
* @returns {NonNegativeInteger} mode
*
* @example
* var v = mode( 16, 11, 4 );
* // returns 3
*
* @example
* var v = mode( 2, 1, 1 );
* // returns 1
*
* @example
* var v = mode( 10, 5, 12 );
* // returns NaN
*
* @example
* var v = mode( 10, -2, 4 );
* // returns NaN
*/
function mode( N, K, n ) {
	return addon( N, K, n );
}


// EXPORTS //

module.exports = mode;
