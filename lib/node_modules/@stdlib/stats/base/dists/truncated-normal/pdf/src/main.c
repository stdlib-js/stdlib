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

#include "stdlib/stats/base/dists/truncated-normal/pdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/abs2.h"
#include "stdlib/stats/base/dists/normal/cdf.h"
#include "stdlib/constants/float64/sqrt_two_pi.h"

/**
* Evaluates the probability density function (PDF) for a truncated normal distribution with endpoints `a` and `b`, location parameter `mu`, and scale parameter `sigma` at a value `x`.
*
* @param x       input value
* @param a       minimum support
* @param b       maximum support
* @param mu      location parameter
* @param sigma   scale parameter
* @return        evaluated PDF
*
* @example
* double y = stdlib_base_dists_truncated_normal_pdf( 0.9, 0.0, 1.0, 0.0, 1.0 );
* // returns ~0.7795
*/
double stdlib_base_dists_truncated_normal_pdf( const double x, const double a, const double b, const double mu, const double sigma ) {
	double z;
	double A;
	double C;

	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( a ) ||
		stdlib_base_is_nan( b ) ||
		sigma <= 0.0 ||
		a >= b
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( x < a || x > b ) {
		return 0.0;
	}
	A = 1.0 / ( sigma * STDLIB_CONSTANT_FLOAT64_SQRT_TWO_PI );
	C = stdlib_base_dists_normal_cdf( ( b - mu ) / sigma, 0.0, 1.0 ) - stdlib_base_dists_normal_cdf( ( a - mu ) / sigma, 0.0, 1.0 );
	z = ( x - mu ) / sigma;
	return A * stdlib_base_exp( -0.5 * stdlib_base_abs2( z ) ) / C;
}
