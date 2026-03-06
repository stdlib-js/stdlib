/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

#ifndef STDLIB_NDARRAY_BASE_ASSERT_IS_BUFFER_LENGTH_COMPATIBLE_H
#define STDLIB_NDARRAY_BASE_ASSERT_IS_BUFFER_LENGTH_COMPATIBLE_H

#include "stdlib/ndarray/dtypes.h"
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Determines if a buffer length is compatible with provided ndarray meta data.
*/
int8_t stdlib_ndarray_is_buffer_length_compatible( enum STDLIB_NDARRAY_DTYPE dtype, int64_t len, int64_t ndims, int64_t *shape, int64_t *strides, int64_t offset );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_BASE_ASSERT_IS_BUFFER_LENGTH_COMPATIBLE_H
