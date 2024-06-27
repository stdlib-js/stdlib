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

#include "stdlib/math/base/special/trunc10.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/special/log10.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"

/**
* Rounds a numeric value to the nearest power of `10` toward zero.
*
* @param x    input value
* @return     rounded value
*
* @example
* double y = stdlib_base_trunc2( 13.0 );
* // returns 10.0
*/
double stdlib_base_trunc10( const double x ) {
	double sign;
	double xc;

	if ( stdlib_base_is_nan( x ) || stdlib_base_is_infinite( x ) || x == 0.0 ) {
		return x;
	}
	xc = x;
	if( xc < 0 ) {
		xc = -xc;
		sign = -1.0;
	} else {
		sign = 1.0;
	}
	return sign * stdlib_base_pow( 10.0, stdlib_base_floor( stdlib_base_log10( xc ) ) );
}
