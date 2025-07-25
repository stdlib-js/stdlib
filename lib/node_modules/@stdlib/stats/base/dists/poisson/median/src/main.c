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

#include "stdlib/stats/base/dists/poisson/median.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/floor.h"

/**
* Returns the median of a Poisson distribution with parameter `lambda`.
*
* @param lambda  mean parameter
* @return        median
*
* @example
* double y = stdlib_base_dists_poisson_median( 9.0 );
* // returns 9
*/
double stdlib_base_dists_poisson_median( const double lambda ) {
	if (
		stdlib_base_is_nan( lambda ) ||
		lambda < 0.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( lambda == 0.0 ) {
		return 0.0;
	}
	return stdlib_base_floor( lambda + ( 1.0 / 3.0 ) - ( 0.02 / lambda ) );
}
