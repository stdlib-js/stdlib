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

#include "stdlib/stats/base/dists/hypergeometric/pmf.h"
#include "stdlib/math/base/assert/is_nonnegative_integer.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/factorialln.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/max.h"
#include "stdlib/math/base/special/min.h"
#include <stdint.h>

/**
* Evaluates the probability mass function (PMF) for a hypergeometric distribution with population size `N`, subpopulation size `K`, and number of draws `n`.
*
* @param x    input value
* @param N    population size
* @param K    subpopulation size
* @param n    number of draws
* @return     evaluated PMF
*
* @example
* double y = stdlib_base_dists_hypergeometric_pmf( 1.0, 8, 4, 2 );
* // returns ~0.571
*/
double stdlib_base_dists_hypergeometric_pmf( const double x, const int32_t N, const int32_t K, const int32_t n ) {
	double ldenom;
	double lnum;
	double lpmf;
	double maxs;
	double mins;

	if ( stdlib_base_is_nan( x ) || N < 0 || K < 0 || n < 0 || K > N || n > N ) {
		return 0.0/0.0; // NaN
	}

	mins = stdlib_base_max( 0, n+K-N );
	maxs = stdlib_base_min( K, n );

	if ( stdlib_base_is_nonnegative_integer( x ) && mins <= x && x <= maxs ) {
		lnum = stdlib_base_factorialln( n ) + stdlib_base_factorialln( K ) + stdlib_base_factorialln( N-n ) + stdlib_base_factorialln( N-K );
		ldenom = stdlib_base_factorialln( N ) + stdlib_base_factorialln( x ) + stdlib_base_factorialln( n-x );
		ldenom += stdlib_base_factorialln( K-x ) + stdlib_base_factorialln( N-K+x-n );
		lpmf = lnum - ldenom;
		return stdlib_base_exp( lpmf );
	}
	return 0.0;
}
