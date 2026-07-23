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

#include "stdlib/math/base/special/logf.h"
#include "stdlib/math/base/special/lnf.h"

/**
* Computes the base `b` logarithm of a single-precision floating-point number.
*
* @param x    input value
* @param b    input value
* @return     output value
*
* @example
* float out = stdlib_base_logf( 100.0f, 10.0f );
* // returns 2.0f
*/
float stdlib_base_logf( const float x, const float b ) {
	return stdlib_base_lnf( x ) / stdlib_base_lnf( b );
}
