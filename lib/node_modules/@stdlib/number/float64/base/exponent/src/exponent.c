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

#include "stdlib/number/float64/base/exponent.h"
#include "stdlib/constants/float64/high_word_exponent_mask.h"
#include "stdlib/constants/float64/exponent_bias.h"
#include "stdlib/number/float64/base/get_high_word.h"
#include <stdint.h>

/**
* Returns the integer corresponding to the unbiased exponent of a double-precision floating-point number.
*
* @param x       input value
* @return        unbiased exponent
*
* @example
* #include <stdint.h>
*
* int32_t out = stdlib_base_float64_exponent( 4.0 );
*/
int32_t stdlib_base_float64_exponent( const double x ) {
	// Extract from the input value a higher order word (unsigned 32-bit integer) which contains the exponent:
	uint32_t high;
	stdlib_base_float64_get_high_word( x, &high );

	// Apply a mask to isolate only the exponent bits and then shift off all bits which are part of the fraction:
	high = ( high & STDLIB_CONSTANT_FLOAT64_HIGH_WORD_EXPONENT_MASK ) >> 20;

	// Remove the bias and return:
	return (int32_t)high - STDLIB_CONSTANT_FLOAT64_EXPONENT_BIAS;
}
