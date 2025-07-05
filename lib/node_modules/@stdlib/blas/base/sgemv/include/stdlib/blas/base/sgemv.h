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

/**
* Header file containing function declarations for the C interface to the BLAS Level 2 routine `sgemv`.
*/
#ifndef SGEMV_H
#define SGEMV_H

#include "stdlib/blas/base/shared.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Performs one of the matrix-vector operations `Y = α*A*X + β*Y` or `Y = α*A^T*X + β*Y`, where `α` and `β` are scalars, `X` and `Y` are vectors, and `A` is an `M` by `N` matrix.
*/
void API_SUFFIX(c_sgemv)( const CBLAS_LAYOUT layout, const CBLAS_TRANSPOSE trans, const CBLAS_INT M, const CBLAS_INT N, const float alpha, const float *A, const CBLAS_INT LDA, const float *X, const CBLAS_INT strideX, const float beta, float *Y, const CBLAS_INT strideY );

/**
* Performs one of the matrix-vector operations `Y = α*A*X + β*Y` or `Y = α*A^T*X + β*Y`, where `α` and `β` are scalars, `X` and `Y` are vectors, and `A` is an `M` by `N` matrix using alternative indexing semantics.
*/
void API_SUFFIX(c_sgemv_ndarray)( const CBLAS_TRANSPOSE trans, const CBLAS_INT M, const CBLAS_INT N, const float alpha, const float *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const float beta, float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY );

#ifdef __cplusplus
}
#endif

#endif // !SGEMV_H
