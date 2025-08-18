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

#include "stdlib/stats/base/dists/kumaraswamy/kurtosis.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/beta.h"

/**
* Returns the excess kurtosis of a Kumaraswamy's double bounded distribution.
*
* @param a   first shape parameter
* @param b   second shape parameter
* @return    excess kurtosis
*
* @example
* double v = stdlib_base_dists_kumaraswamy_kurtosis( 0.5, 1.0 );
* // returns ~2.143
*/
double stdlib_base_dists_kumaraswamy_kurtosis( const double a, const double b ) {
	double sigma2;
	double out;
	double mu2;
	double m1;
	double m2;
	double m3;
	double m4;
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
	m4 = b * stdlib_base_beta( 1.0 + ( 4.0/a ), b );
	sigma2 = m2 - ( m1*m1 );
	mu2 = m1 * m1;
	out = ( m4 - ( 4.0*m3*m1 ) + ( 6.0*m2*mu2 ) - ( 3.0*mu2*mu2 ) );
	out /= sigma2*sigma2;
	return out;
}

