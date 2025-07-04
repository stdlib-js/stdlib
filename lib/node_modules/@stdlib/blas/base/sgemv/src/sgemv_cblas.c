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
#include "stdlib/blas/base/sgemv_cblas.h"
#include "stdlib/blas/base/shared.h"

/**
* Performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y`, where `α` and `β` are scalars, `x` and `y` are vectors, and `A` is an `M` by `N` matrix.
*
* @param layout   storage layout
* @param trans    specifies whether `A` should be transposed, conjugate-transposed, or not transposed
* @param M        number of rows in the matrix `A`
* @param N        number of columns in the matrix `A`
* @param alpha    scalar constant
* @param A        input matrix
* @param LDA      stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param x        first input vector
* @param strideX  `x` stride length
* @param beta     scalar constant
* @param y        second input vector
* @param strideY  `y` stride length
* @return         output value
*/
void API_SUFFIX(c_sgemv)( const CBLAS_LAYOUT layout, const CBLAS_TRANSPOSE trans, const CBLAS_INT M, const CBLAS_INT N, const float alpha, const float *A, const CBLAS_INT LDA, const float *X, const CBLAS_INT strideX, const float beta, float *Y, const CBLAS_INT strideY ) {
	API_SUFFIX(cblas_sgemv)( layout, trans, M, N, alpha, A, LDA, X, strideX, beta, Y, strideY );
}
