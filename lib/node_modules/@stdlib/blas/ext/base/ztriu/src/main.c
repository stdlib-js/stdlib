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

#include "stdlib/blas/ext/base/ztriu.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/ndarray/base/assert/is_row_major.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>

// Define macros for computing the minimum and maximum values:
#define MIN(X, Y) (((X) < (Y)) ? (X) : (Y))
#define MAX(X, Y) (((X) > (Y)) ? (X) : (Y))

/**
* Copies the upper triangular part of a double-precision complex floating-point matrix `A` to another matrix `B`.
*
* @param layout   storage layout
* @param M        number of rows in the matrix `A`
* @param N        number of columns in the matrix `A`
* @param k        diagonal below which to ignore
* @param A        input matrix
* @param LDA      stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param B        output matrix
* @param LDB      stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`)
*/
void API_SUFFIX(stdlib_strided_ztriu)( const CBLAS_LAYOUT layout, const CBLAS_INT M, const CBLAS_INT N, const CBLAS_INT k, const stdlib_complex128_t *A, const CBLAS_INT LDA, stdlib_complex128_t *B, const CBLAS_INT LDB ) {
	CBLAS_INT sa1;
	CBLAS_INT sa2;
	CBLAS_INT sb1;
	CBLAS_INT sb2;

	if ( layout == CblasColMajor ) {
		sa1 = 1;
		sa2 = LDA;
		sb1 = 1;
		sb2 = LDB;
	} else { // layout == CblasRowMajor
		sa1 = LDA;
		sa2 = 1;
		sb1 = LDB;
		sb2 = 1;
	}
	API_SUFFIX(stdlib_strided_ztriu_ndarray)( M, N, k, A, sa1, sa2, 0, B, sb1, sb2, 0 );
}

/**
* Copies the upper triangular part of a double-precision complex floating-point matrix `A` to another matrix `B` using alternative indexing semantics.
*
* @param M        number of rows in the matrix `A`
* @param N        number of columns in the matrix `A`
* @param k        diagonal below which to ignore
* @param A        input matrix
* @param strideA1 stride of the first dimension of `A`
* @param strideA2 stride of the second dimension of `A`
* @param offsetA  starting index for `A`
* @param B        output matrix
* @param strideB1 stride of the first dimension of `B`
* @param strideB2 stride of the second dimension of `B`
* @param offsetB  starting index for `B`
*/
void API_SUFFIX(stdlib_strided_ztriu_ndarray)( const CBLAS_INT M, const CBLAS_INT N, const CBLAS_INT k, const stdlib_complex128_t *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA, stdlib_complex128_t *B, const CBLAS_INT strideB1, const CBLAS_INT strideB2, const CBLAS_INT offsetB ) {
	int64_t sa[ 2 ];
	CBLAS_INT ia;
	CBLAS_INT ib;
	CBLAS_INT i0;
	CBLAS_INT i1;

	ia = offsetA;
	ib = offsetB;

	sa[ 0 ] = strideA1;
	sa[ 1 ] = strideA2;
	if ( stdlib_ndarray_is_row_major( 2, sa ) ) {
		// Copy row-by-row in order to ensure cache-optimal traversal...
		for ( i1 = 0; i1 < M; i1++ ) {
			for ( i0 = MAX( 0, i1+k ); i0 < N; i0++ ) {
				B[ ib+(i0*strideB2) ] = A[ ia+(i0*strideA2) ];
			}
			ia += strideA1;
			ib += strideB1;
		}
		return;
	}
	// Copy column-by-column in order to ensure cache-optimal traversal...
	for ( i1 = 0; i1 < N; i1++ ) {
		for ( i0 = 0; i0 <= MIN( i1-k, M-1 ); i0++ ) {
			B[ ib+(i0*strideB1) ] = A[ ia+(i0*strideA1) ];
		}
		ia += strideA2;
		ib += strideB2;
	}
	return;
}
