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

#include "stdlib/stats/base/dists/levy/entropy.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/eulergamma.h"
#include "stdlib/constants/float64/pi.h"

static const double ONE_PLUS_THREE_GAMMA = 1.0 + ( 3.0 * STDLIB_CONSTANT_FLOAT64_EULERGAMMA );
static const double PI_TIMES_SIXTEEN = 16.0 * STDLIB_CONSTANT_FLOAT64_PI;

/**
* Returns the differential entropy for a Lévy distribution with location `mu` and scale `c`.
*
* @param mu    location parameter
* @param c     scale parameter
* @return      differential entropy
*
* @example
* double y = stdlib_base_dists_levy_entropy( 0.0, 1.0 );
* // returns ~3.324
*/
double stdlib_base_dists_levy_entropy( const double mu, const double c ) {
	if (
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( c ) ||
		c <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	return ( ONE_PLUS_THREE_GAMMA + stdlib_base_ln( c*c*PI_TIMES_SIXTEEN ) ) / 2.0;
}
