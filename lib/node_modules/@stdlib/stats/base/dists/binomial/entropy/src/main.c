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

#include "stdlib/stats/base/dists/binomial/entropy.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/exp.h"
#include <stdint.h>

/**
* Returns the entropy of a binomial distribution.
*
* @param n    number of trials
* @param p    success probability
* @return     entropy
*
* @example
* double v = stdlib_base_dists_binomial_entropy( 100, 0.1 );
* // returns ~2.511
*
* @example
* double v = stdlib_base_dists_binomial_entropy( 20, 1.1 );
* // returns NaN
*
* @example
* double v = stdlib_base_dists_binomial_entropy( 20, NAN );
* // returns NaN
*/
double stdlib_base_dists_binomial_entropy( const int32_t n, const double p ) {
	double nlq;
	double out;
	double q;
	int32_t i;

	if (
		stdlib_base_is_nan( p ) ||
		n < 0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( p == 0.0 || p == 1.0 || n == 0 ) {
		return 0.0;
	}
	q = 1.0 - p;
	nlq = n * stdlib_base_ln( q );
	out = stdlib_base_exp( nlq ) * nlq;
	for ( i = 1; i <= n; i++ ) {
		nlq += stdlib_base_ln( (double)( n - i + 1 ) / (double)i ) + stdlib_base_ln( p / q );
		out += stdlib_base_exp( nlq ) * nlq;
	}
	return -out;
}
