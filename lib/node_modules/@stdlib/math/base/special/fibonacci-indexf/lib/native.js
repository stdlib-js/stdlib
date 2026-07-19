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
* Computes the Fibonacci number index of a single-precision floating-point number.
*
* @private
* @param {NonNegativeInteger} F - Fibonacci number
* @returns {NonNegativeInteger} Fibonacci number index
*
* @example
* var n = fibonacciIndexf( 0 );
* // returns NaN
*
* @example
* var n = fibonacciIndexf( 1 );
* // returns NaN
*
* @example
* var n = fibonacciIndexf( 2 );
* // returns 3
*
* @example
* var n = fibonacciIndexf( 3 );
* // returns 4
*
* @example
* var n = fibonacciIndexf( 5 );
* // returns 5
*
* @example
* var n = fibonacciIndexf( 8 );
* // returns 6
*
* @example
* var n = fibonacciIndexf( NaN );
* // returns NaN
*
* @example
* var n = fibonacciIndexf( 3.14 );
* // returns NaN
*
* @example
* var n = fibonacciIndexf( -1 );
* // returns NaN
*/
function fibonacciIndexf( F ) {
	return addon( F );
}


// EXPORTS //

module.exports = fibonacciIndexf;
