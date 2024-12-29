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

#include "stdlib/stats/base/dists/triangular/mgf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/pow.h"

/**
* Evaluates the moment-generating function (MGF) for a triangular distribution with lower limit `a`, upper limit `b`, and mode `c` at a value `t`.
*
* @param t   input value
* @param a   lower limit
* @param b   upper limit
* @param c   mode
* @return    evaluated MGF
*
* @example
* double y = stdlib_base_dists_geometric_mgf( 0.5, -1.0, 1.0, 0.0 );
* // returns ~1.021
*/
double stdlib_base_dists_triangular_mgf( const double t, const double a, const double b, const double c ) {
	if (
		stdlib_base_is_nan( t ) ||
		stdlib_base_is_nan( a ) ||
		stdlib_base_is_nan( b ) ||
		stdlib_base_is_nan( c ) ||
		a > c ||
		c > b
	) {
		return 0.0/0.0; // NaN
	}
	if( t == 0 ){
		return 1.0;
	}
	double bmc = b - c;
	double bma = b - a;
	double cma = c - a;
	double ret = (bmc * stdlib_base_exp( a * t )) - (bma * stdlib_base_exp( c * t ));
	ret += cma * stdlib_base_exp( b * t );
	ret *= 2.0;
	ret /= bma * cma * bmc * stdlib_base_pow( t, 2.0 );
	return ret;
}
