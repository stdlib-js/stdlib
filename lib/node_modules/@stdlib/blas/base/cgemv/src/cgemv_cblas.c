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
#include "stdlib/blas/base/cgemv_cblas.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/blas/base/shared.h"

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
	API_SUFFIX(cblas_cgemv)( layout, trans, M, N, alpha, A, LDA, X, strideX, beta, Y, strideY );
}
