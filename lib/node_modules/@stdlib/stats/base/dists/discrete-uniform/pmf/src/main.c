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

#include "stdlib/stats/base/dists/discrete-uniform/pmf.h"
#include "stdlib/math/base/assert/is_integer.h"
#include "stdlib/math/base/assert/is_nan.h"
#include <stdint.h>

/**
* Evaluates the probability mass function (PMF) for a discrete uniform distribution with minimum support `a` and maximum support `b` at a value `x`.
*
* @param x    input value
* @param a    minimum support
* @param b    maximum support
* @return     PMF
*
* @example
* double y = stdlib_base_dists_discrete_uniform_pmf( 2.0, 0, 4 );
* // returns ~0.2
*/
double stdlib_base_dists_discrete_uniform_pmf( const double x, const int32_t a, const int32_t b ) {
	if (
		stdlib_base_is_nan( x ) ||
		a > b
	) {
		return 0.0/0.0; // NaN
	}
	if (
		x < a ||
		x > b ||
		!stdlib_base_is_integer( x )
	) {
		return 0.0;
	}
	return 1.0 / ( b - a + 1.0 );
}
