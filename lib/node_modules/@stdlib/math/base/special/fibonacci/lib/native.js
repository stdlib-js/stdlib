/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Computes the nth Fibonacci number.
*
* @private
* @param {NonNegativeInteger} n - the Fibonacci number to compute
* @returns {NonNegativeInteger} Fibonacci number
*
* @example
* var y = fibonacci( 0 );
* // returns 0
*
* @example
* var y = fibonacci( 1 );
* // returns 1
*
* @example
* var y = fibonacci( 2 );
* // returns 1
*
* @example
* var y = fibonacci( 3 );
* // returns 2
*
* @example
* var y = fibonacci( 4 );
* // returns 3
*
* @example
* var y = fibonacci( 5 );
* // returns 5
*
* @example
* var y = fibonacci( 6 );
* // returns 8
*
* @example
* var y = fibonacci( -1 );
* // returns NaN
*/
function fibonacci( n ) {
	return addon( n );
}


// EXPORTS //

module.exports = fibonacci;
