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

#include "stdlib/stats/base/dists/laplace/cdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/exp.h"

/**
* Evaluates the cumulative distribution function (CDF) for a Laplace distribution with location parameter `mu` and scale parameter `b` at value `x`.
*
* @param x    input value
* @param mu   location parameter
* @param b    scale parameter
* @return     evaluated CDF
*
* @example
* double y = stdlib_base_dists_laplace_cdf( 2.0, 0.0, 1.0 );
* // returns ~0.932
*/
double stdlib_base_dists_laplace_cdf( const double x, const double mu, const double b ) {
	double z;
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( b ) ||
		b <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	z = ( x - mu ) / b;
	if ( x < mu ) {
		return 0.5 * stdlib_base_exp( z );
	}
	return 1.0 - ( 0.5 * stdlib_base_exp( -z ) );
}
