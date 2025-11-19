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

#include "stdlib/stats/base/dists/planck/entropy.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/expm1.h"
#include "stdlib/math/base/special/ln.h"

/**
* Returns the differential entropy of a Planck distribution.
*
* @param lambda    shape parameter
* @return          differential entropy
*
* @example
* double y = stdlib_base_dists_planck_entropy( 0.1 );
* // returns ~3.3030
*/
double stdlib_base_dists_planck_entropy( const double lambda ) {
	double c;

	if ( stdlib_base_is_nan( lambda ) || lambda <= 0.0 ) {
		return 0.0/0.0; // NaN
	}

	c = -stdlib_base_expm1( -lambda );

	return ( lambda * stdlib_base_exp( -lambda ) / c ) - stdlib_base_ln( c );
}
