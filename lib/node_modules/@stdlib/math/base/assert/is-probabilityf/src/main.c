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

#include "stdlib/math/base/assert/is_probabilityf.h"
#include <stdbool.h>

/**
* Tests if a single-precision floating-point number is a probability.
*
* @param x    input value
* @return     output value
*
* @example
* #include <stdbool.h>
*
* bool out = stdlib_base_is_probabilityf( 0.5f );
* // returns true
*
* out = stdlib_base_is_probabilityf( 1.5f );
* // returns false
*/
bool stdlib_base_is_probabilityf( const float x ) {
	return ( x >= 0.0f && x <= 1.0f );
}
