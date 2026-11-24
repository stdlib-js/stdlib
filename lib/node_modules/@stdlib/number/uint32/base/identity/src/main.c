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

#include "stdlib/number/uint32/base/identity.h"
#include <stdint.h>

/**
* Evaluates the identity function for an unsigned 32-bit integer.
*
* @param x       number
* @return        input value
*
* @example
* #include <stdint.h>
*
* uint32_t y = stdlib_base_uint32_identity( 3 );
* // returns 3
*/
uint32_t stdlib_base_uint32_identity( const uint32_t x ) {
	return x;
}
