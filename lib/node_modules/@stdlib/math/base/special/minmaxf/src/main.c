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

#include "stdlib/math/base/special/minmaxf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_negative_zerof.h"

/**
* Evaluates the minimum and maximum of two single-precision floating-point numbers.
*
* @param x      first number
* @param y      second number
* @param min    destination for the minimum value
* @param max    destination for the maximum value
*
* @example
* float x = 3.14f;
* float y = 2.71f;
*
* float min;
* float max;
* stdlib_base_minmaxf( x, y, &min, &max );
*/
void stdlib_base_minmaxf( const float x, const float y, float* min, float* max ) {
	if ( stdlib_base_is_nanf( x ) || stdlib_base_is_nanf( y ) ) {
		*min = 0.0f / 0.0f; // NaN
		*max = 0.0f / 0.0f; // NaN
		return;
	}
	if ( x == y && x == 0.0f ) {
		if ( stdlib_base_is_negative_zerof( x ) ) {
			*min = x;
			*max = y;
			return;
		}
		*min = y;
		*max = x;
		return;
	}
	if ( x < y ) {
		*min = x;
		*max = y;
		return;
	}
	*min = y;
	*max = x;
	return;
}
