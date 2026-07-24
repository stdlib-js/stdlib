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

#include "stdlib/stats/base/dists/binomial/logpmf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_nonnegative_integer.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/math/base/special/binomcoefln.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/special/ln.h"
#include <stdint.h>

/**
* Evaluates the natural logarithm of the probability mass function (PMF) for a binomial distribution.
*
* @param x  input value
* @param n  number of trials
* @param p  success probability
* @return   evaluated logPMF
*
* @example
* double y = stdlib_base_dists_binomial_logpmf( 3.0, 20, 0.2 );
* // returns ~-1.583
*/
double stdlib_base_dists_binomial_logpmf( const double x, const int32_t n, const double p ) {
	double out;

	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( p ) ||
		n < 0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( !stdlib_base_is_nonnegative_integer( x ) ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	if ( x > n ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	if ( p == 0.0 ) {
		return ( x == 0.0 ) ? 0.0 : STDLIB_CONSTANT_FLOAT64_NINF;
	}
	if ( p == 1.0 ) {
		return ( x == n ) ? 0.0 : STDLIB_CONSTANT_FLOAT64_NINF;
	}
	out = stdlib_base_binomcoefln( n, x );
	out += ( x * stdlib_base_ln( p ) ) + ( ( n - x ) * stdlib_base_log1p( -p ) );
	return out;
}
