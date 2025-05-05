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

#include "stdlib/stats/base/dists/uniform/kurtosis.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Returns the excess kurtosis of a uniform distribution.
*
* @param n   minimum support
* @param p   maximum support
* @return    excess kurtosis
*
* @example
* double v = stdlib_base_dists_uniform_kurtosis( 4.0, 12.0 );
* // returns -1.2
*/
double stdlib_base_dists_uniform_kurtosis( const double a, const double b ) {
	if (
		stdlib_base_is_nan( a ) ||
		stdlib_base_is_nan( b ) ||
		a >= b
	) {
		return 0.0 / 0.0; // NaN
	}
	return -1.2;
}
