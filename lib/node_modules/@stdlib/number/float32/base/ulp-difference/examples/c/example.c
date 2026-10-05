/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/number/float32/base/ulp_difference.h"
#include "stdlib/constants/float32/eps.h"
#include "stdlib/constants/float32/smallest_subnormal.h"
#include <stdio.h>

int main( void ) {
	const float x[] = {
		1.0f,
		5.8364e-31f,
		0.0f,
		0.0f,
		STDLIB_CONSTANT_FLOAT32_SMALLEST_SUBNORMAL
	};
	const float y[] = {
		1.0f + STDLIB_CONSTANT_FLOAT32_EPS,
		5.8367e-31f,
		STDLIB_CONSTANT_FLOAT32_SMALLEST_SUBNORMAL,
		-0.0f,
		-STDLIB_CONSTANT_FLOAT32_SMALLEST_SUBNORMAL
	};

	double d;
	int i;
	for ( i = 0; i < 5; i++ ) {
		d = stdlib_base_float32_ulp_difference( x[ i ], y[ i ] );
		printf( "ulpdiff(%f, %f) = %lf\n", x[ i ], y[ i ], d );
	}
}
