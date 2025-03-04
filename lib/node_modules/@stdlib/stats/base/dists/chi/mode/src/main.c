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

#include "stdlib/stats/base/dists/chi/mode.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/sqrt.h"

/**
* Returns the mode of a chi distribution.
*
* @param k    degrees of freedom
* @return     mode
*
* @example
* double y = stdlib_base_dists_chi_mode( 9.0 );
* // returns ~2.828
*/
double stdlib_base_dists_chi_mode( const double k ) {
	if ( stdlib_base_is_nan( k ) || k < 1.0 ) {
		return 0.0/0.0; // NaN
	}
	return stdlib_base_sqrt( k - 1.0 );
}
