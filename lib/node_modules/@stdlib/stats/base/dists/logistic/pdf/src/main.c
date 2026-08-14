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

#include "stdlib/stats/base/dists/logistic/pdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Evaluates the probability density function (PDF) for a logistic distribution with location parameter `mu` and scale parameter `s` at a value `x`.
*
* @param x    input value
* @param mu   location parameter
* @param s    scale parameter
* @return     evaluated PDF
*
* @example
* double y = stdlib_base_dists_logistic_pdf( 2.0, 0.0, 1.0 );
* // returns ~0.105
*/
double stdlib_base_dists_logistic_pdf( const double x, const double mu, const double s ) {
	double ez;
	double z;
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( s ) ||
		s < 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( x == STDLIB_CONSTANT_FLOAT64_NINF ) {
		return 0.0;
	}
	if ( s == 0.0 ) {
		return ( x == mu ) ? STDLIB_CONSTANT_FLOAT64_PINF : 0.0;
	}
	z = stdlib_base_abs( ( x - mu ) / s );
	ez = stdlib_base_exp( -z );
	return ez / ( s * stdlib_base_pow( 1.0 + ez, 2.0 ) );
}
