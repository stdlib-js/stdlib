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

#include "stdlib/math/base/assert/int32_is_odd.h"
#include <stdbool.h>
#include <stdint.h>

/**
* Tests if a 32-bit integer is odd.
*
* @param x    input value
* @return     output value
*
* @example
* #include <stdbool.h>
*
* bool out = stdlib_base_int32_is_odd( 3 );
* // returns true
*/
bool stdlib_base_int32_is_odd( const int32_t x ) {
	return ( x & 1 ) == 1;
}
