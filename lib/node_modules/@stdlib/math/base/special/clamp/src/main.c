/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

#include "stdlib/math/base/special/clamp.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_negative_zero.h"

/**
* Restricts a double-precision floating-point number to a specified range.
*
* @param v       number
* @param min     minimum value
* @param max     maximum value
* @return        restricted value
*
* @example
* double y = stdlib_base_clamp( 3.14, 0.0, 5.0 );
* // returns 3.14
*
* @example
* double y = stdlib_base_clamp( -3.14, 0.0, 5.0 );
* // returns 0.0
*/
double stdlib_base_clamp( const double v, const double min, const double max ) {
	if (
		stdlib_base_is_nan( v ) ||
		stdlib_base_is_nan( min ) ||
		stdlib_base_is_nan( max )
	) {
		return 0.0 / 0.0; // NaN
	}
	// Simple cases...
	if ( v < min ) {
		return min;
	}
	if ( v > max ) {
		return max;
	}
	// Special cases for handling +-0.0...
	if ( min == 0.0 && stdlib_base_is_negative_zero( v ) ) {
		return min; // +-0.0
	}
	if ( v == 0.0 && stdlib_base_is_negative_zero( max ) ) {
		return max; // -0.0
	}
	// Case: min <= v <= max
	return v;
}
