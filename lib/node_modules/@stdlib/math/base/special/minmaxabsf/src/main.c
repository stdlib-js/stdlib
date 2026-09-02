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

#include "stdlib/math/base/special/minmaxabsf.h"
#include "stdlib/math/base/special/absf.h"
#include "stdlib/math/base/assert/is_nanf.h"

/**
* Evaluates the minimum and maximum absolute values of two single-precision floating-point numbers.
*
* @param x      first number
* @param y      second number
* @param min    destination for the minimum absolute value
* @param max    destination for the maximum absolute value
*
* @example
* float x = -3.14f;
* float y = 2.71f;
*
* float min;
* float max;
* stdlib_base_minmaxabsf( x, y, &min, &max );
*/
void stdlib_base_minmaxabsf( const float x, const float y, float* min, float* max ) {
	float ax;
	float ay;

	if ( stdlib_base_is_nanf( x ) || stdlib_base_is_nanf( y ) ) {
		*min = 0.0f / 0.0f; // NaN
		*max = 0.0f / 0.0f; // NaN
		return;
	}
	ax = stdlib_base_absf( x );
	ay = stdlib_base_absf( y );
	if ( ax < ay ) {
		*min = ax;
		*max = ay;
		return;
	}
	*min = ay;
	*max = ax;
	return;
}
