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

#include "stdlib/math/base/special/roundb.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
	const double x[] = { -5.0, -3.89, -2.78, -1.67, -0.56, 0.56, 1.67, 2.78, 3.89, 5.0 };
	const int32_t n[] = { -4, -3, -2, -1, 0, 1, 2, 3, 4, 5 };
	const int32_t b[] = { 20, 19, 18, 17, 16, 15, 14, 13, 12, 11 };

	double v;
	int i;
	for ( i = 0; i < 10; i++ ) {
		v = stdlib_base_roundb( x[ i ], n[ i ], b[ i ] );
		printf( "roundb(%lf, %d, %d) = %lf\n", x[ i ], n[ i ], b[ i ], v );
	}
}
