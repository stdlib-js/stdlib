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

#include "stdlib/math/base/special/lcmf.h"
#include <stdio.h>

int main( void ) {
	const float a[] = { 24.0f, 32.0f, 48.0f, 116.0f, 33.0f };
	const float b[] = { 12.0f, 6.0f, 15.0f, 52.0f, 22.0f };

	float out;
	int i;
	for ( i = 0; i < 5; i++ ) {
		out = stdlib_base_lcmf( a[ i ], b[ i ] );
		printf( "lcmf(%f, %f) = %f\n", a[ i ], b[ i ], out );
	}
}
