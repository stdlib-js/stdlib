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

#include "stdlib/math/base/special/rampf.h"
#include "stdlib/math/base/assert/is_nanf.h"

/**
* Evaluates the ramp function.
*
* @param x       number
* @return        function value
*
* @example
* float v = stdlib_base_rampf( 3.14 );
* // returns 3.14
*
* @example
* float v = stdlib_base_rampf( -3.14 );
* // returns 0.0
*/
float stdlib_base_rampf( const float x ) {
	if ( stdlib_base_is_nanf( x ) ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( x > 0.0f ) {
		return x;
	}
	return 0.0f; // handles `-0`
}
