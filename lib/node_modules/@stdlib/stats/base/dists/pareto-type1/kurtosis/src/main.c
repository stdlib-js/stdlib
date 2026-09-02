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

#include "stdlib/stats/base/dists/pareto-type1/kurtosis.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/pow.h"

/**
* Returns the excess kurtosis of a Pareto (Type I) distribution.
*
* @param alpha    shape parameter
* @param beta     scale parameter
* @return         excess kurtosis
*
* @example
* double y = stdlib_base_dists_pareto_type1_kurtosis( 5.0, 1.0 );
* // returns ~70.8
*/
double stdlib_base_dists_pareto_type1_kurtosis( const double alpha, const double beta ) {
	double out;
	if (
		stdlib_base_is_nan( alpha ) ||
		alpha <= 4.0 ||
		stdlib_base_is_nan( beta ) ||
		beta <= 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	out = 6.0 * ( stdlib_base_pow( alpha, 3.0 ) + stdlib_base_pow( alpha, 2.0 ) - ( 6.0*alpha ) - 2.0 );
	out /= alpha * ( alpha-3.0 ) * ( alpha-4.0 );
	return out;
}
