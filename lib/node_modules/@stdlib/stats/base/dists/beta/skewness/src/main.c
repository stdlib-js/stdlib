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

#include "stdlib/stats/base/dists/beta/skewness.h"
#include "stdlib/math/base/special/sqrt.h"

/**
* Returns the skewness of a beta distribution.
*
* @param alpha    first shape parameter
* @param beta     second shape parameter
* @return         skewness
*
* @example
* double y = stdlib_base_beta_skewness( 1.0, 1.0 );
* // returns 0.0
*/
double stdlib_base_dists_beta_skewness( const double alpha, const double beta ) {
	double out;
	double ab;
	if ( alpha <= 0.0 || beta <= 0.0 ) {
		return 0.0/0.0; // NaN
	}
	ab = alpha + beta;
	out = 2.0 * ( beta-alpha ) * stdlib_base_sqrt( ab + 1.0 );
	out /= ( ab + 2.0 ) * stdlib_base_sqrt( alpha * beta );
	return out;
}
