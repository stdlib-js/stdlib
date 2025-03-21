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

#include "stdlib/math/base/special/rcbrtf.h"
#include "stdlib/math/base/special/cbrt.h"

/**
* Computes the reciprocal cube root of a single-precision floating-point number.
*
* @param x    number
* @return     reciprocal cube root
*
* @example
* float y = stdlib_base_rcbrtf( 8.0f );
* // returns 0.5f
*/
float stdlib_base_rcbrtf( const float x ) {
	// As the cube root is a fundamental numerical operation, compute in extend precision in order to avoid precision loss:
	return 1.0f / stdlib_base_cbrt( x );
}
