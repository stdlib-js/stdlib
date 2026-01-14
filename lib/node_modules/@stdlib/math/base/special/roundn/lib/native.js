/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Rounds a double-precision floating-point number to the nearest multiple of \\(10^n\\).
*
* @private
* @param {number} x - input value
* @param {integer} n - integer power of `10`
* @returns {number} rounded value
*
* @example
* // Round a value to 2 decimal places:
* var v = roundn( 3.141592653589793, -2 );
* // returns 3.14
*
* @example
* // If n = 0, `roundn` behaves like `round`:
* var v = roundn( 3.141592653589793, 0 );
* // returns 3.0
*
* @example
* // Round a value to the nearest thousand:
* var v = roundn( 12368.0, 3 );
* // returns 12000.0
*/
function roundn( x, n ) {
	return addon( x, n );
}


// EXPORTS //

module.exports = roundn;
