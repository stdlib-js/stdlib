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

#include "stdlib/stats/base/dists/weibull/mgf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/gamma.h"
#include "stdlib/constants/float64/eps.h"


/**
* Evaluates the moment-generating function (MGF) for a Weibull distribution with shape `k` and scale `lambda` at a value `t`.
*
* @param t       input value
* @param k       shape parameter
* @param lambda  scale parameter
* @return        evaluated MGF
*
* @example
* double y = stdlib_base_dists_weibull_mgf( 1.0, 1.0, 0.5 );
* // returns ~2.0
*/
double stdlib_base_dists_weibull_mgf( const double t, const double k, const double lambda ) {
	double summand;
	double sum;
	double c;
	double n;

	if (
		stdlib_base_is_nan( t ) ||
		stdlib_base_is_nan( k ) ||
		stdlib_base_is_nan( lambda ) ||
		k <= 0.0 ||
		lambda <= 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	sum = 1.0;
	c = 1.0;
	n = 0;
	do {
		n += 1;
		c *= ( t * lambda ) / n;
		if ( c == 0.0 ) {
			summand = 0.0;
		} else {
			summand = c * stdlib_base_gamma( 1.0 + (n / k) );
		}
		sum += summand;
	} while ( summand / sum > STDLIB_CONSTANT_FLOAT64_EPS );
	return sum;
}
