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

#include "stdlib/math/base/special/trunc2f.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_infinitef.h"
#include "stdlib/math/base/special/frexpf.h"
#include "stdlib/math/base/special/ldexpf.h"
#include <stdint.h>

/**
* Rounds a single-precision floating-point number to the nearest power of two toward zero.
*
* @param x    input value
* @return     rounded value
*
* @example
* float y = stdlib_base_trunc2f( 13.0f );
* // returns 8.0f
*/
float stdlib_base_trunc2f( const float x ) {
	int32_t exp;
	float frac;
	float sign;

	if ( stdlib_base_is_nanf( x ) || stdlib_base_is_infinitef( x ) || x == 0.0f ) {
		return x;
	}
	if ( x < 0.0f ) {
		sign = -1.0f;
	} else {
		sign = 1.0f;
	}
	// Decompose `|x|` into a normalized fraction and an integer power of two (i.e., `|x| = frac * 2^exp`, where `frac` is on the interval `[0.5, 1)`):
	stdlib_base_frexpf( x, &frac, &exp );

	// The largest power of two less than or equal to `|x|` is `2^(exp-1)`:
	return sign * stdlib_base_ldexpf( 1.0f, exp-1 );
}
