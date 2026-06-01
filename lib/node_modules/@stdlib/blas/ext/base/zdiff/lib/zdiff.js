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
* Calculates the k-th discrete forward difference of a double-precision complex floating-point strided array.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {NonNegativeInteger} k - number of times to recursively compute differences
* @param {Complex128Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} N1 - number of indexed elements for `prepend`
* @param {Complex128Array} prepend - prepend array
* @param {integer} strideP - stride length for `prepend`
* @param {NonNegativeInteger} N2 - number of indexed elements for `append`
* @param {Complex128Array} append - append array
* @param {integer} strideA - stride length for `append`
* @param {Complex128Array} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {Complex128Array} workspace - workspace array
* @param {integer} strideW - stride length for `workspace`
* @returns {Complex128Array} output array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 2.0, -2.0, 4.0, -4.0, 6.0, -6.0, 8.0, -8.0, 10.0, -10.0 ] );
* var p = new Complex128Array( [ 1.0, -1.0 ] );
* var a = new Complex128Array( [ 11.0, -11.0 ] );
* var out = new Complex128Array( 6 );
* var w = new Complex128Array( 6 );
*
* zdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );
* // out => <Complex128Array>[ 1.0, -1.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 1.0, -1.0 ]
*/
function zdiff( N, k, x, strideX, N1, prepend, strideP, N2, append, strideA, out, strideOut, workspace, strideW ) {
	var ox = stride2offset( N, strideX );
	var op = stride2offset( N1, strideP );
	var oa = stride2offset( N2, strideA );
	var oo = stride2offset( N + N1 + N2 - k, strideOut );
	var ow = stride2offset( N + N1 + N2 - 1, strideW );
	ndarray( N, k, x, strideX, ox, N1, prepend, strideP, op, N2, append, strideA, oa, out, strideOut, oo, workspace, strideW, ow );
	return out;
}


// EXPORTS //

module.exports = zdiff;
