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

#include "stdlib/stats/base/dists/logistic/logcdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/special/exp.h"

/**
* Computes `log(1 + exp(x))` in a numerically stable manner.
*
* @param x    input value
* @return     log(1 + exp(x))
*/
static double log1pexp( const double x ) {
	if ( x <= 18.0 ) {
		return stdlib_base_log1p( stdlib_base_exp( x ) );
	}
	if ( x > 33.3 ) {
		return x;
	}
	// Case: 18.0 < z <= 33.3
	return x + stdlib_base_exp( -x );
}

/**
* Evaluates the logarithm of the cumulative distribution function (CDF) for a logistic distribution with location parameter `mu` and scale parameter `s` at a value `x`.
*
* @param x    input value
* @param mu   location parameter
* @param s    scale parameter
* @return     evaluated logCDF
*
* @example
* double y = stdlib_base_dists_logistic_logcdf( 2.0, 0.0, 1.0 );
* // returns ~-0.127
*/
double stdlib_base_dists_logistic_logcdf( const double x, const double mu, const double s ) {
	double z;
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( s ) ||
		s < 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( s == 0.0 ) {
		return ( x < mu ) ? STDLIB_CONSTANT_FLOAT64_NINF : 0.0;
	}
	z = ( x - mu ) / s;
	return -log1pexp( -z );
}

