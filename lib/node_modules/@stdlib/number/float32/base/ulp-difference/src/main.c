/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/number/float32/base/ulp_difference.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/number/float32/base/to_word.h"
#include "stdlib/constants/float32/sign_mask.h"
#include "stdlib/math/base/special/abs.h"
#include <stdint.h>

/**
* Converts an unsigned 32-bit integer corresponding to the IEEE 754 binary representation of a single-precision floating-point number to a lexicographically ordered integer.
*
* @param word    unsigned 32-bit integer
* @return        lexicographically ordered integer
*/
static uint32_t monotone_key( const uint32_t word ) {
	if ( word & STDLIB_CONSTANT_FLOAT32_SIGN_MASK ) {
		return ~word + 1;
	}
	return word | STDLIB_CONSTANT_FLOAT32_SIGN_MASK;
}

/**
* Computes the number of representable single-precision floating-point values that separate two single-precision floating-point numbers along the real number line.
*
* @param x    first single-precision floating-point number
* @param y    second single-precision floating-point number
* @return     result
*
* @example
* double d = stdlib_base_float32_ulp_difference( 1.0f, 1.0f + 1.1920929e-7f );
* // returns 1.0
*
* @example
* double d = stdlib_base_float32_ulp_difference( 0.0f / 0.0f, 1.0f );
* // returns 0.0/0.0
*/
double stdlib_base_float32_ulp_difference( const float x, const float y ) {
	uint32_t wx;
	uint32_t wy;

	if ( stdlib_base_is_nanf( x ) || stdlib_base_is_nanf( y ) ) {
		return 0.0 / 0.0;
	}
	stdlib_base_float32_to_word( x, &wx );
	stdlib_base_float32_to_word( y, &wy );

	wx = monotone_key( wx );
	wy = monotone_key( wy );

	return stdlib_base_abs( (double)wx - (double)wy );
}
