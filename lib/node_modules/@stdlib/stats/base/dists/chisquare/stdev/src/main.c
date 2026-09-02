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

#include "stdlib/stats/base/dists/chisquare/stdev.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/stats/base/dists/chisquare/variance.h"

/**
* Returns the standard deviation of a chi-squared distribution.
*
* @param k    degrees of freedom
* @return     standard deviation
*
* @example
* double y = stdlib_base_dists_chisquare_stdev( 9.0 );
* // returns ~4.243
*/
double stdlib_base_dists_chisquare_stdev( const double k ) {
	return stdlib_base_sqrt( stdlib_base_dists_chisquare_variance( k ) );
}
