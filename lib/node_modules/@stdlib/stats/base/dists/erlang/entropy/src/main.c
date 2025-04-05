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

#include "stdlib/stats/base/dists/erlang/entropy.h"
#include "stdlib/math/base/assert/is_positive_integer.h"
#include "stdlib/math/base/special/digamma.h"
#include "stdlib/math/base/special/gamma.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/assert/is_nan.h"
#include <stdint.h>

/**
* Returns the differential entropy for an Erlang distribution with shape parameter `k` and rate parameter `lambda`.
*
* @param k         shape parameter
* @param lambda    rate parameter
* @return          differential entropy
*
* @example
* double y = stdlib_base_dists_erlang_entropy( 1, 1.0 );
* // returns 1.0
*/
double stdlib_base_dists_erlang_entropy( const int32_t k, const double lambda ) {
	if (
		k <= 0.0 ||
		stdlib_base_is_nan( lambda ) ||
		lambda <= 0.0
	) {
		return 0.0 / 0.0;
	}
	return ( ( 1-k ) * stdlib_base_digamma( k ) ) + stdlib_base_ln( stdlib_base_gamma( k ) / lambda ) + k;
}
