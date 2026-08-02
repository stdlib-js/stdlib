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

#include "stdlib/stats/strided/dcovmatmtk.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/blas/base/xerbla.h"
#include "stdlib/lapack/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/ndarray/base/assert/is_row_major.h"
#include "stdlib/stats/strided/dcovarmtk.h"
#include "stdlib/stats/strided/dvarmtk.h"
#include "stdlib/lapack/base/dlacpy.h"
#include <stdint.h>
#include <stdbool.h>

/**
* Computes the covariance matrix for an `M` by `N` double-precision floating-point matrix `A` and assigns the results to a matrix `B` when provided known means and using a one-pass textbook algorithm.
*
* ## Notes
*
* -   When `orient(A) = 'columns'`,
*
*     -   each column in `A` represents a variable and each row in `A` represents an observation.
*     -   `B` should be an `N` by `N` matrix.
*     -   the list of known means should be an `N` element vector.
*
* -   When `orient(A) = 'rows'`,
*
*     -   each row in `A` represents a variable and each column in `A` represents an observation.
*     -   `B` should be an `M` by `M` matrix.
*     -   the list of known means should be an `M` element vector.
*
* @param layout       storage layout
* @param orient       specifies whether variables are stored along columns or along rows
* @param uplo         specifies whether to overwrite the upper or lower triangular part of matrix `B`
* @param M            number of rows in the matrix `A`
* @param N            number of columns in the matrix `A`
* @param correction   degrees of freedom adjustment
* @param Means        vector of known means
* @param strideM      stride length of `Means`
* @param A            input matrix
* @param LDA          stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param B            output matrix
* @param LDB          stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`)
*/
void API_SUFFIX(stdlib_strided_dcovmatmtk)( const CBLAS_LAYOUT layout, const CBLAS_ORIENT orient, const int uplo, const CBLAS_INT M, const CBLAS_INT N, const double correction, const double *Means, const CBLAS_INT strideM, const double *A, const CBLAS_INT LDA, double *B, const CBLAS_INT LDB ) {
	CBLAS_INT nsamples;
	CBLAS_INT sa1;
	CBLAS_INT sa2;
	CBLAS_INT sb1;
	CBLAS_INT sb2;
	CBLAS_INT om;

	// Perform input argument validation...
	if ( layout != CblasRowMajor && layout != CblasColMajor ) {
		c_xerbla( 1, "stdlib_strided_dcovmatmtk", "Error: invalid argument. First argument must be a valid storage layout. Value: `%d`.", layout );
		return;
	}
	if ( orient != CblasRows && orient != CblasCols ) {
		c_xerbla( 2, "stdlib_strided_dcovmatmtk", "Error: invalid argument. Second argument must be a valid matrix orientation. Value: `%d`.", orient );
		return;
	}
	if ( M < 0 ) {
		c_xerbla( 4, "stdlib_strided_dcovmatmtk", "Error: invalid argument. Fourth argument must be a nonnegative integer. Value: `%d`.", M );
		return;
	}
	if ( N < 0 ) {
		c_xerbla( 5, "stdlib_strided_dcovmatmtk", "Error: invalid argument. Fifth argument must be a nonnegative integer. Value: `%d`.", N );
		return;
	}
	if ( orient == CblasRows ) {
		nsamples = M;
	} else { // orient == CblasCols
		nsamples = N;
	}
	if ( layout == CblasColMajor ) {
		sa1 = 1;
		sa2 = LDA;
		sb1 = 1;
		sb2 = LDB;
	} else { // order == CblasRowMajor
		sa1 = LDA;
		sa2 = 1;
		sb1 = LDB;
		sb2 = 1;
	}
	om = stdlib_strided_stride2offset( nsamples, strideM );
	API_SUFFIX(stdlib_strided_dcovmatmtk_ndarray)( orient, uplo, M, N, correction, Means, strideM, om, A, sa1, sa2, 0, B, sb1, sb2, 0 );
}

