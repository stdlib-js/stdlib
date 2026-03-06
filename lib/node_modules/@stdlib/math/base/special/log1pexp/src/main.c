/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

#include "stdlib/math/base/special/log1pexp.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/special/exp.h"

/**
* Computes the natural logarithm of \\( 1 + \exp(x) \\).
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_log1pexp( 0.0 );
* // returns ~0.693
*/
double stdlib_base_log1pexp( const double x ) {
	if ( stdlib_base_is_nan( x ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x <= -37.0 ) {
		return stdlib_base_exp( x );
	}
	if ( x <= 18.0 ) {
		return stdlib_base_log1p( stdlib_base_exp( x ) );
	}
	if ( x <= 33.3 ) {
		return x + stdlib_base_exp( -x );
	}
	// Case: x > 33.3
	return x;
}
