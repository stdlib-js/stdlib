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

#include "stdlib/math/base/special/signumf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include <math.h>

/**
* Evaluates the signum function for a single-precision floating-point number.
*
* @param x       number
* @return        function value
*
* @example
* float y = stdlib_base_signumf( -9.0f );
* // returns -1.0f
*/
float stdlib_base_signumf( const float x ) {
	if ( x == 0.0f || stdlib_base_is_nanf( x ) ) {
		return x; // addresses both +-0f
	}
	return ( x < 0.0f ) ? -1.0f : 1.0f;
}
