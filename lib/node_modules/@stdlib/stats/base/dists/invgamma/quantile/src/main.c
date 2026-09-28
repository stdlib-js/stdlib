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

#include "stdlib/stats/base/dists/invgamma/quantile.h"
#include "stdlib/math/base/special/gammaincinv.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Evaluates the quantile function for an inverse gamma distribution with shape parameter `alpha` and scale parameter `beta` at a probability `p`.
*
* @param p        input value
* @param alpha    shape parameter
* @param beta     scale parameter
* @return         evaluated quantile function
*
* @example
* double y = stdlib_base_dists_invgamma_quantile( 0.8, 2.0, 1.0 );
* // returns ~1.213
*/
double stdlib_base_dists_invgamma_quantile( const double p, const double alpha, const double beta ) {
	if (
		stdlib_base_is_nan( p ) ||
		stdlib_base_is_nan( alpha ) ||
		stdlib_base_is_nan( beta ) ||
		alpha <= 0.0 ||
		beta <= 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0 / 0.0; // NaN
	}
	return beta / stdlib_base_gammaincinv( p, alpha, true );
}
