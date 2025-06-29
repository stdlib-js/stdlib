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

#include "stdlib/math/base/special/modff.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/number/float32/base/from_word.h"
#include "stdlib/number/float32/base/to_word.h"
#include "stdlib/constants/float32/pinf.h"
#include "stdlib/constants/float32/exponent_bias.h"
#include "stdlib/constants/float32/exponent_mask.h"
#include "stdlib/constants/float32/significand_mask.h"
#include "stdlib/constants/float32/num_significand_bits.h"

/**
* Decomposes a single-precision floating-point number into integral and fractional parts, each having the same type and sign as the input value.
*
* @param x           input value
* @param integral    destination pointer for the integral part
* @param frac        destination pointer for the fractional part
*
* @example
* float x = 3.141592653589793f;
*
* float integral;
* float frac;
* stdlib_base_modff( x, &integral, &frac );
*/
void stdlib_base_modff( const float x, float* integral, float* frac ) {
	uint32_t word;
	int32_t exp;
	int32_t i;
	float j;

	// Special cases...
	if ( x < 1.0f ) {
		if ( x < 0.0f ) {
			stdlib_base_modff( -x, integral, frac );
			*integral *= -1.0f;
			*frac *= -1.0f;
			return;
		}
		if ( x == 0.0f ) { // [ +-0, +-0 ]
			*integral = x;
			*frac = x;
			return;
		}
		*integral = 0.0f;
		*frac = x;
		return;
	}
	if ( stdlib_base_is_nanf( x ) ) {
		*integral = 0.0f / 0.0f; // NaN
		*frac = 0.0f / 0.0f; // NaN
		return;
	}
	if ( x == STDLIB_CONSTANT_FLOAT32_PINF ) {
		*integral = STDLIB_CONSTANT_FLOAT32_PINF;
		*frac = 0.0f;
		return;
	}
	// Decompose |x|...

	// Extract the word:
	stdlib_base_float32_to_word( x, &word );

	// Extract the unbiased exponent:
	exp = ( ( word & STDLIB_CONSTANT_FLOAT32_EXPONENT_MASK ) >> STDLIB_CONSTANT_FLOAT32_NUM_SIGNIFICAND_BITS );
	exp -= ( STDLIB_CONSTANT_FLOAT32_EXPONENT_BIAS );

	// Handle smaller values (x < 2**23 = 8388608)...
	if( exp < STDLIB_CONSTANT_FLOAT32_NUM_SIGNIFICAND_BITS ) {
		i = ( STDLIB_CONSTANT_FLOAT32_SIGNIFICAND_MASK >> exp );

		// Determine if `x` is integral by checking for significand bits which cannot be exponentiated away...
		if ( ( word & i ) == 0 ) {
			*integral = x;
			*frac = 0.0f;
			return;
		}
		// Turn off all the bits which cannot be exponentiated away:
		word &= ( ~i );

		// Generate the integral part:
		stdlib_base_float32_from_word( word, &j );
		*integral = j;
		*frac = x - j;
		return;
	}
	// `x` is integral:
	*integral = x;
	*frac = 0.0f;
	return;
}
