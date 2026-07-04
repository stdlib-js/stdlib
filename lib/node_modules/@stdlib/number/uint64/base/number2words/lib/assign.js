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

// VARIABLES //

var TWO_32 = 0x100000000; // 2^32


// MAIN //

/**
* Splits a number into the high and low 32-bit words of a 64-bit unsigned integer and assigns results to a provided output array.
*
* @param {NonNegativeInteger} value - integer value in the range [0, 2^53-1]
* @param {Collection} out - output array
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @returns {Collection} output array
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
*
* var out = new Uint32Array( 2 );
* // returns <Uint32Array>[ 0, 0 ]
*
* var w = assign( 9007199254740991, out, 1, 0 );
* // returns <Uint32Array>[ 2097151, 4294967295 ]
*
* var bool = ( w === out );
* // returns true
*/
function assign( value, out, stride, offset ) {
	out[ offset ] = ( value / TWO_32 ) >>> 0;
	out[ offset + stride ] = value >>> 0;
	return out;
}


// EXPORTS //

module.exports = assign;
