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

#include "stdlib/stats/base/dists/triangular/stdev.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/stats/base/dists/triangular/variance.h"

/**
* Returns the standard deviation of a triangular distribution.
*
* @param a    minimum support
* @param b    maximum support
* @param c    mode
* @return     standard deviation
*
* @example
* double y = stdlib_base_dists_triangular_stdev( 0.0, 1.0, 0.5 );
* // returns ~0.204
*/
double stdlib_base_dists_triangular_stdev( const double a, const double b, const double c ) {
	return stdlib_base_sqrt( stdlib_base_dists_triangular_variance( a, b, c ) );
}
