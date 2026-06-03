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

#include "stdlib/stats/base/dists/erlang/logpdf.h"
#include "stdlib/stats/base/dists/gamma/logpdf.h"
#include "stdlib/math/base/assert/is_nonnegative_integer.h"

/**
* Evaluates the natural logarithm of the probability density function (PDF) for an Erlang distribution with shape parameter `k` and rate parameter `lambda` at a value `x`.
*
* @param x         input value
* @param k         shape parameter (must be a nonnegative integer)
* @param lambda    rate parameter (must be positive)
* @return          evaluated logPDF
*
* @example
* double v = stdlib_base_dists_erlang_logpdf( 0.1, 1, 1.0 );
* // returns ~-0.1
*/
double stdlib_base_dists_erlang_logpdf( const double x, const double k, const double lambda ) {
	if ( !stdlib_base_is_nonnegative_integer( k ) ) {
		return 0.0 / 0.0; // NaN
	}
	return stdlib_base_dists_gamma_logpdf( x, k, lambda );
}
