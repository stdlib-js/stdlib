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

#include "stdlib/stats/base/dists/weibull/cdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/expm1.h"
#include "stdlib/math/base/special/pow.h"

/**
* Evaluates the cumulative distribution function (CDF) for a Weibull distribution with shape parameter `k` and scale parameter `lambda` at a value `x`.
*
* @param x         input value
* @param k         shape parameter
* @param lambda    scale parameter
* @return          evaluated CDF
*
* @example
* double y = stdlib_base_dists_weibull_cdf( 2.0, 1.0, 1.0 );
* // returns ~0.865
*/
double stdlib_base_dists_weibull_cdf( const double x, const double k, const double lambda ) {
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( k ) ||
		stdlib_base_is_nan( lambda ) ||
		k <= 0.0 ||
		lambda <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( x < 0.0 ) {
		return 0.0;
	}
	return -stdlib_base_expm1( -stdlib_base_pow( x / lambda, k ) );
}
