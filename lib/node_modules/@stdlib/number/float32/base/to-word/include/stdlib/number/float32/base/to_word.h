/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

#ifndef STDLIB_NUMBER_FLOAT32_BASE_TO_WORD_H
#define STDLIB_NUMBER_FLOAT32_BASE_TO_WORD_H

#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* An opaque type definition for a union for converting between a single-precision floating-point number and an unsigned 32-bit integer.
*
* @example
* #include <stdint.h>
*
* stdlib_base_float32_word_t w;
*
* // Assign a single-precision floating-point number:
* w.value = 3.14f;
*
* // Retrieve the word:
* uint32_t word = w.word;
*/
typedef union {
	float value;
	uint32_t word;
} stdlib_base_float32_word_t;


/**
* Convert a single-precision floating-point number into an unsigned 32-bit integer corresponding to the number's IEEE 754 binary representation.
*/
void stdlib_base_float32_to_word( const float x, uint32_t *word );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NUMBER_FLOAT32_BASE_TO_WORD_H
