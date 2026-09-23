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

#include "stdlib/math/base/special/fast/hypotf.h"
#include "stdlib/math/base/special/sqrtf.h"

/**
* Computes the hypotenuse of two single-precision floating-point numbers.
*
* @param x       number
* @param y       number
* @return        hypotenuse
*
* @example
* float h = stdlib_base_fast_hypotf( 5.0f, 12.0f );
* // returns 13.0f
*/
float stdlib_base_fast_hypotf( const float x, const float y ) {
	return stdlib_base_sqrtf( ( x * x ) + ( y * y ) );
}
