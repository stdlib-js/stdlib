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

var isRowMajor = require( '@stdlib/ndarray/base/assert/is-row-major' );


// MAIN //

/**
* Returns the index of the first row in a double-precision floating-point input matrix which has the same elements as a provided search vector using alternative indexing semantics.
*
* ## Notes
*
* -   If the function is provided an empty matrix or if the function is unable to find a search vector, the function returns `-1` (i.e., an invalid index).
* -   The `workspace` array is only applicable when an input matrix is stored in column-major order. When the matrix is stored in row-major order, the workspace array is ignored.
*
* @param {PositiveInteger} M - number of rows in `A`
* @param {PositiveInteger} N - number of columns in `A`
* @param {Float64Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - index offset for `A`
* @param {Float64Array} x - search vector
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - index offset for `x`
* @param {Uint8Array} workspace - workspace array for tracking row match candidates
* @param {integer} strideW - stride length for `workspace`
* @param {NonNegativeInteger} offsetW - index offset for `workspace`
* @returns {integer} row index
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var A = new Float64Array( [ 1.0, 2.0, 0.0, 3.0, 4.0, 0.0 ] ); // => [ [ 1.0, 3.0 ], [ 2.0, 4.0 ], [ 0.0, 0.0 ] ]
* var x = new Float64Array( [ 2.0, 4.0 ] );
* var workspace = new Uint8Array( 3 );
*
* var out = dindexOfRow( 3, 2, A, 1, 3, 0, x, 1, 0, workspace, 1, 0 );
* // returns 1
*/
function dindexOfRow( M, N, A, strideA1, strideA2, offsetA, x, strideX, offsetX, workspace, strideW, offsetW ) {
	var da0;
	var da1;
	var S0;
	var S1;
	var ia;
	var iw;
	var ix;
	var i0;
	var i1;

	// Check whether the matrix is an empty matrix...
	if ( M <= 0 || N <= 0 ) {
		return -1;
	}
	// Search for the first row matching the search vector...
	if ( isRowMajor( [ strideA1, strideA2 ] ) ) {
		S0 = N;
		S1 = M;

		// Scan a row-major linear buffer from the first indexed element to the last indexed element, always moving in the same direction when both strides are the same sign, thus ensuring cache optimal traversal...
		for ( i1 = 0; i1 < S1; i1++ ) {
			ia = offsetA + ( i1*strideA1 );
			ix = offsetX;
			for ( i0 = 0; i0 < S0; i0++ ) {
				if ( A[ ia ] !== x[ ix ] ) {
					// We found an element which is not in the search vector...
					break;
				}
				ia += strideA2;
				ix += strideX;
			}
			// If we successfully iterated over all columns, then that means we've found a match...
			if ( i0 === S0 ) {
				return i1;
			}
		}
		// If we've made it here, then no rows match the search vector:
		return -1;
	}
	// Column-major...
	S0 = M;
	S1 = N;

	// Resolve loop offset (pointer) increments:
	da0 = strideA1;
	da1 = strideA2 - ( S0*strideA1 );

	// Initialize the workspace array for tracking which rows contain matching elements:
	iw = offsetW;
	for ( i0 = 0; i0 < S0; i0++ ) {
		workspace[ iw ] = 1;
		iw += strideW;
	}

	// Finding the first matching row when a matrix is stored in column-major order requires effectively performing a full linear scan. In order to ensure cache-efficient traversal, scan down each column (otherwise, if we went row-by-row, we'd hop around linear memory, resulting in poor cache behavior)...
	ia = offsetA;
	ix = offsetX;
	for ( i1 = 0; i1 < S1; i1++ ) {
		// Scan down the rows in a column looking for a matching element...
		iw = offsetW;
		for ( i0 = 0; i0 < S0; i0++ ) {
			if ( A[ ia ] !== x[ ix ] ) {
				// We found a non-matching element, which means we can exclude this row from the list of row candidates...
				workspace[ iw ] = 0;
			}
			ia += da0;
			iw += strideW;
		}
		ia += da1;
		ix += strideX;
	}
	// Search for the first matching row...
	iw = offsetW;
	for ( i0 = 0; i0 < S0; i0++ ) {
		if ( workspace[ iw ] === 1 ) {
			break;
		}
		iw += strideW;
	}
	return ( i0 === S0 ) ? -1 : i0;
}


// EXPORTS //

module.exports = dindexOfRow;
