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

#include "stdlib/math/base/special/binet.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/cospi.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/constants/float64/phi.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/ninf.h"

static const double SQRT_5 = 2.23606797749979;

/**
* Evaluates Binet's formula extended to real numbers.
*
* ## Notes
*
* -   [Non integer Fibonacci numbers][1]
* -   [Interpolated Fibonacci numbers - real or complex][2]
*
* [1]: https://math.stackexchange.com/questions/798190/non-integer-fibonacci-numbers
* [2]: https://math.stackexchange.com/questions/589841/interpolated-fibonacci-numbers-real-or-complex
*
* @param x    input value
* @return     real-valued result
*
* @example
* double y = stdlib_base_binet( 2.0 );
* // returns 1.0
*/
double stdlib_base_binet( const double x ) {
	double a;
	double b;

	if ( stdlib_base_is_nan( x ) || x == STDLIB_CONSTANT_FLOAT64_PINF || x == STDLIB_CONSTANT_FLOAT64_NINF ) {
		return 0.0 / 0.0; // NaN
	}
	a = stdlib_base_pow( STDLIB_CONSTANT_FLOAT64_PHI, x );
	b = stdlib_base_cospi( x ) / a;
	return ( a - b ) / SQRT_5;
}
