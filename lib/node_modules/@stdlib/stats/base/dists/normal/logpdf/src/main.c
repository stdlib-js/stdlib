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

#include "stdlib/stats/base/dists/normal/logpdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/constants/float64/ln_two_pi.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a Normal distribution with mean `mu` and standard deviation `sigma` at a value `x`.
*
* @param x      input value
* @param mu     mean
* @param sigma  standard deviation
* @return       evaluated logarithm of probability density function
*
* @example
* double y = stdlib_base_dists_normal_logpdf( 2.0, 0.0, 1.0 );
* // returns ~-2.919
*/
double stdlib_base_dists_normal_logpdf( const double x, const double mu, const double sigma ) {
	double s2;
	double A;
	double B;

	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( sigma ) ||
		sigma < 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( sigma == 0.0 ) {
		return (x == mu) ? STDLIB_CONSTANT_FLOAT64_PINF : STDLIB_CONSTANT_FLOAT64_NINF;
	}
	s2 = stdlib_base_pow( sigma, 2.0 );
	A = (-0.5) * ( ( 2.0 * stdlib_base_ln(sigma) ) + STDLIB_CONSTANT_FLOAT64_LN_TWO_PI );
	B = -1.0 / ( 2.0 * s2 );
	return A + ( B * stdlib_base_pow( x - mu, 2.0 ) );
}
