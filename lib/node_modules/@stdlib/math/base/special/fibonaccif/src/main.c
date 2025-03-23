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

#include "stdlib/math/base/special/fibonaccif.h"
#include "stdlib/constants/float32/max_safe_nth_fibonacci.h"

static const int32_t fibonacci_value[ 37 ] = {
	0,
	1,
	1,
	2,
	3,
	5,
	8,
	13,
	21,
	34,
	55,
	89,
	144,
	233,
	377,
	610,
	987,
	1597,
	2584,
	4181,
	6765,
	10946,
	17711,
	28657,
	46368,
	75025,
	121393,
	196418,
	317811,
	514229,
	832040,
	1346269,
	2178309,
	3524578,
	5702887,
	9227465,
	14930352
};

/**
* Computes the nth Fibonacci number as a single-precision floating-point number.
*
* @param n    input value
* @return     output value
*
* @example
* float out = stdlib_base_fibonaccif( 1 );
* // returns 1.0f
*/
float stdlib_base_fibonaccif( const int32_t n ) {
	if ( n < 0 || n > STDLIB_CONSTANT_FLOAT32_MAX_SAFE_NTH_FIBONACCI ) {
		return 0.0 / 0.0; // NaN
	}
	return fibonacci_value[ n ];
}
