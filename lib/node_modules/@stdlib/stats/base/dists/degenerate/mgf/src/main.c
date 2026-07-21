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

#include "stdlib/stats/base/dists/degenerate/mgf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/exp.h"

/**
* Evaluates the moment-generating function (MGF) for a degenerate distribution centered at `mu`.
*
* @param t    input value
* @param mu   value at which to center the distribution
* @return     evaluated MGF
*
* @example
* double y = stdlib_base_dists_degenerate_mgf( 1.0, 1.0 );
* // returns ~2.718
*/
double stdlib_base_dists_degenerate_mgf( const double t, const double mu ) {
	if ( stdlib_base_is_nan( t ) || stdlib_base_is_nan( mu ) ) {
		return 0.0 / 0.0; // NaN
	}
	return stdlib_base_exp( mu * t );
}
