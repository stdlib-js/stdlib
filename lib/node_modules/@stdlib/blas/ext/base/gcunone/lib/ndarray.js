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
* Cumulatively tests whether every element in a strided array is falsy using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Collection} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Collection} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Collection} output array
*
* @example
* var x = [ 0, 0, 1, 1 ];
* var out = [ false, false, false, false ];
*
* gcunone( 4, x, 1, 0, out, 1, 0 );
* // out => [ true, true, false, false ]
*/
function gcunone( N, x, strideX, offsetX, out, strideOut, offsetOut ) {
	var flg;
	var ox;
	var oo;
	var ix;
	var io;
	var i;

	if ( N <= 0 ) {
		return out;
	}
	ox = arraylike2object( x );
	oo = arraylike2object( out );
	if ( ox.accessorProtocol || oo.accessorProtocol ) {
		accessors( N, ox, strideX, offsetX, oo, strideOut, offsetOut );
		return out;
	}
	flg = true;
	ix = offsetX;
	io = offsetOut;
	for ( i = 0; i < N; i++ ) {
		if ( flg && x[ ix ] ) {
			flg = false;
		}
		out[ io ] = flg;
		ix += strideX;
		io += strideOut;
	}
	return out;
}


// EXPORTS //

module.exports = gcunone;
