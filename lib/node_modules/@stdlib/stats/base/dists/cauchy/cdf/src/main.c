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

#include "stdlib/stats/base/dists/cauchy/cdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/atan2.h"

static const double ONE_OVER_PI = 0.3183098861837907;

/**
* Evaluates the cumulative distribution function (CDF) for a Cauchy distribution with location parameter `x0` and scale parameter `gamma` at a value `x`.
*
* @param x         input value
* @param x0    	   location parameter
* @param gamma     scale parameter
* @return          evaluated CDF
*
* @example
* double y = stdlib_base_cauchy_cdf( 4.0, 0.0, 2.0 );
* // returns ~0.852
*/
double stdlib_base_dists_cauchy_cdf( const double x, const double x0, const double gamma ) {
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( gamma ) ||
		stdlib_base_is_nan( x0 ) ||
		gamma <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	return ( ONE_OVER_PI * stdlib_base_atan2( x-x0, gamma ) ) + 0.5;
}
