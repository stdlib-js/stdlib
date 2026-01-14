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

#include "stdlib/math/base/special/round10.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/ceil.h"
#include "stdlib/math/base/special/log10.h"
#include "stdlib/constants/float64/max_base10_exponent.h"
#include "stdlib/constants/float64/min_base10_exponent_subnormal.h"

// 10^308:
static const double HUGE_VALUE = 1.0e308;

// 10^-323
static const double TINY_VALUE = 1.0e-323;

/**
* Rounds a numeric value to the nearest power of `10` on a linear scale.
*
* @param x    input value
* @return     rounded value
*
* @example
* double out = stdlib_base_round10( 3.141592653589793 );
* // returns 1.0
*/
double stdlib_base_round10( const double x ) {
	double sign;
	double half;
	double p1;
	double p2;
	double y1;
	double y2;
	double xc;
	double p;

	if ( stdlib_base_is_nan( x ) || stdlib_base_is_infinite( x ) || x == 0.0 ) {
		return x;
	}
	xc = x;
	if ( xc < 0 ) {
		xc = -xc;
		sign = -1.0;
	} else {
		sign = 1.0;
	}

	// Solve the equation `10^p = x` for `p`:
	p = stdlib_base_log10( xc );

	// Find the previous and next integer powers:
	p1 = stdlib_base_floor( p );
	p2 = stdlib_base_ceil( p );

	// Handle tiny:
	if ( p1 == STDLIB_CONSTANT_FLOAT64_MIN_BASE10_EXPONENT_SUBNORMAL ) {
		return sign * TINY_VALUE;
	}

	// Handle huge:
	if ( p1 == STDLIB_CONSTANT_FLOAT64_MAX_BASE10_EXPONENT ) {
		return sign * HUGE_VALUE;
	}

	// Compute previous and next powers of 10:
	y1 = stdlib_base_pow( 10.0, p1 );
	y2 = stdlib_base_pow( 10.0, p2 );

	// Find the closest power of 10:
	half = ( y2 - y1 ) / 2.0;
	if ( y1 + half > xc ) {
		return sign * y1;
	}
	return sign * y2;
}
