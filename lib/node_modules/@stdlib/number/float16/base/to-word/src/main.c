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

#include "stdlib/number/float16/base/to_word.h"
#include "stdlib/number/float16/ctor.h"
#include <stdint.h>

/**
* Converts a half-precision floating-point number to an unsigned 16-bit integer corresponding to the number's IEEE 754 binary representation.
*
* @param x      input value
* @param word   destination
*
* @example
* #include "stdlib/number/float16/ctor.h"
* #include <stdint.h>
*
* uint16_t word;
*
* stdlib_float16_t x = stdlib_float16_from_bits( 51648 ); // => -11.5
* stdlib_base_float16_to_word( x, &word );
*/
void stdlib_base_float16_to_word( const stdlib_float16_t x, uint16_t *word ) {
	*word = stdlib_float16_to_bits( x );
}
