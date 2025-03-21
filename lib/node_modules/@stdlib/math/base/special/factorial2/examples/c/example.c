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

#include "stdlib/math/base/special/factorial2.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
	const int32_t x[] = { 1, 10, 1, 301, 302 };

	double b;
	int i;
	for ( i = 0; i < 5; i++ ) {
		b = stdlib_base_factorial2( x[ i ] );
		printf ( "factorial2(%d) = %lf\n", x[ i ], b );
	}
}
