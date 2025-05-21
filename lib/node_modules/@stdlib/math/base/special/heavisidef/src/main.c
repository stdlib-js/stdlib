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

#include "stdlib/math/base/special/heavisidef.h"
#include "stdlib/math/base/assert/is_nanf.h"

/**
* Evaluates the Heaviside function for a single-precision floating-point number.
*
* @param x             input value
* @param continuity    continuity option
* @return              function value
*
* @example
* float y = stdlib_base_heavisidef( 0.0f, STDLIB_BASE_HEAVISIDEF_CONTINUITY_HALF_MAXIMUM );
* // returns 0.5f
*/
float stdlib_base_heavisidef( const float x, const enum STDLIB_BASE_HEAVISIDEF_CONTINUITY continuity ) {
	if ( stdlib_base_is_nanf( x ) ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( x > 0.0f ) {
		return 1.0f;
	}
	// Handle `+-0`...
	if ( x == 0.0f ) {
		switch ( continuity ) {
			case STDLIB_BASE_HEAVISIDEF_CONTINUITY_HALF_MAXIMUM:
				return 0.5f;
			case STDLIB_BASE_HEAVISIDEF_CONTINUITY_LEFT_CONTINUOUS:
				return 0.0f;
			case STDLIB_BASE_HEAVISIDEF_CONTINUITY_RIGHT_CONTINUOUS:
				return 1.0f;
			case STDLIB_BASE_HEAVISIDEF_CONTINUITY_DISCONTINUOUS:
				return 0.0f / 0.0f; // NaN
			default:
				return 0.0f / 0.0f; // NaN
		}
	}
	return 0.0f;
}
