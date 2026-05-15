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

#include "stdlib/stats/base/dists/rayleigh/mgf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/erf.h"
#include "stdlib/constants/float64/sqrt_half_pi.h"
#include "stdlib/constants/float64/sqrt_two.h"

/**
* Evaluates the moment-generating function (MGF) for a Rayleigh distribution with scale parameter `sigma` at a value `t`.
*
* @param t     input value
* @param sigma scale parameter
* @return      evaluated MGF
*
* @example
* double y = stdlib_base_dists_rayleigh_mgf( 1.0, 3.0 );
* // returns ~678.508
*/
double stdlib_base_dists_rayleigh_mgf( const double t, const double sigma ) {
	double sigmat;
	double out;
	if (
		stdlib_base_is_nan( t ) ||
		stdlib_base_is_nan( sigma ) ||
		sigma < 0.0
	) {
		return 0.0/0.0; // NaN
	}
	sigmat = t * sigma;
	out = 1.0 + (sigmat * stdlib_base_exp( sigmat*sigmat / 2.0 ));
	out *= STDLIB_CONSTANT_FLOAT64_SQRT_HALF_PI * ( stdlib_base_erf( sigmat / STDLIB_CONSTANT_FLOAT64_SQRT2 ) + 1.0 );
	return out;
}
