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

#include "stdlib/stats/base/dists/gamma/mgf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/pow.h"

/**
* Evaluates the moment-generating function (MGF) for a gamma distribution with shape parameter `alpha` and rate parameter `beta`.
*
* @param t        input value
* @param alpha    shape parameter
* @param beta     rate parameter
* @return         evaluated MGF
*
* @example
* double y = stdlib_base_dists_gamma_mgf( 0.5, 0.5, 1.0 );
* // returns ~1.414
*/
double stdlib_base_dists_gamma_mgf( const double t, const double alpha, const double beta ) {
	double base;
	if (
		stdlib_base_is_nan( t ) ||
		stdlib_base_is_nan( alpha ) ||
		stdlib_base_is_nan( beta ) ||
		alpha < 0.0 ||
		beta <= 0.0 ||
		t >= beta
	) {
		return 0.0 / 0.0;
	}
	base = 1.0 - (t / beta);
	return stdlib_base_pow( base, -alpha );
}
