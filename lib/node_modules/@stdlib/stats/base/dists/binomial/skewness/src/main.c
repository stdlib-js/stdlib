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

#include "stdlib/stats/base/dists/binomial/skewness.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/sqrt.h"
#include <stdint.h>

/**
* Returns the skewness of a binomial distribution.
*
* @param n  number of trials
* @param p  success probability
* @return   skewness
*
* @example
* double y = stdlib_base_dists_binomial_skewness( 100, 0.1 );
* // returns ~0.267
*/
double stdlib_base_dists_binomial_skewness( const int32_t n, const double p ) {
	if (
		stdlib_base_is_nan( p ) ||
		n < 0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0 / 0.0;
	}
	return ( 1.0 - ( 2.0*p ) ) / stdlib_base_sqrt( n * p * (1.0 - p) );
}
