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

#ifndef STDLIB_BLAS_EXT_BASE_SWHERE_H
#define STDLIB_BLAS_EXT_BASE_SWHERE_H

#include "stdlib/blas/base/shared.h"
#include <stdbool.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Takes elements from one of two single-precision floating-point strided arrays depending on a condition.
*/
void API_SUFFIX(stdlib_strided_swhere)( const CBLAS_INT N, const bool *Condition, const CBLAS_INT strideC, const float *X, const CBLAS_INT strideX, const float *Y, const CBLAS_INT strideY, float *Out, const CBLAS_INT strideOut );

/**
* Takes elements from one of two single-precision floating-point strided arrays depending on a condition using alternative indexing semantics.
*/
void API_SUFFIX(stdlib_strided_swhere_ndarray)( const CBLAS_INT N, const bool *Condition, const CBLAS_INT strideC, const CBLAS_INT offsetC, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY, float *Out, const CBLAS_INT strideOut, const CBLAS_INT offsetOut );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_BLAS_EXT_BASE_SWHERE_H
