/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/blas/base/dger.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/blas/base/xerbla.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Performs the rank 1 operation `A = alpha*x*y^T + A`, where `alpha` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M`-by-`N` matrix.
*
* @param layout   storage layout
* @param M        number of rows in the matrix `A`
* @param N        number of columns in the matrix `A`
* @param alpha    scalar constant
* @param X        an `M` element vector
* @param strideX  stride length for `X`
* @param Y        an `N` element vector
* @param strideY  stride length for `Y`
* @param A        matrix of coefficients
* @param LDA      stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
*/
void API_SUFFIX(c_dger)( const CBLAS_LAYOUT layout, const CBLAS_INT M, const CBLAS_INT N, const double alpha, const double *X, const CBLAS_INT strideX, const double *Y, const CBLAS_INT strideY, double *A, const CBLAS_INT LDA ) {
	CBLAS_INT vala;
	CBLAS_INT sa1;
	CBLAS_INT sa2;
	CBLAS_INT ox;
	CBLAS_INT oy;
	CBLAS_INT v;

	// Perform input argument validation...
	if ( layout != CblasRowMajor && layout != CblasColMajor ) {
		c_xerbla( 1, "c_dger", "Error: invalid argument. First argument must be a valid storage layout. Value: `%d`.", layout );
		return;
	}
	if ( M < 0 ) {
		c_xerbla( 2, "c_dger", "Error: invalid argument. Second argument must be a nonnegative integer. Value: `%d`.", M );
		return;
	}
	if ( N < 0 ) {
		c_xerbla( 3, "c_dger", "Error: invalid argument. Third argument must be a nonnegative integer. Value: `%d`.", N );
		return;
	}
	if ( strideX == 0 ) {
		c_xerbla( 6, "c_dger", "Error: invalid argument. Sixth argument must be nonzero. Value: `%d`.", strideX );
		return;
	}
	if ( strideY == 0 ) {
		c_xerbla( 8, "c_dger", "Error: invalid argument. Eighth argument must be nonzero. Value: `%d`.", strideY );
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
	if ( LDA < vala ) {
		c_xerbla( 10, "c_dger", "Error: invalid argument. Tenth argument must be greater than or equal to max(1,%d). Value: `%d`.", v, LDA );
		return;
	}
	// Check whether we can avoid computation altogether...
	if ( M == 0 || N == 0 || alpha == 0.0 ) {
		return;
	}
	ox = stdlib_strided_stride2offset( M, strideX );
	oy = stdlib_strided_stride2offset( N, strideY );
	if ( layout == CblasColMajor ) {
		sa1 = 1;
		sa2 = LDA;
	} else { // layout == CblasRowMajor
		sa1 = LDA;
		sa2 = 1;
	}
	API_SUFFIX(c_dger_ndarray)( M, N, alpha, X, strideX, ox, Y, strideY, oy, A, sa1, sa2, 0 );
	return;
}
