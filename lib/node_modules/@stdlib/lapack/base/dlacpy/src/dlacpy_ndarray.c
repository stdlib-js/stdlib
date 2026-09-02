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
#include "stdlib/ndarray/base/assert/is_row_major.h"
#include <stdint.h>

// Define a macro for computing the minimum value:
#define MIN(X, Y) (((X) < (Y)) ? (X) : (Y))

/**
* Copies all of a matrix `A` to another matrix `B`.
*
* @param M        number of rows in the matrix `A`
* @param N        number of columns in the matrix `A`
* @param A        input matrix
* @param strideA1 stride of the first dimension of `A`
* @param strideA2 stride of the second dimension of `A`
* @param offsetA  starting index for `A`
* @param B        output matrix
* @param strideB1 stride of the first dimension of `B`
* @param strideB2 stride of the second dimension of `B`
* @param offsetB  starting index for `B`
* @return         status code
*/
static LAPACK_INT stdlib_lapack_base_copy_all( const LAPACK_INT M, const LAPACK_INT N, const double *A, const LAPACK_INT strideA1, const LAPACK_INT strideA2, const LAPACK_INT offsetA, double *B, const LAPACK_INT strideB1, const LAPACK_INT strideB2, const LAPACK_INT offsetB ) {
	int64_t sa[ 2 ];
	LAPACK_INT da0;
	LAPACK_INT da1;
	LAPACK_INT db0;
	LAPACK_INT db1;
	LAPACK_INT S0;
	LAPACK_INT S1;
	LAPACK_INT ia;
	LAPACK_INT ib;
	LAPACK_INT i0;
	LAPACK_INT i1;

	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	sa[ 0 ] = strideA1;
	sa[ 1 ] = strideA2;
	if ( stdlib_ndarray_is_row_major( 2, sa ) ) {
		// For row-major matrices, the last dimension has the fastest changing index...
		S0 = N;
		S1 = M;
		da0 = strideA2;                   // offset increment for innermost loop
		da1 = strideA1 - ( S0*strideA2 ); // offset increment for outermost loop
		db0 = strideB2;
		db1 = strideB1 - ( S0*strideB2 );
	} else { // column-major
		// For column-major matrices, the first dimension has the fastest changing index...
		S0 = M;
		S1 = N;
		da0 = strideA1;                   // offset increment for innermost loop
		da1 = strideA2 - ( S0*strideA1 ); // offset increment for outermost loop
		db0 = strideB1;
		db1 = strideB2 - ( S0*strideB1 );
	}

	// Set the pointers to the first indexed elements in the respective matrices...
	ia = offsetA;
	ib = offsetB;

	// Iterate over the matrix dimensions...
	for ( i1 = 0; i1 < S1; i1++ ) {
		for ( i0 = 0; i0 < S0; i0++ ) {
			B[ ib ] = A[ ia ];
			ia += da0;
			ib += db0;
		}
		ia += da1;
		ib += db1;
	}
	return 0;
}

/**
* Copies the upper triangular/trapezoidal part of a matrix `A` to another matrix `B`.
*
* @param M        number of rows in the matrix `A`
* @param N        number of columns in the matrix `A`
* @param A        input matrix
* @param strideA1 stride of the first dimension of `A`
* @param strideA2 stride of the second dimension of `A`
* @param offsetA  starting index for `A`
* @param B        output matrix
* @param strideB1 stride of the first dimension of `B`
* @param strideB2 stride of the second dimension of `B`
* @param offsetB  starting index for `B`
* @return         status code
*/
static LAPACK_INT stdlib_lapack_base_copy_upper( const LAPACK_INT M, const LAPACK_INT N, const double *A, const LAPACK_INT strideA1, const LAPACK_INT strideA2, const LAPACK_INT offsetA, double *B, const LAPACK_INT strideB1, const LAPACK_INT strideB2, const LAPACK_INT offsetB ) {
	int64_t sa[ 2 ];
	LAPACK_INT ia;
	LAPACK_INT ib;
	LAPACK_INT i0;
	LAPACK_INT i1;

	ia = offsetA;
	ib = offsetB;

	sa[ 0 ] = strideA1;
	sa[ 1 ] = strideA2;
	if ( stdlib_ndarray_is_row_major( 2, sa ) ) {
		for ( i1 = 0; i1 < M; i1++ ) {
			for ( i0 = i1; i0 < N; i0++ ) {
				B[ ib+(i0*strideB2) ] = A[ ia+(i0*strideA2) ];
			}
			ia += strideA1;
			ib += strideB1;
		}
		return 0;
	}
	for ( i1 = 0; i1 < N; i1++ ) {
		for ( i0 = 0; i0 <= MIN( i1, M-1 ); i0++ ) {
			B[ ib+(i0*strideB1) ] = A[ ia+(i0*strideA1) ];
		}
		ia += strideA2;
		ib += strideB2;
	}
	return 0;
}

