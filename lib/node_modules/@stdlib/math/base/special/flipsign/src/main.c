/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

#include "stdlib/math/base/special/flipsign.h"
#include "stdlib/constants/float64/high_word_sign_mask.h"
#include "stdlib/number/float64/base/to_words.h"
#include "stdlib/number/float64/base/get_high_word.h"
#include "stdlib/number/float64/base/from_words.h"
#include <stdint.h>

/**
* Returns a double-precision floating-point number with the magnitude of `x` and the sign of `x*y`.
*
* @param x       number from which to derive a magnitude
* @param y       number from which to derive a sign
* @return        result
*
* @example
* double v = stdlib_base_flipsign( -3.0, 10.0 );
* // returns -3.0
*
* @example
* double v = stdlib_base_flipsign( -3.0, -1.0 );
* // returns 3.0
*/
double stdlib_base_flipsign( const double x, const double y ) {
	uint32_t hx;
	uint32_t lx;
	uint32_t hy;
	double z;

	// Split `x` into higher and lower order words:
	stdlib_base_float64_to_words( x, &hx, &lx );

	// Extract the higher order word from `y`:
	stdlib_base_float64_get_high_word( y, &hy );

	// Leave only the sign bit of `y` turned on (if on):
	hy &= STDLIB_CONSTANT_FLOAT64_HIGH_WORD_SIGN_MASK;

	// Flip the sign bit of `x` only when the sign bit of `y` is on:
	hx ^= hy; // 1^1=0 (flipped), 0^1=1 (flipped), 1^0=1 (unchanged), 0^0=0 (unchanged)

	// Return a new value having the same magnitude as `x`, but with the sign of `x*y`:
	stdlib_base_float64_from_words( hx, lx, &z );
	return z;
}
