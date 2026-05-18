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

#include "stdlib/blas/base/cgemv.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/blas/base/xerbla.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/complex/float32/base/assert/is_equal.h"

/**
* Performs one of the matrix-vector operations `Y = α*A*X + β*Y` or `Y = α*A^T*X + β*Y` or `Y = α*A^H*X + β*Y`, where `α` and `β` are scalars, `X` and `Y` are vectors, and `A` is an `M` by `N` matrix.
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
void API_SUFFIX(c_cgemv)( const CBLAS_LAYOUT layout, const CBLAS_TRANSPOSE trans, const CBLAS_INT M, const CBLAS_INT N, const stdlib_complex64_t alpha, const void *A, const CBLAS_INT LDA, const void *X, const CBLAS_INT strideX, const stdlib_complex64_t beta, void *Y, const CBLAS_INT strideY ) {
	stdlib_complex64_t zero;
	stdlib_complex64_t one;
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
		c_xerbla( 1, "c_cgemv", "Error: invalid argument. First argument must be a valid storage layout. Value: `%d`.", layout );
		return;
	}
	if ( trans != CblasTrans && trans != CblasConjTrans && trans != CblasNoTrans ) {
		c_xerbla( 2, "c_cgemv", "Error: invalid argument. Second argument must be a valid transpose operation. Value: `%d`.", trans );
		return;
	}
	if ( M < 0 ) {
		c_xerbla( 3, "c_cgemv", "Error: invalid argument. Third argument must be a nonnegative integer. Value: `%d`.", M );
		return;
	}
	if ( N < 0 ) {
		c_xerbla( 4, "c_cgemv", "Error: invalid argument. Fourth argument must be a nonnegative integer. Value: `%d`.", N );
		return;
	}
	if ( strideX == 0 ) {
		c_xerbla( 9, "c_cgemv", "Error: invalid argument. Ninth argument must be a nonzero. Value: `%d`.", strideX );
		return;
	}
	if ( strideY == 0 ) {
		c_xerbla( 12, "c_cgemv", "Error: invalid argument. Twelfth argument must be a nonzero. Value: `%d`.", strideY );
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
		c_xerbla( 7, "c_cgemv", "Error: invalid argument. Seventh argument must be greater than or equal to max(1,%d). Value: `%d`.", vala, LDA );
		return;
	}
	zero = stdlib_complex64( 0.0f, 0.0f );
	one = stdlib_complex64( 1.0f, 0.0f );
	// Check whether we can avoid computation altogether...
	if ( M == 0 || N == 0 || ( stdlib_base_complex64_is_equal( alpha, zero ) && stdlib_base_complex64_is_equal( beta, one ) ) ) {
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
	} else { // layout === CblasRowMajor
		sa1 = LDA;
		sa2 = 1;
	}
	ox = stdlib_strided_stride2offset( xlen, strideX );
	oy = stdlib_strided_stride2offset( ylen, strideY );
	API_SUFFIX(c_cgemv_ndarray)( trans, M, N, alpha, A, sa1, sa2, 0, X, strideX, ox, beta, Y, strideY, oy );
	return;
}
