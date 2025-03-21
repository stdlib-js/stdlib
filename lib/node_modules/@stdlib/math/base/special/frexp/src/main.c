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

#include "stdlib/math/base/special/frexp.h"
#include "stdlib/number/float64/base/normalize.h"
#include "stdlib/number/float64/base/exponent.h"
#include "stdlib/number/float64/base/from_words.h"
#include "stdlib/number/float64/base/to_words.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/math/base/assert/is_nan.h"
#include <stdint.h>

// Exponent all 0s: 1 00000000000 11111111111111111111 => 2148532223
static const uint32_t CLEAR_EXP_MASK = 2148532223;

// Exponent equal to 1022 (BIAS-1): 0 01111111110 00000000000000000000 => 1071644672
static const int32_t SET_EXP_MASK = 1071644672;

/**
* Splits a double-precision floating-point number into a normalized fraction and an integer power of two.
*
* @param x        input value
* @param frac     destination to store the normalized fraction
* @param exp      destination to store the exponent
*
* @example
* #include <stdint.h>
*
* double x = 3.141592653589793;
*
* int32_t exp;
* double frac;
* stdlib_base_frexp( x, &frac, &exp );
*/
void stdlib_base_frexp( const double x, double *frac, int32_t* exp ) {
	uint32_t high;
	uint32_t low;
	int32_t e;
	double y;
	if ( x == 0.0 || stdlib_base_is_nan( x ) || stdlib_base_is_infinite( x ) ) {
		*frac = x;
		*exp = 0;
		return;
	}
	// Normalize the input value:
	stdlib_base_float64_normalize( x, &y, &e );

	// Extract the exponent and add the normalization exponent:
	*exp = stdlib_base_float64_exponent( y ) + e + 1;

	// Break into two unsigned 32-bit integers (higher and lower order words):
	stdlib_base_float64_to_words( y, &high, &low );

	// Clear the exponent bits within the higher order word:
	high &= CLEAR_EXP_MASK;

	// Set the exponent bits within the higher order word to BIAS-1 (1023-1=1022):
	high |= SET_EXP_MASK;

	// Create a new floating-point number:
	stdlib_base_float64_from_words( high, low, frac );

	return;
}
