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

#ifndef STDLIB_NUMBER_FLOAT16_CTOR_H
#define STDLIB_NUMBER_FLOAT16_CTOR_H

#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

// Check for native Float16 support...

// First check the language standard first, as `_Float16` was standardized in C23...
#if defined(__STDC_VERSION__) && __STDC_VERSION__ >= 202311L

/**
* An opaque type definition for a half-precision floating-point number.
*/
typedef _Float16 stdlib_float16_t;

// If the previous check failed, check for the GCC/Clang `_Float16` extension...
#elif defined(__FLT16_MANT_DIG__)

/**
* An opaque type definition for a half-precision floating-point number.
*/
typedef _Float16 stdlib_float16_t;

// If the previous check failed, check for Clang support...
#elif defined(__clang__) && (defined(__has_extension) || defined(__has_feature)) && (__has_extension(c_float16) || __has_feature(c_float16))

/**
* An opaque type definition for a half-precision floating-point number.
*/
typedef _Float16 stdlib_float16_t;

// Otherwise, if we aren't going to use the native half-precision floating-point number type, we need to define a half-precision floating-point number as an "opaque" struct (here, "opaque" means type consumers should **not** be operating with the value directly, but only through dedicated functions) for storing the number value...
#else

/**
* An opaque type definition for a half-precision floating-point number.
*
* @example
* #include "stdlib/number/float32/base/to_float16.h"
* #include "stdlib/number/float16/base/to_float32.h"
*
* stdlib_float16_t x = stdlib_float16_from_float32( 3.14f );
*
* float y = stdlib_float16_to_float32( x );
* // returns 3.140625f
*/
typedef struct {
	/**
	* Raw IEEE 754 binary representation.
	*/
	uint16_t bits;
} stdlib_float16_t;

/**
* An opaque type definition for a union for accessing the underlying binary representation of a half-precision floating-point number.
*
* ## Notes
*
* -   The union allows "type punning"; however, while (more or less) defined in C99, behavior is implementation-defined in C++. For more robust conversion, prefer using explicit helpers for converting to and from binary representation.
*/
typedef union {
	// An opaque type for the output value (e.g., could be a `struct` or a native half-precision floating-point number):
	stdlib_float16_t value;

	// Raw IEEE 754 binary representation.
	uint16_t bits;
} stdlib_float16_bits_t;

#endif

/**
* Converts a half-precision floating-point number to its binary representation.
*/
uint16_t stdlib_float16_to_bits( stdlib_float16_t x );

/**
* Converts a 16-bit binary representation to a half-precision floating-point number.
*/
stdlib_float16_t stdlib_float16_from_bits( uint16_t bits );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NUMBER_FLOAT16_CTOR_H
