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

#include "stdlib/stats/base/dists/degenerate/quantile.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Evaluates the quantile function for a degenerate distribution centered at `mu`.
*
* @param p    input value
* @param mu   constant value of the distribution
* @return     evaluated quantile function
*
* @example
* double y = stdlib_base_dists_degenerate_quantile( 0.5, 2.0 );
* // returns 2.0
*/
double stdlib_base_dists_degenerate_quantile( const double p, const double mu ) {
	if ( stdlib_base_is_nan( p ) || p < 0.0 || p > 1.0 ) {
		return 0.0 / 0.0; // NaN
	}
	return mu;
}
