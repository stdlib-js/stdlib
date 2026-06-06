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

var Uint32Array = require( '@stdlib/array/uint32' );
var lpad = require( '@stdlib/string/left-pad' );


// VARIABLES //

var TWO_32 = 0x100000000; // 2^32
var TWO_16 = 0x10000; // 2^16

/* eslint-disable array-element-newline */

var POWERMAP = [
	// <power>, <divisor>  // radix
	32, 4294967296,  // 2
	20, 3486784401,  // 3
	16, 4294967296,  // 4
	13, 1220703125,  // 5
	12, 2176782336,  // 6
	11, 1977326743,  // 7
	10, 1073741824,  // 8
	10, 3486784401,  // 9
	9, 1000000000,   // 10
	9, 2357947691,   // 11
	8, 429981696,    // 12
	8, 815730721,    // 13
	8, 1475789056,   // 14
	8, 2562890625,   // 15
	8, 4294967296,   // 16
	7, 410338673,    // 17
	7, 612220032,    // 18
	7, 893871739,    // 19
	7, 1280000000,   // 20
	7, 1801088541,   // 21
	7, 2494357888,   // 22
	7, 3404825447,   // 23
	6, 191102976,    // 24
	6, 244140625,    // 25
	6, 308915776,    // 26
	6, 387420489,    // 27
	6, 481890304,    // 28
	6, 594823321,    // 29
	6, 729000000,    // 30
	6, 887503681,    // 31
	6, 1073741824,   // 32
	6, 1291467969,   // 33
	6, 1544804416,   // 34
	6, 1838265625,   // 35
	6, 2176782336    // 36
];

/* eslint-enable array-element-newline */

var WORKSPACE = new Uint32Array( 2 );


// FUNCTIONS //

/**
* Performs division and modulo for an unsigned 64-bit integer represented as high-low words.
*
* ## Notes
*
* -   The output array contains the following elements upon return: `[ quotient, remainder ]`.
*
* @private
* @param {Uint32Array} words - 32-bit words
* @param {PositiveInteger} divisor - positive integer close to `2^32`
* @param {Uint32Array} out - output array
* @returns {Uint32Array} output array
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
*
* var out = new Uint32Array( 2 );
* var x = chunkedDivMod( [ 1, 0 ], 1e9, out );
* // returns <Uint32Array>[ 4, 294967296 ]
*/
function chunkedDivMod( words, divisor, out ) {
	var high;
	var low;
	var quo;
	var rem;
	var qrd;

	if ( divisor === TWO_32 ) {
		out[ 0 ] = words[ 0 ];
		out[ 1 ] = words[ 1 ];
		return out;
	}
	high = words[ 0 ] >>> 0;
	low = words[ 1 ] >>> 0;
	quo = ( high / divisor ) >>> 0;
	rem = high - ( divisor * quo );

	rem = ( rem * TWO_16 ) + ( low >>> 16 );
	qrd = ( rem / divisor ) >>> 0;
	quo = ( quo * TWO_16 ) + qrd;
	rem -= divisor * qrd;

	rem = ( rem * TWO_16 ) + ( low & 0xffff );
	qrd = ( rem / divisor ) >>> 0;
	quo = ( quo * TWO_16 ) + qrd;
	rem -= divisor * qrd;

	out[ 0 ] = quo;
	out[ 1 ] = rem;
	return out;
}


// MAIN //

/**
* Serializes an unsigned 64-bit integer as a string in the specified base.
*
* @private
* @param {Uint32Array} words - high and low words
* @param {PositiveInteger} radix - radix (base) to use for string conversion
* @returns {string} serialized unsigned 64-bit integer
*/
function int2str( words, radix ) {
	var quo;
	var rem;
	var idx;

	// Reset the workspace:
	WORKSPACE[ 0 ] = 0;
	WORKSPACE[ 1 ] = 0;

	// Compute the index into a pre-computed strided table:
	idx = ( radix-2 ) * 2;

	// Use a pre-computed table to select a divisor (chosen to be a power of the radix closest to 2^32, but more generally works for 2^11 to 2^37) and a chunk size for efficient base conversion...
	chunkedDivMod( words, POWERMAP[ idx+1 ], WORKSPACE );
	quo = WORKSPACE[ 0 ].toString( radix );
	rem = WORKSPACE[ 1 ].toString( radix );
	if ( quo === '0' ) {
		quo = '';
	} else {
		rem = lpad( rem, POWERMAP[ idx ], '0' );
	}
	return quo + rem;
}


// EXPORTS //

module.exports = int2str;
