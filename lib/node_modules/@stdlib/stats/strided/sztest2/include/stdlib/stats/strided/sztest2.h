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

#ifndef STDLIB_STATS_STRIDED_SZTEST2_H
#define STDLIB_STATS_STRIDED_SZTEST2_H

#include "stdlib/stats/base/ztest/two-sample/results/float32.h"
#include "stdlib/stats/base/ztest/alternatives.h"
#include "stdlib/blas/base/shared.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Computes a two-sample Z-test for two single-precision floating-point strided arrays.
*/
void API_SUFFIX(stdlib_strided_sztest2)( const CBLAS_INT NX, const CBLAS_INT NY, const enum STDLIB_STATS_ZTEST_ALTERNATIVE alternative, const float alpha, const float diff, const float sigmax, const float *X, const CBLAS_INT strideX, const float sigmay, const float *Y, const CBLAS_INT strideY, struct stdlib_stats_ztest_two_sample_float32_results *results );

/**
* Computes a two-sample Z-test for two single-precision floating-point strided arrays using alternative indexing semantics.
*/
void API_SUFFIX(stdlib_strided_sztest2_ndarray)( const CBLAS_INT NX, const CBLAS_INT NY, const enum STDLIB_STATS_ZTEST_ALTERNATIVE alternative, const float alpha, const float diff, const float sigmax, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const float sigmay, const float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY, struct stdlib_stats_ztest_two_sample_float32_results *results );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_STATS_STRIDED_SZTEST2_H
