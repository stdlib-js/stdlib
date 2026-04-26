/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/math/base/special/heaviside.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Evaluates the Heaviside function for a double-precision floating-point number.
*
* @param x             input value
* @param continuity    continuity option
* @return              function value
*
* @example
* double y = stdlib_base_heaviside( 0.0, STDLIB_BASE_HEAVISIDE_CONTINUITY_HALF_MAXIMUM );
* // returns 0.5
*/
double stdlib_base_heaviside( const double x, const enum STDLIB_BASE_HEAVISIDE_CONTINUITY continuity ) {
	if ( stdlib_base_is_nan( x ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x > 0.0 ) {
		return 1.0;
	}
	// Handle `+-0`...
	if ( x == 0.0 ) {
		switch ( continuity ) {
			case STDLIB_BASE_HEAVISIDE_CONTINUITY_HALF_MAXIMUM:
				return 0.5;
			case STDLIB_BASE_HEAVISIDE_CONTINUITY_LEFT_CONTINUOUS:
				return 0.0;
			case STDLIB_BASE_HEAVISIDE_CONTINUITY_RIGHT_CONTINUOUS:
				return 1.0;
			case STDLIB_BASE_HEAVISIDE_CONTINUITY_DISCONTINUOUS:
				return 0.0 / 0.0; // NaN
			default:
				return 0.0 / 0.0; // NaN
		}
	}
	return 0.0;
}
