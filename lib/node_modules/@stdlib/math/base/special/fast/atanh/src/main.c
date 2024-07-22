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

#include "stdlib/math/base/special/fast/atanh.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/math/base/special/ln.h"
#include <stdint.h>

/**
* Computes the hyperbolic arctangent of a number.
*
* @param x    input value
* @return     hyperbolic arctangent (in radians)
*
* @example
* double v = stdlib_base_fast_atanh( 0.0 );
* // returns 0.0
*/
double stdlib_base_fast_atanh( const double x ) {
	if ( x == 0.0 ) {
		return x;
	}
	if ( stdlib_base_is_nan( x ) || stdlib_base_is_infinite( x ) ) {
		return 0.0 / 0.0 ; // NaN
	}
	return 0.5 * stdlib_base_ln( ( 1.0 + x ) / ( 1.0 - x ) );
}
