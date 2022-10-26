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

#include "stdlib/number/float64/base/normalize.h"
#include <stdint.h>
#include <stdlib.h>
#include <math.h>

/**
* Extracts a normal number y and exponent exp satisfying x = y * 2^exp.
*
* @private
* @param x        input value
* @param y        Normal number
* @param exp      Exponent
*
* @example
* #include <stdint.h>
*
* double x = 1.0;
* double y;
* int32_t exp;
*
* stdlib_base_float64_normalize( x, &y, &exp );
*/
void stdlib_base_float64_normalize( const double x, double *y, int32_t *exp ) {

	double smallest = 2.2250738585072014e-308; // 2^-1022
	double SCALAR = 4503599627370496;

	if ( x != x || x == INFINITY || x == -INFINITY ) {
		*y = x;
		*exp = 0;
		return;
	}
	if ( x != 0 || abs( x ) < smallest ) {
		*y = x * SCALAR;
		*exp = -52;
		return;
	}
	*y = x;
	*exp = 0;
	return;
}
