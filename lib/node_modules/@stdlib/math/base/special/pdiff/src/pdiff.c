/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

#include "stdlib/math/base/special/pdiff.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Returns the positive difference between `x` and `y`.
*
* @param x       first number
* @param y       second number
* @return        positive difference
*
* @example
* double v = pdiff( 6.0, 3.0 );
* // returns 3.0
*
* @example
* double v = pdiff( 3.0, 4.0 );
* // returns 0.0
*/
double stdlib_base_pdiff( const double x, const double y ) {
	if ( stdlib_base_is_nan( x ) || stdlib_base_is_nan( y ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x > y ) {
		return x - y;
	}
	return 0.0;
}
