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

#include "stdlib/stats/base/dists/frechet/mean.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/gamma.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Returns the expected value for a Fréchet distribution with shape `alpha`, scale `s`, and location `m`.
*
* @param alpha    shape parameter
* @param s        scale parameter
* @param m        location parameter
* @return         mean
*
* @example
* double y = stdlib_base_dists_frechet_mean( 5.0, 2.0, 0.0 );
* // returns ~2.328
*/
double stdlib_base_dists_frechet_mean( const double alpha, const double s, const double m ) {
	if (
		stdlib_base_is_nan( alpha ) ||
		stdlib_base_is_nan( s ) ||
		stdlib_base_is_nan( m ) ||
		alpha <= 0.0 ||
		s <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( alpha <= 1.0 ) {
		// Case: 0 < alpha <= 1
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	return m + ( s * stdlib_base_gamma( 1.0 - (1.0/alpha) ) );
}
