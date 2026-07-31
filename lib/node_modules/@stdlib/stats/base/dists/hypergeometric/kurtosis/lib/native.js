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
* Returns the excess kurtosis of a hypergeometric distribution.
*
* @private
* @param {NonNegativeInteger} N - population size
* @param {NonNegativeInteger} K - subpopulation size
* @param {NonNegativeInteger} n - number of draws
* @returns {number} excess kurtosis
*
* @example
* var v = kurtosis( 16.0, 11.0, 4.0 );
* // returns ~-0.326
*
* @example
* var v = kurtosis( 4.0, 2.0, 2.0 );
* // returns 0.0
*
* @example
* var v = kurtosis( 10.0, 5.0, 12.0 );
* // returns NaN
*
* @example
* var v = kurtosis( 10.3, 10.0, 4.0 );
* // returns NaN
*
* @example
* var v = kurtosis( 20.0, 10.5, 4.0 );
* // returns NaN
*
* @example
* var v = kurtosis( 20.0, 10.0, 4.5 );
* // returns NaN
*/
function kurtosis( N, K, n ) {
	return addon( N, K, n );
}


// EXPORTS //

module.exports = kurtosis;
