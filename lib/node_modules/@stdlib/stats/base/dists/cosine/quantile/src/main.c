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

#include "stdlib/stats/base/dists/cosine/quantile.h"
#include "stdlib/stats/base/dists/cosine/cdf.h"
#include "stdlib/math/base/assert/is_nan.h"

static const double MAX_ITERATIONS = 1e4;
static const double TOLERANCE = 1e-12;

/**
* Bisection method to find quantile as there is no closed-form expression for the inverse of the CDF.
*
* @param p   input value
* @param mu  location parameter
* @param s   scale parameter
* @return    evaluated quantile function
*/
static double cosine_bisect( const double p, const double mu, const double s ) {
	double a;
	double b;
	double c;
	double m;
	double n;

	n = 1;
	a = mu - s;
	b = mu + s;
	m = ( a + b ) / 2.0;
	while ( n < MAX_ITERATIONS ) {
		m = ( a + b ) / 2.0;
		if ( b - a < TOLERANCE ) {
			return m;
		}
		c = stdlib_base_dists_cosine_cdf( m, mu, s );
		if ( p > c ) {
			a = m;
		} else {
			b = m;
		}
		n += 1;
	}
	return m;
}

/**
* Evaluates the quantile function for a raised cosine distribution with location parameter `mu` and scale parameter `s` at a probability `p`.
*
* @param p   input value
* @param mu  location parameter
* @param s   scale parameter
* @return    evaluated quantile function
*
* @example
* double y = stdlib_base_dists_cosine_quantile( 0.8, 0.0, 1.0 );
* // returns ~0.327
*/
double stdlib_base_dists_cosine_quantile( const double p, const double mu, const double s ) {
	if (
		stdlib_base_is_nan( p ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( s ) ||
		s < 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( s == 0.0 ) {
		return mu;
	}
	return cosine_bisect( p, mu, s );
}
