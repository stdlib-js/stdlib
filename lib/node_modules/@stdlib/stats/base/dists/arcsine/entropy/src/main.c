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

#include "stdlib/stats/base/dists/arcsine/entropy.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/fourth_pi.h"

/**
* Returns the differential entropy of an arcsine distribution.
*
* @param a    minimum support
* @param b    maximum support
* @return     entropy
*
* @example
* double y = stdlib_base_arcsine_entropy( 4.0, 12.0 );
* // returns ~1.838
*/
double stdlib_base_dists_arcsine_entropy( const double a, const double b ) {
	if (
		stdlib_base_is_nan( a ) ||
		stdlib_base_is_nan( b ) ||
		a >= b
	) {
		return 0.0 / 0.0; // NaN
	}
	return stdlib_base_ln( STDLIB_CONSTANT_FLOAT64_FOURTH_PI ) + stdlib_base_ln( b - a );
}
