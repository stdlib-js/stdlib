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

#include "stdlib/stats/base/dists/f/skewness.h"
#include "stdlib/math/base/special/sqrt.h"

/**
* Returns the skewness of an F distribution.
*
* @param a    numerator degrees of freedom
* @param b    denominator degrees of freedom
* @return     skewness
*
* @example
* double y = stdlib_base_dists_f_skewness( 3.0, 7.0 );
* // returns 11.0
*/
double stdlib_base_dists_f_skewness( const double d1, const double d2 ) {
	double out;
	if ( d1 <= 0.0 || d2 <= 6.0 ) {
		return 0.0/0.0; // NaN
	}
	out = ( ( 2.0*d1 ) + d2 - 2.0 ) * stdlib_base_sqrt( 8.0 * ( d2-4.0 ) );
	out /= ( d2-6.0 ) * stdlib_base_sqrt( d1 * ( d1+d2-2.0 ) );
	return out;
}
