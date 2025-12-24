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

#include "stdlib/stats/base/dists/arcsine/cdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/asin.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/constants/float64/pi.h"

static const double TWO_OVER_PI = 2.0 / STDLIB_CONSTANT_FLOAT64_PI;

/**
* Evaluates the cumulative distribution function (CDF) for an arcsine distribution with minimum support `a` and maximum support `b` at a value `x`.
*
* @param x    input value
* @param a    minimum support
* @param b    maximum support
* @return     evaluated CDF
*
* @example
* double y = stdlib_base_dists_arcsine_cdf( 9.0, 0.0, 10.0 );
* // returns ~0.795
*/
double stdlib_base_dists_arcsine_cdf( const double x, const double a, const double b ) {
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( a ) ||
		stdlib_base_is_nan( b ) ||
		a >= b
	) {
		return 0.0/0.0; // NaN
	}
	if ( x < a ) {
		return 0.0;
	}
	if ( x >= b ) {
		return 1.0;
	}
	return TWO_OVER_PI * stdlib_base_asin( stdlib_base_sqrt( ( x-a ) / ( b-a ) ) );
}
