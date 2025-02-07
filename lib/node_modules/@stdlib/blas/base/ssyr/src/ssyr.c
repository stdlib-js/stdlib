/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#include "stdlib/blas/base/ssyr.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/ndarray/base/assert/is_row_major.h"

/**
* Performs the symmetric rank 1 operation `A = α*x*x^T + A`.
*
* @param order    storage layout
* @param uplo     specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
* @param N        number of elements along each dimension of `A`
* @param alpha    scalar
* @param X        input vector
* @param strideX  `X` stride length
* @param A        input matrix
* @param LDA      stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
*/
void API_SUFFIX(c_ssyr)( const CBLAS_LAYOUT order, const CBLAS_UPLO uplo, const CBLAS_INT N, const float alpha, const float *X, const CBLAS_INT strideX, float *A, const CBLAS_INT LDA ) {
	CBLAS_INT sa1;
	CBLAS_INT sa2;
	CBLAS_INT ox;

	if ( N == 0 || alpha == 0.0f ) {
		return;
	}
	if ( order == CblasColMajor ) {
		sa1 = 1;
		sa2 = LDA;
	} else { // order === 'row-major'
		sa1 = LDA;
		sa2 = 1;
	}
	ox = STDLIB_BLAS_BASE_STRIDE2OFFSET( N, strideX );
	API_SUFFIX(c_ssyr_ndarray)( uplo, N, alpha, X, strideX, ox, A, sa1, sa2, 0 );
	return;
}

/**
* Performs the symmetric rank 1 operation `A = α*x*x^T + A` using alternative indexing semantics.
*
* @param uplo      specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
* @param N         number of elements along each dimension of `A`
* @param alpha     scalar
* @param X         input vector
* @param strideX   `X` stride length
* @param offsetX   starting index of `X`
* @param A         input matrix
* @param strideA1  stride of the first dimension of `A`
* @param strideA2  stride of the second dimension of `A`
* @param offsetA   starting index of `A`
*/
void API_SUFFIX(c_ssyr_ndarray)( const CBLAS_UPLO uplo, const CBLAS_INT N, const float alpha, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, float *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA ) {
	CBLAS_INT isrm;
	CBLAS_INT ix0;
	CBLAS_INT ix1;
	CBLAS_INT sa0;
	CBLAS_INT sa1;
	CBLAS_INT i0;
	CBLAS_INT i1;
	CBLAS_INT oa;
	CBLAS_INT ox;
	float tmp;

	int64_t strides[] = { strideA1, strideA2 };
	if ( N == 0 || alpha == 0.0f ) {
		return;
	}
	isrm = stdlib_ndarray_is_row_major( 2, strides );
	if ( isrm ) {
		// For row-major matrices, the last dimension has the fastest changing index...
		sa0 = strideA2; // stride for innermost loop
		sa1 = strideA1; // stride for outermost loop
	} else { // isColMajor
		// For column-major matrices, the first dimension has the fastest changing index...
		sa0 = strideA1; // stride for innermost loop
		sa1 = strideA2; // stride for outermost loop
	}
	ox = offsetX;
	if (
		( isrm && uplo == CblasLower ) ||
		( !isrm && uplo == CblasUpper )
	) {
		ix1 = ox;
		for ( i1 = 0; i1 < N; i1++ ) {
			if ( X[ ix1 ] != 0.0f ) {
				tmp = alpha * X[ ix1 ];
				oa = offsetA + (sa1*i1);
				ix0 = ox;
				for ( i0 = 0; i0 <= i1; i0++ ) {
					A[ oa+(sa0*i0) ] += X[ ix0 ] * tmp;
					ix0 += strideX;
				}
			}
			ix1 += strideX;
		}
		return;
	}
	// ( isrm && uplo == 'CblasUpper' ) || ( !isrm && uplo === 'CblasLower' )
	ix1 = ox;
	for ( i1 = 0; i1 < N; i1++ ) {
		if ( X[ ix1 ] != 0.0f ) {
			tmp = alpha * X[ ix1 ];
			oa = offsetA + (sa1*i1);
			ix0 = ix1;
			for ( i0 = i1; i0 < N; i0++ ) {
				A[ oa+(sa0*i0) ] += X[ ix0 ] * tmp;
				ix0 += strideX;
			}
		}
		ix1 += strideX;
	}
	return;
}
