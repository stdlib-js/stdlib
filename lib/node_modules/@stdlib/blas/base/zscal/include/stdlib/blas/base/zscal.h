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
* Header file containing function declarations for the C interface to the BLAS Level 1 routine `zscal`.
*/
#ifndef ZSCAL_H
#define ZSCAL_H

#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float64/ctor.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant.
*/
void API_SUFFIX(c_zscal)( const CBLAS_INT N, const stdlib_complex128_t alpha, void *X, const CBLAS_INT strideX );

/**
* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant using alternative indexing semantics.
*/
void API_SUFFIX(c_zscal_ndarray)( const CBLAS_INT N, const stdlib_complex128_t alpha, void *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );

#ifdef __cplusplus
}
#endif

#endif // !ZSCAL_H
