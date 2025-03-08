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

#include "stdlib/stats/base/dists/uniform/mgf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/math/base/special/exp.h"

/**
* Evaluates the moment-generating function (MGF) of a uniform distribution with minimum support `a` and maximum support `b` at a value `t`.
*
* @param t   input value
* @param a   minimum support
* @param b   maximum support
* @return    evaluated MGF
*
* @example
* double y = stdlib_base_dists_uniform_mgf( 2.0, 0.0, 4.0 );
* // returns ~372.495
*/
double stdlib_base_dists_uniform_mgf( const double t, const double a, const double b ) {
	if (
		stdlib_base_is_nan( t ) ||
		stdlib_base_is_nan( a ) ||
		stdlib_base_is_nan( b ) ||
		a >= b
	) {
		return 0.0/0.0; // NaN
	}
	if ( t == 0.0 ) {
		return 1.0;
	}
	// Case: t not equal to zero
	return ( stdlib_base_exp( t * b ) - stdlib_base_exp( t * a ) ) / ( t * ( b - a ) );
}
