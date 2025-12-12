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

#include "stdlib/math/base/special/expm1rel.h"
#include "stdlib/math/base/special/expm1.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/constants/float64/eps.h"
#include "stdlib/constants/float64/pinf.h"

static const double OVERFLOW_THRESHOLD = 7.09782712893383973096e+02; // 0x40862E42 0xFEFA39EF

/**
* Computes the relative error exponential.
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_expm1rel( 0.0 );
* // returns 1.0
*/
double stdlib_base_expm1rel( const double x ) {
	if ( stdlib_base_abs( x ) <= STDLIB_CONSTANT_FLOAT64_EPS ) {
		return 1.0; // L'Hopital's Rule
	}
	if ( x >= OVERFLOW_THRESHOLD ) {
		return STDLIB_CONSTANT_FLOAT64_PINF; // L'Hopital's Rule
	}
	return stdlib_base_expm1( x ) / x;
}
