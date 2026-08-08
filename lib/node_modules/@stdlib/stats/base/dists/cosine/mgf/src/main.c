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

#include "stdlib/stats/base/dists/cosine/mgf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/sinh.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/constants/float64/pi_squared.h"

/**
* Evaluates the moment-generating function (MGF) for a raised cosine distribution with location parameter `mu` and scale parameter `s` at a value `t`.
*
* @param t    input value
* @param mu   location parameter
* @param s    scale parameter
* @return     evaluated MGF
*
* @example
* double y = stdlib_base_dists_cosine_mgf( 0.5, 0.0, 1.0 );
* // returns ~1.016
*/
double stdlib_base_dists_cosine_mgf( const double t, const double mu, const double s ) {
	if (
		stdlib_base_is_nan( t ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( s ) ||
		s <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	const double st = s*t;
	double out = STDLIB_CONSTANT_FLOAT64_PI_SQUARED * stdlib_base_sinh( st );
	out /= st * ( STDLIB_CONSTANT_FLOAT64_PI_SQUARED + ( st*st ) );
	return stdlib_base_exp( mu*t ) * out;
}
