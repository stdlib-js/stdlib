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

#include "stdlib/stats/base/dists/bradford/stdev.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/stats/base/dists/bradford/variance.h"

/**
* Returns the standard deviation of a Bradford distribution.
*
* @param c    shape parameter
* @return     standard deviation
*
* @example
* double y = stdlib_base_dists_bradford_stdev( 0.5 );
* // returns ~0.288
*/
double stdlib_base_dists_bradford_stdev( const double c ) {
	return stdlib_base_sqrt( stdlib_base_dists_bradford_variance( c ) );
}
