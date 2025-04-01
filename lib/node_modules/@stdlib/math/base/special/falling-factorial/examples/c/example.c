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

#include "stdlib/math/base/special/falling_factorial.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
	const double x[] = { -10.0, -7.78, -5.56, -3.33, -1.11, 1.11, 3.33, 5.56, 7.78, 10.0 };
	const int32_t n[] = { 5, 4, 3, 2, 1, 0, -1, -2, -3, -4 };

	double v;
	int i;
	for ( i = 0; i < 10; i++ ) {
		v = stdlib_base_falling_factorial( x[ i ], n[ i ] );
		printf( "x: %lf, n: %d, falling_factorial(x,n): %lf\n", x[ i ], n[ i ], v );
	}
}
