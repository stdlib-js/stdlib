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

#include "stdlib/stats/base/dists/levy/mean.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Returns the expected value for a Lévy distribution with location `mu` and scale `c`.
*
* @param mu    location parameter
* @param c     scale parameter
* @return      expected value
*
* @example
* double y = stdlib_base_levy_mean( 0.0, 1.0 );
* // returns Infinity
*/
double stdlib_base_dists_levy_mean( const double mu, const double c ) {
	if (
		isnan( mu ) ||
		isnan( c ) ||
		c <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	return STDLIB_CONSTANT_FLOAT64_PINF;
}
