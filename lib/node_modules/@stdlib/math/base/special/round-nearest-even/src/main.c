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

#include "stdlib/math/base/special/round_nearest_even.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_even.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include <stdint.h>

/**
* Rounds a double-precision floating-point number to the nearest integer value with ties rounding to the nearest even integer.
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_round_nearest_even( -4.2 );
* // returns -4.0
*/
double stdlib_base_round_nearest_even( const double x ) {
	double integer;
	double frac;

	if ( stdlib_base_is_nan( x ) || stdlib_base_is_infinite( x ) || x == 0.0 ) {
		return x;
	}
	integer = stdlib_base_floor( x );
	frac = x - integer;
	if ( frac > 0.5 ) { // Round up
		return integer + 1.0;
	}
	if ( frac < 0.5 ) { // Round down
		return integer;
	}
	// Tie case where we round to the nearest even integer:
	return stdlib_base_is_even( integer ) ? integer : integer + 1.0;
}
