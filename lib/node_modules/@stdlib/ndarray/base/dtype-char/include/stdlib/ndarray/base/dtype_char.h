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

#ifndef STDLIB_NDARRAY_BASE_DTYPE_CHAR_H
#define STDLIB_NDARRAY_BASE_DTYPE_CHAR_H

#include "stdlib/ndarray/dtypes.h"
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Enumeration of the single letter character abbreviation for strided array data types.
*/
enum STDLIB_NDARRAY_DTYPE_CHAR {
	STDLIB_NDARRAY_BOOL_CHAR = 'x',

	STDLIB_NDARRAY_INT8_CHAR = 's',          // *s*byte (signed byte)
	STDLIB_NDARRAY_UINT8_CHAR = 'b',         // *b*yte
	STDLIB_NDARRAY_UINT8C_CHAR = 'a',
	STDLIB_NDARRAY_INT16_CHAR = 'k',
	STDLIB_NDARRAY_UINT16_CHAR = 't',
	STDLIB_NDARRAY_INT32_CHAR = 'i',         // signed 32-bit *i*nteger
	STDLIB_NDARRAY_UINT32_CHAR = 'u',        // *u*nsigned 32-bit integer
	STDLIB_NDARRAY_INT64_CHAR = 'l',         // signed *l*ong long (64-bit) integer
	STDLIB_NDARRAY_UINT64_CHAR = 'v',
	STDLIB_NDARRAY_INT128_CHAR = 'm',
	STDLIB_NDARRAY_UINT128_CHAR = 'w',
	STDLIB_NDARRAY_INT256_CHAR = 'n',
	STDLIB_NDARRAY_UINT256_CHAR = 'y',

	STDLIB_NDARRAY_FLOAT16_CHAR = 'h',       // *h*alf-precision floating-point
	STDLIB_NDARRAY_BFLOAT16_CHAR = 'e',
	STDLIB_NDARRAY_FLOAT32_CHAR = 'f',       // *f*loat
	STDLIB_NDARRAY_FLOAT64_CHAR = 'd',       // *d*ouble
	STDLIB_NDARRAY_FLOAT128_CHAR = 'g',

	STDLIB_NDARRAY_COMPLEX64_CHAR = 'c',     // *c*omplex (BLAS convention)
	STDLIB_NDARRAY_COMPLEX128_CHAR = 'z',    // *z* (BLAS convention)

	STDLIB_NDARRAY_BINARY_CHAR = 'r',        // "*r*aw" data
	STDLIB_NDARRAY_GENERIC_CHAR = 'o',       // "generic" JavaScript objects
};

/**
* Returns the single letter character abbreviation for a given data type.
*/
uint8_t stdlib_ndarray_dtype_char( enum STDLIB_NDARRAY_DTYPE dtype );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_BASE_DTYPE_CHAR_H
