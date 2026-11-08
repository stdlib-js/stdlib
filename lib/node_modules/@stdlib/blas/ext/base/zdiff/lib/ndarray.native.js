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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex128' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Calculates the k-th discrete forward difference of a double-precision complex floating-point strided array using alternative indexing semantics.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {NonNegativeInteger} k - number of times to recursively compute differences
* @param {Complex128Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {NonNegativeInteger} N1 - number of indexed elements for `prepend`
* @param {Complex128Array} prepend - prepend array
* @param {integer} strideP - stride length for `prepend`
* @param {NonNegativeInteger} offsetP - starting index for `prepend`
* @param {NonNegativeInteger} N2 - number of indexed elements for `append`
* @param {Complex128Array} append - append array
* @param {integer} strideA - stride length for `append`
* @param {NonNegativeInteger} offsetA - starting index for `append`
* @param {Complex128Array} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @param {Complex128Array} workspace - workspace array
* @param {integer} strideW - stride length for `workspace`
* @param {NonNegativeInteger} offsetW - starting index for `workspace`
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
* zdiff( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );
* // out => <Complex128Array>[ 1.0, -1.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 1.0, -1.0 ]
*/
function zdiff( N, k, x, strideX, offsetX, N1, prepend, strideP, offsetP, N2, append, strideA, offsetA, out, strideOut, offsetOut, workspace, strideW, offsetW ) {
	var viewX;
	var viewP;
	var viewA;
	var viewO;
	var viewW;

	viewX = reinterpret( x, 0 );
	viewP = reinterpret( prepend, 0 );
	viewA = reinterpret( append, 0 );
	viewO = reinterpret( out, 0 );
	viewW = reinterpret( workspace, 0 );
	addon.ndarray( N, k, viewX, strideX, offsetX, N1, viewP, strideP, offsetP, N2, viewA, strideA, offsetA, viewO, strideOut, offsetOut, viewW, strideW, offsetW );
	return out;
}


// EXPORTS //

module.exports = zdiff;
