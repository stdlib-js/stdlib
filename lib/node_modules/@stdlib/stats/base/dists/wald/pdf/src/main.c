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

#include "stdlib/stats/base/dists/wald/pdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/constants/float64/two_pi.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Evaluates the probability density function (PDF) for a Wald distribution with mean `mu` and shape parameter `lambda` at a value `x`.
*
* @param x        input value
* @param mu       mean of the distribution
* @param lambda   shape parameter of the distribution
* @return         evaluated probability density function
*
* @example
* double y = stdlib_base_dists_wald_pdf( 2.0, 1.0, 1.0 );
* // returns ~0.110
*/
double stdlib_base_dists_wald_pdf( const double x, const double mu, const double lambda ) {
	double A;
	double B;
	double v;
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( lambda ) ||
		mu <= 0.0 ||
		lambda < 0.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( lambda == 0.0 ) {
		return ( x == mu ) ? STDLIB_CONSTANT_FLOAT64_PINF : 0.0;
	}
	if ( x <= 0.0 || stdlib_base_is_infinite( x ) ) {
		return 0.0;
	}
	A = stdlib_base_sqrt( lambda / STDLIB_CONSTANT_FLOAT64_TWO_PI );
	B = -lambda / ( 2.0 * mu * mu );
	v = x - mu;
	return A / ( x * stdlib_base_sqrt( x ) ) * stdlib_base_exp( B * v * v / x );
}
