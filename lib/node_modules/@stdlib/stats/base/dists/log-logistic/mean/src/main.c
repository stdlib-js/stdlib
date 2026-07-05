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

#include "stdlib/stats/base/dists/log-logistic/mean.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/sin.h"
#include "stdlib/constants/float64/pi.h"

/**
* Returns the mean of a log-logistic distribution with scale parameter `alpha` and shape parameter `beta`.
*
* @param alpha    scale parameter
* @param beta     shape parameter
* @return         mean
*
* @example
* double v = stdlib_base_dists_log_logistic_mean( 1.0, 2.0 );
* // returns ~1.571
*/
double stdlib_base_dists_log_logistic_mean( const double alpha, const double beta ) {
	double c;
	if (
		stdlib_base_is_nan( alpha ) ||
		stdlib_base_is_nan( beta ) ||
		alpha <= 0.0 ||
		beta <= 1.0
	) {
		return 0.0 / 0.0; // NaN
	}
	c = STDLIB_CONSTANT_FLOAT64_PI / beta;
	return alpha * c / stdlib_base_sin( c );
}
