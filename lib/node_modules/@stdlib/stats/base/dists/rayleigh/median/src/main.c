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

#include "stdlib/stats/base/dists/rayleigh/median.h"
#include "stdlib/math/base/assert/is_nan.h"

static const double SQRT2LN2 = 1.1774100225154747; // sqrt(2*ln(2))

/**
* Returns the median of a Rayleigh distribution.
*
* @param sigma    scale parameter
* @return         median
*
* @example
* double y = stdlib_base_dists_rayleigh_median( 9.0 );
* // returns ~10.595
*/
double stdlib_base_dists_rayleigh_median( const double sigma ) {
	if ( stdlib_base_is_nan( sigma ) || sigma < 0 ) {
		return 0.0 / 0.0; // NaN
	}
	return sigma * SQRT2LN2;
}
