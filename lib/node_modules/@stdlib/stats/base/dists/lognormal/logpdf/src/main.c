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

#include "stdlib/stats/base/dists/lognormal/logpdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/constants/float64/pi.h"

/**
* Evaluates the natural logarithm of the probability density function (PDF) for a lognormal distribution with location parameter `mu` and scale parameter `sigma` at a value `x`.
*
* @param x        input value
* @param mu       location parameter
* @param sigma    scale parameter
* @return         evaluated logPDF
*
* @example
* double y = stdlib_base_dists_lognormal_logpdf( 2.0, 0.0, 1.0 );
* // returns ~-1.852
*/
double stdlib_base_dists_lognormal_logpdf( const double x, const double mu, const double sigma ) {
	double lnx;
	double s2;
	double A;
	double B;

	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( sigma ) ||
		sigma <= 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( x <= 0.0 ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	s2 = stdlib_base_pow( sigma, 2.0 );
	lnx = stdlib_base_ln( x );
	A = -0.5 * stdlib_base_ln( 2.0 * s2 * STDLIB_CONSTANT_FLOAT64_PI );
	B = -1.0 / ( 2.0 * s2 );
	return A - lnx + ( B * stdlib_base_pow( lnx - mu, 2.0 ) );
}
