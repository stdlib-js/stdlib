/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var IS_LITTLE_ENDIAN = require( '@stdlib/assert/is-little-endian' );
var Uint8Array = require( '@stdlib/array/uint8' );
var DataView = require( '@stdlib/array/dataview' );


// VARIABLES //

// 2**32
var TWO_32 = 4294967296;

// Initialize a workspace:
var WORKSPACE = new Uint8Array( 8 );


// MAIN //

/**
* Converts a signed 64-bit integer byte array to a double-precision floating-point number.
*
* ## Notes
*
* -   The function assumes host byte order (endianness).
*
* @param {Uint8Array} bytes - byte array
* @param {integer} stride - stride
* @param {NonNegativeInteger} offset - index offset
* @returns {number} double-precision floating-point number
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var bytes = new Uint8Array( [ 255, 255, 255, 255, 255, 255, 255, 255 ] );
* var x = fromInt64Bytes( bytes, 1, 0 );
* // returns -1.0
*/
function fromInt64Bytes( bytes, stride, offset ) {
	var view;
	var hi;
	var lo;
	var b;
	var i;

	if ( stride === 1 ) { // contiguous
		b = bytes;
	} else { // non-contiguous
		b = WORKSPACE;
		for ( i = 0; i < 8; i++ ) {
			b[ i ] = bytes[ offset ];
			offset += stride;
		}
		offset = 0;
	}
	view = new DataView( b.buffer, b.byteOffset, b.byteLength );
	if ( IS_LITTLE_ENDIAN ) {
		lo = view.getInt32( offset, IS_LITTLE_ENDIAN );
		hi = view.getInt32( offset+4, IS_LITTLE_ENDIAN );
	} else {
		hi = view.getInt32( offset, IS_LITTLE_ENDIAN );
		lo = view.getInt32( offset+4, IS_LITTLE_ENDIAN );
	}
	if ( lo < 0 ) {
		lo += TWO_32;
	}
	return ( hi*TWO_32 ) + lo;
}


// EXPORTS //

module.exports = fromInt64Bytes;
