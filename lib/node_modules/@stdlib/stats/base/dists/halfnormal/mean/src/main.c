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

#include "stdlib/stats/base/dists/halfnormal/mean.h"
#include "stdlib/math/base/assert/is_nan.h"

static const double SQRT_TWO_OVER_PI = 0.7978845608028654; // sqrt(2/π)

/**
* Returns the expected value for a half-normal distribution with scale parameter `sigma`.
*
* @param sigma  scale parameter
* @return       expected value
*
* @example
* double y = stdlib_base_dists_halfnormal_mean( 1.0 );
* // returns ~0.798
*/
double stdlib_base_dists_halfnormal_mean( const double sigma ) {
	if ( stdlib_base_is_nan( sigma ) || sigma <= 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	return sigma * SQRT_TWO_OVER_PI;
}
