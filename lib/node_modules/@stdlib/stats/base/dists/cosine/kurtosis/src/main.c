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

#include "stdlib/stats/base/dists/cosine/kurtosis.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/constants/float64/pi_squared.h"

/**
* Returns the excess kurtosis of a raised cosine distribution.
*
* @param mu   location parameter
* @param s    scale parameter
* @return     excess kurtosis
*
* @example
* double y = stdlib_base_dists_cosine_kurtosis( 0.0, 1.0 );
* // returns ~-0.594
*/
double stdlib_base_dists_cosine_kurtosis( const double mu, const double s ) {
	if (
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( s ) ||
		s <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	double out = 6.0 * ( 90.0 - ( STDLIB_CONSTANT_FLOAT64_PI_SQUARED*STDLIB_CONSTANT_FLOAT64_PI_SQUARED ) );
	out /= 5.0 * stdlib_base_pow( STDLIB_CONSTANT_FLOAT64_PI_SQUARED-6.0, 2.0 );
	return out;
}
