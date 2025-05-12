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

#include "stdlib/stats/base/dists/frechet/kurtosis.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/gamma.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Returns the excess kurtosis for a Fréchet distribution with shape `alpha`, scale `s`, and location `m`.
*
* @param alpha    shape parameter
* @param s        scale parameter
* @param m        location parameter
* @return         excess kurtosis
*
* @example
* double y = stdlib_base_dists_frechet_kurtosis( 5.0, 2.0, 0.0 );
* // returns ~45.092
*/
double stdlib_base_dists_frechet_kurtosis( const double alpha, const double s, const double m ) {
	double out;
	double g1;
	double g2;
	double g3;
	double g4;
	if (
		stdlib_base_is_nan( alpha ) ||
		stdlib_base_is_nan( s ) ||
		stdlib_base_is_nan( m ) ||
		alpha <= 0.0 ||
		s <= 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( alpha <= 4.0 ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	g1 = stdlib_base_gamma( 1.0 - (1.0/alpha) );
	g2 = stdlib_base_gamma( 1.0 - (2.0/alpha) );
	g3 = stdlib_base_gamma( 1.0 - (3.0/alpha) );
	g4 = stdlib_base_gamma( 1.0 - (4.0/alpha) );
	out = ( g4 - (4.0 * g3 * g1) + (3.0 * g2 * g2) ) / stdlib_base_pow( g2 - (g1 * g1), 2.0 );
	out -= 6.0;
	return out;
}
