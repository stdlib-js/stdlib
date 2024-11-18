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

#include "stdlib/blas/base/csrot.h"
#include <stdio.h>

int main( void ) {
	// Create strided arrays:
	float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };
	float y[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

	// Specify the number of elements:
	const int N = 4;

	// Specify stride lengths:
	const int strideX = 1;
	const int strideY = -1;

	c_csrot( N, (void *)x, strideX, (void *)y, strideY, 0.8f, 0.6f );

	// Print the result:
	for ( int i = 0; i < N; i++ ) {
		printf( "x[ %i ] = %f + %fj\n", i, x[ i*2 ], x[ (i*2)+1 ] );
		printf( "y[ %i ] = %f + %fj\n", i, y[ i*2 ], y[ (i*2)+1 ] );
	}

	c_csrot_ndarray( N, (void *)x, -strideX, N-1, (void *)y, strideY, N-1, 0.8f, 0.6f );

	// Print the result:
	for ( int i = 0; i < N; i++ ) {
		printf( "x[ %i ] = %f + %fj\n", i, x[ i*2 ], x[ (i*2)+1 ] );
		printf( "y[ %i ] = %f + %fj\n", i, y[ i*2 ], y[ (i*2)+1 ] );
	}
}
