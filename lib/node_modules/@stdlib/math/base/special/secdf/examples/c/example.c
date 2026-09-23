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

#include "stdlib/math/base/special/secdf.h"
#include <stdio.h>

int main( void ) {
	const float x[] = { 0.0f, 30.0f, 45.0f, 60.0f, 90.0f };

	float y;
	int i;
	for ( i = 0; i < 5; i++ ) {
		y = stdlib_base_secdf( x[ i ] );
		printf( "secdf(%f) = %f\n", x[ i ], y );
	}
}
