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

#include "stdlib/blas/base/sgemv.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/blas/base/xerbla.h"
#include "stdlib/blas/base/sscal.h"
#include "stdlib/blas/ext/base/sfill.h"
#include "stdlib/ndarray/base/assert/is_row_major.h"

/**
* Performs one of the matrix-vector operations `Y = α*A*X + β*Y` or `Y = α*A^T*X + β*Y`, using alternative indexing semantics and where `α` and `β` are scalars, `X` and `Y` are vectors, and `A` is an `M` by `N` matrix.
*
* @param trans     specifies whether `A` should be transposed, conjugate-transposed, or not transposed
* @param M         number of rows in the matrix `A`
* @param N         number of columns in the matrix `A`
* @param alpha     scalar constant
* @param A         input matrix
* @param strideA1  stride of the first dimension of `A`
* @param strideA1  stride of the second dimension of `A`
* @param offsetA   starting index for `A`
* @param X         first input vector
* @param strideX   `X` stride length
* @param offsetX   starting index for `X`
* @param beta      scalar constant
* @param Y         second input vector
* @param strideY   `Y` stride length
* @param offsetY   starting index for `Y`
* @return          output value
*/
void API_SUFFIX(c_sgemv_ndarray)( const CBLAS_TRANSPOSE trans, const CBLAS_INT M, const CBLAS_INT N, const float alpha, const float *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const float beta, float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	int64_t sa[ 2 ];
	CBLAS_INT isrm;
	CBLAS_INT xlen;
	CBLAS_INT ylen;
	CBLAS_INT da0;
	CBLAS_INT da1;
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT ia;
	CBLAS_INT i0;
	CBLAS_INT i1;
	float tmp;

	// Note on variable naming convention: da#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Perform input argument validation...
	if ( trans != CblasTrans && trans != CblasConjTrans && trans != CblasNoTrans ) {
		c_xerbla( 1, "c_sgemv_ndarray", "Error: invalid argument. First argument must be a valid transpose operation. Value: `%d`.", trans );
		return;
	}
	if ( M < 0 ) {
		c_xerbla( 2, "c_sgemv_ndarray", "Error: invalid argument. Second argument must be a nonnegative integer. Value: `%d`.", M );
		return;
	}
	if ( N < 0 ) {
		c_xerbla( 3, "c_sgemv_ndarray", "Error: invalid argument. Third argument must be a nonnegative integer. Value: `%d`.", N );
		return;
	}
	if ( strideX == 0 ) {
		c_xerbla( 10, "c_sgemv_ndarray", "Error: invalid argument. Tenth argument must be a nonzero. Value: `%d`.", strideX );
		return;
	}
	if ( strideY == 0 ) {
		c_xerbla( 14, "c_sgemv_ndarray", "Error: invalid argument. Fourteenth argument must be a nonzero. Value: `%d`.", strideY );
		return;
	}
	// Check whether we can avoid computation altogether...
	if ( M == 0 || N == 0 || ( alpha == 0.0f && beta == 1.0f ) ) {
		return;
	}
	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	sa[ 0 ] = strideA1;
	sa[ 1 ] = strideA2;
	isrm = stdlib_ndarray_is_row_major( 2, sa );
	if ( trans == CblasNoTrans ) {
		xlen = N;
		ylen = M;
	} else {
		xlen = M;
		ylen = N;
	}
	// Y = beta * Y
	if ( beta == 0.0f ) {
		API_SUFFIX(stdlib_strided_sfill_ndarray)( ylen, 0.0f, Y, strideY, offsetY );
	} else if ( beta != 1.0f ) {
		API_SUFFIX(c_sscal_ndarray)( ylen, beta, Y, strideY, offsetY );
	}
	if ( alpha == 0.0f ) {
		return;
	}
	// Form: Y = α*A*X + Y
	if (
		( !isrm && trans == CblasNoTrans ) ||
		( isrm && trans != CblasNoTrans )
	) {
		if ( isrm ) {
			// For row-major matrices, the last dimension has the fastest changing index...
			da0 = strideA2;                     // offset increment for innermost loop
			da1 = strideA1 - ( ylen*strideA2 ); // offset increment for outermost loop
		} else { // isColMajor
			// For column-major matrices, the first dimension has the fastest changing index...
			da0 = strideA1;                     // offset increment for innermost loop
			da1 = strideA2 - ( ylen*strideA1 ); // offset increment for outermost loop
		}
		ia = offsetA;
		ix = offsetX;
		for ( i1 = 0; i1 < xlen; i1++ ) {
			tmp = alpha * X[ ix ];
			if ( tmp == 0.0f ) {
				ia += da0 * ylen;
			} else {
				iy = offsetY;
				for ( i0 = 0; i0 < ylen; i0++ ) {
					Y[ iy ] += A[ ia ] * tmp;
					iy += strideY;
					ia += da0;
				}
			}
			ix += strideX;
			ia += da1;
		}
		return;
	}
	// Form: Y = α*A^T*X + Y

	// ( !isrm && trans !== CblasNoTrans ) || ( isrm && trans === CblasNoTrans )
	if ( isrm ) {
		// For row-major matrices, the last dimension has the fastest changing index...
		da0 = strideA2;                     // offset increment for innermost loop
		da1 = strideA1 - ( xlen*strideA2 ); // offset increment for outermost loop
	} else { // isColMajor
		// For column-major matrices, the first dimension has the fastest changing index...
		da0 = strideA1;                     // offset increment for innermost loop
		da1 = strideA2 - ( xlen*strideA1 ); // offset increment for outermost loop
	}
	ia = offsetA;
	iy = offsetY;
	for ( i1 = 0; i1 < ylen; i1++ ) {
		tmp = 0.0f;
		ix = offsetX;
		for ( i0 = 0; i0 < xlen; i0++ ) {
			tmp += A[ ia ] * X[ ix ];
			ix += strideX;
			ia += da0;
		}
		Y[ iy ] += alpha * tmp;
		iy += strideY;
		ia += da1;
	}
	return;
}
