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

#include "stdlib/stats/base/dists/chisquare/quantile.h"
#include "stdlib/stats/base/dists/gamma/quantile.h"

/**
* Evaluates the quantile function for a chi-squared distribution with degrees of freedom `k` at a probability `p`.
*
* @param p    input probability
* @param k    degrees of freedom
* @return     evaluated quantile function
*
* @example
* double y = stdlib_base_dists_chisquare_quantile( 0.8, 1.0 );
* // returns ~1.642
*/
double stdlib_base_dists_chisquare_quantile( const double p, const double k ) {
	return stdlib_base_dists_gamma_quantile( p, k / 2.0, 0.5 );
}
