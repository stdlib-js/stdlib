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

#include "stdlib/math/base/special/ceilsd.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/log10.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/special/ceil.h"
#include "stdlib/number/float64/base/exponent.h"
#include <stdint.h>

/**
* Rounds a numeric value to the nearest number toward positive infinity with \\(n\\) significant figures.
*
* @param x    input value
* @param n    number of significant figures
* @param b    base
* @return     rounded value
*
* @example
* double out = stdlib_base_ceilsd( 3.141592653589793, 5, 10 );
* // returns 3.1416
*/
double stdlib_base_ceilsd( const double x, const int32_t n, const int32_t b ) {
	double exp;
	double s;
	double y;

	if ( stdlib_base_is_nan( x ) || n < 1 || b <= 0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( stdlib_base_is_infinite( x ) || x == 0.0 ) {
		return x;
	}
	if ( b == 10 ) {
		exp = stdlib_base_log10( stdlib_base_abs( x ) );
	} else if ( b == 2 ) {
		exp = stdlib_base_float64_exponent( stdlib_base_abs( x ) );
	} else {
		exp = stdlib_base_ln( stdlib_base_abs( x ) ) / stdlib_base_ln( (double)b );
	}
	exp = stdlib_base_floor( exp - (double)n + 1.0 );
	s = stdlib_base_pow( (double)b, stdlib_base_abs( exp ) );

	// Check for overflow:
	if ( stdlib_base_is_infinite( s ) ) {
		return x;
	}

	// To avoid numerical stability issues due to floating-point rounding error (e.g., 3.55/0.1-35.5 = -7.105427357601e-15 and 3.55*10-35.5 = 0), we must treat positive and negative exponents separately.
	if ( exp < 0 ) {
		y = stdlib_base_ceil( x * s ) / s;
	} else {
		y = stdlib_base_ceil( x / s ) * s;
	}

	// Check for overflow:
	if ( stdlib_base_is_infinite( y ) ) {
		return x;
	}
	return y;
}
