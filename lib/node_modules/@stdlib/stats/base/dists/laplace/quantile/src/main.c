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

#include "stdlib/stats/base/dists/laplace/quantile.h"
#include "stdlib/math/base/special/signum.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/ln.h"

/**
* Returns the quantile function for a Laplace distribution with location parameter `mu` and scale parameter `b` at a probability `p`.
*
* @param p   input value
* @param mu  location parameter
* @param b   scale parameter
* @return    evaluated quantile function
*
* @example
* double y = stdlib_base_dists_laplace_quantile( 0.8, 0.0, 1.0 );
* // returns ~0.916
*/
double stdlib_base_dists_laplace_quantile( const double p, const double mu, const double b ) {
	if (
		stdlib_base_is_nan( p ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( b ) ||
		b <= 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0/0.0; // NaN
	}
	return mu - ( b * stdlib_base_signum( p-0.5 ) * stdlib_base_ln( 1.0 - ( 2.0 * stdlib_base_abs( p-0.5 ) ) ) );
}
