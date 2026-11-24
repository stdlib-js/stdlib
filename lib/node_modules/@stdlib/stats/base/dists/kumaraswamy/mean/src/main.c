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

#include "stdlib/stats/base/dists/kumaraswamy/mean.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/beta.h"

/**
* Returns the expected value of a Kumaraswamy's double bounded distribution.
*
* @param a  first shape parameter
* @param b  second shape parameter
* @return   expected value
*
* @example
* double y = stdlib_base_dists_kumaraswamy_mean( 1.5, 1.5 );
* // returns ~0.512
*/
double stdlib_base_dists_kumaraswamy_mean( const double a, const double b ) {
	if (
		stdlib_base_is_nan( a ) ||
		stdlib_base_is_nan( b ) ||
		a <= 0.0 ||
		b <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	return b * stdlib_base_beta( 1.0 + ( 1.0/a ), b );
}
