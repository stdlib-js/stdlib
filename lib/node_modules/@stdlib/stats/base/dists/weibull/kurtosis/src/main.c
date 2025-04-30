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

#include "stdlib/stats/base/dists/weibull/kurtosis.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/gamma.h"
#include "stdlib/math/base/special/pow.h"

/**
* Returns the excess kurtosis of a Weibull distribution.
*
* @param k        shape parameter
* @param lambda   scale parameter
* @return         excess kurtosis
*
* @example
* double y = stdlib_base_dists_weibull_kurtosis( 4.0, 12.0 );
* // returns ~-0.252
*/
double stdlib_base_dists_weibull_kurtosis( const double k, const double lambda ) {
	double out;
	double g4;
	double g3;
	double g2;
	double g1;
	if (
		stdlib_base_is_nan( k ) ||
		k <= 0.0 ||
		stdlib_base_is_nan( lambda ) ||
		lambda <= 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	g1 = stdlib_base_gamma( 1.0 + (1.0/k) );
	g2 = stdlib_base_gamma( 1.0 + (2.0/k) );
	g3 = stdlib_base_gamma( 1.0 + (3.0/k) );
	g4 = stdlib_base_gamma( 1.0 + (4.0/k) );
	out = (-6.0*stdlib_base_pow(g1, 4.0)) + (12.0*g1*g1*g2) - (3.0*g2*g2)- (4.0*g1*g3) + g4;
	out /= stdlib_base_pow( g2 - (g1*g1), 2.0 );
	return out;
}
