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

#include "stdlib/stats/base/dists/beta/kurtosis.h"

/**
* Returns the excess kurtosis for a beta distribution with first shape parameter `alpha` and second shape parameter `beta`.
*
* @param alpha    first shape parameter
* @param beta     second shape parameter
* @return         excess kurtosis
*
* @example
* double y = stdlib_base_dists_beta_kurtosis( 1.0, 1.0 );
* // returns -1.2
*/
double stdlib_base_dists_beta_kurtosis( const double alpha, const double beta ) {
	double out;
	double axb;
	double amb;
	double apb;

	if ( alpha <= 0.0 || beta <= 0.0 ) {
		return 0.0 / 0.0;
	}
	axb = alpha * beta;
	amb = alpha - beta;
	apb = alpha + beta;
	out = amb * amb * ( apb+1.0 );
	out -= axb * ( apb+2.0 );
	out *= 6.0;
	out /= axb * ( apb+2.0 ) * ( apb+3.0 );
	return out;
}
