/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/math/base/special/fast/atanhf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_infinitef.h"
#include "stdlib/math/base/special/lnf.h"
#include <stdint.h>

/**
* Computes the hyperbolic arctangent of a single-precision floating-point number.
*
* @param x    input value
* @return     hyperbolic arctangent (in radians)
*
* @example
* float v = stdlib_base_fast_atanhf( 0.0 );
* // returns 0.0
*/
float stdlib_base_fast_atanhf( const float x ) {
	if ( x == 0.0f ) {
		return x;
	}
	if ( stdlib_base_is_nanf( x ) || stdlib_base_is_infinitef( x ) ) {
		return 0.0f / 0.0f ; // NaN
	}
	return 0.5f * stdlib_base_lnf( ( 1.0f + x ) / ( 1.0f - x ) );
}
