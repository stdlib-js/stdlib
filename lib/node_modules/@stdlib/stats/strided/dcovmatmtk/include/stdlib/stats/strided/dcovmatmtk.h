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

#ifndef STDLIB_STATS_STRIDED_DCOVMATMTK_H
#define STDLIB_STATS_STRIDED_DCOVMATMTK_H

#include "stdlib/blas/base/shared.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Computes the covariance matrix for an `M` by `N` double-precision floating-point matrix `A` and assigns the results to a matrix `B` when provided known means and using a one-pass textbook algorithm.
*/
void API_SUFFIX(stdlib_strided_dcovmatmtk)( const CBLAS_LAYOUT layout, const CBLAS_ORIENT orient, const int uplo, const CBLAS_INT M, const CBLAS_INT N, const double correction, const double *Means, const CBLAS_INT strideM, const double *A, const CBLAS_INT LDA, double *B, const CBLAS_INT LDB );

/**
* Computes the covariance matrix for an `M` by `N` double-precision floating-point matrix `A` and assigns the results to a matrix `B` when provided known means and using a one-pass textbook algorithm and alternative indexing semantics.
*/
void API_SUFFIX(stdlib_strided_dcovmatmtk_ndarray)( const CBLAS_ORIENT orient, const int uplo, const CBLAS_INT M, const CBLAS_INT N, const double correction, const double *Means, const CBLAS_INT strideM, const CBLAS_INT offsetM, const double *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA, double *B, const CBLAS_INT strideB1, const CBLAS_INT strideB2, const CBLAS_INT offsetB );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_STATS_STRIDED_DCOVMATMTK_H
