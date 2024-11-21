/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

#include "stdlib/math/base/special/kronecker_delta.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Evaluates the Kronecker delta.
*
* @param i       input value
* @param j       input value
* @return        function value
*
* @example
* double v = stdlib_base_kronecker_delta( 3.0, 3.0 );
* // returns 1.0
*
* @example
* double v = stdlib_base_kronecker_delta( 3.0, 3.14 );
* // returns 0.0
*/
double stdlib_base_kronecker_delta( const double i, const double j ) {
	if ( stdlib_base_is_nan( i ) || stdlib_base_is_nan( j ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( i == j ) {
		return 1.0;
	}
	return 0.0;
}
