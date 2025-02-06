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

#include "stdlib/stats/base/dists/degenerate/cdf.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Evaluates the CDF of a degenerate distribution centered at `mu`.
*
* @param x     input value
* @param mu    constant value of distribution
* @return      evaluated CDF
*
* @example
* double y = stdlib_base_dists_degenerate_cdf( 2.0, 3.0 );
* // returns 0.0
*/
double stdlib_base_dists_degenerate_cdf( const double x, const double mu ) {
	if ( stdlib_base_is_nan( x ) || stdlib_base_is_nan( mu ) ) {
		return 0.0 / 0.0;
	}
	return (x < mu) ? 0.0 : 1.0;
}
