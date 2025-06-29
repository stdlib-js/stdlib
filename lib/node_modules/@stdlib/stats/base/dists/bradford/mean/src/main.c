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

#include "stdlib/stats/base/dists/bradford/mean.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"

/**
* Returns the expected value of a Bradford distribution with shape parameter `c`.
*
* @param c    shape parameter
* @return     expected value
*
* @example
* double y = stdlib_base_dists_bradford_mean( 0.5 );
* // returns ~0.466
*/
double stdlib_base_dists_bradford_mean( const double c ) {
	double k;
	if (
		stdlib_base_is_nan( c ) ||
		c <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	k = stdlib_base_ln( 1.0 + c );
	return ( c - k ) / ( c * k );
}
