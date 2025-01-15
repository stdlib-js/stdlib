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

#include "stdlib/stats/base/dists/frechet/skewness.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/gamma.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Returns the skewness for a Fréchet distribution with shape `alpha`, scale `s`, and location `m`.
*
* @param alpha    shape parameter
* @param s        scale parameter
* @param m        location parameter
* @return         skewness
*
* @example
* double y = stdlib_base_frechet_skewness( 5.0, 2.0, 0.0 );
* // returns ~3.535
*/
double stdlib_base_dists_frechet_skewness( const double alpha, const double s, const double m ) {
	double g1s;
	double g1;
	double g2;
	double g3;
	if (
		stdlib_base_is_nan( alpha ) ||
		stdlib_base_is_nan( s ) ||
		stdlib_base_is_nan( m ) ||
		alpha <= 0.0 ||
		s <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( alpha <= 3.0 ) {
		// Case: 0 < alpha <= 3
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	g1 = stdlib_base_gamma( 1.0 - (1.0/alpha) );
	g1s = g1 * g1;
	g2 = stdlib_base_gamma( 1.0 - (2.0/alpha) );
	g3 = stdlib_base_gamma( 1.0 - (3.0/alpha) );
	return ( g3 - (3.0 * g2 * g1) + (2.0 * g1s * g1) ) / stdlib_base_pow( g2 - g1s, 1.5 );
}
