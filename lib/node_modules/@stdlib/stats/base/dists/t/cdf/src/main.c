/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/stats/base/dists/t/cdf.h"
#include "stdlib/math/base/special/betainc.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/pow.h"

/**
* Evaluates the cumulative distribution function (CDF) for a Student's t distribution with degrees of freedom `v` at a value `x`.
*
* @param x    input value
* @param v    degrees of freedom
* @return     evaluated CDF
*
* @example
* double y = stdlib_base_dists_t_cdf( 2.0, 0.1 );
* // returns ~0.611
*/
double stdlib_base_dists_t_cdf( const double x, const double v ) {
	double x2;
	double p;
	double z;
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( v ) ||
		v <= 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( x == 0.0 ) {
		return 0.5;
	}
	x2 = stdlib_base_pow( x, 2.0 );
	if ( v > 2.0*x2 ) {
		z = x2 / ( v + x2 );
		p = stdlib_base_betainc( z, 0.5, v/2.0, true, true ) / 2.0;
	} else {
		z = v / ( v + x2 );
		p = stdlib_base_betainc( z, v/2.0, 0.5, true, false ) / 2.0;
	}
	return ( x > 0.0 ) ? 1.0 - p : p;
}
