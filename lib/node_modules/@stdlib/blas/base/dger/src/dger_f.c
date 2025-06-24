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
#include "stdlib/blas/base/dger_fortran.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/blas/base/xerbla.h"

/**
* Performs the rank 1 operation `A = alpha*x*y^T + A`, where `alpha` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M`-by-`N` matrix.
*
* @param layout   storage layout
* @param M        number of rows in the matrix `A`
* @param N        number of columns in the matrix `A`
* @param alpha    scalar constant
* @param X        an `M` element vector
* @param strideX  X stride length
* @param Y        an `N` element vector
* @param strideY  Y stride length
* @param A        matrix of coefficients
* @param LDA      stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
*/
void API_SUFFIX(c_dger)( const CBLAS_LAYOUT layout, const CBLAS_INT M, const CBLAS_INT N, const double alpha, const double *X, const CBLAS_INT strideX, const double *Y, const CBLAS_INT strideY, double *A, const CBLAS_INT LDA ) {
	extern int RowMajorStrg; // global flag

	RowMajorStrg = 0;
	if ( layout == CblasColMajor ) {
		dger( &M, &N, &alpha, X, &strideX, Y, &strideY, A, &LDA );
		return;
	}
	if ( layout == CblasRowMajor ) {
		RowMajorStrg = 1;
		dger( &N, &M, &alpha, Y, &strideY, X, &strideX, A, &LDA );
		RowMajorStrg = 0;
		return;
	}
	c_xerbla( 1, "c_dger", "Error: invalid argument. First argument must be a valid storage layout. Value: `%d`.", layout );
	RowMajorStrg = 0;
	return;
}
