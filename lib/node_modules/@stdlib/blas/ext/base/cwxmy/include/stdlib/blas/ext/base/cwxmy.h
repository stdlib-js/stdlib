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

#ifndef STDLIB_BLAS_EXT_BASE_CWXMY_H
#define STDLIB_BLAS_EXT_BASE_CWXMY_H

#include "stdlib/complex/float32/ctor.h"
#include "stdlib/blas/base/shared.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Multiplies elements of a single-precision complex floating-point strided array `X` by the corresponding elements of a single-precision complex floating-point strided array `Y` and assigns the results to elements in a single-precision complex floating-point strided array `W`.
*/
void API_SUFFIX(stdlib_strided_cwxmy)( const CBLAS_INT N, const stdlib_complex64_t *X, const CBLAS_INT strideX, const stdlib_complex64_t *Y, const CBLAS_INT strideY, stdlib_complex64_t *W, const CBLAS_INT strideW );

/**
* Multiplies elements of a single-precision complex floating-point strided array `X` by the corresponding elements of a single-precision complex floating-point strided array `Y` and assigns the results to elements in a single-precision complex floating-point strided array `W` using alternative indexing semantics.
*/
void API_SUFFIX(stdlib_strided_cwxmy_ndarray)( const CBLAS_INT N, const stdlib_complex64_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const stdlib_complex64_t *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY, stdlib_complex64_t *W, const CBLAS_INT strideW, const CBLAS_INT offsetW );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_BLAS_EXT_BASE_CWXMY_H
