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

#include "stdlib/stats/base/dists/negative-binomial/kurtosis.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Returns the excess kurtosis of a negative binomial distribution.
*
* @param r   number of failures until experiment is stopped
* @param p   success probability
* @return    excess kurtosis
*
* @example
* double y = stdlib_base_dists_negative_binomial_kurtosis( 100.0, 0.2 );
* // returns ~0.061
*/
double stdlib_base_dists_negative_binomial_kurtosis( const double r, const double p ) {
	if (
		stdlib_base_is_nan( r ) ||
		stdlib_base_is_nan( p ) ||
		r <= 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0 / 0.0; // NaN
	}
	return ( 6.0/r ) + ( ( p*p ) / ( ( 1.0-p ) * r ) );
}