/**
* Computes the covariance matrix for an `M` by `N` double-precision floating-point matrix `A` and assigns the results to a matrix `B` when provided known means and using a one-pass textbook algorithm and alternative indexing semantics.
*
* ## Notes
*
* -   When `orient(A) = 'columns'`,
*
*     -   each column in `A` represents a variable and each row in `A` represents an observation.
*     -   `B` should be an `N` by `N` matrix.
*     -   the list of known means should be an `N` element vector.
*
* -   When `orient(A) = 'rows'`,
*
*     -   each row in `A` represents a variable and each column in `A` represents an observation.
*     -   `B` should be an `M` by `M` matrix.
*     -   the list of known means should be an `M` element vector.
*
* @param orient       specifies whether variables are stored along columns or along rows
* @param uplo         specifies whether to overwrite the upper or lower triangular part of matrix `B`
* @param M            number of rows in the matrix `A`
* @param N            number of columns in the matrix `A`
* @param correction   degrees of freedom adjustment
* @param Means        vector of known means
* @param strideM      stride length of `Means`
* @param offsetM      starting index for `Means`
* @param A            input matrix
* @param strideA1     stride of the first dimension of `A`
* @param strideA2     stride of the second dimension of `A`
* @param offsetA      starting index for `A`
* @param B            output matrix
* @param strideB1     stride of the first dimension of `B`
* @param strideB2     stride of the second dimension of `B`
* @param offsetB      starting index for `B`
*/
void API_SUFFIX(stdlib_strided_dcovmatmtk_ndarray)( const CBLAS_ORIENT orient, const int uplo, const CBLAS_INT M, const CBLAS_INT N, const double correction, const double *Means, const CBLAS_INT strideM, const CBLAS_INT offsetM, const double *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA, double *B, const CBLAS_INT strideB1, const CBLAS_INT strideB2, const CBLAS_INT offsetB ) {
	int64_t strides[ 2 ];
	CBLAS_INT nsamples;
	CBLAS_INT nobs;
	CBLAS_INT sa1;
	CBLAS_INT sa0;
	CBLAS_INT sb1;
	CBLAS_INT sb0;
	CBLAS_INT sb;
	CBLAS_INT oa;
	CBLAS_INT om;
	CBLAS_INT ia;
	CBLAS_INT ib;
	CBLAS_INT im;
	CBLAS_INT i0;
	CBLAS_INT i1;
	bool isrmb;
	bool full;

	// Perform input argument validation...
	if ( orient != CblasRows && orient != CblasCols ) {
		c_xerbla( 1, "stdlib_strided_dcovmatmtk_ndarray", "Error: invalid argument. First argument must be a valid matrix orientation. Value: `%d`.", orient );
		return;
	}
	if ( M < 0 ) {
		c_xerbla( 3, "stdlib_strided_dcovmatmtk_ndarray", "Error: invalid argument. Third argument must be a nonnegative integer. Value: `%d`.", M );
		return;
	}
	if ( N < 0 ) {
		c_xerbla( 3, "stdlib_strided_dcovmatmtk_ndarray", "Error: invalid argument. Fourth argument must be a nonnegative integer. Value: `%d`.", N );
		return;
	}
	// Determine the memory layout of `B`:
	strides[ 0 ] = strideB1;
	strides[ 1 ] = strideB2;
	isrmb = stdlib_ndarray_is_row_major( 2, strides );

	// Determine the outer and inner loop strides when writing to the upper or lower triangular part of `B`...
	full = false;
	if ( uplo == CblasUpper ) {
		// Writing to the upper triangular part is cache optimal for a row-major `B`, but not for a column-major `B`...
		sb0 = strideB2;
		sb1 = strideB1;
	} else if ( uplo == CblasLower ) {
		// Writing to the lower triangular part is cache optimal for a column-major `B`, but not for a row-major `B`...
		sb0 = strideB1;
		sb1 = strideB2;
	} else {
		// When computing the full covariance matrix, write covariances in a manner which is cache optimal for the layout of `B`...
		full = true;
		if ( isrmb ) {
			// For row-major matrices, the last dimension has the fastest changing index...
			sb0 = strideB2;
			sb1 = strideB1;
		} else {
			// For column-major matrices, the first dimension has the fastest changing index...
			sb0 = strideB1;
			sb1 = strideB2;
		}
	}
	// Resolve loop variables...
	if ( orient == CblasRows ) {
		sa0 = strideA2;
		sa1 = strideA1;
		nsamples = M;
		nobs = N;
	} else { // orient == CblasCols
		sa0 = strideA1;
		sa1 = strideA2;
		nsamples = N;
		nobs = M;
	}
	// Compute the variances and set them along the diagonal...
	sb = strideB1 + strideB2; // stride for elements along diagonal
	ia = offsetA;
	ib = offsetB;
	im = offsetM;
	for ( i0 = 0; i0 < nsamples; i0++ ) {
		B[ ib ] = API_SUFFIX(stdlib_strided_dvarmtk_ndarray)( nobs, correction, Means[ im ], A, sa0, ia );
		ia += sa1;
		ib += sb;
		im += strideM;
	}
	// Compute pairwise covariances...
	oa = offsetA;
	om = offsetM;
	for ( i1 = 0; i1 < nsamples-1; i1++ ) {
		ib = offsetB + ( sb1*i1 ) + ( sb0*i1 );
		ia = oa;
		im = om;
		for ( i0 = i1+1; i0 < nsamples; i0++ ) {
			im += strideM;
			ia += sa1;
			ib += sb0;
			B[ ib ] = API_SUFFIX(stdlib_strided_dcovarmtk_ndarray)( nobs, correction, Means[ om ], A, sa0, oa, Means[ im ], A, sa0, ia );
		}
		oa += sa1;
		om += strideM;
	}
	// Copy the covariances to the other triangular part if the full covariance matrix is desired...
	if ( full ) {
		if ( isrmb ) {
			// Copy the upper triangular part to the lower triangular part:
			API_SUFFIX(c_dlacpy_ndarray)( LAPACK_UPPER_TRIANGLE, nsamples, nsamples, B, sb1, sb0, offsetB, B, sb0, sb1, offsetB );
		} else {
			// Copy the lower triangular part to the upper triangular part:
			API_SUFFIX(c_dlacpy_ndarray)( LAPACK_LOWER_TRIANGLE, nsamples, nsamples, B, sb0, sb1, offsetB, B, sb1, sb0, offsetB );
		}
	}
}
