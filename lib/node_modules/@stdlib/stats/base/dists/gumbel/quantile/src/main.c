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

#include "stdlib/stats/base/dists/gumbel/quantile.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"

/**
* Evaluates the quantile function for a Gumbel distribution with location `mu` and scale `beta`.
*
* @param p     probability
* @param mu    location parameter
* @param beta  scale parameter
* @return      evaluated quantile
*
* @example
* double y = stdlib_base_dists_gumbel_quantile( 0.8, 0.0, 1.0 );
* // returns ~1.5
*/
double stdlib_base_dists_gumbel_quantile( const double p, const double mu, const double beta ) {
	if (
		stdlib_base_is_nan( p ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( beta ) ||
		beta <= 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0 / 0.0; // NaN
	}
	return mu - beta * stdlib_base_ln( -stdlib_base_ln( p ) );
}
