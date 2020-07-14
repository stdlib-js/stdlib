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

/**
* Header file containing function declarations.
*/
#ifndef STDLIB_STATS_BASE_DMSKMAX_H
#define STDLIB_STATS_BASE_DMSKMAX_H

#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Computes the maximum value of a double-precision floating-point strided array according to a mask.
*/
double stdlib_strided_dmskmax( const int64_t N, const double *X, const int64_t strideX, const uint8_t *Mask, const int64_t strideMask );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_STATS_BASE_DMSKMAX_H
