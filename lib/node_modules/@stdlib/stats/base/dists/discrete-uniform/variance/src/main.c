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

#include "stdlib/stats/base/dists/discrete-uniform/variance.h"
#include "stdlib/math/base/special/pow.h"
#include <stdint.h>

/**
* Returns the variance of a discrete uniform distribution with parameters `a` (minimum support) and `b` (maximum support).
*
* @param a    minimum support
* @param b    maximum support
* @return     variance
*
* @example
* double y = stdlib_base_dists_discrete_uniform_variance( 0, 1 );
* // returns ~0.25
*/
double stdlib_base_dists_discrete_uniform_variance( const int32_t a, const int32_t b ) {
	if ( a > b ) {
		return 0.0/0.0; // NaN
	}
	return ( stdlib_base_pow( b-a+1, 2.0 ) - 1.0 ) / 12.0;
}
