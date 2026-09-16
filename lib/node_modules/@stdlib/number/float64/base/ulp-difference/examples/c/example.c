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

#include "stdlib/number/float64/base/ulp_difference.h"
#include "stdlib/constants/float64/eps.h"
#include "stdlib/constants/float64/smallest_subnormal.h"
#include <stdio.h>

int main( void ) {
	const double x[] = {
		1.0,
		5.8364e-319,
		0.0,
		0.0,
		STDLIB_CONSTANT_FLOAT64_SMALLEST_SUBNORMAL
	};
	const double y[] = {
		1.0 + STDLIB_CONSTANT_FLOAT64_EPS,
		5.8367e-319,
		STDLIB_CONSTANT_FLOAT64_SMALLEST_SUBNORMAL,
		-0.0,
		-STDLIB_CONSTANT_FLOAT64_SMALLEST_SUBNORMAL
	};

	double d;
	int i;
	for ( i = 0; i < 5; i++ ) {
		d = stdlib_base_float64_ulp_difference( x[ i ], y[ i ] );
		printf( "ulpdiff(%lf, %lf) = %lf\n", x[ i ], y[ i ], d );
	}
}
