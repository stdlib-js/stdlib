/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

/*
* The following is auto-generated. Do not manually edit. See scripts/loops.js.
*/

#ifndef STDLIB_STRIDED_BASE_MSKUNARY_C_C_H
#define STDLIB_STRIDED_BASE_MSKUNARY_C_C_H

#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Applies a unary callback to strided input array elements according to a strided mask array and assigns results to elements in a strided output array.
*/
void stdlib_strided_mask_c_c( uint8_t *arrays[], const int64_t *shape, const int64_t *strides, void *fcn );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_STRIDED_BASE_MSKUNARY_C_C_H
