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

#include "stdlib/stats/base/dists/geometric/quantile.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/special/max.h"

/**
* Evaluates the quantile function of a geometric distribution.
*
* @param r   input probability
* @param p   success probability
* @return    quantile function value
*
* @example
* double y = stdlib_base_dists_geometric_quantile( 0.5, 0.1 );
* // returns 6.0
*/
double stdlib_base_dists_geometric_quantile( const double r, const double p ) {
	if (
		stdlib_base_is_nan( r ) ||
		stdlib_base_is_nan( p ) ||
		p < 0.0 ||
		p > 1.0 ||
		r < 0.0 ||
		r > 1.0
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( r == 1.0 ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	return stdlib_base_max( 0.0, stdlib_base_floor( stdlib_base_ln( 1.0 - r ) / stdlib_base_ln( 1.0 - p ) ) );
}
