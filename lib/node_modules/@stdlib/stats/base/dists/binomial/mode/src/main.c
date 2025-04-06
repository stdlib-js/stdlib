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

#include "stdlib/stats/base/dists/binomial/mode.h"
#include "stdlib/math/base/special/floor.h"

/**
* Returns the mode of a binomial distribution.
*
* @param n    number of trials
* @param p    success probability
* @return     mode
*
* @example
* double y = stdlib_base_dists_binomial_mode( 100, 0.1 );
* // returns 10.0
*/
double stdlib_base_dists_binomial_mode( const int32_t n, const double p ) {
	if (
		n < 0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0 / 0.0;
	}
	return stdlib_base_floor( ( n + 1.0 ) * p );
}
