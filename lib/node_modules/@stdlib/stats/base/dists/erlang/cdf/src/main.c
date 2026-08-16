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

#include "stdlib/stats/base/dists/erlang/cdf.h"
#include "stdlib/math/base/assert/is_nonnegative_integer.h"
#include "stdlib/stats/base/dists/gamma/cdf.h"

/**
* Evaluates the cumulative distribution function (CDF) for an Erlang distribution with shape parameter `k` and rate parameter `lambda` at a value `x`.
*
* @param x         input value
* @param k         shape parameter
* @param lambda    rate parameter
* @return          evaluated CDF
*
* @example
* double y = stdlib_base_dists_erlang_cdf( 2.0, 1, 1.0 );
* // returns ~0.865
*/
double stdlib_base_dists_erlang_cdf( const double x, const double k, const double lambda ) {
	if ( !stdlib_base_is_nonnegative_integer( k ) ) {
		return 0.0 / 0.0; // NaN
	}
	return stdlib_base_dists_gamma_cdf( x, k, lambda );
}
