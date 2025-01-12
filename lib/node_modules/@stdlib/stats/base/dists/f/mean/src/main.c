/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/stats/base/dists/f/mean.h"
#include "stdlib/math/base/assert/is_nan.h"


/**
* Returns the expected value of an F distribution.
*
* @param d1    numerator degrees of freedom
* @param d2    denominator degrees of freedom
* @return      expected value
*
* @example
* double y = stdlib_base_f_mean( 3.0, 5.0 );
* // returns ~1.667
*/
double stdlib_base_dists_f_mean( const double d1, const double d2 ) {
	if (
		stdlib_base_is_nan( d1 ) ||
		stdlib_base_is_nan( d2 ) ||
		d1 <= 0.0 ||
		d2 <= 2.0
	) {
		return 0.0/0.0; // NaN
	}
	return d2 / ( d2 - 2.0 );
}
