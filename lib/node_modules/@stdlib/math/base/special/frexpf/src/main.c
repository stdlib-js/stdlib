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

#include "stdlib/math/base/special/frexpf.h"
#include "stdlib/number/float32/base/normalize.h"
#include "stdlib/number/float32/base/exponent.h"
#include "stdlib/number/float32/base/from_word.h"
#include "stdlib/number/float32/base/to_word.h"
#include "stdlib/math/base/assert/is_infinitef.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include <stdint.h>

// Exponent all 0s: 1 00000000 11111111111111111111111 => 2155872255
static const uint32_t CLEAR_EXP_MASK = 2155872255;

// Exponent equal to 126 (BIAS-1): 0 01111110 00000000000000000000000 => 1056964608
static const int32_t SET_EXP_MASK = 1056964608;

/**
* Splits a single-precision floating-point number into a normalized fraction and an integer power of two.
*
* @param x        input value
* @param frac     destination to store the normalized fraction
* @param exp      destination to store the exponent
*
* @example
* #include <stdint.h>
*
* float x = 3.141592653589793f;
*
* int32_t exp;
* float frac;
* stdlib_base_frexpf( x, &frac, &exp );
*/
void stdlib_base_frexpf( const float x, float *frac, int32_t* exp ) {
	uint32_t word;
	int32_t e;
	float y;

	if ( x == 0.0f || stdlib_base_is_nanf( x ) || stdlib_base_is_infinitef( x ) ) {
		*frac = x;
		*exp = 0;
		return;
	}
	// Normalize the input value:
	stdlib_base_float32_normalize( x, &y, &e );

	// Extract the exponent and add the normalization exponent:
	*exp = stdlib_base_float32_exponent( y ) + e + 1;

	// Convert the normalized floating-point number to an unsigned 32-bit integer:
	stdlib_base_float32_to_word( y, &word );

	// Clear the exponent bits within the word:
	word &= CLEAR_EXP_MASK;

	// Set the exponent bits within the word to BIAS-1 (127-1=126):
	word |= SET_EXP_MASK;

	// Create a new floating-point number:
	stdlib_base_float32_from_word( word, frac );

	return;
}
