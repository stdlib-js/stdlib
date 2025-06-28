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

#include "stdlib/stats/base/dists/gamma/logcdf.h"
#include "stdlib/stats/base/dists/gamma/cdf.h"
#include "stdlib/math/base/special/ln.h"

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a gamma distribution with shape parameter `alpha` and rate parameter `beta` at a value `x`.
*
* @param x         input value
* @param alpha     shape parameter
* @param beta      rate parameter
* @return          evaluated logCDF
*
* @example
* double y = stdlib_base_dists_gamma_logcdf( 2.0, 0.5, 1.0 );
* // returns ~-0.047
*/
double stdlib_base_dists_gamma_logcdf( const double x, const double alpha, const double beta ) {
	return stdlib_base_ln( stdlib_base_dists_gamma_cdf( x, alpha, beta ) );
}

