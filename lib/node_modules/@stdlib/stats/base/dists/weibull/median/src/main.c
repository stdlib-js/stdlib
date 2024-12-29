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

#include "stdlib/stats/base/dists/weibull/median.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/constants/float64/ln_two.h"

/**
* Returns the median of a Weibull distribution.
*
* @param k         scale parameter
* @param lambda    shape parameter
* @return          median
*
* @example
* double y = stdlib_base_weibull_median( 1.0, 1.0 );
* // returns ~0.693
*/
double stdlib_base_dists_weibull_median( const double k, const double lambda ) {
	if (
		stdlib_base_is_nan( k ) ||
		stdlib_base_is_nan( lambda ) ||
		k <= 0.0 ||
		lambda <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	return lambda * stdlib_base_pow( STDLIB_CONSTANT_FLOAT64_LN2, 1.0/k );
}
