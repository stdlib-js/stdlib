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

#include "stdlib/number/float32/base/signbit.h"
#include "stdlib/number/float32/base/to_word.h"
#include <stdint.h>

/**
* Returns an integer indicating whether the sign bit for a single-precision floating-point number is on (`1`) or off (`0`).
*
* @param x       input value
* @return        result
*
* @example
* #include <stdint.h>
*
* int8_t out = stdlib_base_float32_signbit( 3.14f );
*/
int8_t stdlib_base_float32_signbit( const float x ) {
	uint32_t w;

	// Convert the floating-point value to a word (unsigned 32-bit integer) containing the exponent and sign:
	stdlib_base_float32_to_word( x, &w );

	// Shift off all bits which are not the sign bit and check if the sign bit is on:
	return (int8_t)( w >> 31 );
}
