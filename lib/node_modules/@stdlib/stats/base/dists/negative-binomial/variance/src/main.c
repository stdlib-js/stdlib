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

#include "stdlib/stats/base/dists/negative-binomial/variance.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Returns the variance for a negative binomial distribution with number of successes `r` and success probability `p`.
*
* @param r    number of successes
* @param p    success probability
* @return     variance
*
* @example
* double v = stdlib_base_dists_negative_binomial_variance( 10, 0.5 );
* // returns 20.0
*/
double stdlib_base_dists_negative_binomial_variance( const double r, const double p ) {
	if ( stdlib_base_is_nan( r ) || stdlib_base_is_nan( p ) || r <= 0 || p <= 0.0 || p > 1.0 ) {
		return 0.0 / 0.0; // NaN
	}
	return r * ( 1.0 - p ) / ( p * p );
}
