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

#include "stdlib/math/base/special/fast/pow.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/pinf.h"

int32_t ONE = 1;
int32_t ZERO = 0;

/**
* Evaluates the exponential function.
*
* @param x    base
* @param y    exponent
* @return     function value
*
* @example
* double y = stdlib_base_fast_pow( 2.0, 3 );
* // returns 8.0
*/
double stdlib_base_fast_pow( const double x, const int32_t y ) {
	int32_t yc;
	double xc;
	double v;

	xc = x;
	yc = y;
	if ( stdlib_base_is_nan( xc ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( yc < ZERO ) {
		yc = -yc;
		if ( xc == 0.0 ) {
			xc = 1.0 / xc;
			if ( ( yc & ONE ) == ONE ) {
				return xc;
			}
			return STDLIB_CONSTANT_FLOAT64_PINF;
		}
		xc = 1.0 / xc;
	}
	else if ( yc == ZERO ) {
		return 1.0;
	}
	v = 1.0;
	while ( yc != ZERO ) {
		if ( ( yc & ONE ) == ONE ) {
			v *= xc;
		}
		xc *= xc;
		yc >>= ONE;
	}
	return v;
}

