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

#ifndef STDLIB_BLAS_EXT_BASE_CREPLICATE_H
#define STDLIB_BLAS_EXT_BASE_CREPLICATE_H

#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float32/ctor.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Replicates each element in a single-precision complex floating-point strided array a specified number of times.
*/
void API_SUFFIX(stdlib_strided_creplicate)( const CBLAS_INT N, const CBLAS_INT k, const stdlib_complex64_t *X, const CBLAS_INT strideX, stdlib_complex64_t *Out, const CBLAS_INT strideOut );

/**
* Replicates each element in a single-precision complex floating-point strided array a specified number of times using alternative indexing semantics.
*/
void API_SUFFIX(stdlib_strided_creplicate_ndarray)( const CBLAS_INT N, const CBLAS_INT k, const stdlib_complex64_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, stdlib_complex64_t *Out, const CBLAS_INT strideOut, const CBLAS_INT offsetOut );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_BLAS_EXT_BASE_CREPLICATE_H
