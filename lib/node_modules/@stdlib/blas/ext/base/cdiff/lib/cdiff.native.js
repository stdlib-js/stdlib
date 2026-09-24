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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Calculates the k-th discrete forward difference of a single-precision complex floating-point strided array.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {NonNegativeInteger} k - number of times to recursively compute differences
* @param {Complex64Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} N1 - number of indexed elements for `prepend`
* @param {Complex64Array} prepend - prepend array
* @param {integer} strideP - stride length for `prepend`
* @param {NonNegativeInteger} N2 - number of indexed elements for `append`
* @param {Complex64Array} append - append array
* @param {integer} strideA - stride length for `append`
* @param {Complex64Array} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {Complex64Array} workspace - workspace array
* @param {integer} strideW - stride length for `workspace`
* @returns {Complex64Array} output array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 2.0, -2.0, 4.0, -4.0, 6.0, -6.0, 8.0, -8.0, 10.0, -10.0 ] );
* var p = new Complex64Array( [ 1.0, -1.0 ] );
* var a = new Complex64Array( [ 11.0, -11.0 ] );
* var out = new Complex64Array( 6 );
* var w = new Complex64Array( 6 );
*
* cdiff( x.length, 1, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );
* // out => <Complex64Array>[ 1.0, -1.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 2.0, -2.0, 1.0, -1.0 ]
*/
function cdiff( N, k, x, strideX, N1, prepend, strideP, N2, append, strideA, out, strideOut, workspace, strideW ) {
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
	addon( N, k, viewX, strideX, N1, viewP, strideP, N2, viewA, strideA, viewO, strideOut, viewW, strideW );
	return out;
}


// EXPORTS //

module.exports = cdiff;
