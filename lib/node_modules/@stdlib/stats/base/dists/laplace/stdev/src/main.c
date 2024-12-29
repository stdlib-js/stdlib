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

#include "stdlib/stats/base/dists/laplace/stdev.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/sqrt_two.h"

/**
* Returns the standard deviation for a Laplace distribution with location `mu` and scale `b`.
*
* @param mu      location parameter
* @param b       scale parameter
* @return        standard deviation
*
* @example
* double y = stdlib_base_laplace_stdev( 0.0, 1.0 );
* // returns ~1.414
*/
double stdlib_base_dists_laplace_stdev( const double mu, const double b ) {
	if (
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( b ) ||
		b <= 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	return STDLIB_CONSTANT_FLOAT64_SQRT2 * b;
}
