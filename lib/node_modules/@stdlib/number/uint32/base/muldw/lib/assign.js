/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var isnan = require( '@stdlib/math/base/assert/is-nan' );


// VARIABLES //

// Define a mask for the least significant 16 bits (low word): 65535 => 0x0000ffff => 00000000000000001111111111111111
var LOW_WORD_MASK = 0x0000ffff>>>0; // asm type annotation


// MAIN //

/**
* Performs multiplication of two unsigned 32-bit integers and returns an array of two unsigned 32-bit integers which represents the unsigned 64-bit integer product.
*
* @param {uinteger32} a - integer
* @param {uinteger32} b - integer
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} output array
*
* @example
* var out = [ 0, 0 ];
* var v = umuldw( 0xAAAAAAAA, 0x55555555, out, 1, 0 );
* // returns [ 954437176, 1908874354 ]
*/
function umuldw(a, b, out, stride, offset ) {
	var w1;
	var w2;
	var w3;
	var ha;
	var hb;
	var la;
	var lb;
	var t;
	var k;

	if ( isnan( a ) || isnan( b ) ) {
		out[ offset ] = NaN;
		out[ offset + stride ] = NaN;
		return out;
	}
	a >>>= 0; // asm type annotation
	b >>>= 0; // asm type annotation

	ha = ( a >>> 16 ) >>> 0;
	la = ( a & LOW_WORD_MASK ) >>> 0;

	hb = ( b >>> 16 ) >>> 0;
	lb = ( b & LOW_WORD_MASK ) >>> 0;

	t = ( la*lb ) >>> 0;
	w3 = ( t & LOW_WORD_MASK ) >>> 0;
	k = ( t >>> 16 ) >>> 0;

	t = ( ( ha*lb ) + k ) >>> 0;
	w2 = ( t & LOW_WORD_MASK ) >>> 0;
	w1 = ( t >>> 16 ) >>> 0;

	t = ( ( la*hb ) + w2 ) >>> 0;
	k = ( t >>> 16 ) >>> 0;

	out[ offset ] = ( ( ha*hb ) + w1 + k ) >>> 0; // compute the higher 32 bits and cast to an unsigned 32-bit integer
	out[ offset + stride ] = ( ( t << 16 ) + w3) >>> 0; // compute the lower 32 bits and cast to an unsigned 32-bit integer

	return out;
}


// EXPORTS //

module.exports = umuldw;
