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

#include "stdlib/stats/base/dists/cauchy/quantile.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/tan.h"
#include "stdlib/constants/float64/pi.h"

/**
* Evaluates the quantile function for a Cauchy distribution with probability `p`, location parameter `x0` and scale parameter `gamma`.
*
* @param p        input probability
* @param x0       location parameter
* @param gamma    scale parameter
* @return         evaluated quantile
*
* @example
* double y = stdlib_base_dists_cauchy_quantile( 0.3, 2.0, 2.0 );
* // returns ~0.547
*/
double stdlib_base_dists_cauchy_quantile( const double p, const double x0, const double gamma ) {
	if (
		stdlib_base_is_nan( p ) ||
		stdlib_base_is_nan( gamma ) ||
		stdlib_base_is_nan( x0 ) ||
		gamma <= 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0/0.0; // NaN
	}
	return x0 + gamma * stdlib_base_tan( STDLIB_CONSTANT_FLOAT64_PI * ( p - 0.5 ) );
}
