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

#include "stdlib/blas/base/dger.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/blas/base/xerbla.h"
#include "stdlib/ndarray/base/assert/is_row_major.h"
#include <stdint.h>

/**
* Performs the rank 1 operation `A = alpha*x*y^T + A`, using alternative indexing semantics and where `alpha` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M`-by-`N` matrix.
*
* ## Notes
*
* -   To help motivate the use of loop interchange below, we first recognize that a matrix stored in row-major order is equivalent to storing the matrix's transpose in column-major order. For example, consider the following 2-by-3 matrix `A`
*
*     ```tex
*     A = \begin{bmatrix}
*         1 & 2 & 3 \\
*         4 & 5 & 6
*         \end{bmatrix}
*     ```
*
*     When stored in a linear buffer in column-major order, `A` becomes
*
*     ```text
*     [ 1 4 2 5 3 6]
*     ```
*
*     When stored in a linear buffer in row-major order, `A` becomes
*
*     ```text
*     [ 1 2 3 4 5 6]
*     ```
*
*     Now consider the transpose of `A`
*
*     ```tex
*     A^T = \begin{bmatrix}
*         1 & 4 \\
*         2 & 5 \\
*         3 & 6
*         \end{bmatrix}
*     ```
*
*     When the transpose is stored in a linear buffer in column-major order, the transpose becomes
*
*     ```text
*     [ 1 2 3 4 5 6 ]
*     ```
*
*     Similarly, when stored in row-major order, the transpose becomes
*
*     ```text
*     [ 1 4 2 5 3 6 ]
*     ```
*
*     As may be observed, `A` stored in column-major order is equivalent to storing the transpose of `A` in row-major order, and storing `A` in row-major order is equivalent to storing the transpose of `A` in column-major order, and vice versa.
*
*     Hence, we can interpret an `M` by `N` row-major matrix `B` as the matrix `A^T` stored in column-major order. In which case, we can derive an update equation for `B` as follows:
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
*     Accordingly, we can reuse the same loop logic for column-major and row-major `A` by simply swapping `x` and `y` and `M` and `N` when `A` is row-major order. That is the essence of loop interchange.
*
* @param layout     storage layout
* @param M          number of rows in the matrix `A`
* @param N          number of columns in the matrix `A`
* @param alpha      scalar constant
* @param X          an `M` element vector
* @param strideX    stride length for `X`
* @param offsetX    starting index for `X`
* @param Y          an `N` element vector
* @param strideY    stride length for `Y`
* @param offsetY    starting index for `Y`
* @param A          matrix of coefficients
* @param strideA1   stride length of the first dimension of `A`
* @param strideA2   stride length of the second dimension of `A`
* @param offsetA    starting index for `A`
*/
void API_SUFFIX(c_dger_ndarray)( const CBLAS_INT M, const CBLAS_INT N, const double alpha, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY, double *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA ) {
	const double *x;
	const double *y;
	int64_t sa[ 2 ];
	CBLAS_INT da0;
	CBLAS_INT da1;
	CBLAS_INT S0;
	CBLAS_INT S1;
	CBLAS_INT sx;
	CBLAS_INT sy;
	CBLAS_INT ox;
	CBLAS_INT ia;
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT i0;
	CBLAS_INT i1;
	double tmp;

	// Note on variable naming convention: S#, da#, ia#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Perform input argument validation...
	if ( M < 0 ) {
		c_xerbla( 1, "c_dger_ndarray", "Error: invalid argument. First argument must be a nonnegative integer. Value: `%d`.", M );
		return;
	}
	if ( N < 0 ) {
		c_xerbla( 2, "c_dger_ndarray", "Error: invalid argument. Second argument must be a nonnegative integer. Value: `%d`.", N );
		return;
	}
	if ( strideX == 0 ) {
		c_xerbla( 5, "c_dger_ndarray", "Error: invalid argument. Fifth argument must be nonzero. Value: `%d`.", strideX );
		return;
	}
	if ( strideY == 0 ) {
		c_xerbla( 8, "c_dger_ndarray", "Error: invalid argument. Eighth argument must be nonzero. Value: `%d`.", strideY );
		return;
	}
	// Check whether we can avoid computation altogether...
	if ( M == 0 || N == 0 || alpha == 0.0 ) {
		return;
	}
	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	sa[ 0 ] = strideA1;
	sa[ 1 ] = strideA2;
	if ( stdlib_ndarray_is_row_major( 2, sa ) ) {
		// For row-major matrices, the last dimension has the fastest changing index...
		S0 = N;
		S1 = M;
		da0 = strideA2;                   // offset increment for innermost loop
		da1 = strideA1 - ( S0*strideA2 ); // offset increment for outermost loop

		// Swap the vectors...
		x = Y;
		y = X;

		sx = strideY;
		sy = strideX;

		ox = offsetY;
		iy = offsetX;
	} else { // order == 'column-major'
		// For column-major matrices, the first dimension has the fastest changing index...
		S0 = M;
		S1 = N;
		da0 = strideA1;                   // offset increment for innermost loop
		da1 = strideA2 - ( S0*strideA1 ); // offset increment for outermost loop

		x = X;
		y = Y;

		sx = strideX;
		sy = strideY;

		ox = offsetX;
		iy = offsetY;
	}
	ia = offsetA;
	for ( i1 = 0; i1 < S1; i1++ ) {
		// Check whether we can avoid the inner loop entirely...
		if ( y[ iy ] == 0.0 ) {
			ia += da0 * S0;
		} else {
			tmp = alpha * y[ iy ];
			ix = ox;
			for ( i0 = 0; i0 < S0; i0++ ) {
				A[ ia ] += x[ ix ] * tmp;
				ix += sx;
				ia += da0;
			}
		}
		iy += sy;
		ia += da1;
	}
	return;
}
