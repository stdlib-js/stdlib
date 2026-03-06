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

#include "stdlib/number/float64/base/set_high_word.h"
#include "stdlib/number/float64/base/to_words.h"
#include <stdint.h>

/**
* Sets the more significant 32 bits of a double-precision floating-point number.
*
* @param high   higher order word
* @param x      reference to (and destination for) a double-precision floating-point number
*
* @example
* #include <stdint.h>
*
* uint32_t high = 1074339512;
* double x = 0.0;
*
* stdlib_base_float64_set_high_word( high, &x );
*/
void stdlib_base_float64_set_high_word( const uint32_t high, double *x ) {
	stdlib_base_float64_words_t w;
	w.value = *x;
	w.words.high = high;
	*x = w.value;
}
