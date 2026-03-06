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
#include <stdio.h>
#include <stdint.h>

int main( void ) {
	const double x[] = { 3.14, 2.0, 2.0, 0.0 };
	const int32_t y[] = { 0, 3, -2, 0 };

	double z;
	int i;
	for ( i = 0; i < 4; i++ ) {
		z = stdlib_base_fast_pow( x[ i ], y[ i ] );
		printf( "pow( %lf, %d ) = %lf\n", x[ i ], y[ i ], z );
	}
}
