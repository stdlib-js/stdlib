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

#include "stdlib/stats/base/dists/normal/pdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/constants/float64/two_pi.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Evaluates the probability density function (PDF) for a normal distribution with mean `mu` and standard deviation `sigma` at a value `x`.
*
* @param x       input value
* @param mu      mean of the distribution
* @param sigma   standard deviation of the distribution
* @return        evaluated probability density function
*
* @example
* double y = stdlib_base_dists_normal_pdf( 2.0, 0.0, 1.0 );
* // returns ~0.054
*/
double stdlib_base_dists_normal_pdf( const double x, const double mu, const double sigma ) {
	double s2;
	double A;
	double B;
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( sigma ) ||
		sigma < 0.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( sigma == 0.0 ) {
		return ( x == mu ) ? STDLIB_CONSTANT_FLOAT64_PINF : 0.0;
	}
	s2 = stdlib_base_pow( sigma, 2.0 );
	A = 1.0 / stdlib_base_sqrt( s2 * STDLIB_CONSTANT_FLOAT64_TWO_PI );
	B = -1.0 / ( 2.0 * s2 );
	return A * stdlib_base_exp( B * stdlib_base_pow( x - mu, 2.0 ) );
}
