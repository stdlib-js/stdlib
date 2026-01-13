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
#include "stdlib/ndarray/base/assert/is_row_major.h"

/**
* Performs the symmetric rank 1 operation `A = α*x*x^T + A`, using alternative indexing semantics and where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix.
*
* @param uplo      specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
* @param N         number of elements along each dimension of `A`
* @param alpha     scalar constant
* @param X         input vector
* @param strideX   `X` stride length
* @param offsetX   starting index of `X`
* @param A         input matrix
* @param strideA1  stride of the first dimension of `A`
* @param strideA2  stride of the second dimension of `A`
* @param offsetA   starting index of `A`
*/
void API_SUFFIX(c_ssyr_ndarray)( const CBLAS_UPLO uplo, const CBLAS_INT N, const float alpha, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, float *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA ) {
	int64_t sa[ 2 ];
	CBLAS_INT isrm;
	CBLAS_INT ix0;
	CBLAS_INT ix1;
	CBLAS_INT sa0;
	CBLAS_INT sa1;
	CBLAS_INT i0;
	CBLAS_INT i1;
	CBLAS_INT ia;
	CBLAS_INT ox;
	float tmp;

	// Note on variable naming convention: sa#, ix#, iy#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Perform input argument validation...
	if ( uplo != CblasLower && uplo != CblasUpper ) {
		c_xerbla( 1, "c_ssyr_ndarray", "Error: invalid argument. First argument must specify whether to reference the lower or upper triangular matrix. Value: `%d`.", uplo );
		return;
	}
	if ( N < 0 ) {
		c_xerbla( 2, "c_ssyr_ndarray", "Error: invalid argument. Second argument must be a nonnegative integer. Value: `%d`.", N );
		return;
	}
	if ( strideX == 0 ) {
		c_xerbla( 5, "c_ssyr_ndarray", "Error: invalid argument. Fifth argument must be a nonzero. Value: `%d`.", strideX );
		return;
	}
	// Check whether we can avoid computation altogether...
	if ( N == 0 || alpha == 0.0f ) {
		return;
	}
	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	sa[ 0 ] = strideA1;
	sa[ 1 ] = strideA2;
	isrm = stdlib_ndarray_is_row_major( 2, sa );
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
				ia = offsetA + (sa1*i1);
				ix0 = ox;
				for ( i0 = 0; i0 <= i1; i0++ ) {
					A[ ia ] += X[ ix0 ] * tmp;
					ix0 += strideX;
					ia += sa0;
				}
			}
			ix1 += strideX;
		}
		return;
	}
	// ( isrm && uplo == CblasUpper ) || ( !isrm && uplo == CblasLower )
	ix1 = ox;
	for ( i1 = 0; i1 < N; i1++ ) {
		if ( X[ ix1 ] != 0.0f ) {
			tmp = alpha * X[ ix1 ];
			ia = offsetA + (sa1*i1) + (sa0*i1);
			ix0 = ix1;
			for ( i0 = i1; i0 < N; i0++ ) {
				A[ ia ] += X[ ix0 ] * tmp;
				ix0 += strideX;
				ia += sa0;
			}
		}
		ix1 += strideX;
	}
	return;
}
