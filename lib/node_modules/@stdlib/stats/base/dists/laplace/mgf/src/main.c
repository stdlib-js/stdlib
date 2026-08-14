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

#include "stdlib/stats/base/dists/laplace/mgf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/pow.h"

/**
* Evaluates the moment-generating function (MGF) for a Laplace (double exponential) distribution with location parameter `mu` and scale parameter `b` at a value `t`.
*
* @param t  input value
* @param mu location parameter
* @param b  scale parameter
* @return   evaluated MGF
*
* @example
* double y = stdlib_base_dists_laplace_mgf( 0.5, 0.0, 1.0 );
* // returns ~1.333
*/
double stdlib_base_dists_laplace_mgf( const double t, const double mu, const double b ) {
	double bt;
	if (
		stdlib_base_is_nan( t ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( b ) ||
		b <= 0.0 ||
		stdlib_base_abs( t ) >= 1.0/b
	) {
		return 0.0/0.0; // NaN
	}
	bt = b * t;
	return stdlib_base_exp( mu * t ) / ( 1.0 - stdlib_base_pow( bt, 2.0 ) );
}
