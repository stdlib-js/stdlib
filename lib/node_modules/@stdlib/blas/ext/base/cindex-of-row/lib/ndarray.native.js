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
* Returns the index of the first row in a single-precision complex floating-point input matrix which has the same elements as a provided search vector using alternative indexing semantics.
*
* @param {PositiveInteger} M - number of rows in `A`
* @param {PositiveInteger} N - number of columns in `A`
* @param {Complex64Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - index offset for `A`
* @param {Complex64Array} x - search vector
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - index offset for `x`
* @param {Uint8Array} workspace - workspace array for tracking row match candidates
* @param {integer} strideW - stride length for `workspace`
* @param {NonNegativeInteger} offsetW - index offset for `workspace`
* @returns {integer} row index
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var A = new Complex64Array( [ 1.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0, 0.0, 4.0, 0.0, 0.0, 0.0 ] );
* var x = new Complex64Array( [ 2.0, 0.0, 4.0, 0.0 ] );
* var workspace = new Uint8Array( 3 );
*
* var out = cindexOfRow( 3, 2, A, 1, 3, 0, x, 1, 0, workspace, 1, 0 );
* // returns 1
*/
function cindexOfRow( M, N, A, strideA1, strideA2, offsetA, x, strideX, offsetX, workspace, strideW, offsetW ) {
	return addon.ndarray( M, N, reinterpret( A, 0 ), strideA1, strideA2, offsetA, reinterpret( x, 0 ), strideX, offsetX, workspace, strideW, offsetW );
}


// EXPORTS //

module.exports = cindexOfRow;
