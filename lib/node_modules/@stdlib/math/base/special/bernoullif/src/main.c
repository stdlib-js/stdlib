/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#include "stdlib/math/base/special/bernoullif.h"
#include "stdlib/constants/float32/ninf.h"
#include "stdlib/constants/float32/pinf.h"
#include <stdint.h>

static const float bernoulli_value[ 33 ] = {
	1.0f,
	0.1666666716337204f,
	-0.03333333507180214f,
	0.02380952425301075f,
	-0.03333333507180214f,
	0.07575757801532745f,
	-0.2531135678291321f,
	1.1666666269302368f,
	-7.092156887054443f,
	54.97117614746094f,
	-529.124267578125f,
	6192.123046875f,
	-86580.25f,
	1425517.125f,
	-27298232.0f,
	601580864.0f,
	-15116315648.0f,
	429614628864.0f,
	-13711654780928.0f,
	488332312182784.0f,
	-19296579391324160.0f,
	841693056053805000.0f,
	-40338073359287845000.0f,
	2.1150748918604188e+21f,
	-1.2086626472668042e+23f,
	7.500866956719485e+24f,
	-5.038777949942763e+26f,
	3.652877742276384e+28f,
	-2.849876996904201e+30f,
	2.386542781638813e+32f,
	-2.1399950070596233e+34f,
	2.050097633557977e+36f,
	-2.0938006042234345e+38f
};

static const int32_t MAX_BERNOULLI = 64;

/**
* Computes the nth Bernoulli number as a single-precision floating-point number.
*
* @param n    input value
* @return     output value
*
* @example
* float out = stdlib_base_bernoullif( 0 );
* // returns 1.0f
*/
float stdlib_base_bernoullif( const int32_t n ) {
	if ( n < 0 ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( n == 1 ) {
		return 0.5f;
	}
	if ( n & 1 ) {
		return 0.0f;
	}
	if ( n > MAX_BERNOULLI ) {
		return ( ( n / 2 ) & 1 ) ? STDLIB_CONSTANT_FLOAT32_PINF : STDLIB_CONSTANT_FLOAT32_NINF;
	}
	return bernoulli_value[ n / 2 ];
}
