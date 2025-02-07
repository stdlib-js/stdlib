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

#include "stdlib/stats/base/dists/bernoulli/skewness.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/ninf.h"

/**
* Returns the skewness of a Bernoulli distribution with success probability 'p'.
*
* @param p    success probability
* @returns    skewness
*
* @example
* double y = stdlib_base_dists_bernoulli_skewness( 0.1 );
* // returns ~2.667
*/
double stdlib_base_dists_bernoulli_skewness( const double p ) {
	if (
		stdlib_base_is_nan( p ) ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0 / 0.0;
	}
	if ( p == 0.0 ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	if ( p == 1.0 ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	return ( 1.0 - ( 2.0 * p ) ) / stdlib_base_sqrt( p * ( 1.0 - p ) );
}
