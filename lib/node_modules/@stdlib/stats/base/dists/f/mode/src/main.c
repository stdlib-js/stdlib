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

#include "stdlib/stats/base/dists/f/mode.h"

/**
* Returns the mode of an F distribution.
*
* @param a    numerator degrees of freedom
* @param b    denominator degrees of freedom
* @return     mode
*
* @example
* double y = stdlib_base_dists_f_mode( 3.0, 5.0 );
* // returns ~0.238
*/
double stdlib_base_dists_f_mode( const double d1, const double d2 ) {
	if ( d1 <= 2.0 || d2 <= 0.0 ) {
		return 0.0/0.0; // NaN
	}
	return ( ( d1-2.0 ) / d1 ) * ( d2 / ( d2+2.0 ) );
}
