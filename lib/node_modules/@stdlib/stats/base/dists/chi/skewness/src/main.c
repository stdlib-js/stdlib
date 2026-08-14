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

#include "stdlib/stats/base/dists/chi/skewness.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/stats/base/dists/chi/mean.h"
#include "stdlib/stats/base/dists/chi/variance.h"

/**
* Returns the skewness of a chi distribution.
*
* @param k    degrees of freedom
* @return     skewness
*
* @example
* double y = stdlib_base_dists_chi_skewness( 9.0 );
* // returns ~0.252
*/
double stdlib_base_dists_chi_skewness( const double k ) {
	double sigma3;
	double sigma2;
	double sigma;
	double mu;

	if ( stdlib_base_is_nan( k ) || k <= 0.0 ) {
		return 0.0 / 0.0; // NaN
	}

	mu = stdlib_base_dists_chi_mean( k );
	sigma2 = stdlib_base_dists_chi_variance( k );
	sigma = stdlib_base_sqrt( sigma2 );
	sigma3 = sigma2 * sigma;

	return ( mu / sigma3 ) * ( 1.0 - ( 2.0 * sigma2 ) );
}
