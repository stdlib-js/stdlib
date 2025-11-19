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

#include "stdlib/stats/base/dists/exponential/quantile.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/math/base/special/ln.h"

/**
* Evaluates the quantile function for an exponential distribution with rate parameter `lambda` at a probability `p`.
* @param p - input probability
* @param lambda    rate parameter
* @return          quantile
*
* @example
* double y = stdlib_base_exponential_quantile( 0.8, 1.0 );
* // returns ~1.609
*/
double stdlib_base_dists_exponential_quantile( const double p, const double lambda ) {
	if (
		stdlib_base_is_nan( lambda ) ||
		lambda < 0.0 ||
		lambda == STDLIB_CONSTANT_FLOAT64_PINF ||
		stdlib_base_is_nan( p ) ||
		p < 0.0 ||
		p > 1.0
	) {
		return 0.0 / 0.0; // NaN
	}
	return -stdlib_base_ln( 1.0 - p ) / lambda;
}
