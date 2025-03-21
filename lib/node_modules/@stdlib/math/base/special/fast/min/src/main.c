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

#include "stdlib/math/base/special/fast/min.h"

/**
* Return the minimum value.
*
* @param x       first number
* @param y       second number
* @return        minimum value
*
* @example
* double v = stdlib_base_fast_min( 3.14, 4.2 );
* // returns 3.14
*
* @example
* double v = stdlib_base_fast_min( 0.0, -0.0 );
* // returns -0.0
*/
double stdlib_base_fast_min( const double x, const double y ) {
	if ( x < y ) {
		return x;
	}
	return y;
}
