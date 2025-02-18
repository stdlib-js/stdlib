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

#include "stdlib/stats/base/dists/normal/mgf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/exp.h"

/**
* Evaluates the moment-generating function (MGF) for a normal distribution with mean `mu` and standard deviation `sigma` at a value `t`.
*
* @param t      input value
* @param mu     mean
* @param sigma  standard deviation
* @return       evaluated MGF
*
* @example
* double y = stdlib_base_dists_normal_mgf( 2.0, 0.0, 1.0 );
* // returns ~7.389
*/
double stdlib_base_dists_normal_mgf( const double t, const double mu, const double sigma ) {
	if (
		stdlib_base_is_nan( t ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( sigma ) ||
		sigma <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	return stdlib_base_exp( ( mu*t ) + ( 0.5 * stdlib_base_pow( sigma*t, 2.0 ) ) );
}
