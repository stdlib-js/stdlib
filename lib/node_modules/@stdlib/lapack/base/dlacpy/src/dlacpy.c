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

#include "stdlib/lapack/base/dlacpy.h"
#include "stdlib/lapack/base/shared.h"
#include "stdlib/lapack/base/xerbla.h"

/**
* Copies all or part of a matrix `A` to another matrix `B`.
*
* @param layout   storage layout
* @param uplo     specifies whether to copy the upper or lower triangular/trapezoidal part of a matrix `A`
* @param M        number of rows in the matrix `A`
* @param N        number of columns in the matrix `A`
* @param A        input matrix
* @param LDA      stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param B        output matrix
* @param LDB      stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`)
* @return         status code
*/
LAPACK_INT API_SUFFIX(c_dlacpy)( const LAPACK_LAYOUT layout, const int uplo, const LAPACK_INT M, const LAPACK_INT N, const double *A, const LAPACK_INT LDA, double *B, const LAPACK_INT LDB ) {
	LAPACK_INT sa1;
	LAPACK_INT sa2;
	LAPACK_INT sb1;
	LAPACK_INT sb2;

	// Perform input argument validation...
	if ( layout != LAPACK_ROW_MAJOR && layout != LAPACK_COL_MAJOR ) {
		lapack_xerbla( "c_dlacpy", -1 );
		return -1;
	}
	if ( layout == LAPACK_COL_MAJOR ) {
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
	return API_SUFFIX(c_dlacpy_ndarray)( uplo, M, N, A, sa1, sa2, 0, B, sb1, sb2, 0 );
}
