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

#ifndef STDLIB_LAPACK_BASE_DLACPY_H
#define STDLIB_LAPACK_BASE_DLACPY_H

#include "stdlib/lapack/base/shared.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Copies all or part of a matrix `A` to another matrix `B`.
*/
LAPACK_INT API_SUFFIX(c_dlacpy)( const LAPACK_LAYOUT layout, const int uplo, const LAPACK_INT M, const LAPACK_INT N, const double *A, const LAPACK_INT LDA, double *B, const LAPACK_INT LDB );

/**
* Copies all or part of a matrix `A` to another matrix `B` using alternative indexing semantics.
*/
LAPACK_INT API_SUFFIX(c_dlacpy_ndarray)( const int uplo, const LAPACK_INT M, const LAPACK_INT N, const double *A, const LAPACK_INT strideA1, const LAPACK_INT strideA2, const LAPACK_INT offsetA, double *B, const LAPACK_INT strideB1, const LAPACK_INT strideB2, const LAPACK_INT offsetB );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_LAPACK_BASE_DLACPY_H
