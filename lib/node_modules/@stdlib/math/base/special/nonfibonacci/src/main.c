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

#include <stdint.h>

#include "stdlib/constants/float64/nan.h"
#include "stdlib/constants/float64/phi.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/math/base/assert/is_integer.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/special/ln.h"

#define SQRT5 2.23606797749979
#define LN_PHI 0.48121182506

/**
* Computes the nth non-Fibonacci number.
*
* @param x    input value
* @return     output value
*
* @example
* double y = stdlib_base_nonfibonacci( 2 );
* // returns 6.0
*
* @example
* double y = stdlib_base_nonfibonacci( 1 );
* // returns 4.0
*
* @example
* double y = stdlib_base_nonfibonacci( 3 );
* // returns 7.0
*
* @example
* double y = stdlib_base_nonfibonacci( NaN );
* // returns NaN
*
* @example
* double y = stdlib_base_nonfibonacci( 3.14 );
* // returns NaN
*
* @example
* double y = stdlib_base_nonfibonacci( -1 );
* // returns NaN
*/
double stdlib_base_nonfibonacci( const int32_t n ) {
	double a;
	double b;
	int32_t mut_n = n;

	if (
		stdlib_base_is_nan( n ) ||
		!stdlib_base_is_integer( n ) ||
		n < 1.0 ||
		n == STDLIB_CONSTANT_FLOAT64_PINF
	) {
		return STDLIB_CONSTANT_FLOAT64_NAN;
	}

	mut_n += 1;
	a = stdlib_base_ln( mut_n * SQRT5 ) / LN_PHI;
	b = stdlib_base_ln( (SQRT5 * (mut_n + a)) - 5.0 + (3.0 / mut_n) ) / LN_PHI;

	return stdlib_base_floor( mut_n + b - 2.0 );
}
