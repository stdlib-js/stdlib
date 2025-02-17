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

#include "stdlib/math/base/special/max.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_positive_zero.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Returns the maximum value.
*
* @param x       first number
* @param y       second number
* @return        maximum value
*
* @example
* double v = stdlib_base_max( 3.14, 4.2 );
* // returns 4.2
*
* @example
* double v = stdlib_base_max( 0.0, -0.0 );
* // returns 0.0
*/
double stdlib_base_max( const double x, const double y ) {
	if ( stdlib_base_is_nan( x ) || stdlib_base_is_nan( y ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x == STDLIB_CONSTANT_FLOAT64_PINF || y == STDLIB_CONSTANT_FLOAT64_PINF ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	if ( x == y && x == 0.0 ) {
		if ( stdlib_base_is_positive_zero( x ) ) {
			return x;
		}
		return y;
	}
	if ( x > y ) {
		return x;
	}
	return y;
}
