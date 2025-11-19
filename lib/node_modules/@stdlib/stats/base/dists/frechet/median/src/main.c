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

#include "stdlib/stats/base/dists/frechet/median.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/constants/float64/ln_two.h"

/**
* Returns the median for a Fréchet distribution with shape `alpha`, scale `s`, and location `m`.
*
* @param alpha    shape parameter
* @param s        scale parameter
* @param m        location parameter
* @return         median
*
* @example
* double y = stdlib_base_dists_frechet_median( 5.0, 2.0, 0.0 );
* // returns ~2.152
*/
double stdlib_base_dists_frechet_median( const double alpha, const double s, const double m ) {
	if (
		stdlib_base_is_nan( alpha ) ||
		stdlib_base_is_nan( s ) ||
		stdlib_base_is_nan( m ) ||
		alpha <= 0.0 ||
		s <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	return m + ( s * stdlib_base_pow( STDLIB_CONSTANT_FLOAT64_LN2, -1.0/alpha ) );
}
