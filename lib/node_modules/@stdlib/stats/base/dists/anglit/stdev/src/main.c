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

#include "stdlib/stats/base/dists/anglit/stdev.h"
#include "stdlib/math/base/assert/is_nan.h"

static const double STDEV_CONST = 0.3418336950449515; // sqrt( (π²/16) - (1/2) )

/**
* Returns the standard deviation for an anglit distribution with location parameter `mu` and scale parameter `sigma`.
*
* @param mu      location parameter
* @param sigma   scale parameter
* @return        standard deviation
*
* @example
* double y = stdlib_base_dists_anglit_stdev( 0.0, 1.0 );
* // returns ~0.342
*/
double stdlib_base_dists_anglit_stdev( const double mu, const double sigma ) {
	if (
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( sigma ) ||
		sigma <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	return sigma * STDEV_CONST;
}
