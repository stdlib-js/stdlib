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

#include "stdlib/math/base/special/fibonacci_index.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_integer.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/round.h"
#include "stdlib/constants/float64/phi.h"
#include "stdlib/constants/float64/pinf.h"

static const double SQRT_5 = 2.23606797749979;

/**
* Computes the Fibonacci number index.
*
* ## Notes
*
* -   We use `round` instead of `floor` due to errors introduced by floating-point precision.
*
* @param F    Fibonacci number
* @return     Fibonacci number index
*
* @example
* double out = stdlib_base_fibonacci_index( 2 );
* // returns 3
*/
double stdlib_base_fibonacci_index( const double F ) {
	double x;

	if ( stdlib_base_is_nan( F ) || stdlib_base_is_integer( F ) == false || F <= 1 || F == STDLIB_CONSTANT_FLOAT64_PINF ) {
		return 0.0 / 0.0; // NaN
	}
	x = ( F * SQRT_5 ) + 0.5;
	return stdlib_base_round( stdlib_base_ln( x ) / stdlib_base_ln( STDLIB_CONSTANT_FLOAT64_PHI ) );
}
