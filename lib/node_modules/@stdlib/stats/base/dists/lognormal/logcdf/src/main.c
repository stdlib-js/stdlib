/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/stats/base/dists/lognormal/logcdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/erfc.h"
#include "stdlib/math/base/special/erfcx.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/special/abs2.h"
#include "stdlib/constants/float64/ninf.h"

static const double INV_SQRT_TWO = 0.7071067811865475; // 1/sqrt(2)

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a lognormal distribution with mean `mu` and standard deviation `sigma` at a value `x`.
*
* @param x        input value
* @param mu       mean
* @param sigma    standard deviation
* @return         evaluated logCDF
*
* @example
* double y = stdlib_base_dists_lognormal_logcdf( 2.0, 0.0, 1.0 );
* // returns ~-0.2799
*/
double stdlib_base_dists_lognormal_logcdf( const double x, const double mu, const double sigma ) {
	double lx;
	double z;

	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( sigma ) ||
		sigma < 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( x <= 0.0 ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	lx = stdlib_base_ln( x );
	if ( sigma == 0.0 ) {
		return (lx < mu) ? STDLIB_CONSTANT_FLOAT64_NINF : 0.0;
	}
	z = ( lx - mu ) / sigma;

	if ( z < -1.0 ) {
		return stdlib_base_ln( stdlib_base_erfcx( -z * INV_SQRT_TWO ) / 2.0 ) - ( stdlib_base_abs2( z ) / 2.0 );
	}
	// Case: z >= -1.0:
	return stdlib_base_log1p( -stdlib_base_erfc( z * INV_SQRT_TWO ) / 2.0 );
}
