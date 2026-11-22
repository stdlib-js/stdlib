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

#ifndef STDLIB_BLAS_EXT_BASE_SWXDY_H
#define STDLIB_BLAS_EXT_BASE_SWXDY_H

#include "stdlib/blas/base/shared.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Divides elements of a single-precision floating-point strided array `X` by the corresponding elements of a single-precision floating-point strided array `Y` and assigns the results to elements in a single-precision floating-point strided array `W`.
*/
void API_SUFFIX(stdlib_strided_swxdy)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const float *Y, const CBLAS_INT strideY, float *W, const CBLAS_INT strideW );

/**
* Divides elements of a single-precision floating-point strided array `X` by the corresponding elements of a single-precision floating-point strided array `Y` and assigns the results to elements in a single-precision floating-point strided array `W` using alternative indexing semantics.
*/
void API_SUFFIX(stdlib_strided_swxdy_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY, float *W, const CBLAS_INT strideW, const CBLAS_INT offsetW );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_BLAS_EXT_BASE_SWXDY_H
