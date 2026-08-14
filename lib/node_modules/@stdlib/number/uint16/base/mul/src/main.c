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

#include "stdlib/number/uint16/base/mul.h"
#include <stdint.h>

/**
* Multiplies two unsigned 16-bit integers.
*
* @param x       first number
* @param y       second number
* @return        result
*
* @example
* uint16_t z = stdlib_base_uint16_mul( 5, 3 );
* // returns 15
*/
uint16_t stdlib_base_uint16_mul( const uint16_t x, const uint16_t y ) {
	return x * y;
}
