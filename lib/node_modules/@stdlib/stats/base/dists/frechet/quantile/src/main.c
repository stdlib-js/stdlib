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

#include "stdlib/stats/base/dists/frechet/quantile.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/ln.h"

/**
* Evaluates the quantile function for a Fréchet distribution with shape `alpha`, scale `s`, and location `m` at a probability `p`.
*
* @param p        input probability
* @param alpha    shape parameter
* @param s        scale parameter
* @param m        location parameter
* @return         evaluated quantile function
*
* @example
* double y = stdlib_base_dists_frechet_quantile( 0.5, 2.0, 3.0, 2.0 );
* // returns ~5.603
*
* @example
* double y = stdlib_base_dists_frechet_quantile( 0.2, 1.0, 3.0, -1.0 );
* // returns ~0.864
*/
double stdlib_base_dists_frechet_quantile( const double p, const double alpha, const double s, const double m ) {
	if (
		stdlib_base_is_nan( p ) ||
		stdlib_base_is_nan( alpha ) ||
		stdlib_base_is_nan( s ) ||
		stdlib_base_is_nan( m ) ||
		p < 0.0 ||
		p > 1.0 ||
		alpha <= 0.0 ||
		s <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	return m + ( s * stdlib_base_pow( -stdlib_base_ln( p ), -1.0/alpha ) );
}
