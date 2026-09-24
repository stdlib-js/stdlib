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

#include "stdlib/blas/ext/base/dindex_of_row.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/blas/base/shared.h"
#include <stdint.h>

/**
* Returns the index of the first row in a double-precision floating-point input matrix which has the same elements as a provided search vector.
*
* @param order      storage layout
* @param M          number of rows in `A`
* @param N          number of columns in `A`
* @param A          input matrix
* @param LDA        stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param X          search vector
* @param strideX    stride length for `X`
* @param workspace  workspace array for tracking row match candidates
* @param strideW    stride length for `workspace`
* @return           row index
*/
CBLAS_INT API_SUFFIX(stdlib_strided_dindex_of_row)( const CBLAS_LAYOUT order, const CBLAS_INT M, const CBLAS_INT N, const double *A, const CBLAS_INT LDA, const double *X, const CBLAS_INT strideX, uint8_t *workspace, const CBLAS_INT strideW ) {
	CBLAS_INT sa1;
	CBLAS_INT sa2;
	CBLAS_INT ox;
	CBLAS_INT ow;

	if ( order == CblasRowMajor ) {
		sa1 = LDA;
		sa2 = 1;
	} else { // order == CblasColMajor
		sa1 = 1;
		sa2 = LDA;
	}
	ox = stdlib_strided_stride2offset( N, strideX );
	ow = stdlib_strided_stride2offset( M, strideW );
	return API_SUFFIX(stdlib_strided_dindex_of_row_ndarray)( M, N, A, sa1, sa2, 0, X, strideX, ox, workspace, strideW, ow );
}

/**
* Returns the index of the first row in a double-precision floating-point input matrix which has the same elements as a provided search vector using alternative indexing semantics.
*
* @param M          number of rows in `A`
* @param N          number of columns in `A`
* @param A          input matrix
* @param strideA1   stride of the first dimension of `A`
* @param strideA2   stride of the second dimension of `A`
* @param offsetA    index offset for `A`
* @param X          search vector
* @param strideX    stride length for `X`
* @param offsetX    starting index for `X`
* @param workspace  workspace array for tracking row match candidates
* @param strideW    stride length for `workspace`
* @param offsetW    starting index for `workspace`
* @return           row index
*/
CBLAS_INT API_SUFFIX(stdlib_strided_dindex_of_row_ndarray)( const CBLAS_INT M, const CBLAS_INT N, const double *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, uint8_t *workspace, const CBLAS_INT strideW, const CBLAS_INT offsetW ) {
	CBLAS_INT da0;
	CBLAS_INT da1;
	CBLAS_INT S0;
	CBLAS_INT S1;
	CBLAS_INT ia;
	CBLAS_INT iw;
	CBLAS_INT ix;
	CBLAS_INT i0;
	CBLAS_INT i1;

	// Check whether the matrix is an empty matrix...
	if ( M <= 0 || N <= 0 ) {
		return -1;
	}
	// Search for the first row matching the search vector...
	if ( strideA1 >= strideA2 ) {
		// Row-major...
		S0 = N;
		S1 = M;

		// Scan a row-major linear buffer from the first indexed element to the last indexed element, always moving in the same direction when both strides are the same sign, thus ensuring cache optimal traversal...
		for ( i1 = 0; i1 < S1; i1++ ) {
			ia = offsetA + ( i1*strideA1 );
			ix = offsetX;
			for ( i0 = 0; i0 < S0; i0++ ) {
				if ( A[ ia ] != X[ ix ] ) {
					// We found an element which is not in the search vector...
					break;
				}
				ia += strideA2;
				ix += strideX;
			}
			// If we successfully iterated over all columns, then that means we've found a match...
			if ( i0 == S0 ) {
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
			if ( A[ ia ] != X[ ix ] ) {
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
		if ( workspace[ iw ] == 1 ) {
			break;
		}
		iw += strideW;
	}
	return ( i0 == S0 ) ? -1 : i0;
}
