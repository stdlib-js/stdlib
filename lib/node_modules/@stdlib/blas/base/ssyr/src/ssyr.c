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
#include "stdlib/blas/base/xerbla.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix.
*
* @param layout   storage layout
* @param uplo     specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
* @param N        number of elements along each dimension of `A`
* @param alpha    scalar constant
* @param X        input vector
* @param strideX  `X` stride length
* @param A        input matrix
* @param LDA      stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
*/
void API_SUFFIX(c_ssyr)( const CBLAS_LAYOUT layout, const CBLAS_UPLO uplo, const CBLAS_INT N, const float alpha, const float *X, const CBLAS_INT strideX, float *A, const CBLAS_INT LDA ) {
	CBLAS_INT vala;
	CBLAS_INT sa1;
	CBLAS_INT sa2;
	CBLAS_INT ox;

	// Perform input argument validation...
	if ( layout != CblasRowMajor && layout != CblasColMajor ) {
		c_xerbla( 1, "c_ssyr", "Error: invalid argument. First argument must be a valid layout. Value: `%d`.", layout );
		return;
	}
	if ( uplo != CblasLower && uplo != CblasUpper ) {
		c_xerbla( 2, "c_ssyr", "Error: invalid argument. Second argument must specify whether to reference the lower or upper triangular matrix. Value: `%d`.", uplo );
		return;
	}
	if ( N < 0 ) {
		c_xerbla( 3, "c_ssyr", "Error: invalid argument. Third argument must be a nonnegative integer. Value: `%d`.", N );
		return;
	}
	if ( strideX == 0 ) {
		c_xerbla( 6, "c_ssyr", "Error: invalid argument. Sixth argument must be nonzero. Value: `%d`.", strideX );
		return;
	}
	// max(1, N)
	if ( N < 1 ) {
		vala = 1;
	} else {
		vala = N;
	}
	if ( LDA < vala ) {
		c_xerbla( 10, "c_ssyr", "Error: invalid argument. Eighth argument must be greater than or equal to max(1,%d). Value: `%d`.", vala, LDA );
		return;
	}
	// Check whether we can avoid computation altogether...
	if ( N == 0 || alpha == 0.0f ) {
		return;
	}
	if ( layout == CblasColMajor ) {
		sa1 = 1;
		sa2 = LDA;
	} else { // layout == CblasRowMajor
		sa1 = LDA;
		sa2 = 1;
	}
	ox = stdlib_strided_stride2offset( N, strideX );
	API_SUFFIX(c_ssyr_ndarray)( uplo, N, alpha, X, strideX, ox, A, sa1, sa2, 0 );
	return;
}
