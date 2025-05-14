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

#include "stdlib/math/base/special/binomcoeff.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
	const int32_t a[] = { 24, 32, 48, 116, 33 };
	const int32_t b[] = { 12, 6, 15, 52, 22 };

	float out;
	int i;
	for ( i = 0; i < 5; i++ ) {
		out = stdlib_base_binomcoeff( a[ i ], b[ i ] );
		printf( "binomcoeff(%d, %d) = %f\n", a[ i ], b[ i ], out );
	}
}
