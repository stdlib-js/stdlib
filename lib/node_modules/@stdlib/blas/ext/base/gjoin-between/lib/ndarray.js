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

var isUndefinedOrNull = require( '@stdlib/assert/is-undefined-or-null' );
var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var accessors = require( './accessors.js' );


// MAIN //

/**
* Returns a string by joining strided array elements using a specified separator for each pair of consecutive elements and alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {string} prefix - string to prepend to the output string
* @param {string} suffix - string to append to the output string
* @param {Collection} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Collection} separators - separators array
* @param {integer} strideS - stride length for `separators`
* @param {NonNegativeInteger} offsetS - starting index for `separators`
* @returns {string} joined string
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var sep = [ ' + ', ' - ', ' != ' ];
*
* var out = gjoinBetween( x.length, 'op: ', '', x, 1, 0, sep, 1, 0 );
* // returns 'op: 1 + 2 - 3 != 4'
*/
function gjoinBetween( N, prefix, suffix, x, strideX, offsetX, separators, strideS, offsetS ) { // eslint-disable-line max-len
	var out;
	var ox;
	var os;
	var ix;
	var is;
	var v;
	var i;

	if ( N <= 0 ) {
		return prefix + suffix;
	}
	ox = arraylike2object( x );
	os = arraylike2object( separators );
	if ( ox.accessorProtocol || os.accessorProtocol ) {
		return accessors( N, prefix, suffix, ox, strideX, offsetX, os, strideS, offsetS ); // eslint-disable-line max-len
	}
	out = prefix;
	ix = offsetX;
	is = offsetS;
	for ( i = 0; i < N; i++ ) {
		if ( i > 0 ) {
			out += separators[ is ];
			is += strideS;
		}
		v = x[ ix ];
		if ( !isUndefinedOrNull( v ) ) {
			out += String( v );
		}
		ix += strideX;
	}
	out += suffix;
	return out;
}


// EXPORTS //

module.exports = gjoinBetween;
