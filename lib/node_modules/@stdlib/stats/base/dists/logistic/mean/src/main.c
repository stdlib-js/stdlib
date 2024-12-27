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

#include "stdlib/stats/base/dists/logistic/mean.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Returns the mean for a logistic distribution with location `mu` and scale `s`.
*
* @param mu   location parameter
* @param s    scale parameter
* @return     mean
*
* @example
* double y = stdlib_base_logistic_mean( 0.0, 1.0 );
* // returns 0.0
*/
double stdlib_base_dists_logistic_mean( const double mu, const double s ) {
	if (
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( s ) ||
		s <= 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	return mu;
}
