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

#ifndef STDLIB_STATS_BASE_DSMEANPN_H
#define STDLIB_STATS_BASE_DSMEANPN_H

#include "stdlib/blas/base/shared.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Computes the arithmetic mean of a single-precision floating-point strided array using a two-pass error correction algorithm with extended accumulation and returning an extended precision result.
*/
double API_SUFFIX(stdlib_strided_dsmeanpn)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX );

/**
* Computes the arithmetic mean of a single-precision floating-point strided array using a two-pass error correction algorithm with extended accumulation and alternative indexing semantics and returning an extended precision result.
*/
double API_SUFFIX(stdlib_strided_dsmeanpn_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_STATS_BASE_DSMEANPN_H
