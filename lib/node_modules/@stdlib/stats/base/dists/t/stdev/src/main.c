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

#include "stdlib/stats/base/dists/t/stdev.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Returns the standard deviation of a Student's t distribution.
*
* @param v    degrees of freedom
* @return     standard deviation
*
* @example
* double y = stdlib_base_t_stdev( 9.0 );
* // returns ~1.134
*/
double stdlib_base_dists_t_stdev( const double v ) {
	if ( stdlib_base_is_nan( v ) || v <= 1.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( v <= 2.0 ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	return stdlib_base_sqrt( v / ( v - 2.0 ) );
}
