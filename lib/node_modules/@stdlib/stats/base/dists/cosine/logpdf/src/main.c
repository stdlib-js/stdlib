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

#include "stdlib/stats/base/dists/cosine/logpdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/cospi.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/math/base/special/ln.h"

/**
* Evaluates the logarithm of the probability density function (PDF) for a raised cosine distribution with location parameter `mu` and scale parameter `s` at a value `x`.
*
* @param x    input value
* @param mu   location parameter
* @param s    scale parameter
* @return     evaluated logPDF
*
* @example
* double y = stdlib_base_dists_cosine_logpdf( 2.0, 0.0, 3.0 );
* // returns ~-2.485
*/
double stdlib_base_dists_cosine_logpdf( const double x, const double mu, const double s ) {
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( s ) ||
		s < 0.0
	) {
		return 0.0/0.0;
	}
	if ( s == 0.0 ) {
		return ( x == mu ) ? STDLIB_CONSTANT_FLOAT64_PINF : STDLIB_CONSTANT_FLOAT64_NINF;
	}
	if (
		x < mu - s ||
		x > mu + s
	) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	const double p = ( x - mu ) / s;
	return stdlib_base_ln( 1.0 + stdlib_base_cospi( p ) ) - stdlib_base_ln( 2.0 * s );
}
