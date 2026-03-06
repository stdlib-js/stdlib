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
var floor = require( '@stdlib/math/base/special/floor' );


// VARIABLES //

// 0xFFFFFFFF = 2**32 - 1 => 11111111 11111111 11111111 11111111
var LOW_MASK = 0xFFFFFFFF >>> 0;

// 2**32
var TWO_32 = 4294967296;

// Byte array workspace:
var BYTES = new Uint8Array( 8 );
var VIEW = new DataView( BYTES.buffer );


// MAIN //

/**
* Converts an integer-valued double-precision floating-point number to a signed 64-bit integer byte array according to host byte order (endianness).
*
* ## Notes
*
* -   This function assumes that the input value is less than the maximum safe double-precision floating-point integer plus one (i.e., `2**53`).
*
* @param {number} x - input value
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} output array
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var out = new Uint8Array( 8 );
* var bytes = float64ToInt64Bytes( 1.0, out, 1, 0 );
* // returns <Uint8Array>
*/
function float64ToInt64Bytes( x, out, stride, offset ) {
	var hi;
	var lo;
	var i;

	if ( x === 0 ) {
		for ( i = 0; i < BYTES.length; i++ ) {
			out[ offset ] = 0;
			offset += stride;
		}
		return out;
	}
	// Get the low 32-bit word:
	lo = (x&LOW_MASK)>>>0;

	// Get the high 32-bit word:
	hi = floor( x/TWO_32 );

	// Insert the high and low words according to host byte order (endianness):
	if ( IS_LITTLE_ENDIAN ) {
		VIEW.setUint32( 0, lo, IS_LITTLE_ENDIAN );
		VIEW.setUint32( 4, hi, IS_LITTLE_ENDIAN );
	} else {
		VIEW.setUint32( 0, hi, IS_LITTLE_ENDIAN );
		VIEW.setUint32( 4, lo, IS_LITTLE_ENDIAN );
	}
	for ( i = 0; i < BYTES.length; i++ ) {
		out[ offset ] = BYTES[ i ];
		offset += stride;
	}
	return out;
}


// EXPORTS //

module.exports = float64ToInt64Bytes;
