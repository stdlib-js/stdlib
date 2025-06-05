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

#include "stdlib/stats/base/dists/normal/quantile.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/erfinv.h"
#include "stdlib/constants/float64/sqrt_two.h"

/**
* Evaluates the quantile function for a normal distribution with mean `mu` and standard deviation `sigma` at a probability `p`.
*
* @param p      probability
* @param mu     mean
* @param sigma  standard deviation
* @return       quantile of the normal distribution
*
* @example
* double y = stdlib_base_dists_normal_quantile( 0.8, 0.0, 1.0 );
* // returns ~0.842
*/
double stdlib_base_dists_normal_quantile( const double p, const double mu, const double sigma ) {
	if (
		stdlib_base_is_nan( p ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( sigma ) ||
		sigma < 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( sigma == 0.0 ) {
		return mu;
	}
	return mu + ( ( sigma * STDLIB_CONSTANT_FLOAT64_SQRT2 ) * stdlib_base_erfinv( ( 2.0 * p ) - 1.0 ) );
}
