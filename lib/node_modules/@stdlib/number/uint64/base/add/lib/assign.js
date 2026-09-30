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

// MAIN //

/**
* Adds two 64-bit unsigned integers and assigns results to a provided output array.
*
* @param {uinteger} ah - high 32-bit word of the first 64-bit unsigned integer
* @param {uinteger} al - low 32-bit word of the first 64-bit unsigned integer
* @param {uinteger} bh - high 32-bit word of the second 64-bit unsigned integer
* @param {uinteger} bl - low 32-bit word of the second 64-bit unsigned integer
* @param {Collection} out - output array
* @param {integer} so - stride length
* @param {NonNegativeInteger} oo - starting index
* @returns {Collection} output array
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
*
* var out = assign( 0, 5, 0, 10, new Uint32Array( 2 ), 1, 0 );
* // returns <Uint32Array>[ 0, 15 ]
*/
function assign( ah, al, bh, bl, out, so, oo ) {
	var carry;

	ah >>>= 0;
	al >>>= 0;
	bh >>>= 0;
	bl >>>= 0;

	out[ oo+so ] = ( al + bl ) >>> 0; // lo
	carry = ( out[ oo+so ] < al ) >>> 0;
	out[ oo ] = ( ah + bh + carry ) >>> 0; // hi
	return out;
}


// EXPORTS //

module.exports = assign;
