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

#ifndef STDLIB_NDARRAY_BASE_DTYPE_ALIGNMENT_H
#define STDLIB_NDARRAY_BASE_DTYPE_ALIGNMENT_H

#include "stdlib/ndarray/dtypes.h"
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Enumeration of the alignment (in bytes) for ndarray data types.
*/
enum STDLIB_NDARRAY_DTYPE_ALIGNMENT {
	STDLIB_NDARRAY_BOOL_ALIGNMENT = 1,

	STDLIB_NDARRAY_INT8_ALIGNMENT = 1,
	STDLIB_NDARRAY_UINT8_ALIGNMENT = 1,
	STDLIB_NDARRAY_UINT8C_ALIGNMENT = 1,
	STDLIB_NDARRAY_INT16_ALIGNMENT = 2,
	STDLIB_NDARRAY_UINT16_ALIGNMENT = 2,
	STDLIB_NDARRAY_INT32_ALIGNMENT = 4,
	STDLIB_NDARRAY_UINT32_ALIGNMENT = 4,
	STDLIB_NDARRAY_INT64_ALIGNMENT = 8,
	STDLIB_NDARRAY_UINT64_ALIGNMENT = 8,
	STDLIB_NDARRAY_INT128_ALIGNMENT = 16,
	STDLIB_NDARRAY_UINT128_ALIGNMENT = 16,
	STDLIB_NDARRAY_INT256_ALIGNMENT = 32,
	STDLIB_NDARRAY_UINT256_ALIGNMENT = 32,

	STDLIB_NDARRAY_FLOAT16_ALIGNMENT = 2,
	STDLIB_NDARRAY_BFLOAT16_ALIGNMENT = 2,
	STDLIB_NDARRAY_FLOAT32_ALIGNMENT = 4,
	STDLIB_NDARRAY_FLOAT64_ALIGNMENT = 8,
	STDLIB_NDARRAY_FLOAT128_ALIGNMENT = 16,

	STDLIB_NDARRAY_COMPLEX32_ALIGNMENT = 2,   // same as float16
	STDLIB_NDARRAY_COMPLEX64_ALIGNMENT = 8,   // same as float32
	STDLIB_NDARRAY_COMPLEX128_ALIGNMENT = 16, // same as float64

	STDLIB_NDARRAY_BINARY_ALIGNMENT = 1,
	STDLIB_NDARRAY_GENERIC_ALIGNMENT = -1,
};

/**
* Returns the alignment (in bytes) for a given data type.
*/
int8_t stdlib_ndarray_dtype_alignment( enum STDLIB_NDARRAY_DTYPE dtype );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_BASE_DTYPE_ALIGNMENT_H
