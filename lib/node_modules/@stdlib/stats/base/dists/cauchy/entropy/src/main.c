/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/stats/base/dists/cauchy/entropy.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/pi.h"

/**
* Returns the differential entropy of a Cauchy distribution.
*
* @param x0       location parameter
* @param gamma    scale parameter
* @return         evaluated entropy
*
* @example
* double y = stdlib_base_dists_cauchy_entropy( 10.0, 5.0 );
* // returns ~4.14
*/
double stdlib_base_dists_cauchy_entropy( const double x0, const double gamma ) {
	if (
		stdlib_base_is_nan( gamma ) ||
		stdlib_base_is_nan( x0 ) ||
		gamma <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	return stdlib_base_ln( gamma ) + stdlib_base_ln( 4.0*STDLIB_CONSTANT_FLOAT64_PI );
}
