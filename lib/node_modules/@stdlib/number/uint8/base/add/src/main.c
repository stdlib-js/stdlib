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

#include "stdlib/number/uint8/base/add.h"
#include <stdint.h>

/**
* Computes the sum of two unsigned 8-bit integers.
*
* @param x       first number
* @param y       second number
* @return        sum
*
* @example
* uint8_t z = stdlib_base_uint8_add( 5, 3 );
* // returns 8
*/
uint8_t stdlib_base_uint8_add( const uint8_t x, const uint8_t y ) {
	return x + y;
}
