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

#ifndef STDLIB_STRIDED_BASE_SMSKMAP_H
#define STDLIB_STRIDED_BASE_SMSKMAP_H

#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Applies a unary function accepting and returning single-precision floating-point numbers to each element in a single-precision floating-point strided input array according to a corresponding element in a strided mask array and assigns each result to an element in a single-precision floating-point strided output array.
*/
void stdlib_strided_smskmap( const int64_t N, const float *X, const int64_t strideX, const uint8_t *Mask, const int64_t strideMask, float *Y, const int64_t strideY, float (*fcn)( float ) );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_STRIDED_BASE_SMSKMAP_H
