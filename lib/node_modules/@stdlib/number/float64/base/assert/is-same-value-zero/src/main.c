/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/number/float64/base/assert/is_same_value_zero.h"
#include <stdbool.h>

/**
* Tests whether two double-precision floating-point numbers are the same value.
*
* @param a    first double-precision floating-point number
* @param b    second double-precision floating-point number
* @return     boolean indicating if both numbers are the same value
*
* @example
* #include <stdbool.h>
*
* bool v = stdlib_base_float64_is_same_value_zero( 5.0, 5.0 );
* // returns true
*
* v = stdlib_base_float64_is_same_value_zero( 5.0, -5.0 );
* // returns false
*
* v = stdlib_base_float64_is_same_value_zero( -0.0, 0.0 );
* // returns true
*/
bool stdlib_base_float64_is_same_value_zero( const double a, const double b ) {
	return ( a == b ) || ( a != a && b != b ); // handles NaNs
}
