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

#include "stdlib/stats/base/dists/degenerate/variance.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Returns the variance of a degenerate distribution.
*
* @param mu    constant value of distribution
* @return      variance
*
* @example
* double y = stdlib_base_dists_degenerate_variance( 0.1 );
* // returns 0.0
*/
double stdlib_base_dists_degenerate_variance( const double mu ) {
	if ( stdlib_base_is_nan( mu ) ) {
		return 0.0 / 0.0; // NaN
	}
	return 0.0;
}
