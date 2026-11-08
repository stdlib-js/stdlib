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

#ifndef STDLIB_BLAS_EXT_BASE_DINDEX_OF_ROW_H
#define STDLIB_BLAS_EXT_BASE_DINDEX_OF_ROW_H

#include "stdlib/blas/base/shared.h"
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Returns the index of the first row in a double-precision floating-point input matrix which has the same elements as a provided search vector.
*/
CBLAS_INT API_SUFFIX(stdlib_strided_dindex_of_row)( const CBLAS_LAYOUT order, const CBLAS_INT M, const CBLAS_INT N, const double *A, const CBLAS_INT LDA, const double *X, const CBLAS_INT strideX, uint8_t *workspace, const CBLAS_INT strideW );

/**
* Returns the index of the first row in a double-precision floating-point input matrix which has the same elements as a provided search vector using alternative indexing semantics.
*/
CBLAS_INT API_SUFFIX(stdlib_strided_dindex_of_row_ndarray)( const CBLAS_INT M, const CBLAS_INT N, const double *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, uint8_t *workspace, const CBLAS_INT strideW, const CBLAS_INT offsetW );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_BLAS_EXT_BASE_DINDEX_OF_ROW_H
