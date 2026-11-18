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

#include "stdlib/stats/base/dists/anglit/pdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/cos.h"
#include "stdlib/constants/float64/pi.h"

static const double PI_OVER_4 = STDLIB_CONSTANT_FLOAT64_PI / 4.0;

/**
* Evaluates the probability density function (PDF) for an anglit distribution with location parameter `mu` and scale parameter `sigma` at a value `x`.
*
* @param x        input value
* @param mu       location parameter
* @param sigma    scale parameter
* @return         evaluated PDF
*
* @example
* double y = stdlib_base_dists_anglit_pdf( 0.0, 0.0, 1.0 );
* // returns 1.0
*/
double stdlib_base_dists_anglit_pdf( const double x, const double mu, const double sigma ) {
	double y;

	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( sigma ) ||
		sigma <= 0.0
	) {
		return 0.0 / 0.0; // NaN
	}

	// Standardize
	y = ( x - mu ) / sigma;
	if ( y < -PI_OVER_4 || y > PI_OVER_4 ) {
		return 0.0;
	}
	return stdlib_base_cos( 2.0 * y ) / sigma;
}
