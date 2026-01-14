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

#include "stdlib/math/base/special/floor10.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/special/ceil.h"
#include "stdlib/math/base/special/log10.h"
#include "stdlib/constants/float64/max_base10_exponent.h"
#include "stdlib/constants/float64/min_base10_exponent_subnormal.h"
#include "stdlib/constants/float64/ninf.h"

/**
* Rounds a numeric value to the nearest power of `10` toward negative infinity.
*
* @param x    input value
* @return     rounded value
*
* @example
* double y = stdlib_base_floor10( 3.141592653589793 );
* // returns 1.0
*/
double stdlib_base_floor10( const double x ) {
	double sign;
	double xc;
	double p;

	if ( stdlib_base_is_nan( x ) || stdlib_base_is_infinite( x ) || x == 0.0 ) {
		return x;
	}
	xc = x;
	if ( x < 0 ) {
		xc = -xc;
		sign = -1.0;
	} else {
		sign = 1.0;
	}

	// Solve the equation `10^p = x` for `p`:
	p = stdlib_base_log10( xc );

	// Determine a power of `10` which rounds the input value toward negative infinity:
	if ( sign == 1.0 ) {
		p = stdlib_base_floor( p );
	} else {
		p = stdlib_base_ceil( p );
	}

	// Handle underflow:
	if ( p <= STDLIB_CONSTANT_FLOAT64_MIN_BASE10_EXPONENT_SUBNORMAL ) {
		return sign * 0.0; // sign-preserving
	}

	// Handle overflow:
	if ( p > STDLIB_CONSTANT_FLOAT64_MAX_BASE10_EXPONENT ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	return sign * stdlib_base_pow( 10.0, p );
}
