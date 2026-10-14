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

#include "stdlib/number/float64/base/ulp_difference.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/high_word_sign_mask.h"
#include <stdint.h>

static const uint64_t SIGN_MASK = (uint64_t)STDLIB_CONSTANT_FLOAT64_HIGH_WORD_SIGN_MASK << 32;

/**
* Converts a 64-bit unsigned integer corresponding to the IEEE 754 binary representation of a double-precision floating-point number to a lexicographically ordered integer.
*
* @param word    unsigned 64-bit integer
* @return        lexicographically ordered integer
*/
static uint64_t monotone_key( const uint64_t word ) {
	if ( word & SIGN_MASK ) {
		return ~word + 1;
	}
	return word | SIGN_MASK;
}

/**
* Computes the number of representable double-precision floating-point values that separate two double-precision floating-point numbers along the real number line.
*
* @param x    first double-precision floating-point number
* @param y    second double-precision floating-point number
* @return     result
*
* @example
* #include "stdlib/constants/float64/eps.h"
*
* double d = stdlib_base_float64_ulp_difference( 1.0, 1.0 + STDLIB_CONSTANT_FLOAT64_EPS );
* // returns 1.0
*
* @example
* double d = stdlib_base_float64_ulp_difference( 0.0 / 0.0, 1.0 );
* // returns NaN
*/
double stdlib_base_float64_ulp_difference( const double x, const double y ) {
	stdlib_base_float64_ulp_difference_word_t ux;
	stdlib_base_float64_ulp_difference_word_t uy;
	uint64_t wx;
	uint64_t wy;

	if ( stdlib_base_is_nan( x ) || stdlib_base_is_nan( y ) ) {
		return 0.0 / 0.0;
	}
	ux.value = x;
	uy.value = y;

	wx = monotone_key( ux.word );
	wy = monotone_key( uy.word );

	if ( wx >= wy ) {
		return (double)( wx - wy );
	}
	return (double)( wy - wx );
}
