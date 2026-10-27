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

#ifndef STDLIB_NUMBER_FLOAT16_BASE_TO_WORD_H
#define STDLIB_NUMBER_FLOAT16_BASE_TO_WORD_H

#include "stdlib/number/float16/ctor.h"
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* An opaque type definition for a union for converting between a half-precision floating-point number and an unsigned 16-bit integer.
*
* @example
* #include "stdlib/number/float16/ctor.h"
* #include <stdint.h>
*
* stdlib_base_float16_word_t w;
*
* // Assign a half-precision floating-point number:
* w.value = stdlib_float16_from_bits( 51648 ); // => -11.5
*
* // Retrieve the word:
* uint16_t word = w.word;
*/
typedef union {
	stdlib_float16_t value;
	uint16_t word;
} stdlib_base_float16_word_t;


/**
* Convert a half-precision floating-point number into an unsigned 16-bit integer corresponding to the number's IEEE 754 binary representation.
*/
void stdlib_base_float16_to_word( const stdlib_float16_t x, uint16_t *word );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NUMBER_FLOAT16_BASE_TO_WORD_H
