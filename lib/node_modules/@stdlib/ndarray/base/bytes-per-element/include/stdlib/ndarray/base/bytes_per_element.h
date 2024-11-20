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

#ifndef STDLIB_NDARRAY_BASE_BYTES_PER_ELEMENT_H
#define STDLIB_NDARRAY_BASE_BYTES_PER_ELEMENT_H

#include "stdlib/ndarray/base/bytes_per_element.h"
#include "stdlib/ndarray/dtypes.h"
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Enumeration of number of bytes necessary to store an ndarray data type.
*/
enum STDLIB_NDARRAY_BYTES_PER_ELEMENT {
	STDLIB_NDARRAY_BOOL_BYTES_PER_ELEMENT = 1,

	STDLIB_NDARRAY_INT8_BYTES_PER_ELEMENT = 1,
	STDLIB_NDARRAY_UINT8_BYTES_PER_ELEMENT = 1,
	STDLIB_NDARRAY_UINT8C_BYTES_PER_ELEMENT = 1,
	STDLIB_NDARRAY_INT16_BYTES_PER_ELEMENT = 2,
	STDLIB_NDARRAY_UINT16_BYTES_PER_ELEMENT = 2,
	STDLIB_NDARRAY_INT32_BYTES_PER_ELEMENT = 4,
	STDLIB_NDARRAY_UINT32_BYTES_PER_ELEMENT = 4,
	STDLIB_NDARRAY_INT64_BYTES_PER_ELEMENT = 8,
	STDLIB_NDARRAY_UINT64_BYTES_PER_ELEMENT = 8,
	STDLIB_NDARRAY_INT128_BYTES_PER_ELEMENT = 16,
	STDLIB_NDARRAY_UINT128_BYTES_PER_ELEMENT = 16,
	STDLIB_NDARRAY_INT256_BYTES_PER_ELEMENT = 32,
	STDLIB_NDARRAY_UINT256_BYTES_PER_ELEMENT = 32,

	STDLIB_NDARRAY_FLOAT16_BYTES_PER_ELEMENT = 2,
	STDLIB_NDARRAY_BFLOAT16_BYTES_PER_ELEMENT = 2,
	STDLIB_NDARRAY_FLOAT32_BYTES_PER_ELEMENT = 4,
	STDLIB_NDARRAY_FLOAT64_BYTES_PER_ELEMENT = 8,
	STDLIB_NDARRAY_FLOAT128_BYTES_PER_ELEMENT = 16,

	STDLIB_NDARRAY_COMPLEX64_BYTES_PER_ELEMENT = 8,
	STDLIB_NDARRAY_COMPLEX128_BYTES_PER_ELEMENT = 16,

	STDLIB_NDARRAY_BINARY_BYTES_PER_ELEMENT = 1
};

/**
* Returns the number of bytes per element for a given data type.
*/
int64_t stdlib_ndarray_bytes_per_element( enum STDLIB_NDARRAY_DTYPE dtype );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_BASE_BYTES_PER_ELEMENT_H
