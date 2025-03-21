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
* Computes the falling factorial of `x` and `n`.
*
* @private
* @param {number} x - first function parameter
* @param {NonNegativeInteger} n - second function parameter
* @returns {number} function value
*
* @example
* var v = fallingFactorial( 0.9, 5 );
* // returns ~0.644
*
* @example
* var v = fallingFactorial( -9.0, 3 );
* // returns -990.0
*
* @example
* var v = fallingFactorial( 0.0, 2 );
* // returns 0.0
*
* @example
* var v = fallingFactorial( 3.0, -2 );
* // returns NaN
*/
function fallingFactorial( x, n ) {
	return addon( x, n );
}


// EXPORTS //

module.exports = fallingFactorial;
