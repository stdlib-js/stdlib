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
#include "stdlib/strided/base/stride2offset.h"

/**
* Performs one of the matrix-vector operations `Y = α*A*X + β*Y` or `Y = α*A^T*X + β*Y`, where `α` and `β` are scalars, `X` and `Y` are vectors, and `A` is an `M` by `N` matrix.
*
* @param layout   storage layout
* @param trans    specifies whether `A` should be transposed, conjugate-transposed, or not transposed
* @param M        number of rows in the matrix `A`
* @param N        number of columns in the matrix `A`
* @param alpha    scalar constant
* @param A        input matrix
* @param LDA      stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param X        first input vector
* @param strideX  `X` stride length
* @param beta     scalar constant
* @param Y        second input vector
* @param strideY  `Y` stride length
* @return         output value
*/
void API_SUFFIX(c_sgemv)( const CBLAS_LAYOUT layout, const CBLAS_TRANSPOSE trans, const CBLAS_INT M, const CBLAS_INT N, const float alpha, const float *A, const CBLAS_INT LDA, const float *X, const CBLAS_INT strideX, const float beta, float *Y, const CBLAS_INT strideY ) {
	CBLAS_INT vala;
	CBLAS_INT xlen;
	CBLAS_INT ylen;
	CBLAS_INT sa1;
	CBLAS_INT sa2;
	CBLAS_INT ox;
	CBLAS_INT oy;
	CBLAS_INT v;

	// Perform input argument validation...
	if ( layout != CblasRowMajor && layout != CblasColMajor ) {
		c_xerbla( 1, "c_sgemv", "Error: invalid argument. First argument must be a valid storage layout. Value: `%d`.", layout );
		return;
	}
	if ( trans != CblasTrans && trans != CblasConjTrans && trans != CblasNoTrans ) {
		c_xerbla( 2, "c_sgemv", "Error: invalid argument. Second argument must be a valid transpose operation. Value: `%d`.", trans );
		return;
	}
	if ( M < 0 ) {
		c_xerbla( 3, "c_sgemv", "Error: invalid argument. Third argument must be a nonnegative integer. Value: `%d`.", M );
		return;
	}
	if ( N < 0 ) {
		c_xerbla( 4, "c_sgemv", "Error: invalid argument. Fourth argument must be a nonnegative integer. Value: `%d`.", N );
		return;
	}
	if ( strideX == 0 ) {
		c_xerbla( 9, "c_sgemv", "Error: invalid argument. Ninth argument must be nonzero. Value: `%d`.", strideX );
		return;
	}
	if ( strideY == 0 ) {
		c_xerbla( 12, "c_sgemv", "Error: invalid argument. Twelfth argument must be nonzero. Value: `%d`.", strideY );
		return;
	}
	if ( layout == CblasColMajor ) {
		v = M;
	} else {
		v = N;
	}
	// max(1, v)
	if ( v < 1 ) {
		vala = 1;
	} else {
		vala = v;
	}
	if ( LDA < v ) {
		c_xerbla( 10, "c_sgemv", "Error: invalid argument. Seventh argument must be greater than or equal to max(1,%d). Value: `%d`.", vala, LDA );
		return;
	}
	// Check if we can early return...
	if ( M == 0 || N == 0 || ( alpha == 0.0f && beta == 1.0f ) ) {
		return;
	}
	if ( trans == CblasNoTrans ) {
		xlen = N;
		ylen = M;
	} else {
		xlen = M;
		ylen = N;
	}
	if ( layout == CblasColMajor ) {
		sa1 = 1;
		sa2 = LDA;
	} else { // layout == CblasRowMajor
		sa1 = LDA;
		sa2 = 1;
	}
	ox = stdlib_strided_stride2offset( xlen, strideX );
	oy = stdlib_strided_stride2offset( ylen, strideY );
	API_SUFFIX(c_sgemv_ndarray)( trans, M, N, alpha, A, sa1, sa2, 0, X, strideX, ox, beta, Y, strideY, oy );
	return;
}
