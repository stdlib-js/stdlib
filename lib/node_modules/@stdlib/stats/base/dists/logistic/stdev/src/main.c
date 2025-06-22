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

#include "stdlib/stats/base/dists/logistic/stdev.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/pi.h"
#include "stdlib/constants/float64/sqrt_three.h"

static const double PI_OVER_SQRT_THREE = 1.8137993642342178; // π divided by the square root of 3

/**
* Returns the standard deviation for a logistic distribution with location `mu` and scale `s`.
*
* @param mu    location parameter
* @param s     scale parameter
* @return      standard deviation
*
* @example
* double y = stdlib_base_dists_logistic_stdev( 0.0, 1.0 );
* // returns ~1.814
*/
double stdlib_base_dists_logistic_stdev( const double mu, const double s ) {
	if (
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( s ) ||
		s <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	return s * PI_OVER_SQRT_THREE;
}
