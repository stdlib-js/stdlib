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

#include "stdlib/stats/base/dists/poisson/logpmf.h"
#include "stdlib/math/base/assert/is_nonnegative_integer.h"
#include "stdlib/math/base/special/factorialln.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Evaluates the natural logarithm of the probability mass function (PMF) for a Poisson distribution with mean parameter `lambda` at a value `x`.
*
* @param x        input value
* @param lambda   mean parameter
* @return         evaluated logPMF
*
* @example
* double y = stdlib_base_dists_poisson_logpmf( 4.0, 3.0 );
* // returns ~-1.784
*/
double stdlib_base_dists_poisson_logpmf( const double x, const double lambda ) {
	if ( stdlib_base_is_nan( x ) || stdlib_base_is_nan( lambda ) || lambda < 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( lambda == 0.0 ) {
		return ( x == 0.0 ) ? 0.0 : STDLIB_CONSTANT_FLOAT64_NINF;
	}
	if ( stdlib_base_is_nonnegative_integer( x ) && x != STDLIB_CONSTANT_FLOAT64_PINF ) {
		return ( x * stdlib_base_ln( lambda ) ) - lambda - stdlib_base_factorialln( x );
	}
	return STDLIB_CONSTANT_FLOAT64_NINF;
}
