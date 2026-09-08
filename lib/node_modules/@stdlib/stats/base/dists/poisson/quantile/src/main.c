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

#include "stdlib/stats/base/dists/poisson/quantile.h"
#include "stdlib/stats/base/dists/poisson/cdf.h"
#include "stdlib/math/base/special/erfcinv.h"
#include "stdlib/math/base/special/round.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/sqrt_two.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Performs a search to the left.
*
* @param x         starting guess
* @param p         probability
* @param lambda    mean parameter
* @return          `p` quantile of the specified distribution
*/
static double search_left( double x, const double p, const double lambda ) {
	double xp;
	while ( x > 0.0 && stdlib_base_dists_poisson_cdf( x - 1.0, lambda ) >= p ) {
		xp = x - 1.0;

		// Guard against non-advancing updates (e.g., when `x` is `NaN` or is so large that decrementing does not change its value) in order to avoid an infinite loop:
		if ( !( xp < x ) ) {
			return x;
		}
		x = xp;
	}
	return x;
}

/**
* Performs a search to the right.
*
* @param x         starting guess
* @param p         probability
* @param lambda    mean parameter
* @return          `p` quantile of the specified distribution
*/
static double search_right( double x, const double p, const double lambda ) {
	double xn;

	// Guard against non-advancing updates (e.g., when `x` is `NaN` or is so large that incrementing does not change its value) in order to avoid an infinite loop:
	xn = x + 1.0;
	while ( xn > x ) {
		x = xn;
		if ( stdlib_base_dists_poisson_cdf( x, lambda ) >= p ) {
			return x;
		}
		xn = x + 1.0;
	}
	return x;
}

/**
* Evaluates the quantile function for a Poisson distribution with mean parameter `lambda` at a probability `p`.
*
* @param p         input probability
* @param lambda    mean parameter
* @return          evaluated quantile
*
* @example
* double y = stdlib_base_dists_poisson_quantile( 0.5, 2.0 );
* // returns 2.0
*/
double stdlib_base_dists_poisson_quantile( const double p, const double lambda ) {
	double sigmaInv;
	double guess;
	double sigma;
	double corr;
	double x2;
	double x;

	if (
		stdlib_base_is_nan( lambda ) ||
		lambda < 0.0 ||
		lambda == STDLIB_CONSTANT_FLOAT64_PINF
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( stdlib_base_is_nan( p ) || p < 0.0 || p > 1.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( lambda == 0.0 ) {
		return 0.0;
	}
	if ( p == 0.0 ) {
		return 0.0;
	}
	if ( p == 1.0 ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	// Cornish-Fisher expansion:
	sigma = stdlib_base_sqrt( lambda );
	sigmaInv = 1.0 / sigma;
	if ( p < 0.5 ) {
		x = -stdlib_base_erfcinv( 2.0 * p ) * STDLIB_CONSTANT_FLOAT64_SQRT2;
	} else {
		x = stdlib_base_erfcinv( 2.0 * ( 1.0 - p ) ) * STDLIB_CONSTANT_FLOAT64_SQRT2;
	}
	x2 = x * x;

	// Skewness correction:
	corr = x + ( sigmaInv * ( x2 - 1.0 ) / 6.0 );
	guess = stdlib_base_round( lambda + ( sigma * corr ) );
	if ( stdlib_base_dists_poisson_cdf( guess, lambda ) >= p ) {
		return search_left( guess, p, lambda );
	}
	return search_right( guess, p, lambda );
}
