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

#ifndef STDLIB_BLAS_EXT_BASE_CDIFF_H
#define STDLIB_BLAS_EXT_BASE_CDIFF_H

#include "stdlib/complex/float32/ctor.h"
#include "stdlib/blas/base/shared.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Calculates the k-th discrete forward difference of a single-precision complex floating-point strided array.
*/
void API_SUFFIX(stdlib_strided_cdiff)( const CBLAS_INT N, const CBLAS_INT k, const stdlib_complex64_t *X, const CBLAS_INT strideX, const CBLAS_INT N1, const stdlib_complex64_t *Prepend, const CBLAS_INT strideP, const CBLAS_INT N2, const stdlib_complex64_t *Append, const CBLAS_INT strideA, stdlib_complex64_t *Out, const CBLAS_INT strideOut, stdlib_complex64_t *Workspace, const CBLAS_INT strideW );

/**
* Calculates the k-th discrete forward difference of a single-precision complex floating-point strided array using alternative indexing semantics.
*/
void API_SUFFIX(stdlib_strided_cdiff_ndarray)( const CBLAS_INT N, const CBLAS_INT k, const stdlib_complex64_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const CBLAS_INT N1, const stdlib_complex64_t *Prepend, const CBLAS_INT strideP, const CBLAS_INT offsetP, const CBLAS_INT N2, const stdlib_complex64_t *Append, const CBLAS_INT strideA, const CBLAS_INT offsetA, stdlib_complex64_t *Out, const CBLAS_INT strideOut, const CBLAS_INT offsetOut, stdlib_complex64_t *Workspace, const CBLAS_INT strideW, const CBLAS_INT offsetW );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_BLAS_EXT_BASE_CDIFF_H
