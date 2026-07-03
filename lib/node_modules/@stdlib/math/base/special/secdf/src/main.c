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

#include "stdlib/math/base/special/secdf.h"
#include "stdlib/math/base/special/cosdf.h"

/**
* Computes the secant of a single-precision floating-point number (in degrees).
*
* @param x    input value (in degrees)
* @return     secant
*
* @example
* float y = stdlib_base_secdf( 30.0f );
* // returns ~1.15f
*/
float stdlib_base_secdf( const float x ) {
	return 1.0f / stdlib_base_cosdf( x );
}
