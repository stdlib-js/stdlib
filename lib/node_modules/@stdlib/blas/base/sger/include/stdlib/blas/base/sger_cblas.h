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
* Header file containing function declarations for the C interface to the CBLAS Level 2 routine `cblas_sger`.
*/
#ifndef STDLIB_BLAS_BASE_SGER_CBLAS_H
#define STDLIB_BLAS_BASE_SGER_CBLAS_H

#include "stdlib/blas/base/shared.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Performs the rank 1 operation `A = alpha*x*y^T + A`, where `alpha` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M`-by-`N` matrix.
*/
void API_SUFFIX(cblas_sger)( const CBLAS_LAYOUT layout, const CBLAS_INT M, const CBLAS_INT N, const float alpha, const float *X, const CBLAS_INT strideX, const float *Y, const CBLAS_INT strideY, float *A, const CBLAS_INT LDA );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_BLAS_BASE_SGER_CBLAS_H
