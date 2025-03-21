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

#include "stdlib/math/base/special/hacoversin.h"
#include "stdlib/math/base/special/sin.h"

/**
* Computes the half-value coversed sine.
*
* @param x    input value (in radians)
* @return     half-value coversed sine
*
* @example
* double y = stdlib_base_hacoversin( 0.0 );
* // returns 0.5
*/
double stdlib_base_hacoversin( const double x ) {
	return ( 1.0 - stdlib_base_sin( x ) ) / 2.0;
}
