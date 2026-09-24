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

#include "stdlib/number/float32/base/assert/is_almost_same_value.h"
#include "stdlib/number/float32/base/assert/is_same_value.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/number/float32/base/ulp_difference.h"
#include <stdbool.h>
#include <stdint.h>

/**
* Tests whether two single-precision floating-point numbers are approximately the same value within a specified number of ULPs (units in the last place).
*
* @param a         first single-precision floating-point number
* @param b         second single-precision floating-point number
* @param maxULP    maximum allowed ULP difference
* @return          boolean indicating if both numbers are approximately the same value
*
* @example
* #include <stdbool.h>
*
* bool v = stdlib_base_float32_is_almost_same_value( 1.0f, 1.0f + 1.1920929e-7f, 1 );
* // returns true
*
* v = stdlib_base_float32_is_almost_same_value( 0.0f, -0.0f, 0 );
* // returns false
*/
bool stdlib_base_float32_is_almost_same_value( const float a, const float b, const int32_t maxULP ) {
	if ( stdlib_base_is_nanf( a ) || stdlib_base_is_nanf( b ) || maxULP == 0 ) {
		return stdlib_base_float32_is_same_value( a, b );
	}
	return stdlib_base_float32_ulp_difference( a, b ) <= (double)maxULP;
}
