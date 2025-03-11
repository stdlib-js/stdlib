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

#include "stdlib/stats/base/dists/frechet/logcdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/constants/float64/ninf.h"

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a Fréchet distribution with shape `alpha`, scale `s`, and location `m` at a value `x`.
*
* @param x        input value
* @param alpha    shape parameter
* @param s        scale parameter
* @param m        location parameter
* @return         evaluated logCDF
*
* @example
* double y = stdlib_base_dists_frechet_logcdf( 10.0, 2.0, 3.0, 2.0 );
* // returns ~0.141
*/
double stdlib_base_dists_frechet_logcdf( const double x, const double alpha, const double s, const double m ) {
	double z;
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( alpha ) ||
		stdlib_base_is_nan( s ) ||
		stdlib_base_is_nan( m ) ||
		alpha <= 0.0 ||
		s <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( x <= m ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	z = ( x - m ) / s;
	return -stdlib_base_pow( z, -alpha );
}
