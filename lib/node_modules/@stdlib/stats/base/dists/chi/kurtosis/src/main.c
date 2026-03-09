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

#include "stdlib/stats/base/dists/chi/kurtosis.h"
#include "stdlib/stats/base/dists/chi/mean.h"
#include "stdlib/stats/base/dists/chi/variance.h"
#include "stdlib/stats/base/dists/chi/skewness.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/sqrt.h"

/**
* Returns the excess kurtosis of a chi distribution.
*
* @param k    degrees of freedom
* @return     excess kurtosis
*
* @example
* double y = stdlib_base_dists_chi_kurtosis( 9.0 );
* // returns ~0.011
*/
double stdlib_base_dists_chi_kurtosis( const double k ) {
	double sigma2;
	double sigma;
	double g1;
	double mu;

	if ( stdlib_base_is_nan( k ) || k <= 0.0 ) {
		return 0.0 / 0.0; // NaN
	}

	sigma2 = stdlib_base_dists_chi_variance( k );
	sigma = stdlib_base_sqrt( sigma2 );
	mu = stdlib_base_dists_chi_mean( k );
	g1 = stdlib_base_dists_chi_skewness( k );

	return ( 2.0/sigma2 ) * ( 1.0 - ( mu*sigma*g1 ) - sigma2 );
}
