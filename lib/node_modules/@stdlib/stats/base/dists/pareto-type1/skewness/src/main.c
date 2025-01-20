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

#include "stdlib/stats/base/dists/pareto-type1/skewness.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/sqrt.h"

/**
* Returns the skewness of a Pareto (Type I) distribution.
*
* @param alpha    first shape parameter
* @param beta     second shape paramter
* @return         skewness
*
* @example
* double y = stdlib_base_dists_pareto_type1_skewness( 3.5, 1.0 );
* // returns ~11.784
*/
double stdlib_base_dists_pareto_type1_skewness( const double alpha, const double beta ) {
	if (
		stdlib_base_is_nan( alpha ) ||
		alpha <= 3.0 ||
		stdlib_base_is_nan( beta ) ||
		beta <= 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	return 2.0 * ( 1.0+alpha ) / ( alpha-3.0 ) * stdlib_base_sqrt( ( alpha-2.0 ) / alpha );
}
