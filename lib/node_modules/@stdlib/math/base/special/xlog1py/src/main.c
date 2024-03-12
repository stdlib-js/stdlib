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

#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Computes `x * ln(y+1)` so that the result is `0` if `x = 0`.
*
* @param x    input value
* @param y    input value
* @return     output value
*
* @example
* double out = stdlib_base_xlog1py( 3.0, 2.0 );
* // returns ~3.296
*
* @example
* double out = stdlib_base_xlog1py( 0.0, -2.0 );
* // returns 0.0
*/
double stdlib_base_xlog1py( const double x, const double y ) {
	if ( x == 0.0 && !stdlib_base_is_nan( y ) ) {
		return 0.0;
	}
	return x * stdlib_base_log1p( y );
}
