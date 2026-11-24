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

#include "stdlib/stats/base/dists/planck/quantile.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ceil.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Evaluates the quantile function for a Planck distribution with shape parameter `lambda`.
*
* @param p      input probability
* @param lambda shape parameter
* @return       evaluated quantile function
*
* @example
* double y = stdlib_base_dists_planck_quantile( 0.8, 0.4 );
* // returns 4.0
*/
double stdlib_base_dists_planck_quantile( const double p, const double lambda ) {
	if ( stdlib_base_is_nan( lambda ) || stdlib_base_is_nan( p ) || lambda <= 0.0 || p < 0.0 || p > 1.0 ) {
		return 0.0/0.0; // NaN
	}
	if ( p == 1.0 ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	return stdlib_base_ceil( -stdlib_base_ln( 1.0 - p ) / lambda ) - 1.0;
}
