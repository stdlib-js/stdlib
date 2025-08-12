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

#include "stdlib/math/base/special/factoriallnf.h"
#include "stdlib/math/base/assert/is_negative_integerf.h"
#include "stdlib/math/base/special/absgammalnf.h"

/**
* Evaluates the natural logarithm of the factorial of a single-precision floating-point number.
*
* @param x    input value
* @return     natural logarithm of factorial of `x`
*
* @example
* float out = stdlib_base_factoriallnf( 3.0f );
* // returns ~1.792f
*/
float stdlib_base_factoriallnf( const float x ) {
	if ( stdlib_base_is_negative_integerf( x ) ) {
		return 0.0f / 0.0f; // NaN
	}
	return stdlib_base_absgammalnf( x + 1.0f );
}
