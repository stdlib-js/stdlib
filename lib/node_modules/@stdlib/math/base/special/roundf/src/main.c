/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/math/base/special/roundf.h"
#include "stdlib/math/base/special/floorf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_negative_zerof.h"

/**
* Rounds a single-precision floating-point number to the nearest integer.
*
* @param x    input value
* @return     output value
*
* @example
* float out = stdlib_base_roundf( -4.2 );
* // returns -4.0
*/
float stdlib_base_roundf( const float x ) {
	if ( stdlib_base_is_nanf( x ) ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( stdlib_base_is_negative_zerof( x ) || ( x >= -0.5f && x < 0.0f ) ) {
		return -0.0f; // -0
	}
	if ( x > 0.0f && x < 0.5f ) {
		return 0.0f; // 0
	}

	// If the magnitude is big enough, there's no place for the fraction part. If we try to add 0.5 to this number, 1.0 will be added instead...
	if ( x >= 8388608.0f || x <= -8388608.0f ) {
		return x;
	}
	return stdlib_base_floorf( x + 0.5f );
}
