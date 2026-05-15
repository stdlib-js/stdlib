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

#include "stdlib/stats/base/dists/erlang/mgf.h"
#include "stdlib/math/base/assert/is_nonnegative_integer.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/pow.h"

/**
* Evaluates the moment-generating function (MGF) for an Erlang distribution with shape parameter `k` and rate parameter `lambda`.
*
* @param t       input value
* @param k       shape parameter
* @param lambda  rate parameter (must be positive)
* @return        evaluated MGF
*
* @example
* double v = stdlib_base_dists_erlang_mgf( 0.3, 1, 1.0 );
* // returns ~1.429
*/
double stdlib_base_dists_erlang_mgf( const double t, const double k, const double lambda ) {
	if (
		stdlib_base_is_nan( t ) ||
		!stdlib_base_is_nonnegative_integer( k ) ||
		stdlib_base_is_nan( lambda ) ||
		lambda <= 0.0 ||
		t >= lambda
	) {
		return 0.0 / 0.0; // NaN
	}
	return stdlib_base_pow( 1.0 - ( t / lambda ), -k );
}
