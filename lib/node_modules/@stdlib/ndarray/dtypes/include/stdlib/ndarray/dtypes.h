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

#ifndef STDLIB_NDARRAY_DTYPES_H
#define STDLIB_NDARRAY_DTYPES_H

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Enumeration of underlying ndarray data types.
*/
enum STDLIB_NDARRAY_DTYPE {
	// Boolean data types:
	STDLIB_NDARRAY_BOOL = 0,

	// Integer data types:
	STDLIB_NDARRAY_INT8,
	STDLIB_NDARRAY_UINT8,
	STDLIB_NDARRAY_UINT8C,
	STDLIB_NDARRAY_INT16,
	STDLIB_NDARRAY_UINT16,
	STDLIB_NDARRAY_INT32,
	STDLIB_NDARRAY_UINT32,
	STDLIB_NDARRAY_INT64,
	STDLIB_NDARRAY_UINT64,
	// STDLIB_NDARRAY_INT128, // TODO: uncomment once supported
	// STDLIB_NDARRAY_UINT128,
	// STDLIB_NDARRAY_INT256,
	// STDLIB_NDARRAY_UINT256,

	// Floating-point data types:
	// STDLIB_NDARRAY_FLOAT16, // TODO: uncomment once supported
	// STDLIB_NDARRAY_BFLOAT16, // TODO: uncomment once supported
	STDLIB_NDARRAY_FLOAT32,
	STDLIB_NDARRAY_FLOAT64,
	// STDLIB_NDARRAY_FLOAT128 // TODO: uncomment once supported

	// Complex floating-point number data types:
	STDLIB_NDARRAY_COMPLEX64,
	STDLIB_NDARRAY_COMPLEX128,

	// Define a data type for "binary" data (i.e., data stored in a Node.js `Buffer` object):
	STDLIB_NDARRAY_BINARY,

	// Define a data type for "generic" JavaScript values (objects):
	STDLIB_NDARRAY_GENERIC,

	// "Compute" the number of data types (this works because of how `enum` works: the value is automatically set to the last enumerated type plus 1):
	STDLIB_NDARRAY_NDTYPES,

	// Reserve a signaling value which is guaranteed not to be a valid type enumeration number:
	STDLIB_NDARRAY_NOTYPE,

	// Indicate the start of user defined type numbers (leaving room for type growth above):
	STDLIB_NDARRAY_USERDEFINED_TYPE = 256,
};

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_DTYPES_H
