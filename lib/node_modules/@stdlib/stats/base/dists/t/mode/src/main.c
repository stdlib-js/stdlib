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

#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/stats/base/dists/t/mode.h"

/**
* Evaluates the mode for a Student's t-distribution with degrees of freedom `v`.
*
* @param v    degrees of freedom
* @return     mode
*
* @example
* double y = stdlib_base_dists_t_mode( 5.0 );
* // returns 0.0
*/
double stdlib_base_dists_t_mode( const double v ) {
	if ( stdlib_base_is_nan( v ) || v < 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	return 0.0;
}
