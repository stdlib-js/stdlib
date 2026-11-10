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

#include "stdlib/math/base/special/powm1f.h"
#include <stdio.h>

int main( void ) {
	const float b[] = { 2.0f, 4.0f, 0.0f, 100.0f, 3.14f };
	const float x[] = { 3.0f, 0.5f, 100.0f, 0.0f, 5.0f };

	float y;
	int i;
	for ( i = 0; i < 5; i++ ) {
		y = stdlib_base_powm1f( b[ i ], x[ i ] );
		printf( "powm1f(%f, %f) = %f\n", b[ i ], x[ i ], y );
	}
}
