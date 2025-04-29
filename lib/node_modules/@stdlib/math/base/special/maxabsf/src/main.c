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

#include "stdlib/math/base/special/maxabsf.h"
#include "stdlib/math/base/special/maxf.h"
#include "stdlib/math/base/special/absf.h"

/**
* Returns the maximum absolute single-precision floating-point number.
*
* @param x       first number
* @param y       second number
* @return        maximum absolute value
*
* @example
* float v = stdlib_base_maxabsf( 3.14f, -4.2f );
* // returns 4.2f
*
* @example
* float v = stdlib_base_maxabsf( 0.0f, -0.0f );
* // returns +0.0f
*/
float stdlib_base_maxabsf( const float x, const float y ) {
	return stdlib_base_maxf( stdlib_base_absf( x ), stdlib_base_absf( y ) );
}
