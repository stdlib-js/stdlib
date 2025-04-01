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

#include "stdlib/stats/base/dists/logistic/mgf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/sinc.h"

/**
* Evaluates the moment-generating function (MGF) for a logistic distribution with mean `mu` and scale parameter `s` at a value `t`.
*
* @param t   input value
* @param mu  mean
* @param s   scale parameter
* @return    evaluated MGF
*
* @example
* double y = stdlib_base_dists_logistic_mgf( 0.9, 0.0, 1.0 );
* // returns ~9.15
*/
double stdlib_base_dists_logistic_mgf( const double t, const double mu, const double s ) {
	double st = s * t;
	if (
		stdlib_base_is_nan( st ) ||
		stdlib_base_is_nan( mu ) ||
		s < 0.0 ||
		stdlib_base_abs( st ) > 1.0
	) {
		return 0.0 / 0.0; // NaN
	}
	return stdlib_base_exp( mu * t ) / stdlib_base_sinc( st );
}
