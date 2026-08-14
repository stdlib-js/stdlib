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

#include "stdlib/math/base/special/factorial2f.h"
#include "stdlib/math/base/assert/is_evenf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/constants/float32/pinf.h"
#include "stdlib/constants/float32/max_nth_double_factorial.h"
#include "stdlib/math/base/assert/is_nonnegative_integerf.h"

/**
* Evaluates the double factorial of `n` as a single-precision floating-point number.
*
* @param n         input value
* @return          double factorial
*
* @example
* float v = stdlib_base_factorial2f( 3.0f );
* // returns 3.0f
*/
float stdlib_base_factorial2f( const float n ) {
	float last;
	float out;
	float i;

	if ( stdlib_base_is_nanf( n ) || !stdlib_base_is_nonnegative_integerf( n ) ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( n > STDLIB_CONSTANT_FLOAT32_MAX_NTH_DOUBLE_FACTORIAL ) {
		return STDLIB_CONSTANT_FLOAT32_PINF;
	}
	if ( n == 0.0f || n == 1.0f ) {
		return 1.0f;
	}
	if ( stdlib_base_is_evenf( n ) ) {
		last = 2.0f;
	} else {
		last = 3.0f;
	}
	out = 1.0f;
	for ( i = n; i >= last; i -= 2.0f ) {
		out *= i;
	}
	return out;
}
