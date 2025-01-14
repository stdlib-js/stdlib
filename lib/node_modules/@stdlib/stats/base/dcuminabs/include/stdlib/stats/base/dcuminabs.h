/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#ifndef STDLIB_STATS_BASE_DCUMINABS_H
#define STDLIB_STATS_BASE_DCUMINABS_H

#include "stdlib/blas/base/shared.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Computes the cumulative minimum absolute value of double-precision floating-point strided array elements.
*/
void API_SUFFIX(stdlib_strided_dcuminabs)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, double *Y, const CBLAS_INT strideY );

/**
* Computes the cumulative minimum absolute value of double-precision floating-point strided array elements using alternative indexing semantics.
*/
void API_SUFFIX(stdlib_strided_dcuminabs_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_STATS_BASE_DCUMINABS_H
