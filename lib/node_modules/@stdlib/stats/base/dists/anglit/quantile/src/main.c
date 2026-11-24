/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/stats/base/dists/anglit/quantile.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/asin.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/constants/float64/half_pi.h"

/**
* Evaluates the quantile function for an anglit distribution with location parameter `mu` and scale parameter `sigma` at a probability `p`.
*
* @param p        cumulative probability
* @param mu       location parameter
* @param sigma    scale parameter
* @return         evaluated quantile function
*
* @example
* double y = stdlib_base_dists_anglit_quantile( 0.8, 0.0, 1.0 );
* // returns ~0.322
*/
double stdlib_base_dists_anglit_quantile( const double p, const double mu, const double sigma ) {
	if (
		stdlib_base_is_nan( p ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( sigma ) ||
		sigma < 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( sigma == 0.0 ) {
		return mu;
	}
	return mu + ( sigma * ( stdlib_base_asin( stdlib_base_sqrt( p ) ) - ( 0.5 * STDLIB_CONSTANT_FLOAT64_HALF_PI ) ) );
}
