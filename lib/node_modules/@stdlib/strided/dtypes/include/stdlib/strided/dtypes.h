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

#ifndef STDLIB_STRIDED_DTYPES_H
#define STDLIB_STRIDED_DTYPES_H

#include "stdlib/ndarray/dtypes.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Enumeration of underlying strided array data types.
*/
enum STDLIB_STRIDED_DTYPE {
	STDLIB_STRIDED_INT8 = STDLIB_NDARRAY_INT8,
	STDLIB_STRIDED_UINT8 = STDLIB_NDARRAY_UINT8,
	STDLIB_STRIDED_INT16 = STDLIB_NDARRAY_INT16,
	STDLIB_STRIDED_UINT16 = STDLIB_NDARRAY_UINT16,
	STDLIB_STRIDED_INT32 = STDLIB_NDARRAY_INT32,
	STDLIB_STRIDED_UINT32 = STDLIB_NDARRAY_UINT32,
	STDLIB_STRIDED_INT64 = STDLIB_NDARRAY_INT64,
	STDLIB_STRIDED_UINT64 = STDLIB_NDARRAY_UINT64,

	STDLIB_STRIDED_FLOAT32 = STDLIB_NDARRAY_FLOAT32,
	STDLIB_STRIDED_FLOAT64 = STDLIB_NDARRAY_FLOAT64,

	// Number of data types:
	STDLIB_STRIDED_NDTYPES = 10, // WARNING: this needs to be manually updated upon adding or removing data types above

	// Reserve a signaling value which is guaranteed not to be a valid type enumeration number:
	STDLIB_STRIDED_NOTYPE = STDLIB_NDARRAY_NOTYPE,

	// Indicate the start of user defined type numbers (leaving room for type growth above):
	STDLIB_STRIDED_USERDEFINED_TYPE = STDLIB_NDARRAY_USERDEFINED_TYPE,
};

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_STRIDED_DTYPES_H
