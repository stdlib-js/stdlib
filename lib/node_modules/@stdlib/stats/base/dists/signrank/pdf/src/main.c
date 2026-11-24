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

#include "stdlib/stats/base/dists/signrank/pdf.h"
#include "stdlib/math/base/assert/is_integer.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/constants/float64/ln_two.h"
#include "stdlib/math/base/special/ln.h"
#include <stdint.h>

/**
* Calculates the weight for the (x,n) pair and memoizes the result.
*
* @param x   input value
* @param n   number of observations (must be a non-negative)
* @return    weight value
*/
static double weights( double x, const int32_t n ) {
	double mlim;

	if ( n == 0 ) {
		return ( x == 0 ) ? 1.0 : 0.0;
	}
	mlim = ( (double)n * ( (double)n + 1.0 ) ) / 2.0;
	if ( x < 0 || x > mlim ) {
		return 0.0;
	}
	if ( x > mlim / 2.0 ) {
		x = mlim - x;
	}
	return weights( x-(double)n, n-1 ) + weights( x, n-1 );
}

/**
* Evaluates the probability density function (PDF) of the Wilcoxon signed rank test statistic with `n` observations.
*
* @param x   input value
* @param n   number of observations (must be a non-negative)
* @return    evaluated PDF
*
* @example
* double y = stdlib_base_dists_signrank_pdf( 7.0, 9 );
* // returns ~0.01
*/
double stdlib_base_dists_signrank_pdf( const double x, const int32_t n ) {
	double mlim;
	if ( stdlib_base_is_nan( x ) || n <= 0 ) {
		return 0.0/0.0;
	}
	if ( !stdlib_base_is_integer( x ) ) {
		return 0.0;
	}
	mlim = ( (double)n * ( (double)n + 1.0 ) ) / 2.0;
	if ( x < 0.0 || x > mlim ) {
		return 0.0;
	}
	return stdlib_base_exp( stdlib_base_ln( weights( x, n ) ) - ( (double)n * STDLIB_CONSTANT_FLOAT64_LN2 ) );
}
