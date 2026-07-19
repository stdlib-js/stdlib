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
#include "stdlib/stats/base/dists/weibull/skewness.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/stats/base/dists/weibull/variance.h"
#include "stdlib/math/base/special/gamma.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/stats/base/dists/weibull/mean.h"

/**
* Returns the skewness of a Weibull distribution.
*
* @param k        shape parameter
* @param lambda   scale parameter
* @return         skewness
*
* @example
* double y = stdlib_base_dists_weibull_skewness( 4.0, 12.0 );
* // returns ~-0.087
*/
double stdlib_base_dists_weibull_skewness( const double k, const double lambda ) {
	double sigma2;
	double sigma;
	double out;
	double mu;
	if (
		stdlib_base_is_nan( k ) ||
		k <= 0.0 ||
		stdlib_base_is_nan( lambda ) ||
		lambda <= 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	mu = stdlib_base_dists_weibull_mean( k, lambda );
	sigma2 = stdlib_base_dists_weibull_variance( k, lambda );
	sigma = stdlib_base_sqrt( sigma2 );
	out = stdlib_base_gamma( 1.0 + ( 3.0/k ) ) * stdlib_base_pow( lambda, 3.0 );
	out -= ( 3.0*mu*sigma2 ) + stdlib_base_pow( mu, 3.0 );
	out /= stdlib_base_pow( sigma, 3.0 );
	return out;
}
