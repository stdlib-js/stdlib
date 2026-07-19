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

#include "stdlib/stats/base/dists/rayleigh/stdev.h"
#include "stdlib/math/base/assert/is_nan.h"

static const double STDLIB_CONSTANT_FLOAT64_SQRT2 = 1.4142135623730950488;
static const double SQRT4MPI = 0.9265027503522085;

/**
* Returns the standard deviation of a Rayleigh distribution.
*
* @param sigma   scale parameter
* @return        standard deviation
*
* @example
* double v = stdlib_base_dists_rayleigh_stdev( 9.0 );
* // returns ~5.896
*/
double stdlib_base_dists_rayleigh_stdev( const double sigma ) {
	if (
		stdlib_base_is_nan( sigma ) ||
		sigma < 0.0
	) {
		return 0.0/0.0; // NaN
	}
	return SQRT4MPI * sigma / STDLIB_CONSTANT_FLOAT64_SQRT2;
}
