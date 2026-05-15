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
* Returns the excess skewness for an Erlang distribution with shape parameter `k` and rate parameter `lambda`.
*
* @private
* @param {PositiveInteger} k - shape parameter
* @param {PositiveNumber} lambda - rate parameter
* @returns {NonNegativeNumber} skewness
*
* @example
* var v = skewness( 1, 1.0 );
* // returns 2.0
*
* @example
* var v = skewness( 4, 12.0 );
* // returns 1.0
*
* @example
* var v = skewness( 8, 2.0 );
* // returns ~0.707
*
* @example
* var v = skewness( 1, -0.1 );
* // returns NaN
*
* @example
* var v = skewness( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = skewness( 2, NaN );
* // returns NaN
*
* @example
* var v = skewness( NaN, 2.0 );
* // returns NaN
*/
function skewness( k, lambda ) {
	return addon( k, lambda );
}


// EXPORTS //

module.exports = skewness;
