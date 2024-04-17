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

#include "stdlib/math/base/assert/uint32_is_pow2.h"
#include <stdint.h>

/**
* Tests whether an unsigned integer is a power of 2.
*
* @param x    input value
* @return     output value
*
* @example
* #include <stdbool.h>
*
* bool out = stdlib_base_uint32_is_pow2( 3 );
* // returns false
*/
bool stdlib_base_uint32_is_pow2( const uint32_t x ) {
	uint32_t xc;
	xc = x >> 0;
	return ( !!xc && !( xc & ( xc - 1 ) ) );
}
