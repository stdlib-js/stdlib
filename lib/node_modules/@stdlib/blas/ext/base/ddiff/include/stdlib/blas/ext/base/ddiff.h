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

#ifndef STDLIB_BLAS_EXT_BASE_DDIFF_H
#define STDLIB_BLAS_EXT_BASE_DDIFF_H

#include "stdlib/blas/base/shared.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Calculates the k-th discrete forward difference of a double-precision floating-point strided array.
*/
void API_SUFFIX(stdlib_strided_ddiff)( const CBLAS_INT N, const CBLAS_INT k, const double *X, const CBLAS_INT strideX, const CBLAS_INT N1, const double *Prepend, const CBLAS_INT strideP, const CBLAS_INT N2, const double *Append, const CBLAS_INT strideA, double *Out, const CBLAS_INT strideOut, double *Workspace, const CBLAS_INT strideW );

/**
* Calculates the k-th discrete forward difference of a double-precision floating-point strided array using alternative indexing semantics.
*/
void API_SUFFIX(stdlib_strided_ddiff_ndarray)( const CBLAS_INT N, const CBLAS_INT k, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const CBLAS_INT N1, const double *Prepend, const CBLAS_INT strideP, const CBLAS_INT offsetP, const CBLAS_INT N2, const double *Append, const CBLAS_INT strideA, const CBLAS_INT offsetA, double *Out, const CBLAS_INT strideOut, const CBLAS_INT offsetOut, double *Workspace, const CBLAS_INT strideW, const CBLAS_INT offsetW );


#ifdef __cplusplus
}
#endif

#endif // !STDLIB_BLAS_EXT_BASE_DDIFF_H
