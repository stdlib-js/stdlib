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

#include "stdlib/stats/base/dists/hypergeometric/cdf.h"
#include "stdlib/stats/base/dists/hypergeometric/pmf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/math/base/special/trunc.h"
#include "stdlib/math/base/special/max.h"
#include "stdlib/math/base/special/min.h"
#include <stdint.h>

/**
* Evaluates the cumulative distribution function (CDF) for a hypergeometric distribution with population size `N`, subpopulation size `K`, and number of draws `n` at a value `x`.
*
* @param x    input value
* @param N    population size
* @param K    subpopulation size
* @param n    number of draws
* @return     evaluated CDF
*
* @example
* double y = stdlib_base_dists_hypergeometric_cdf( 1.0, 8, 4, 2 );
* // returns ~0.786
*/
double stdlib_base_dists_hypergeometric_cdf( const double x, const int32_t N, const int32_t K, const int32_t n ) {
	double upper;
	double lower;
	double denom;
	double num;
	double ret;
	double dx;
	double dn;
	double dK;
	double dN;
	double p;
	double i;

	if (
		stdlib_base_is_nan( x ) ||
		N < 0 ||
		K < 0 ||
		n < 0 ||
		K > N ||
		n > N
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( stdlib_base_is_infinite( x ) ) {
		return ( x > 0.0 ) ? 1.0 : 0.0;
	}
	dn = (double)n;
	dN = (double)N;
	dK = (double)K;
	dx = stdlib_base_trunc( x );
	lower = stdlib_base_max( 0.0, dn+dK-dN );
	upper = stdlib_base_min( dn, dK );
	if ( dx < lower ) {
		return 0.0;
	}
	if ( dx >= upper ) {
		return 1.0;
	}
	p = stdlib_base_dists_hypergeometric_pmf( dx, N, K, n );
	ret = p;
	for ( i = dx-1.0; i >= lower; i -= 1.0 ) {
		num = ( i + 1.0 ) * ( dN - dK - dn + i + 1.0 );
		denom = ( dK - i ) * ( dn - i );
		p = ( num / denom ) * p;
		ret += p;
	}

	return stdlib_base_min( ret, 1.0 );
}
