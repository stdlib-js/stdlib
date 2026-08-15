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

#include "stdlib/math/base/special/floor2f.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_infinitef.h"
#include "stdlib/math/base/special/powf.h"
#include "stdlib/math/base/special/floorf.h"
#include "stdlib/math/base/special/ceilf.h"
#include "stdlib/constants/float32/max_base2_exponent.h"
#include "stdlib/constants/float32/min_base2_exponent_subnormal.h"
#include "stdlib/constants/float32/ninf.h"

/**
* Define prototypes for external functions.
*/
extern float log2f( const float x );

/**
* Rounds a single-precision floating point number to the nearest power of two toward negative infinity.
*
* @param x    input value
* @return     rounded value
*
* @example
* float y = stdlib_base_floor2f( 3.141592653589793f );
* // returns 2.0f
*/
float stdlib_base_floor2f( const float x ) {
	float sign;
	float xc;
	float p;

	if ( stdlib_base_is_nanf( x ) || stdlib_base_is_infinitef( x ) || x == 0.0f ) {
		return x;
	}
	xc = x;
	if ( x < 0.0f ) {
		xc = -xc;
		sign = -1.0f;
	} else {
		sign = 1.0f;
	}
	// Solve the equation `2^p = x` for `p`:
	p = log2f( xc );

	// If provided the smallest subnormal, no rounding possible:
	if ( p == STDLIB_CONSTANT_FLOAT32_MIN_BASE2_EXPONENT_SUBNORMAL ) {
		return sign * xc;
	}
	// Determine a power of two which rounds the input value toward negative infinity:
	if ( sign == 1.0f ) {
		p = stdlib_base_floorf( p );
	} else {
		p = stdlib_base_ceilf( p );
	}
	// Handle overflow:
	if ( p > STDLIB_CONSTANT_FLOAT32_MAX_BASE2_EXPONENT ) {
		return STDLIB_CONSTANT_FLOAT32_NINF;
	}
	return sign * stdlib_base_powf( 2.0f, p );
}
