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

#include "stdlib/stats/base/dists/arcsine/median.h"

/**
* Returns the median of an arcsine distribution.
*
* @param a    minimum support
* @param b    maximum support
* @return     median
*
* @example
* double y = stdlib_base_dists_arcsine_median( 0.0, 1.0 );
* // returns 0.5
*/
double stdlib_base_dists_arcsine_median( const double a, const double b ) {
	if ( a >= b ) {
		return 0.0 / 0.0; // NaN
	}
	return ( a + b ) / 2.0;
}
