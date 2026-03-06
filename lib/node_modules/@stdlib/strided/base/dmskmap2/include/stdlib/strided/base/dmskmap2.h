/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

#ifndef STDLIB_STRIDED_BASE_DMSKMAP2_H
#define STDLIB_STRIDED_BASE_DMSKMAP2_H

#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Applies a binary function to double-precision floating-point strided input arrays according to a strided mask array and assigns results to a double-precision floating-point strided output array.
*/
void stdlib_strided_dmskmap2( const int64_t N, const double *X, const int64_t strideX, const double *Y, const int64_t strideY, const uint8_t *Mask, const int64_t strideMask, double *Z, const int64_t strideZ, double (*fcn)( double, double ) );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_STRIDED_BASE_DMSKMAP2_H
