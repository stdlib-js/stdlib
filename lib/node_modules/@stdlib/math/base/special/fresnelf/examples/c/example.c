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

#include "stdlib/math/base/special/fresnelf.h"
#include <stdio.h>

int main( void ) {
	const float x[] = { 0.0f, 1.57f, 3.14f, 6.28f };

	float C;
	float S;
	int i;
	for ( i = 0; i < 4; i++ ) {
		stdlib_base_fresnelf( x[ i ], &S, &C );
		printf( "x: %f => S(x): %f, C(x): %f\n", x[ i ], S, C );
	}
}
