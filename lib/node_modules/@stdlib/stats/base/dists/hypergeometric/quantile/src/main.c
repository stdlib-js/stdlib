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

#include "stdlib/stats/base/dists/hypergeometric/quantile.h"
#include "stdlib/stats/base/dists/hypergeometric/cdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/max.h"
#include "stdlib/math/base/special/min.h"
#include <stdint.h>

/**
* Evaluates the quantile function for a hypergeometric distribution with population size `N`, subpopulation size `K`, and number of draws `n` at a probability `p`.
*
* @param p    input probability
* @param N    population size
* @param K    subpopulation size
* @param n    number of draws
* @return     evaluated quantile function
*
* @example
* double y = stdlib_base_dists_hypergeometric_quantile( 0.4, 40, 20, 10 );
* // returns 5
*/
double stdlib_base_dists_hypergeometric_quantile( const double p, const int32_t N, const int32_t K, const int32_t n ) {
	double upper;
	double lower;
	double prob;
	double dn;
	double dK;
	double dN;
	double x;

	if (
		stdlib_base_is_nan( p ) ||
		N < 0 ||
		K < 0 ||
		n < 0 ||
		K > N ||
		n > N ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0 / 0.0;
	}

	dn = (double)n;
	dN = (double)N;
	dK = (double)K;
	lower = stdlib_base_max( 0.0, dn+dK-dN );
	upper = stdlib_base_min( dn, dK );

	if ( p == 0.0 ) {
		return lower;
	}
	if ( p == 1.0 ) {
		return upper;
	}

	x = lower;
	while ( x <= upper ) {
		prob = stdlib_base_dists_hypergeometric_cdf( x, N, K, n );
		if ( prob > p ) {
			break;
		}
		x += 1.0;
	}
	return x;
}
