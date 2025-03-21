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

#include "stdlib/math/base/special/factorialln.h"
#include "stdlib/math/base/assert/is_negative_integer.h"
#include "stdlib/math/base/special/gammaln.h"

/**
* Evaluates the natural logarithm of the factorial of `x`.
*
* @param x    input value
* @return     natural logarithm of factorial of `x`
*
* @example
* double out = stdlib_base_factorialln( 3.0 );
* // returns ~1.792
*/
double stdlib_base_factorialln( const double x ) {
	if ( stdlib_base_is_negative_integer( x ) ) {
		return 0.0 / 0.0; // NaN
	}
	return stdlib_base_gammaln( x + 1.0 );
}
