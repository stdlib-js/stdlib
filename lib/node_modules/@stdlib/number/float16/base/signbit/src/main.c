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

#include "stdlib/number/float16/base/signbit.h"
#include "stdlib/number/float16/base/to_word.h"
#include "stdlib/number/float16/ctor.h"
#include <stdint.h>

/**
* Returns an integer indicating whether the sign bit for a half-precision floating-point number is on (`1`) or off (`0`).
*
* @param x       input value
* @return        result
*
* @example
* #include "stdlib/number/float16/ctor.h"
* #include <stdint.h>
*
* stdlib_float16_t x = stdlib_float16_from_bits( 51648 ); // => -11.5
* int8_t out = stdlib_base_float16_signbit( x );
*/
int8_t stdlib_base_float16_signbit( const stdlib_float16_t x ) {
	uint16_t w;

	// Convert the floating-point value to a word (unsigned 16-bit integer) containing the exponent and sign:
	stdlib_base_float16_to_word( x, &w );

	// Shift off all bits which are not the sign bit and check if the sign bit is on:
	return (int8_t)( w >> 15 );
}
