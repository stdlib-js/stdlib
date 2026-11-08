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

#include "stdlib/number/float32/base/to_word.h"
#include <stdint.h>

/**
* Converts a single-precision floating-point number to an unsigned 32-bit integer corresponding to the number's IEEE 754 binary representation.
*
* @param x      input value
* @param word   destination
*
* @example
* #include <stdint.h>
*
* uint32_t word;
* stdlib_base_float32_to_word( 3.14f, &word );
*/
void stdlib_base_float32_to_word( const float x, uint32_t *word ) {
	stdlib_base_float32_word_t w;
	w.value = x;
	*word = w.word;
}
