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

#include "stdlib/math/base/special/logaddexp.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/constants/float64/ln_two.h"

/**
* Computes the natural logarithm of `exp(x) + exp(y)`.
*
* @param x    input value
* @param y    input value
* @return     output value
*
* @example
* double out = stdlib_base_logaddexp( 90.0, 90.0 );
* // returns ~90.6931
*/
double stdlib_base_logaddexp( const double x, const double y ) {
	double d;
	if ( stdlib_base_is_nan( x ) || stdlib_base_is_nan( y ) ) {
		return 0.0/0.0;
	}
	if ( x == y ) {
		return x + STDLIB_CONSTANT_FLOAT64_LN2;
	}
	d = x - y;
	if ( d > 0.0 ) {
		return x + stdlib_base_log1p( stdlib_base_exp( -d ) );
	}
	return y + stdlib_base_log1p( stdlib_base_exp( d ) );
}
