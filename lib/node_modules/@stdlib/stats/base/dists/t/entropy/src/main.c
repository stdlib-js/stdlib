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

#include "stdlib/stats/base/dists/t/entropy.h"
#include "stdlib/math/base/special/digamma.h"
#include "stdlib/math/base/special/beta.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Returns the differential entropy of a Student's t distribution.
*
* @param v    degrees of freedom
* @return     entropy
*
* @example
* double y = stdlib_base_dists_t_entropy( 9.0 );
* // returns ~1.553
*/
double stdlib_base_dists_t_entropy( const double v ) {
	double out;
	double vh;
	if ( stdlib_base_is_nan( v ) || v <= 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	vh = v / 2.0;
	out = ( v + 1.0 ) / 2.0;
	out *= stdlib_base_digamma( ( 1.0 + v ) / 2.0 ) - stdlib_base_digamma( vh );
	out += stdlib_base_ln( stdlib_base_sqrt( v ) * stdlib_base_beta( vh, 0.5 ) );
	return out;
}
