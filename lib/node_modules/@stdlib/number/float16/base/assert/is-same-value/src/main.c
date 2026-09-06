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

#include "stdlib/number/float16/base/assert/is_same_value.h"
#include "stdlib/number/float16/base/to_float64.h"
#include "stdlib/number/float16/ctor.h"
#include <stdbool.h>

/**
* Tests whether two half-precision floating-point numbers are the same value.
*
* @param a    first half-precision floating-point number
* @param b    second half-precision floating-point number
* @return     boolean indicating if both numbers are the same value
*
* @example
* #include "stdlib/number/float16/ctor.h"
* #include "stdlib/number/float32/base/to_float16.h"
* #include <stdbool.h>
*
* stdlib_float16_t x = stdlib_base_float32_to_float16( 5.0f );
* stdlib_float16_t y = stdlib_base_float32_to_float16( 5.0f );
*
* bool v = stdlib_base_float16_is_same_value( x, x );
* // returns true
*
* v = stdlib_base_float16_is_same_value( x, y );
* // returns false
*/
bool stdlib_base_float16_is_same_value( const stdlib_float16_t a, const stdlib_float16_t b ) {
	double x = stdlib_base_float16_to_float64( a );
	double y = stdlib_base_float16_to_float64( b );
	if ( x == y ) {
		if ( x == 0.0 ) {
			return 1.0 / x == 1.0 / y; // handles +-0
		}
		return true;
	}
	return ( x != x && y != y ); // handles NaNs
}
