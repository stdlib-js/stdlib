/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/stats/base/dists/rayleigh/mean.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/sqrt_half_pi.h"

/**
* Returns the mean of a Rayleigh distribution.
*
* @param sigma    scale parameter
* @return         mean
*
* @example
* double y = stdlib_base_dists_rayleigh_mean( 9.0 );
* // returns ~11.253
*/
double stdlib_base_dists_rayleigh_mean( const double sigma ) {
	if (
		stdlib_base_is_nan( sigma ) ||
		sigma < 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	return sigma * STDLIB_CONSTANT_FLOAT64_SQRT_HALF_PI;
}
