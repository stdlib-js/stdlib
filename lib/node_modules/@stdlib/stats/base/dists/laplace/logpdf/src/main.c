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

#include "stdlib/stats/base/dists/laplace/logpdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/ln.h"

/**
* Evaluates the logarithm of the probability density function (PDF) for a Laplace distribution with location parameter `mu` and scale parameter `b` at a value `x`.
*
* @param x   input value
* @param mu  location parameter
* @param b   scale parameter
* @return    evaluated logPDF
*
* @example
* double y = stdlib_base_dists_laplace_logpdf( 2.0, 0.0, 1.0 );
* // returns ~-2.693
*/
double stdlib_base_dists_laplace_logpdf( const double x, const double mu, const double b ) {
	double z;
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( b ) ||
		b <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	z = ( x - mu ) / b;
	return -( stdlib_base_abs( z ) + stdlib_base_ln( 2.0 * b ) );
}
