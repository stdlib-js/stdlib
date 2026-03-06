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

#include "stdlib/math/base/special/copysignf.h"
#include "stdlib/constants/float32/sign_mask.h"
#include "stdlib/constants/float32/abs_mask.h"
#include "stdlib/number/float32/base/to_word.h"
#include "stdlib/number/float32/base/from_word.h"
#include <stdint.h>

/**
* Returns a single-precision floating-point number with the magnitude of `x` and the sign of `y`.
*
* @param x       number from which to derive a magnitude
* @param y       number from which to derive a sign
* @return        result
*
* @example
* float v = stdlib_base_copysignf( -3.0f, 10.0f );
* // returns 3.0f
*
* @example
* float v = stdlib_base_copysignf( 3.0f, -1.0f );
* // returns -3.0f
*/
float stdlib_base_copysignf( const float x, const float y ) {
	uint32_t wx;
	uint32_t wy;
	float z;

	// Convert `x` to an unsigned integer:
	stdlib_base_float32_to_word( x, &wx );

	// Turn off the sign bit of `x`:
	wx &= STDLIB_CONSTANT_FLOAT32_ABS_MASK;

	// Convert `y` to an unsigned integer:
	stdlib_base_float32_to_word( y, &wy );

	// Leave only the sign bit of `y` turned on:
	wy &= STDLIB_CONSTANT_FLOAT32_SIGN_MASK;

	// Copy the sign bit of `y` to `x`:
	wx |= wy;

	// Return a new value having the same magnitude as `x`, but with the sign of `y`:
	stdlib_base_float32_from_word( wx, &z );
	return z;
}
