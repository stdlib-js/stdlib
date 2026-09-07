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

#include "stdlib/stats/base/dists/wald/variance.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Returns the variance for a Wald distribution with mean `mu` and shape parameter `lambda`.
*
* @param mu       mean
* @param lambda   shape parameter
* @return         variance
*
* @example
* double y = stdlib_base_dists_wald_variance( 4.0, 3.0 );
* // returns ~21.33
*/
double stdlib_base_dists_wald_variance( const double mu, const double lambda ) {
	if (
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( lambda ) ||
		lambda <= 0.0 ||
		mu <= 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	return (mu * mu * mu) / lambda;
}
