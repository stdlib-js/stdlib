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

#include "stdlib/math/base/special/factorial2.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_integer.h"
#include "stdlib/math/base/assert/is_even.h"
#include "stdlib/constants/float64/pinf.h"
#include <stdint.h>

#define MAX_FACTORIAL2 301

/**
* Evaluates the double factorial of `n`.
*
* @param x         input value
* @return          double factorial
*
* @example
* double v = stdlib_base_factorial2( 3 );
* // returns 3
*/
double stdlib_base_factorial2( const int32_t n ) {
	int32_t last;
	double out;
	int32_t v;
	int32_t i;
	if ( stdlib_base_is_nan( n ) ) {
		return 0.0/0.0; // NaN
	}
	if ( n >= MAX_FACTORIAL2 ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	if ( n < 0 || !stdlib_base_is_integer( n ) ) {
		return 0.0/0.0;
	}
	v = n;
	if ( v == 0 || v == 1 ) {
		return 1;
	}
	if ( stdlib_base_is_even( v ) ) {
		last = 2;
	} else {
		last = 3;
	}
	out = 1;
	for ( i = v; i >= last; i -= 2 ) {
		out *= i;
	}
	return out;
}
