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

#include "stdlib/math/base/special/hypotf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_infinitef.h"
#include "stdlib/math/base/special/sqrtf.h"
#include "stdlib/constants/float32/pinf.h"

/**
* Computes the hypotenuse avoiding overflow and underflow (single-precision).
*
* @param x       number
* @param y       number
* @return        hypotenuse
*
* @example
* float h = stdlib_base_hypotf( 5.0f, 12.0f );
* // returns 13.0
*/
float stdlib_base_hypotf( const float x, const float y ) {
	float tmp;
	float a;
	float b;
	if ( stdlib_base_is_nanf( x ) || stdlib_base_is_nanf( y ) ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( stdlib_base_is_infinitef( x ) || stdlib_base_is_infinitef( y ) ) {
		return STDLIB_CONSTANT_FLOAT32_PINF;
	}
	a = x;
	b = y;
	if ( a < 0.0f ) {
		a = -a;
	}
	if ( b < 0.0f ) {
		b = -b;
	}
	if ( a < b ) {
		tmp = b;
		b = a;
		a = tmp;
	}
	if ( a == 0.0f ) {
		return 0.0f;
	}
	b /= a;
	return a * stdlib_base_sqrtf( 1.0f + ( b * b ) );
}
