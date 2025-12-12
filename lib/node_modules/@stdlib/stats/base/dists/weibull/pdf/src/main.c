/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/stats/base/dists/weibull/pdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/ninf.h"

/**
* Evaluates the probability density function (PDF) for a Weibull distribution with shape parameter `k` and scale parameter `lambda` at a value `x`.
*
* @param x         input value
* @param k         shape parameter
* @param lambda    scale parameter
* @return          evaluated PDF
*
* @example
* double y = stdlib_base_dists_weibull_pdf( 2.0, 1.0, 1.0 );
* // returns ~0.037
*/
double stdlib_base_dists_weibull_pdf( const double x, const double k, const double lambda ) {
	double xol;
	double z;
	if (
		stdlib_base_is_nan( k ) ||
		stdlib_base_is_nan( lambda ) ||
		k <= 0.0 ||
		lambda <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	if ( x < 0.0 ) {
		return 0.0;
	}
	if ( x == STDLIB_CONSTANT_FLOAT64_PINF || x == STDLIB_CONSTANT_FLOAT64_NINF ){
		return ( k == 0.0 ) ? k/lambda : 0.0;
	}
	xol = x / lambda;
	z = stdlib_base_pow( xol, k - 1.0 );
	return ( k / lambda ) * z * stdlib_base_exp( - stdlib_base_pow( xol, k ) );
}
