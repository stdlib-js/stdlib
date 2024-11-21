/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

#include "stdlib/number/float32/base/exponent.h"
#include "stdlib/constants/float32/exponent_mask.h"
#include "stdlib/constants/float32/exponent_bias.h"
#include "stdlib/number/float32/base/to_word.h"
#include <stdint.h>

/**
* Returns the integer corresponding to the unbiased exponent of a single-precision floating-point number.
*
* @param x       input value
* @return        unbiased exponent
*
* @example
* #include <stdint.h>
*
* int32_t out = stdlib_base_float32_exponent( 4.0f );
*/
int32_t stdlib_base_float32_exponent( const float x ) {
	// Reinterpret the input value as an unsigned 32-bit integer which contains the exponent:
	uint32_t word;
	stdlib_base_float32_to_word( x, &word );

	// Apply a mask to isolate only the exponent bits and then shift off all bits which are part of the fraction:
	word = ( word & STDLIB_CONSTANT_FLOAT32_EXPONENT_MASK ) >> 23;

	// Remove the bias and return:
	return (int32_t)word - STDLIB_CONSTANT_FLOAT32_EXPONENT_BIAS;
}
