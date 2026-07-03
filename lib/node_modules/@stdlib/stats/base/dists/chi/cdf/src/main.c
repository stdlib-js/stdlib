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

#include "stdlib/stats/base/dists/chi/cdf.h"
#include "stdlib/stats/base/dists/gamma/cdf.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Evaluates the cumulative distribution function (CDF) for a chi distribution with degrees of freedom `k` at a value `x`.
*
* @param x      input value
* @param k      degrees of freedom
* @return       evaluated CDF
*
* @example
* double y = stdlib_base_dists_chi_cdf( 2.0, 3.0 );
* // returns ~0.739
*/
double stdlib_base_dists_chi_cdf( const double x, const double k ) {
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( k ) ||
		k < 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( k == 0.0 ) {
		return ( x < 0.0 ) ? 0.0 : 1.0;
	}
	if ( x <= 0.0 ) {
		return 0.0;
	}
	return stdlib_base_dists_gamma_cdf( x * x, k / 2.0, 0.5 );
}
