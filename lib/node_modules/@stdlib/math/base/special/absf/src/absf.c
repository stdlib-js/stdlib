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

#include "stdlib/math/base/special/absf.h"
#include "stdlib/number/float32/base/to_word.h"

// 0x7fffffff = 2147483647 => 0 11111111111 11111111111111111111
static const uint32_t ABS_MASK = 2147483647;

/**
* Computes the absolute value of a single-precision floating-point number.
*
* @param x       number
* @return        absolute value
*
* @example
* float y = stdlib_base_absf( -5.0f );
* // returns 5.0f
*/
float stdlib_base_absf( const float x ) {
	stdlib_base_float32_word_t w;
	w.value = x;
	w.word &= ABS_MASK;
	return w.value;
}
