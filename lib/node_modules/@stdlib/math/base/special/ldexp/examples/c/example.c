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

#include "stdlib/math/base/special/ldexp.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
	double y;
	int i;

	const double frac[] = { 0.5, 5.0, 0.0, 3.5, 7.9 };
	const int32_t exp[] = { 3, -2, 20, 39, 14 };

	for ( i = 0; i < 5; i++ ) {
		y = stdlib_base_ldexp( frac[ i ], exp[ i ] );
		printf( "ldexp(%lf, %d) = %lf\n", frac[ i ], exp[ i ], y );
	}
}
