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

#include "stdlib/stats/base/dists/triangular/skewness.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/constants/float64/sqrt_two.h"

/**
* Returns the skewness of a triangular distribution.
*
* @param a    minimum support
* @param b    maximum support
* @param c    mode
* @return     skewness
*
* @example
* double y = stdlib_base_triangular_skewness( 0.0, 1.0, 0.5 );
* // returns 0.0
*/
double stdlib_base_dists_triangular_skewness( const double a, const double b, const double c ) {
	if (
		stdlib_base_is_nan( a ) ||
		stdlib_base_is_nan( b ) ||
		stdlib_base_is_nan( c ) ||
		!( a <= c && c <= b )
	) {
		return 0.0/0.0; // NaN
	}
	double out = STDLIB_CONSTANT_FLOAT64_SQRT2 * ( a + b - (2*c) ) * ( (2*a) - b - c ) * ( a - (2*b) + c );
	out /= 5.0 * stdlib_base_pow( (a*a) + (b*b) + (c*c) - (a*b) - (a*c) - (b*c), 1.5 );
	return out;
}
