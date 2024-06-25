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

#include "stdlib/number/float32/base/significand.h"
#include "stdlib/number/float32/base/to_word.h"
#include <stdint.h>

/**
* Returns the integer corresponding to the significand of a single-precision floating-point number.
*
* @param x       input value
* @return        integer corresponding to the significand
*
* @example
* #include <stdint.h>
*
* int32_t out = stdlib_base_float32_significand( 4.0f );
*/
int32_t stdlib_base_float32_significand( const float x ) {
	// Convert `x` to an unsigned 32-bit integer corresponding to the IEEE 754 binary representation:
	uint32_t ux;
	stdlib_base_float32_to_word( x, &ux );

	// Apply a mask to isolate only the significand bits:
	ux &= 0x007FFFFF;

	// Convert the significand bits to an integer:
	return (int32_t)ux;
}
