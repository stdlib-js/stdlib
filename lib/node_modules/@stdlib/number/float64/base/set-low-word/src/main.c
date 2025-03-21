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

#include "stdlib/number/float64/base/set_low_word.h"
#include "stdlib/number/float64/base/to_words.h"
#include <stdint.h>

/**
* Sets the less significant 32 bits of a double-precision floating-point number.
*
* @param low    lower order word
* @param x      reference to (and destination for) a double-precision floating-point number
*
* @example
* #include <stdint.h>
*
* uint32_t low = 1374389537;
* double x = 3.14;
*
* stdlib_base_float64_set_low_word( low, &x );
*/
void stdlib_base_float64_set_low_word( const uint32_t low, double *x ) {
	stdlib_base_float64_words_t w;
	w.value = *x;
	w.words.low = low;
	*x = w.value;
}
