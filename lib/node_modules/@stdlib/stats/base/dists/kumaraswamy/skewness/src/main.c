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

#include "stdlib/stats/base/dists/kumaraswamy/skewness.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/beta.h"
#include "stdlib/math/base/special/pow.h"

/**
* Returns the skewness of a Kumaraswamy's double bounded distribution.
*
* @param a   first shape parameter
* @param b   second shape parameter
* @return    skewness
*
* @example
* var v = skewness( 0.5, 1.0 );
* // returns ~0.639
*/
double stdlib_base_dists_kumaraswamy_skewness( const double a, const double b ) {
	double sigma2;
	double m1;
	double m2;
	double m3;
	if (
		stdlib_base_is_nan( a ) ||
		a <= 0.0 ||
		stdlib_base_is_nan( b ) ||
		b <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	m1 = b * stdlib_base_beta( 1.0 + ( 1.0/a ), b );
	m2 = b * stdlib_base_beta( 1.0 + ( 2.0/a ), b );
	m3 = b * stdlib_base_beta( 1.0 + ( 3.0/a ), b );
	sigma2 = m2 - ( m1*m1 );
	return ( m3 - ( 3.0*m1*sigma2 ) - ( m1*m1*m1 ) ) / stdlib_base_pow( sigma2, 1.5 );
}
