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
* Evaluates the polygamma function.
*
* @private
* @param {NonNegativeInteger} n - order of derivative
* @param {number} x - input value
* @returns {number} (n+1)'th derivative
*
* @example
* var v = polygamma( 3, 1.2 );
* // returns ~3.245
*
* @example
* var v = polygamma( 5, 1.2 );
* // returns ~41.39
*
* @example
* var v = polygamma( 3, -4.9 );
* // returns ~60014.239
*
* @example
* var v = polygamma( -1, 5.3 );
* // returns NaN
*
* @example
* var v = polygamma( 2, -2.0 );
* // returns NaN
*
* @example
* var v = polygamma( 1, NaN );
* // returns NaN
*/
function polygamma( n, x ) {
	return addon( n, x );
}


// EXPORTS //

module.exports = polygamma;
