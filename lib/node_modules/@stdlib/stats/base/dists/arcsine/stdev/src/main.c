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

#include "stdlib/stats/base/dists/arcsine/stdev.h"
#include "stdlib/math/base/assert/is_nan.h"

static const double SQRT1OVER8 = 0.35355339059327373; // sqrt(1.0 / 8.0)

/**
* Returns the standard deviation of an arcsine distribution.
*
* @param a    minimum support
* @param b    maximum support
* @return     standard deviation
*
* @example
* double v = stdlib_base_dists_arcsine_stdev( 0.0, 1.0 );
* // returns ~0.354
*/
double stdlib_base_dists_arcsine_stdev( const double a, const double b ) {
	if ( stdlib_base_is_nan( a ) || stdlib_base_is_nan( b ) || a >= b ) {
		return 0.0 / 0.0; // NaN
	}
	return SQRT1OVER8 * ( b - a );
}
