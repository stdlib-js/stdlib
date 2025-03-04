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
#include "stdlib/blas/base/xerbla.h"
#include "stdlib/blas/base/shared.h"

/**
* Performs the rank 1 operation `A = alpha*x*y^T + A`, where `alpha` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M`-by-`N` matrix.
*
* ## Notes
*
* -   The function follows the CBLAS interface which reflects the corresponding Fortran interface, which in turn assumes column-major order. As a matrix stored in row-major order is equivalent to storing the matrix's transpose in column-major order, we can interpret an M-by-N row-major matrix "B" as the matrix "A^T" stored in column-major. In which case, we can derive an update equation for `B` as follows:
*
*     ```tex
*     \begin{align*}
*     B &= A^T \\
*       &= (\alpha \bar{x} \bar{y}^T + A)^T \\
*       &= (\alpha \bar{x} \bar{y}^T)^T + A^T \\
*       &= \alpha (\bar{x} \bar{y}^T)^T + A^T \\
*       &= \alpha \bar{y} \bar{x}^T + A^T \\
*       &= \alpha \bar{y} \bar{x}^T + B
*     \end{align*}
*     ```
*
*     Accordingly, the C calling convention for row-major order is to swap the order of input arguments such that for a column-major `A` where the stride of the "major" (outer) dimension is `LDA = N`
*
*     ```c
*     c_dger( CblasColMajor, M, N, alpha, X, strideX, Y, strideY, A, N )
*     ```
*
*     and for a row-major `B = A^T` where the stride of the "major" (outer) dimension is `LDA = M`
*
*     ```c
*     c_dger( CblasRowMajor, N, M, alpha, Y, strideY, X, strideX, A^T, M )
*     ```
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
void API_SUFFIX(c_dger)( const CBLAS_LAYOUT layout, const CBLAS_INT M, const CBLAS_INT N, const double alpha, double *X, const CBLAS_INT strideX, double *Y, const CBLAS_INT strideY, double *A, const CBLAS_INT LDA ) {
	CBLAS_INT info;
	CBLAS_INT sx;
	CBLAS_INT sy;
	CBLAS_INT ix;
	CBLAS_INT jy;
	CBLAS_INT kx;
	CBLAS_INT i;
	CBLAS_INT j;
	CBLAS_INT m;
	CBLAS_INT n;
	double tmp;
	double *x;
	double *y;

	// Perform input argument validation...
	info = 0;
	if ( M < 0 ) {
		info = 1;
	} else if ( N < 0 ) {
		info = 2;
	} else if ( strideX == 0 ) {
		info = 5;
	} else if ( strideY == 0 ) {
		info = 7;
	} else {
		if ( M < 1 ) {
			j = 1;
		} else {
			j = M;
		}
		if ( LDA < j ) {
			info = 9;
		}
	}
	if ( info != 0 ) {
		c_xerbla( info, "c_dger", "" );
		return;
	}
	// Check whether we can avoid computation altogether...
	if ( M == 0 || N == 0 || alpha == 0.0 ) {
		return;
	}
	// When provided a row-major matrix, we need to swap arguments...
	if ( layout == CblasRowMajor ) {
		x = Y;
		y = X;
		m = N;
		n = M;
		sx = strideY;
		sy = strideX;
	} else {
		x = X;
		y = Y;
		m = M;
		n = N;
		sx = strideX;
		sy = strideY;
	}
	// Proceed with computation...
	if ( sy > 0 ) {
		jy = 0;
	} else {
		jy = ( 1 - n ) * sy;
	}
	if ( sx == 1 ) {
		for ( j = 0; j < n; j++ ) {
			if ( y[ jy ] != 0.0 ) {
				tmp = alpha * y[ jy ];
				for ( i = 0; i < m; i++ ) {
					A[ (j*LDA)+i ] += x[ i ] * tmp; // per above, x has unit stride
				}
			}
			jy += sy;
		}
		return;
	}
	if ( sx > 0 ) {
		kx = 0;
	} else {
		kx = ( 1 - m ) * sx;
	}
	for ( j = 0; j < n; j++ ) {
		if ( y[ jy ] != 0.0 ) {
			tmp = alpha * y[ jy ];
			ix = kx;
			for ( i = 0; i < m; i++ ) {
				A[ (j*LDA)+i ] += x[ ix ] * tmp;
				ix += sx;
			}
		}
		jy += sy;
	}
	return;
}
