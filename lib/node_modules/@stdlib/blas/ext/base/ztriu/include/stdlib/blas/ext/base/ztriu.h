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

#ifndef STDLIB_BLAS_EXT_BASE_ZTRIU_H
#define STDLIB_BLAS_EXT_BASE_ZTRIU_H

#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float64/ctor.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Copies the upper triangular part of a double-precision complex floating-point matrix `A` to another matrix `B`.
*/
void API_SUFFIX(stdlib_strided_ztriu)( const CBLAS_LAYOUT layout, const CBLAS_INT M, const CBLAS_INT N, const CBLAS_INT k, const stdlib_complex128_t *A, const CBLAS_INT LDA, stdlib_complex128_t *B, const CBLAS_INT LDB );

/**
* Copies the upper triangular part of a double-precision complex floating-point matrix `A` to another matrix `B` using alternative indexing semantics.
*/
void API_SUFFIX(stdlib_strided_ztriu_ndarray)( const CBLAS_INT M, const CBLAS_INT N, const CBLAS_INT k, const stdlib_complex128_t *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA, stdlib_complex128_t *B, const CBLAS_INT strideB1, const CBLAS_INT strideB2, const CBLAS_INT offsetB );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_BLAS_EXT_BASE_ZTRIU_H
