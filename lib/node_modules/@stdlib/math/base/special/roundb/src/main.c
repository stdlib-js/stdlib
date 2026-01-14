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

#include "stdlib/math/base/special/roundb.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/math/base/special/round.h"
#include "stdlib/math/base/special/roundn.h"
#include "stdlib/math/base/special/pow.h"
#include <stdint.h>

/**
* Rounds a numeric value to the nearest multiple of \\(b^n\\) on a linear scale.
*
* @param x    input value
* @param n    integer power
* @param b    base
* @return     rounded value
*
* @example
* double out = stdlib_base_roundb( 3.141592653589793, -2, 10 );
* // returns 3.14
*/
double stdlib_base_roundb( const double x, const int32_t n, const int32_t b ) {
	double y;
	double s;

	if ( stdlib_base_is_nan( x ) || b <= 0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( stdlib_base_is_infinite( x ) || x == 0.0 ) {
		return x;
	}
	if ( b == 10 ) {
		return stdlib_base_roundn( x, n );
	}
	if ( n == 0 || b == 1 ) {
		return stdlib_base_round( x );
	}
	s = stdlib_base_pow( b, -n );

	// Check for overflow:
	if ( stdlib_base_is_infinite( s ) ) {
		return x;
	}
	y = stdlib_base_round( x * s ) / s;

	// Check for overflow:
	if ( stdlib_base_is_infinite( y ) ) {
		return x;
	}
	return y;
}
