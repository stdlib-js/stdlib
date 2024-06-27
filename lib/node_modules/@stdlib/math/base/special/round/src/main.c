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

#include "stdlib/math/base/special/round.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_negative_zero.h"

/**
* Rounds a numeric value to the nearest integer.
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_round( -4.2 );
* // returns -4.0
*/
double stdlib_base_round( const double x ) {
	if ( stdlib_base_is_nan( x ) ) {
		return 0.0/0.0; // NaN
	}
	if ( stdlib_base_is_negative_zero( x ) || ( x >= -0.5 && x < 0.0 ) ) {
		return -0.0; // -0
	}
	if ( x > 0.0 && x < 0.5 ) {
		return 0.0; // 0
	}
	// If the magnitude is big enough, there's no place for the fraction part. If we try to add 0.5 to this number, 1.0 will be added instead...
	if ( x >= 4503599627370496.0 || x <= -4503599627370496.0 ) {
		return x;
	}
	return stdlib_base_floor( x + 0.5 );
}
