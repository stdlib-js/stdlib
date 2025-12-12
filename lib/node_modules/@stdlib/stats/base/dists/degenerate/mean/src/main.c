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

#include "stdlib/stats/base/dists/degenerate/mean.h"

/**
* Returns the expected value of a degenerate distribution.
*
* @param mu   constant value of the distribution
* @return     expected value
*
* @example
* double y = stdlib_base_dists_degenerate_mean( 0.1 );
* // returns 0.1
*/
double stdlib_base_dists_degenerate_mean( const double mu ) {
	return mu;
}
