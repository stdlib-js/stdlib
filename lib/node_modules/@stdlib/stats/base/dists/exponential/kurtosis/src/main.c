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

#include "stdlib/stats/base/dists/exponential/kurtosis.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Returns the kurtosis of an exponential distribution.
*
* @param lambda    rate parameter
* @return          kurtosis
*
* @example
* double y = stdlib_base_exponential_kurtosis( 9.0 );
* // returns 6.0
*/
double stdlib_base_dists_exponential_kurtosis( const double lambda ) {
	if ( stdlib_base_is_nan( lambda ) || lambda <= 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	return 6.0;
}