/**
* Copies the lower triangular/trapezoidal part of a matrix `A` to another matrix `B`.
*
* @param M        number of rows in the matrix `A`
* @param N        number of columns in the matrix `A`
* @param A        input matrix
* @param strideA1 stride of the first dimension of `A`
* @param strideA2 stride of the second dimension of `A`
* @param offsetA  starting index for `A`
* @param B        output matrix
* @param strideB1 stride of the first dimension of `B`
* @param strideB2 stride of the second dimension of `B`
* @param offsetB  starting index for `B`
* @return         status code
*/
static LAPACK_INT stdlib_lapack_base_copy_lower( const LAPACK_INT M, const LAPACK_INT N, const double *A, const LAPACK_INT strideA1, const LAPACK_INT strideA2, const LAPACK_INT offsetA, double *B, const LAPACK_INT strideB1, const LAPACK_INT strideB2, const LAPACK_INT offsetB ) {
	int64_t sa[ 2 ];
	LAPACK_INT ia;
	LAPACK_INT ib;
	LAPACK_INT i0;
	LAPACK_INT i1;

	ia = offsetA;
	ib = offsetB;

	sa[ 0 ] = strideA1;
	sa[ 1 ] = strideA2;
	if ( stdlib_ndarray_is_row_major( 2, sa ) ) {
		for ( i1 = 0; i1 < M; i1++ ) {
			for ( i0 = 0; i0 <= MIN( i1, N-1 ); i0++ ) {
				B[ ib+(i0*strideB2) ] = A[ ia+(i0*strideA2) ];
			}
			ia += strideA1;
			ib += strideB1;
		}
		return 0;
	}
	for ( i1 = 0; i1 < N; i1++ ) {
		for ( i0 = i1; i0 < M; i0++ ) {
			B[ ib+(i0*strideB1) ] = A[ ia+(i0*strideA1) ];
		}
		ia += strideA2;
		ib += strideB2;
	}
	return 0;
}

/**
* Copies all or part of a matrix `A` to another matrix `B` using alternative indexing semantics.
*
* @param uplo     specifies whether to copy the upper or lower triangular/trapezoidal part of a matrix `A`
* @param M        number of rows in the matrix `A`
* @param N        number of columns in the matrix `A`
* @param A        input matrix
* @param strideA1 stride of the first dimension of `A`
* @param strideA2 stride of the second dimension of `A`
* @param offsetA  starting index for `A`
* @param B        output matrix
* @param strideB1 stride of the first dimension of `B`
* @param strideB2 stride of the second dimension of `B`
* @param offsetB  starting index for `B`
* @return         status code
*/
LAPACK_INT API_SUFFIX(c_dlacpy_ndarray)( const int uplo, const LAPACK_INT M, const LAPACK_INT N, const double *A, const LAPACK_INT strideA1, const LAPACK_INT strideA2, const LAPACK_INT offsetA, double *B, const LAPACK_INT strideB1, const LAPACK_INT strideB2, const LAPACK_INT offsetB ) {
	if ( uplo == LAPACK_UPPER_TRIANGLE ) {
		return stdlib_lapack_base_copy_upper( M, N, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB );
	}
	if ( uplo == LAPACK_LOWER_TRIANGLE ) {
		return stdlib_lapack_base_copy_lower( M, N, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB );
	}
	return stdlib_lapack_base_copy_all( M, N, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB );
}
