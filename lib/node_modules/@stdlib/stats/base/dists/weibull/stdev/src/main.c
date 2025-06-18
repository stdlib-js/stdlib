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

#include "stdlib/stats/base/dists/weibull/stdev.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/gamma.h"
#include "stdlib/math/base/special/sqrt.h"

/**
* Returns the standard deviation of a Weibull distribution.
*
* @param k        shape parameter
* @param lambda   scale parameter
* @return         standard deviation
*
* @example
* double v = stdlib_base_dists_weibull_stdev( 4.0, 12.0 );
* // returns ~3.051
*/
double stdlib_base_dists_weibull_stdev( const double k, const double lambda ) {
	double g1k;
	if (
		stdlib_base_is_nan( k ) ||
		stdlib_base_is_nan( lambda ) ||
		k <= 0.0 ||
		lambda <= 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	g1k = stdlib_base_gamma( 1.0 + ( 1.0/k ) );
	return lambda * stdlib_base_sqrt( stdlib_base_gamma( 1.0 + ( 2.0/k ) ) - ( g1k*g1k ) );
}
