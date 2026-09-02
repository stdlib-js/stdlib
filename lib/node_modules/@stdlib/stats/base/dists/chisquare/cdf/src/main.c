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

#include "stdlib/stats/base/dists/chisquare/cdf.h"
#include "stdlib/stats/base/dists/gamma/cdf.h"

/**
* Evaluates the cumulative distribution function (CDF) for a chi-squared distribution with degrees of freedom `k` at a value `x`.
*
* @param x        input value
* @param k        degrees of freedom
* @return         evaluated CDF
*
* @example
* double y = stdlib_base_dists_chisquare_cdf( 2.0, 3.0 );
* // returns ~0.428
*/
double stdlib_base_dists_chisquare_cdf( const double x, const double k ) {
	return stdlib_base_dists_gamma_cdf( x, k / 2.0, 0.5 );
}
