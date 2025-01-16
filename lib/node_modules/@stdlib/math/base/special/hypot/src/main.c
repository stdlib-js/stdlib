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

#include "stdlib/math/base/special/hypot.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Computes the hypotenuse avoiding overflow and underflow.
*
* @param x       number
* @param y       number
* @return        hypotenuse
*
* @example
* double h = stdlib_base_hypot( 5.0, 12.0 );
* // returns 13.0
*/
double stdlib_base_hypot( const double x, const double y ) {
	double tmp;
	double a;
	double b;
	if ( stdlib_base_is_nan( x ) || stdlib_base_is_nan( y ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( stdlib_base_is_infinite( x ) || stdlib_base_is_infinite( y ) ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	a = x;
	b = y;
	if ( a < 0.0 ) {
		a = -a;
	}
	if ( b < 0.0 ) {
		b = -b;
	}
	if ( a < b ) {
		tmp = b;
		b = a;
		a = tmp;
	}
	if ( a == 0.0 ) {
		return 0.0;
	}
	b /= a;
	return a * stdlib_base_sqrt( 1.0 + ( b * b ) );
}
