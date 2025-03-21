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

#include "stdlib/math/base/special/pdifff.h"
#include "stdlib/math/base/assert/is_nanf.h"

/**
* Returns the positive difference between `x` and `y`.
*
* @param x       first number
* @param y       second number
* @return        positive difference
*
* @example
* float v = pdiff( 6.0f, 3.0f );
* // returns 3.0f
*
* @example
* float v = pdiff( 3.0f, 4.0f );
* // returns 0.0f
*/
float stdlib_base_pdifff( const float x, const float y ) {
	if ( stdlib_base_is_nanf( x ) || stdlib_base_is_nanf( y ) ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( x > y ) {
		return x - y;
	}
	return 0.0f;
}
