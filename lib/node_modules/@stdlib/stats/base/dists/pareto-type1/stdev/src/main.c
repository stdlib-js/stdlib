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

#include "stdlib/stats/base/dists/pareto-type1/stdev.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Returns the standard deviation of a Pareto (Type I) distribution.
*
* @param alpha    first shape parameter
* @param beta     second shape parameter
* @return         standard deviation
*
* @example
* double y = stdlib_base_dists_pareto_type1_stdev( 4.0, 12.0 );
* // returns ~5.657
*/
double stdlib_base_dists_pareto_type1_stdev( const double alpha, const double beta ) {
	double out;
	if (
		stdlib_base_is_nan( alpha ) ||
		alpha <= 0.0 ||
		stdlib_base_is_nan( beta ) ||
		beta <= 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( alpha < 2.0 ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	out = ( ( beta*beta ) * alpha ) / ( stdlib_base_pow( alpha-1.0, 2.0 ) * ( alpha-2.0 ) );
	return stdlib_base_sqrt( out );
}
