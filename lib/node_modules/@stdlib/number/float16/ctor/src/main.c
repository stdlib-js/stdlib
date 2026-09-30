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

#include "stdlib/number/float16/ctor.h"
#include <stdint.h>
#include <string.h>

/**
* Converts a half-precision floating-point number to its binary representation.
*
* @param x    half-precision floating-point number
* @return     16-bit integer corresponding to a binary representation
*/
uint16_t stdlib_float16_to_bits( stdlib_float16_t x ) {
	uint16_t bits;
	memcpy( &bits, &x, sizeof( bits ) );
	return bits;
}

/**
* Converts a 16-bit binary representation to a half-precision floating-point number.
*
* @param bits   16-bit integer corresponding to a binary representation
* @return       half-precision floating-point number
*/
stdlib_float16_t stdlib_float16_from_bits( uint16_t bits ) {
	stdlib_float16_t x;
	memcpy( &x, &bits, sizeof( bits ) );
	return x;
}
