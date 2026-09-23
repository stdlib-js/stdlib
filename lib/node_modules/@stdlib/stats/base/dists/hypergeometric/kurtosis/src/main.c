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

#include "stdlib/stats/base/dists/hypergeometric/kurtosis.h"
#include "stdlib/math/base/assert/is_nonnegative_integer.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Returns the excess kurtosis of a hypergeometric distribution with parameters `N`, `K`, and `n`.
*
* @param N  population size
* @param K  subpopulation size
* @param n  number of draws
* @return   excess kurtosis
*
* @example
* double y = stdlib_base_dists_hypergeometric_kurtosis( 16.0, 11.0, 4.0 );
* // returns ~-0.326
*/
double stdlib_base_dists_hypergeometric_kurtosis( const double N, const double K, const double n ) {
	double p;
	double q;

	if (
		!stdlib_base_is_nonnegative_integer( N ) ||
		!stdlib_base_is_nonnegative_integer( K ) ||
		!stdlib_base_is_nonnegative_integer( n ) ||
		N == STDLIB_CONSTANT_FLOAT64_PINF ||
		K == STDLIB_CONSTANT_FLOAT64_PINF ||
		K > N ||
		n > N
	) {
		return 0.0 / 0.0; // NaN
	}

	// Calculate the numerator: (N-1) * N^2 * [N(N+1) - 6K(N-K) - 6n(N-n)] + 6nK(N-K)(N-n)(5N-6)
	p = ( N - 1.0 ) * ( N * N ) * ( ( N * ( N + 1.0 ) ) - ( 6.0 * K * ( N - K ) ) - ( 6.0 * n * ( N - n ) ) );
	p += 6.0 * n * K * ( N - K ) * ( N - n ) * ( ( 5.0 * N ) - 6.0 );

	// Calculate the denominator: n * K * (N-K) * (N-n) * (N-2) * (N-3)
	q = n * K * ( N - K ) * ( N - n ) * ( N - 2.0 ) * ( N - 3.0 );

	return p / q;
}
