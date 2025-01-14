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

#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/pow.h"

/**
* Evaluates the moment-generating function (MGF) for a chi-squared distribution with degrees of freedom `k` at a value `t`.
*
* @param t    input value
* @param k    degrees of freedom (must be non-negative)
* @return     evaluated MGF, or NaN if input is invalid
*
* @example
* double y = stdlib_base_dists_chisquare_mgf( 0.0, 10.0 );
* // returns 1.0
*/
double stdlib_base_dists_chisquare_mgf( const double t, const double k ) {
	if ( stdlib_base_is_nan( t ) || stdlib_base_is_nan( k ) || k < 0.0 || t >= 0.5 ) {
		return 0.0 / 0.0; // NaN
	}
	return stdlib_base_pow( 1.0 - ( 2.0 * t ), -k / 2.0 );
}
