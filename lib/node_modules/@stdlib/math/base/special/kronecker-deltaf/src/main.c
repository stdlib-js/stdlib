/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#include "stdlib/math/base/special/kronecker_deltaf.h"
#include "stdlib/math/base/assert/is_nanf.h"

/**
* Evaluates the Kronecker delta (single-precision).
*
* @param i       input value
* @param j       input value
* @return        function value
*
* @example
* float v = stdlib_base_kronecker_delta( 3.0f, 3.0f );
* // returns 1.0f
*
* @example
* float v = stdlib_base_kronecker_delta( 3.0f, 3.14f );
* // returns 0.0f
*/
float stdlib_base_kronecker_deltaf( const float i, const float j ) {
	if ( stdlib_base_is_nanf( i ) || stdlib_base_is_nanf( j ) ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( i == j ) {
		return 1.0f;
	}
	return 0.0f;
}
