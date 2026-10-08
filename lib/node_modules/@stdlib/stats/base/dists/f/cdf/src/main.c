/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/stats/base/dists/f/cdf.h"
#include "stdlib/math/base/special/betainc.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Evaluates the cumulative distribution function (CDF) for an F distribution with numerator degrees of freedom `d1` and denominator degrees of freedom `d2` at a value `x`.
*
* @param x     input value
* @param d1    numerator degrees of freedom
* @param d2    denominator degrees of freedom
* @return      evaluated CDF
*
* @example
* double y = stdlib_base_dists_f_cdf( 2.0, 1.0, 1.0 );
* // returns ~0.608
*/
double stdlib_base_dists_f_cdf( const double x, const double d1, const double d2 ) {
	double d1x;
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( d1 ) ||
		stdlib_base_is_nan( d2 ) ||
		d1 <= 0.0 ||
		d2 <= 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( x <= 0.0 ) {
		return 0.0;
	}
	if ( x == STDLIB_CONSTANT_FLOAT64_PINF ) {
		return 1.0;
	}
	// Evaluate the product in a separate statement in order to prevent floating-point contraction (e.g., FMA), thus ensuring that `d2 + d1x` rounds identically to the JavaScript implementation:
	d1x = d1 * x;
	if ( d1x > d2 ) {
		return stdlib_base_betainc( d1x / ( d2 + d1x ), d1 / 2.0, d2 / 2.0, true, false );
	}
	return stdlib_base_betainc( d2 / ( d2 + d1x ), d2 / 2.0, d1 / 2.0, true, true );
}
