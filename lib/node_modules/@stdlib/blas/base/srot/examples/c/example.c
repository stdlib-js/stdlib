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

#include "stdlib/blas/base/srot.h"
#include <stdio.h>

int main( void ) {
	// Create strided arrays:
	float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f };
	float y[] = { 6.0f, 7.0f, 8.0f, 9.0f, 10.0f };

	// Specify the number of elements:
	const int N = 3;

	// Specify stride lengths:
	const int strideX = 2;
	const int strideY = -2;

	// Specify angle of rotation:
	const float c = 0.8f;
	const float s = 0.6f;

	// Apply plane rotation:
	c_srot( N, x, strideX, y, strideY, c, s );

	// Print the result:
	for ( int i = 0; i < 5; i++ ) {
		printf( "x[ %i ] = %f, y[ %i ] = %f\n", i, x[ i ], i, y[ i ] );
	}

	// Apply plane rotation:
	c_srot_ndarray( N, x, strideX, 0, y, strideY, 4, c, s );

	// Print the result:
	for ( int i = 0; i < 5; i++ ) {
		printf( "x[ %i ] = %f, y[ %i ] = %f\n", i, x[ i ], i, y[ i ] );
	}
}
