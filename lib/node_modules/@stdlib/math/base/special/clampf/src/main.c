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

#include "stdlib/math/base/special/clampf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_negative_zerof.h"

/**
* Restricts a single-precision floating-point number to a specified range.
*
* @param v       number
* @param min     minimum value
* @param max     maximum value
* @return        restricted value
*
* @example
* float y = stdlib_base_clampf( 3.14f, 0.0f, 5.0f );
* // returns 3.14f
*
* @example
* float y = stdlib_base_clampf( -3.14f, 0.0f, 5.0f );
* // returns 0.0f
*/
float stdlib_base_clampf( const float v, const float min, const float max ) {
	if (
		stdlib_base_is_nanf( v ) ||
		stdlib_base_is_nanf( min ) ||
		stdlib_base_is_nanf( max )
	) {
		return 0.0f / 0.0f; // NaN
	}
	// Simple cases...
	if ( v < min ) {
		return min;
	}
	if ( v > max ) {
		return max;
	}
	// Special cases for handling +-0.0...
	if ( min == 0.0f && stdlib_base_is_negative_zerof( v ) ) {
		return min; // +-0.0
	}
	if ( v == 0.0f && stdlib_base_is_negative_zerof( max ) ) {
		return max; // -0.0
	}
	// Case: min <= v <= max
	return v;
}
