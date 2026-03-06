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

#include "stdlib/number/float32/base/normalize.h"
#include "stdlib/constants/float32/smallest_normal.h"
#include "stdlib/math/base/assert/is_infinitef.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/special/absf.h"
#include <stdint.h>

// (1<<32)
static const float SCALAR = 8388608.0f;

/**
* Extracts a normal number `y` and exponent `exp` satisfying `x = y * 2^exp`.
*
* @param x        input value
* @param y        destination for normal number
* @param exp      destination for exponent
*
* @example
* #include <stdint.h>
*
* float x = 1.0f;
* float y;
* int32_t exp;
*
* stdlib_base_float32_normalize( x, &y, &exp );
*/
void stdlib_base_float32_normalize( const float x, float *y, int32_t *exp ) {
	if ( stdlib_base_is_nanf( x ) || stdlib_base_is_infinitef( x ) ) {
		*y = x;
		*exp = 0;
		return;
	}
	if ( x != 0 && stdlib_base_absf( x ) < STDLIB_CONSTANT_FLOAT32_SMALLEST_NORMAL ) {
		*y = x * SCALAR;
		*exp = -23;
		return;
	}
	*y = x;
	*exp = 0;
	return;
}
