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

#include "stdlib/stats/base/dists/lognormal/kurtosis.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/exp.h"

/**
* Returns the excess kurtosis for a lognormal distribution with location `mu` and scale `sigma`.
*
* @param mu       input value
* @param sigma    minimum support
* @return         excess kurtosis
*
* @example
* double y = stdlib_base_dists_lognormal_kurtosis( 0.0, 1.0 );
* // returns ~110.936
*/
double stdlib_base_dists_lognormal_kurtosis( const double mu, const double sigma ) {
	double out;
	double s2;
	if (
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( sigma ) ||
		sigma <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	s2 = sigma * sigma;
	out = stdlib_base_exp( 4.0*s2 );
	out += 2.0 * stdlib_base_exp( 3.0*s2 );
	out += 3.0 * stdlib_base_exp( 2.0*s2 );
	out -= 6.0;
	return out;
}
