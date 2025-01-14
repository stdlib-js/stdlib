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

#include "stdlib/stats/base/dists/arcsine/variance.h"
#include "stdlib/math/base/special/pow.h"

/**
* Returns the variance of an arcsine distribution.
*
* @param a    minimum support
* @param b    maximum support
* @return     variance
*
* @example
* double y = stdlib_base_arcsine_variance( 0.0, 1.0 );
* // returns ~0.125
*/
double stdlib_base_dists_arcsine_variance( const double a, const double b ) {
	if ( a >= b ) {
		return 0.0 / 0.0; // NaN
	}
	return 0.125 * stdlib_base_pow( b - a, 2.0 );
}
