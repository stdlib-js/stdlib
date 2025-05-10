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

#include "stdlib/stats/base/dists/levy/quantile.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/erfcinv.h"

/**
* Returns the quantile for a Lévy distribution with location `mu` and scale `c`.
*
* @param p   input value
* @param mu  location parameter
* @param c   scale parameter
* @return    evaluated quantile function
*
* @example
* double y = stdlib_base_levy_quantile( 0.8, 0.0, 1.0 );
* // returns ~15.58
*/
double stdlib_base_dists_levy_quantile( const double p, const double mu, const double c ) {
	double fval;
	if (
		stdlib_base_is_nan( p ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( c ) ||
		c <= 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0 / 0.0; // NaN
	}
	fval = stdlib_base_erfcinv( p );
	return mu + ( c / ( 2.0 * fval * fval ) );
}
