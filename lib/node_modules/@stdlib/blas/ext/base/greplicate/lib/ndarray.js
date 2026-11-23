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
* Replicates each strided array element a specified number of times.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {PositiveInteger} k - number of times to replicate each element
* @param {Collection} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Collection} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Collection} output array
*
* @example
* var x = [ 1.0, 2.0, 3.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* greplicate( 3, 2, x, 1, 0, out, 1, 0 );
* // out => [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ]
*/
function greplicate( N, k, x, strideX, offsetX, out, strideOut, offsetOut ) {
	var io;
	var ix;
	var ox;
	var oy;
	var v;
	var i;
	var j;

	if ( N <= 0 || k <= 0 ) {
		return out;
	}
	ox = arraylike2object( x );
	oy = arraylike2object( out );
	if ( ox.accessorProtocol || oy.accessorProtocol ) {
		accessors( N, k, ox, strideX, offsetX, oy, strideOut, offsetOut );
		return out;
	}
	ix = offsetX;
	io = offsetOut;
	for ( i = 0; i < N; i++ ) {
		v = x[ ix ];
		for ( j = 0; j < k; j++ ) {
			out[ io ] = v;
			io += strideOut;
		}
		ix += strideX;
	}
	return out;
}


// EXPORTS //

module.exports = greplicate;
