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

#include "stdlib/stats/base/dists/chi/entropy.h"
#include "stdlib/math/base/special/digamma.h"
#include "stdlib/math/base/special/gammaln.h"
#include "stdlib/constants/float64/ln_two.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Returns the differential entropy of a chi distribution.
*
* @param k    degrees of freedom
* @return     entropy
*
* @example
* double v = stdlib_base_dists_chi_entropy( 9.0 );
* // returns ~1.052
*/
double stdlib_base_dists_chi_entropy( const double k ) {
	if ( stdlib_base_is_nan( k ) || k <= 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	double kh = k / 2.0;
	return stdlib_base_gammaln( kh ) + ( 0.5 * ( k - STDLIB_CONSTANT_FLOAT64_LN2 - ( ( k - 1.0 ) * stdlib_base_digamma( kh ) ) ) );
}
