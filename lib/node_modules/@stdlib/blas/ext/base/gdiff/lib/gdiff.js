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

/* eslint-disable max-params, max-len */

'use strict';

// MODULES //

var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Calculates the k-th discrete forward difference of a strided array.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {NonNegativeInteger} k - number of times to recursively compute differences
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} N1 - number of indexed elements for `prepend`
* @param {NumericArray} prepend - prepend array
* @param {integer} strideP - stride length for `prepend`
* @param {NonNegativeInteger} N2 - number of indexed elements for `append`
* @param {NumericArray} append - append array
* @param {integer} strideA - stride length for `append`
* @param {NumericArray} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NumericArray} workspace - workspace array
* @param {integer} strideW - stride length for `workspace`
* @returns {NumericArray} output array
*
* @example
* var x = [ 2.0, 4.0, 7.0, 11.0, 16.0 ];
* var p = [ 1.0 ];
* var a = [ 22.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gdiff( x.length, 2, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );
*
* console.log( out );
* // => [ 1.0, 1.0, 1.0, 1.0, 1.0 ]
*/
function gdiff( N, k, x, strideX, N1, prepend, strideP, N2, append, strideA, out, strideOut, workspace, strideW ) {
	var ox;
	var op;
	var oa;
	var oo;
	var ow;

	ox = stride2offset( N, strideX );
	op = stride2offset( N1, strideP );
	oa = stride2offset( N2, strideA );
	oo = stride2offset( N + N1 + N2 - k, strideOut );
	ow = stride2offset( N + N1 + N2 - 1, strideW );
	ndarray( N, k, x, strideX, ox, N1, prepend, strideP, op, N2, append, strideA, oa, out, strideOut, oo, workspace, strideW, ow );
	return out;
}


// EXPORTS //

module.exports = gdiff;
