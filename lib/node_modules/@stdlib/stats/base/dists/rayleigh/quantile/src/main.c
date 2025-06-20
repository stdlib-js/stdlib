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

#include "stdlib/stats/base/dists/rayleigh/quantile.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/special/sqrt.h"

/**
* Evaluates the quantile function for a Rayleigh distribution with scale parameter `sigma` at a probability `p`.
*
* @param p     input probability
* @param sigma scale parameter
* @return      evaluated quantile function
*
* @example
* double y = stdlib_base_dists_rayleigh_quantile( 0.8, 1.0 );
* // returns ~1.794
*/
double stdlib_base_dists_rayleigh_quantile( const double p, const double sigma ) {
	double s2;
	if (
		stdlib_base_is_nan( p ) ||
		stdlib_base_is_nan( sigma ) ||
		sigma < 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( sigma == 0.0 ) {
		return 0.0;
	}
	s2 = sigma * sigma;
	return stdlib_base_sqrt( -2.0 * s2 * stdlib_base_log1p( -p ) );
}
