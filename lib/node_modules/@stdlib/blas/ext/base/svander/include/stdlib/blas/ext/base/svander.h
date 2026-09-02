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

/**
* Header file containing function declarations for the C interface to the BLAS extension routine `svander`.
*/
#ifndef STDLIB_BLAS_EXT_BASE_SVANDER_H
#define STDLIB_BLAS_EXT_BASE_SVANDER_H

#include "stdlib/blas/base/shared.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Generates a single-precision floating-point Vandermonde matrix.
*/
void API_SUFFIX(stdlib_strided_svander)( const CBLAS_LAYOUT order, const float mode, const CBLAS_INT M, const CBLAS_INT N, const float *X, const CBLAS_INT strideX, float *Out, const CBLAS_INT LDO );

/**
* Generates a single-precision floating-point Vandermonde matrix using alternative indexing semantics.
*/
void API_SUFFIX(stdlib_strided_svander_ndarray)( const float mode, const CBLAS_INT M, const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, float *Out, const CBLAS_INT strideOut1, const CBLAS_INT strideOut2, const CBLAS_INT offsetOut );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_BLAS_EXT_BASE_SVANDER_H
