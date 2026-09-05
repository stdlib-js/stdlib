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

#include "stdlib/math/base/special/log10f.h"
#include <stdio.h>

int main( void ) {
	const float x[] = { 0.01f, 0.1f, 1.0f, 2.0f, 4.0f, 8.0f, 10.0f, 100.0f, 1000.0f, 0.0f / 0.0f };

	float v;
	int i;
	for ( i = 0; i < 10; i++ ) {
		v = stdlib_base_log10f( x[ i ] );
		printf( "log10f(%f) = %f\n", x[ i ], v );
	}
}
