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

#include "stdlib/math/base/special/nanmin.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/min.h"

/**
* Returns the minimum value, ignoring NaN.
*
* @param x       first number
* @param y       second number
* @return        minimum value
*
* @example
* double v = stdlib_base_nanmin( 3.14, 4.2 );
* // returns 3.14
*
* @example
* double v = stdlib_base_nanmin( 4.14, 0.0 / 0.0 );
* // returns 4.14
*/
double stdlib_base_nanmin( const double x, const double y ) {
	if ( stdlib_base_is_nan( x ) ) {
		return stdlib_base_is_nan( y ) ? 0.0 / 0.0 : y;
	}
	return stdlib_base_is_nan( y ) ? x : stdlib_base_min( x, y );
}
