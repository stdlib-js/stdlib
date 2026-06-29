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
* Calculates the k-th discrete forward difference of a single-precision floating-point strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {PositiveInteger} k - number of times to recursively compute differences
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {PositiveInteger} N1 - number of indexed elements for `prepend`
* @param {Float32Array} prepend - prepend array
* @param {integer} strideP - stride length for `prepend`
* @param {PositiveInteger} N2 - number of indexed elements for `append`
* @param {Float32Array} append - append array
* @param {integer} strideA - stride length for `append`
* @param {Float32Array} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {Float32Array} workspace - workspace array
* @param {integer} strideW - stride length for `workspace`
* @returns {Float32Array} output array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 2.0, 4.0, 7.0, 11.0, 16.0 ] );
* var p = new Float32Array( [ 1.0 ] );
* var a = new Float32Array( [ 22.0 ] );
* var out = new Float32Array( 5 );
* var w = new Float32Array( 6 );
*
* sdiff( x.length, 2, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );
*
* console.log( out );
* // out => <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
*/
function sdiff( N, k, x, strideX, N1, prepend, strideP, N2, append, strideA, out, strideOut, workspace, strideW ) {
	var ox = stride2offset( N, strideX );
	var op = stride2offset( N1, strideP );
	var oa = stride2offset( N2, strideA );
	var oo = stride2offset( N + N1 + N2 - k, strideOut );
	var ow = stride2offset( N + N1 + N2 - 1, strideW );
	ndarray( N, k, x, strideX, ox, N1, prepend, strideP, op, N2, append, strideA, oa, out, strideOut, oo, workspace, strideW, ow );
	return out;
}


// EXPORTS //

module.exports = sdiff;
