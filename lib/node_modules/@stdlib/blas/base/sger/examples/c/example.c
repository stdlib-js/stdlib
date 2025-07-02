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

#include "stdlib/blas/base/sger.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
	// Define a 3x4 matrix stored in row-major order:
	float A[ 3*4 ] = {
		0.0f, 0.0f, 0.0f, 0.0f,
		0.0f, 0.0f, 0.0f, 0.0f,
		0.0f, 0.0f, 0.0f, 0.0f
	};
	// Define `x` and `y^T` vectors:
	const float x[ 3 ] = { 1.0f, 4.0f, 0.0f };       // M
	const float y[ 4 ] = { 0.0f, 1.0f, 2.0f, 3.0f }; // N

	// Specify the number of rows and columns:
	const int M = 3;
	const int N = 4;

	// Specify stride lengths:
	const int strideX = 1;
	const int strideY = 1;

	// Perform operation:
	c_sger( CblasRowMajor, M, N, 1.0f, x, strideX, y, strideY, A, N );

	// Print the result:
	for ( int i = 0; i < M; i++ ) {
		for ( int j = 0; j < N; j++ ) {
			printf( "A[%i,%i] = %f\n", i, j, A[ (i*N)+j ] );
		}
	}

	// Perform operation using alterntive indexing semantics:
	c_sger_ndarray( M, N, 1.0f, x, strideX, 0, y, strideY, 0, A, N, 1, 0 );

	// Print the result:
	for ( int i = 0; i < M; i++ ) {
		for ( int j = 0; j < N; j++ ) {
			printf( "A[%i,%i] = %f\n", i, j, A[ (i*N)+j ] );
		}
	}
}
