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

#include "stdlib/math/base/special/dirichlet_eta.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/powm1.h"
#include "stdlib/constants/float64/ln_two.h"
#include "stdlib/math/base/special/riemann_zeta.h"

/**
* Evaluates the Dirichlet eta function for a double-precision floating-point number `s`.
*
* @param s    input value
* @return     function value
*
* @example
* double y = stdlib_base_eta( 0.0 );
* // returns 0.5
*/
double stdlib_base_eta( const double s ) {
	if ( stdlib_base_is_nan( s ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( s == 1.0 ) {
		// Alternating harmonic series...
		return STDLIB_CONSTANT_FLOAT64_LN2;
	}
	return -stdlib_base_powm1( 2.0, 1.0 - s ) * stdlib_base_zeta( s );
}
