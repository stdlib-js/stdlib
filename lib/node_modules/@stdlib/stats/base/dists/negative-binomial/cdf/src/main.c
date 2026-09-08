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

#include "stdlib/stats/base/dists/negative-binomial/cdf.h"
#include "stdlib/math/base/special/betainc.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Evaluates the cumulative distribution function (CDF) for a negative binomial distribution with number of successes until experiment is stopped `r` and success probability `p` at a value `x`.
*
* @param x    input value
* @param r    number of successes until experiment is stopped
* @param p    success probability
* @return     evaluated CDF
*
* @example
* double y = stdlib_base_dists_negative_binomial_cdf( 5.0, 20.0, 0.8 );
* // returns ~0.617
*/
double stdlib_base_dists_negative_binomial_cdf( const double x, const double r, const double p ) {
	double xint;
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( r ) ||
		stdlib_base_is_nan( p ) ||
		r <= 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( x < 0.0 ) {
		return 0.0;
	}
	if ( x == STDLIB_CONSTANT_FLOAT64_PINF ) {
		return 1.0;
	}
	// Ensure left-continuity:
	xint = stdlib_base_floor( x + 1.0e-7 );
	return stdlib_base_betainc( p, r, xint + 1.0, true, false );
}
