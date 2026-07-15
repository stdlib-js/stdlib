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

#include "stdlib/number/float16/base/exponent.h"
#include "stdlib/number/float16/ctor.h"
#include "stdlib/constants/float16/exponent_mask.h"
#include "stdlib/constants/float16/exponent_bias.h"
#include "stdlib/constants/float16/num_significand_bits.h"
#include "stdlib/number/float16/base/to_word.h"
#include <stdint.h>

/**
* Returns the integer corresponding to the unbiased exponent of a half-precision floating-point number.
*
* @param x       input value
* @return        unbiased exponent
*
* @example
* #include "stdlib/number/float16/ctor.h"
* #include <stdint.h>
*
* stdlib_float16_t x = stdlib_float16_from_bits( 51648 ); // => -11.5
* int16_t out = stdlib_base_float16_exponent( x );
*/
int16_t stdlib_base_float16_exponent( const stdlib_float16_t x ) {
	// Reinterpret the input value as an unsigned 16-bit integer which contains the exponent:
	uint16_t word;
	stdlib_base_float16_to_word( x, &word );

	// Apply a mask to isolate only the exponent bits and then shift off all bits which are part of the fraction:
	word = ( word & STDLIB_CONSTANT_FLOAT16_EXPONENT_MASK ) >> STDLIB_CONSTANT_FLOAT16_NUM_SIGNIFICAND_BITS;

	// Remove the bias and return:
	return (int16_t)word - STDLIB_CONSTANT_FLOAT16_EXPONENT_BIAS;
}
