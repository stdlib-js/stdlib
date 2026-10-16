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

#include "stdlib/blas/ext/base/swhere.h"
#include <stdio.h>
#include <stdbool.h>

int main( void ) {
	// Create strided arrays:
	const bool condition[] = { true, false, true, false, true };
	const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f };
	const float y[] = { 6.0f, 7.0f, 8.0f, 9.0f, 10.0f };
	float out[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

	// Specify the number of indexed elements:
	const int N = 5;

	// Specify stride lengths:
	const int strideC = 1;
	const int strideX = 1;
	const int strideY = 1;
	const int strideOut = 1;

	// Select from `x` or `y` based on the condition array:
	stdlib_strided_swhere( N, condition, strideC, x, strideX, y, strideY, out, strideOut );

	// Print the result:
	for ( int i = 0; i < N; i++ ) {
		printf( "out[ %i ] = %f\n", i, out[ i ] );
	}
}
