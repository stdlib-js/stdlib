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

#include "stdlib/stats/base/dists/beta/entropy.h"
#include "stdlib/math/base/special/betaln.h"
#include "stdlib/math/base/special/digamma.h"

/**
* Returns the differential entropy for a beta distribution with first shape parameter `alpha` and second shape parameter `beta`.
*
* @param alpha   first shape parameter
* @param beta    second shape parameter
* @return        differential entropy
*
* @example
* double y = stdlib_base_dists_beta_entropy( 1.0, 1.0 );
* // returns 0.0
*/
double stdlib_base_dists_beta_entropy( const double alpha, const double beta ) {
	double out;
	if ( alpha <= 0.0 || beta <= 0.0 ) {
		return 0.0 / 0.0;
	}
	out = stdlib_base_betaln( alpha, beta );
	out -= ( alpha-1.0 ) * stdlib_base_digamma( alpha );
	out -= ( beta-1.0 ) * stdlib_base_digamma( beta );
	out += ( alpha+beta-2.0 ) * stdlib_base_digamma( alpha+beta );
	return out;
}
