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

#include "stdlib/stats/base/dists/wald/logpdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/ln_two_pi.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/ninf.h"

/**
* Evaluates the natural logarithm of the probability density function (PDF) for a Wald distribution with mean `mu` and shape parameter `lambda` at a value `x`.
*
* @param x         input value
* @param mu        mean
* @param lambda    shape parameter
* @return          evaluated logPDF
*
* @example
* double y = stdlib_base_dists_wald_logpdf( 2.0, 1.0, 1.0 );
* // returns ~-2.209
*/
double stdlib_base_dists_wald_logpdf( const double x, const double mu, const double lambda ) {
	double v;

	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( lambda ) ||
		mu <= 0.0 ||
		lambda < 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( lambda == 0.0 ) {
		return ( x == mu ) ? STDLIB_CONSTANT_FLOAT64_PINF : STDLIB_CONSTANT_FLOAT64_NINF;
	}
	if ( x <= 0.0 || x == STDLIB_CONSTANT_FLOAT64_PINF ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	v = x - mu;
	return 0.5 * ( stdlib_base_ln( lambda ) - ( STDLIB_CONSTANT_FLOAT64_LN_TWO_PI + ( 3.0 * stdlib_base_ln( x ) ) ) - ( ( lambda * v * v ) / ( mu * mu * x ) ) );
}
