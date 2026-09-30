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

var slice = require( '@stdlib/string/base/slice' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var TWO_32 = 0x100000000; // 2^32

/* eslint-disable array-element-newline */

/**
* A flat, strided array containing metadata for parsing large numeric strings into 64-bit values within JavaScript's 53-bit safe integer precision limits.
*
* Each radix from 2 to 36 is represented by a 3-element tuple: `[chunk1_len, chunk2_len, multiplier]`.
*
* ## Tuple Properties
*
* -   **chunk1_len**: the maximum number of digits that can be safely parsed in a single pass without exceeding `2^53 - 1`.
* -   **chunk2_len**: the remaining number of digits required to fulfill the maximum width of a 64-bit unsigned integer for that radix.
* -   **multiplier**: the positional weight scalar (`radix^chunk2_len`) used to shift the place value of the first chunk when aggregating the final 64-bit split.
*
* @private
* @name CHUNKMAP
* @type {Array<number>}
*/
var CHUNKMAP = [
	// <chunk1_len>, <chunk2_len>, <multiplier>  // radix
	53, 11, 2048,   // 2
	33, 8, 6561,    // 3
	26, 6, 4096,    // 4
	22, 6, 15625,   // 5
	20, 5, 7776,    // 6
	18, 5, 16807,   // 7
	17, 5, 32768,   // 8
	16, 5, 59049,   // 9
	15, 5, 100000,  // 10
	15, 4, 14641,   // 11
	14, 4, 20736,   // 12
	14, 4, 28561,   // 13
	13, 4, 38416,   // 14
	13, 4, 50625,   // 15
	13, 3, 4096,    // 16
	12, 4, 83521,   // 17
	12, 4, 104976,  // 18
	12, 4, 130321,  // 19
	12, 3, 8000,    // 20
	12, 3, 9261,    // 21
	11, 4, 234256,  // 22
	11, 4, 279841,  // 23
	11, 3, 13824,   // 24
	11, 3, 15625,   // 25
	11, 3, 17576,   // 26
	11, 3, 19683,   // 27
	11, 3, 21952,   // 28
	10, 4, 707281,  // 29
	10, 4, 810000,  // 30
	10, 3, 29791,   // 31
	10, 3, 32768,   // 32
	10, 3, 35937,   // 33
	10, 3, 39304,   // 34
	10, 3, 42875,   // 35
	10, 3, 46656    // 36
];

/* eslint-enable array-element-newline */

/**
* Parses a string representation of a 64-bit unsigned integer into high and low 32-bit words using two-step chunking.
*
* @private
* @param {string} str - string representation of a 64-bit unsigned integer
* @param {PositiveInteger} radix - radix (base) to use for string conversion (2-36)
* @param {PositiveInteger} len1 - length of the first chunk
* @param {PositiveInteger} len2 - length of the second chunk
* @param {PositiveInteger} mult - multiplier for the place value calculation (radix raised to the power of len2)
* @param {Collection} out - output array
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @throws {RangeError} first argument must be a string encoding an integer on the interval [0, 2^64)
* @returns {Collection} output array
*
* @example
* var out = chunkedParse( '1111111111111111111111111111111111111111111111111111111111111111', 2, CHUNKMAP[0], CHUNKMAP[1], CHUNKMAP[2], [ 0, 0 ], 1, 0 );
* // returns [ 4294967295, 4294967295 ]
*
* out = chunkedParse( '18446744073709551615', 10, CHUNKMAP[24], CHUNKMAP[25], CHUNKMAP[26], [ 0, 0 ], 1, 0 );
* // returns [ 4294967295, 4294967295 ]
*
* out = chunkedParse( '3w5e11264sgsf', 36, CHUNKMAP[102], CHUNKMAP[103], CHUNKMAP[104], [ 0, 0 ], 1, 0 );
* // returns [ 4294967295, 4294967295 ]
*/
function chunkedParse( str, radix, len1, len2, mult, out, stride, offset ) {
	var chunk1;
	var chunk2;
	var hi;
	var lo;

	if ( str.length <= len1 ) {
		// Parse in a single pass when input length is within chunk1 length:
		chunk1 = parseInt( str, radix );
	} else {
		// Otherwise use a big chunk1 (start-aligned) and a small chunk2 (end-aligned):
		chunk1 = parseInt( slice( str, 0, -len2 ), radix ); // everything until last `len2` digits
		chunk2 = parseInt( slice( str, -len2 ), radix ); // `len2` digits from the end
	}

	hi = ( chunk1 / TWO_32 ) >>> 0; // integer division by 2^32
	lo = chunk1 >>> 0; // 32-bit truncation

	// Process chunk2 if applicable...
	if ( str.length > len1 ) {
		lo = ( lo * mult ) + chunk2;
		hi = ( hi * mult ) + ( ( lo / TWO_32 ) >>> 0 );
		lo >>>= 0; // 32-bit truncation

		// Check if too big for uint64...
		if ( hi >= TWO_32 ) {
			throw new RangeError( format( 'invalid argument. First argument must be a string encoding an integer on the interval [0, 2^64). Value: `%s`.', str ) );
		}
	}
	out[ offset ] = hi;
	out[ offset + stride ] = lo;
	return out;
}


// MAIN //

/**
* Parses a string representation of a 64-bit unsigned integer into high and low 32-bit words and assigns results to a provided output array.
*
* @param {string} str - string representation of a 64-bit unsigned integer
* @param {PositiveInteger} radix - radix (base) to use for string conversion (2-36)
* @param {Collection} out - output array
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @throws {RangeError} first argument must be a string encoding an integer on the interval [0, 2^64)
* @throws {RangeError} second argument must be an integer on the interval [2, 36]
* @returns {Collection} output array
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
*
* var out = new Uint32Array( 2 );
* // returns <Uint32Array>[ 0, 0 ]
*
* var w = assign( 'ffffffffffffffff', 16, out, 1, 0 );
* // returns <Uint32Array>[ 4294967295, 4294967295 ]
*
* var bool = ( w === out );
* // returns true
*/
function assign( str, radix, out, stride, offset ) {
	var len1;
	var len2;
	var mult;
	var idx;

	// Check for an invalid radix...
	if ( radix < 2 || radix > 36 ) {
		throw new RangeError( format( 'invalid argument. Second argument must be an integer on the interval [2, 36]. Value: `%s`.', radix ) );
	}
	// Compute the index into a pre-computed strided table:
	idx = 3 * ( radix-2 );

	// Use a pre-computed table to select chunk lengths and the multiplier:
	len1 = CHUNKMAP[ idx ];
	len2 = CHUNKMAP[ idx+1 ];
	mult = CHUNKMAP[ idx+2 ];

	// Check if too big for uint64...
	if ( str.length > len1+len2 ) {
		throw new RangeError( format( 'invalid argument. First argument must be a string encoding an integer on the interval [0, 2^64). Value: `%s`.', str ) );
	}
	// Fast path for bases 2, 4, and 16, thanks to evenly splittable 32-bit halves...
	if ( radix === 2 || radix === 4 || radix === 16 ) {
		len1 = ( len1 + len2 ) / 2;
		out[ offset ] = parseInt( '0' + slice( str, 0, -len1 ), radix ); // add leading zero in case the higher slice is empty
		out[ offset + stride ] = parseInt( slice( str, -len1 ), radix );
		return out;
	}
	// General path for other bases:
	return chunkedParse( str, radix, len1, len2, mult, out, stride, offset );
}


// EXPORTS //

module.exports = assign;
