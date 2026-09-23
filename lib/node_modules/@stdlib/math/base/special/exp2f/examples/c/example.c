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

#include "stdlib/math/base/special/exp2f.h"
#include <stdio.h>

int main( void ) {
	const float x[] = { -50.0f, -38.9f, -27.8f, -16.7f, -5.6f, 5.6f, 16.7f, 27.8f, 38.9f, 50.0f };

	float v;
	int i;
	for ( i = 0; i < 10; i++ ) {
		v = stdlib_base_exp2f( x[ i ] );
		printf( "2^%f = %f\n", x[ i ], v );
	}
}
