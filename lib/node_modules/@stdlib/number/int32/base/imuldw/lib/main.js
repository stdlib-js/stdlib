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

var fcn = require( './assign.js' );


// MAIN //

/**
* Performs multiplication of two signed 32-bit integers and returns an array of two signed 32-bit integers which represents the signed 64-bit integer product.
*
* @param {uinteger32} a - integer
* @param {uinteger32} b - integer
* @returns {Array<number>} output array
*
* @example
* var v = imuldw( 0xAAAAAAAA, 0x55555555 );
* // returns [ -477218589, 1908874354 ]
*/
function imuldw( a, b ) {
	return fcn( a, b, [ 0, 0 ], 1, 0 );
}


// EXPORTS //

module.exports = imuldw;
