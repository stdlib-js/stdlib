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

#include "stdlib/stats/base/dists/halfnormal/stdev.h"
#include "stdlib/math/base/assert/is_nan.h"

static const double SQRT1M2PI = 0.6028102749890869; // sqrt(1 - 2/pi)

/**
* Returns the standard deviation of a half-normal distribution.
*
* @param sigma   scale parameter
* @return        standard deviation
*
* @example
* double v = stdlib_base_dists_halfnormal_stdev( 2.0 );
* // returns ~1.2056
*/
double stdlib_base_dists_halfnormal_stdev( const double sigma ) {
	if ( stdlib_base_is_nan( sigma ) || sigma <= 0.0 ) {
		return 0.0/0.0; // NaN
	}
	return sigma * SQRT1M2PI;
}
