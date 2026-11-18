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

var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var accessors = require( './accessors.js' );


// MAIN //

/**
* Calculates the differences between consecutive elements of a strided array.
*
* @private
* @param {NonNegativeInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {NumericArray} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {NumericArray} output array
*
* @example
* var x = [ 2.0, 4.0, 7.0, 11.0, 16.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0 ];
*
* base( x.length, x, 1, 0, out, 1, 0 );
* // out => [ 2.0, 3.0, 4.0, 5.0 ]
*/
function base( N, x, strideX, offsetX, out, strideOut, offsetOut ) {
	var prev;
	var curr;
	var ox;
	var oo;
	var ix;
	var io;
	var i;

	ox = arraylike2object( x );
	oo = arraylike2object( out );
	if ( ox.accessorProtocol || oo.accessorProtocol ) {
		accessors( N, ox, strideX, offsetX, oo, strideOut, offsetOut );
		return out;
	}
	ix = offsetX;
	io = offsetOut;
	prev = x[ ix ];
	for ( i = 1; i < N; i++ ) {
		ix += strideX;
		curr = x[ ix ];
		out[ io ] = curr - prev;
		prev = curr;
		io += strideOut;
	}
	return out;
}


// EXPORTS //

module.exports = base;
