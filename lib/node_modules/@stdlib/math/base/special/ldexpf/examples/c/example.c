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

#include "stdlib/math/base/special/ldexpf.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
	float y;
	int i;

	const float frac[] = { 0.5f, 5.0f, 0.0f, 3.5f, 7.9f };
	const int32_t exp[] = { 3, -2, 20, 39, 14 };

	for ( i = 0; i < 5; i++ ) {
		y = stdlib_base_ldexpf( frac[ i ], exp[ i ] );
		printf( "ldexpf(%f, %d) = %f\n", frac[ i ], exp[ i ], y );
	}
}
