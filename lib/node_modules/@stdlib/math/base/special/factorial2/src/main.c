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
#include "stdlib/math/base/assert/is_even.h"
#include "stdlib/math/base/assert/is_nonnegative_integer.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/max_nth_double_factorial.h"

/**
* Evaluates the double factorial of `n`.
*
* @param n         input value
* @return          double factorial
*
* @example
* double v = stdlib_base_factorial2( 3.0 );
* // returns 3.0
*/
double stdlib_base_factorial2( const double n ) {
	double last;
	double out;
	double v;
	double i;
	if ( !stdlib_base_is_nonnegative_integer( n ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( n > STDLIB_CONSTANT_FLOAT64_MAX_NTH_DOUBLE_FACTORIAL ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	v = n;
	if ( v == 0.0 || v == 1.0 ) {
		return 1.0;
	}
	if ( stdlib_base_is_even( v ) ) {
		last = 2.0;
	} else {
		last = 3.0;
	}
	out = 1.0;
	for ( i = v; i >= last; i -= 2.0 ) {
		out *= i;
	}
	return out;
}
