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

#include "stdlib/number/float16/base/from_word.h"
#include "stdlib/number/float16/ctor.h"
#include <stdint.h>

/**
* Creates a half-precision floating-point number from an unsigned 16-bit integer corresponding to an IEEE 754 binary representation.
*
* @param word   word
* @param x      destination for half-precision floating-point number
*
* @example
* #include "stdlib/number/float16/ctor.h"
* #include <stdint.h>
*
* uint16_t word = 51648; // => -11.5
*
* stdlib_float16_t x;
* stdlib_base_float16_from_word( word, &x );
*/
void stdlib_base_float16_from_word( const uint16_t word, stdlib_float16_t *x ) {
	*x = stdlib_float16_from_bits( word );
}
