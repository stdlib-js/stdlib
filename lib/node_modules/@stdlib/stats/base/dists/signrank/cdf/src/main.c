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

#include "stdlib/stats/base/dists/signrank/cdf.h"
#include "stdlib/math/base/assert/is_positive_integer.h"
#include "stdlib/math/base/assert/is_finite.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/round.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/constants/float64/ln_two.h"
#include <stdlib.h>

/**
* Evaluates the cumulative distribution function (CDF) of the Wilcoxon signed rank test statistic with `n` observations.
*
* @param x    input value
* @param n    number of observations
* @return     evaluated CDF
*
* @example
* double y = stdlib_base_dists_signrank_cdf( 7.0, 9.0 );
* // returns ~0.037
*/
double stdlib_base_dists_signrank_cdf( const double x, const double n ) {
	double pui;
	double *w;
	double xr;
	double p;
	int mlim;
	int xi;
	int i;
	int j;

	if (
		stdlib_base_is_nan( x ) ||
		!stdlib_base_is_positive_integer( n ) ||
		!stdlib_base_is_finite( n )
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( x < 0.0 ) {
		return 0.0;
	}
	xr = stdlib_base_round( x );
	mlim = n * ( n + 1 ) / 2;
	if ( xr >= mlim ) {
		return 1.0;
	}
	xi = (int)xr;
	// Compute the number of subsets of {1,...,n} summing to each value `0,...,xi` via dynamic programming (i.e., the weights of the signed rank distribution):
	w = (double *)calloc( (size_t)xi + 1, sizeof( double ) );
	if ( w == NULL ) {
		return 0.0 / 0.0; // NaN
	}
	w[ 0 ] = 1.0;
	for ( i = 1; i <= (int)n; i++ ) {
		for ( j = xi; j >= i; j-- ) {
			w[ j ] += w[ j - i ];
		}
	}
	pui = stdlib_base_exp( -n * STDLIB_CONSTANT_FLOAT64_LN2 );
	p = 0.0;
	for ( i = 0; i <= xi; i++ ) {
		p += w[ i ] * pui;
	}
	free( w );
	return p;
}
