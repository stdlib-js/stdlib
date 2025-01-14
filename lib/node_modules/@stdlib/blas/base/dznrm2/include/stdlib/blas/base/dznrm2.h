/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Header file containing function declarations for the C interface to the BLAS Level 1 routine `dznrm2`.
*/
#ifndef DZNRM2_H
#define DZNRM2_H

#include "stdlib/blas/base/shared.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Computes the L2-norm of a complex double-precision floating-point vector.
*/
double API_SUFFIX(c_dznrm2)( const CBLAS_INT N, const void *ZX, const CBLAS_INT strideX );

/**
* Computes the L2-norm of a complex double-precision floating-point vector using alternative indexing semantics.
*/
double API_SUFFIX(c_dznrm2_ndarray)( const CBLAS_INT N, const void *ZX, const CBLAS_INT strideX, const CBLAS_INT offsetX );

#ifdef __cplusplus
}
#endif

#endif // !DZNRM2_H
