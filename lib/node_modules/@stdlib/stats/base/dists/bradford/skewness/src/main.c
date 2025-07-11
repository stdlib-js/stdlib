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

#include "stdlib/stats/base/dists/bradford/skewness.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/constants/float64/sqrt_two.h"

/**
* Returns the skewness of a Bradford distribution with shape parameter `c`.
*
* @param c    shape parameter
* @return     skewness
*
* @example
* double y = stdlib_base_dists_bradford_skewness( 9.0 );
* // returns ~0.772
*
* @example
* double y = stdlib_base_dists_bradford_skewness( 1.0 );
* // returns ~0.239
*/
double stdlib_base_dists_bradford_skewness( const double c ) {
	double ans;
	double t1;
	double t2;
	double t3;
	double p;

	if ( stdlib_base_is_nan( c ) || c <= 0.0 ) {
		return 0.0/0.0; // NaN
	}

	p = stdlib_base_ln( 1.0 + c );

	t1 = 12.0 * ( c * c );
	t2 = 9.0 * c * p * ( c + 2.0 );
	t3 = 2.0 * ( p * p ) * ( ( c * ( c + 3.0 ) ) + 3.0 );
	ans = STDLIB_CONSTANT_FLOAT64_SQRT2 * ( t1 - t2 + t3 );

	t1 = c * ( ( c * ( p - 2.0 ) ) + ( 2.0 * p ) );
	t2 = ( 3.0 * c * ( p - 2.0 ) ) + ( 6.0 * p );
	ans /= stdlib_base_sqrt( t1 ) * t2;
	return ans;
}
