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

#include "stdlib/stats/base/dists/levy/median.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/erfcinv.h"
#include "stdlib/math/base/special/pow.h"

static const double DENOM = 0.4549364231195728; // 2.0 * stdlib_base_pow( stdlib_base_erfcinv( 0.5 ), 2.0 )

/**
* Returns the median for a Lévy distribution with location `mu` and scale `c`.
*
* @param mu    location parameter
* @param c     scale parameter
* @return      median
*
* @example
* double y = stdlib_base_dists_levy_median( 9.0, 0.0, 10.0 );
* // returns ~0.795
*/
double stdlib_base_dists_levy_median( const double mu, const double c ) {
	if (
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( c ) ||
		c <= 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	return mu + ( c / DENOM );
}
