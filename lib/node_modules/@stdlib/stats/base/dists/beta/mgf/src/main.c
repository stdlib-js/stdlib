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

#include "stdlib/stats/base/dists/beta/mgf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/beta.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/constants/float64/eps.h"

/**
* Evaluates the moment-generating function (MGF) for a beta distribution with first shape parameter `alpha` and second shape parameter `beta` at a value `t`
*
* @param t      input value
* @param alpha  first shape parameter
* @param beta   second shape parameter
* @return       evaluated MGF
*
* @example
* double y = stdlib_base_dists_beta_mgf( 0.5, 1.0, 1.0 );
* // returns ~1.297
*/
double stdlib_base_dists_beta_mgf( const double t, const double alpha, const double beta ) {
	double summand;
	double denom;
	double sum;
	double c;
	double k;

	if (
		stdlib_base_is_nan( t ) ||
		stdlib_base_is_nan( alpha ) ||
		stdlib_base_is_nan( beta ) ||
		alpha <= 0.0 ||
		beta <= 0.0
	) {
		return 0.0/0.0; // NaN
	}

	denom = stdlib_base_beta( alpha, beta );
	sum = 1.0;
	c = 1.0;
	k = 1;
	do {
		c *= t / k;
		summand = ( stdlib_base_beta( alpha+k, beta ) / denom ) * c;
		sum += summand;
		k += 1;
	} while ( stdlib_base_abs( summand / sum ) >= STDLIB_CONSTANT_FLOAT64_EPS );
	return sum;
}

