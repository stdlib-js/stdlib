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

#include "stdlib/number/float16/base/significand.h"
#include "stdlib/number/float16/base/to_word.h"
#include "stdlib/constants/float16/significand_mask.h"
#include "stdlib/number/float16/ctor.h"
#include <stdint.h>

/**
* Returns the integer corresponding to the significand of a half-precision floating-point number.
*
* @param x       input value
* @return        integer corresponding to the significand
*
* @example
* #include "stdlib/number/float16/ctor.h"
* #include <stdint.h>
*
* stdlib_float16_t x = stdlib_float16_from_bits( 51648 ); // => -11.5
* int16_t y = stdlib_base_float16_significand( x );
*/
int16_t stdlib_base_float16_significand( const stdlib_float16_t x ) {
	// Convert `x` to an unsigned 16-bit integer corresponding to the IEEE 754 binary representation:
	uint16_t word;
	stdlib_base_float16_to_word( x, &word );

	// Apply a mask to isolate only the significand bits:
	word &= STDLIB_CONSTANT_FLOAT16_SIGNIFICAND_MASK;

	// Convert the significand bits to an integer:
	return (int16_t)word;
}
