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

#ifndef STDLIB_BLAS_EXT_BASE_ZSUMKBN_H
#define STDLIB_BLAS_EXT_BASE_ZSUMKBN_H

#include "stdlib/complex/float64/ctor.h"
#include "stdlib/blas/base/shared.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Computes the sum of double-precision complex floating-point strided array elements using an improved Kahan–Babuška algorithm.
*/
stdlib_complex128_t API_SUFFIX(stdlib_strided_zsumkbn)( const CBLAS_INT N, const stdlib_complex128_t *X, const CBLAS_INT strideX );

/**
* Computes the sum of double-precision complex floating-point strided array elements using an improved Kahan–Babuška algorithm and alternative indexing semantics.
*/
stdlib_complex128_t API_SUFFIX(stdlib_strided_zsumkbn_ndarray)( const CBLAS_INT N, const stdlib_complex128_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_BLAS_EXT_BASE_ZSUMKBN_H
