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

#include "stdlib/stats/base/dists/weibull/entropy.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/eulergamma.h"

/**
* Returns the differential entropy of a Weibull distribution.
*
* @param k        shape parameter
* @param lambda   scale paramter
* @return         entropy
*
* @example
* double y = stdlib_base_dists_weibull_entropy( 4.0, 12.0 );
* // returns ~2.532
*/
double stdlib_base_dists_weibull_entropy( const double k, const double lambda ) {
	if (
		stdlib_base_is_nan( k ) ||
		k <= 0.0 ||
		stdlib_base_is_nan( lambda ) ||
		lambda <= 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	return ( STDLIB_CONSTANT_FLOAT64_EULERGAMMA * ( 1.0 - (1.0/k) ) ) + stdlib_base_ln( lambda/k ) + 1.0;
}
