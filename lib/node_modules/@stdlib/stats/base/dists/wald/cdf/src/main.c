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

#include "stdlib/stats/base/dists/wald/cdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/erfcx.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/erfc.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Evaluates the cumulative distribution function (CDF) for a Wald distribution with mean `mu` and shape parameter `lambda` at a value `x`.
*
* @param x         input value
* @param mu        mean
* @param lambda    shape parameter
* @return          evaluated cumulative distribution function
*
* @example
* double y = stdlib_base_dists_wald_cdf( 2.0, 1.0, 1.0 );
* // returns ~0.885
*/
double stdlib_base_dists_wald_cdf( const double x, const double mu, const double lambda ) {
	double t1;
	double t2;
	double a;
	double b;
	double z;

	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( lambda ) ||
		mu <= 0.0 ||
		lambda < 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( lambda == 0.0 ) {
		return ( x < mu ) ? 0.0 : 1.0;
	}
	if ( x <= 0.0 ) {
		return 0.0;
	}
	if ( x == STDLIB_CONSTANT_FLOAT64_PINF ) {
		return 1.0;
	}
	z = stdlib_base_sqrt( lambda / x );
	a = ( z * ( ( x / mu ) - 1.0 ) ) / stdlib_base_sqrt( 2.0 );
	b = ( z * ( ( x / mu ) + 1.0 ) ) / stdlib_base_sqrt( 2.0 );

	// Φ(a) = 0.5 * erfc( -a / sqrt( 2 ) )
	t1 = 0.5 * stdlib_base_erfc( -a );

	// exp( 2λ/μ ) * erfc( b ) = erfcx( b ) * exp( -a² ), as b² - a² = 2λ/μ; computing via `erfcx` avoids overflow of the exponential term for large `λ/μ`:
	t2 = 0.5 * stdlib_base_erfcx( b ) * stdlib_base_exp( -a * a );
	return t1 + t2;
}
