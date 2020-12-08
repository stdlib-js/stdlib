/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#include "stdlib/math/base/special/labs.h"
#include <stdint.h>

/**
* Computes the absolute value of a signed 32-bit integer in two's complement format.
*
* ## Method
*
* -   Assume two's complement format.
* -   Create a mask by applying a sign propagating right-shift. For negative integers, this results in all `1`'s. For nonnegative integers, this results in all `0`'s.
* -   XOR the mask with `x`. For negative integers, this is the equivalent of a NOT. For nonnegative integers, this is a no-op.
* -   Subtract the mask to recover the absolute value. For negative integers, this adds `1`, which is `-x` when using two's complement. For nonnegative integers, this subtracts `0`.
*
* @param x       number
* @return        absolute value
*
* @example
* #include <stdint.h>
*
* int32_t y = stdlib_base_labs( -5 );
* // returns 5
*/
int32_t stdlib_base_labs( const int32_t x ) {
	int32_t mask = x >> 31;
	return (x ^ mask) - mask;
}
