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

#include "stdlib/math/base/special/sqrtf.h"
#include <math.h>

/**
* Computes the principal square root of a single-precision floating-point number.
*
* @param x       number
* @return        principal square root
*
* @example
* float y = stdlib_base_sqrtf( 9.0f );
* // returns 3.0f
*/
float stdlib_base_sqrtf( const float x ) {
	return sqrt( x );
}
