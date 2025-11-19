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

#include "stdlib/stats/base/dists/binomial/kurtosis.h"
#include "stdlib/math/base/assert/is_nan.h"
#include <stdint.h>

/**
* Returns the excess kurtosis of a binomial distribution with number of trials `n` and success probability `p`.
*
* @param n  number of trials
* @param p  success probability
* @return   excess kurtosis
*
* @example
* double y = stdlib_base_dists_binomial_kurtosis( 100, 0.1 );
* // returns ~0.051
*/
double stdlib_base_dists_binomial_kurtosis( const int32_t n, const double p ) {
	if (
		stdlib_base_is_nan( p ) ||
		n < 0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0 / 0.0;
	}
	const double pq = p * ( 1.0 - p );
	return ( 1.0 - ( 6.0 * pq ) ) / ( (double)n * pq );
}
