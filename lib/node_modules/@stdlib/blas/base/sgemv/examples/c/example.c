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

#include "stdlib/blas/base/sgemv.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
	// Define a 3x3 matrix stored in row-major order:
	const float A[ 3*3 ] = {
		1.0f, 2.0f, 3.0f,
		4.0f, 5.0f, 6.0f,
		7.0f, 8.0f, 9.0f
	};

	// Define `x` and `y` vectors:
	const float x[ 3 ] = { 1.0f, 2.0f, 3.0f };
	float y[ 3 ] = { 1.0f, 2.0f, 3.0f };

	// Specify the number of elements along each dimension of `A`:
	const int M = 3;
	const int N = 3;

	// Perform the matrix-vector operation `y = α*A*x + β*y`:
	c_sgemv( CblasRowMajor, CblasNoTrans, M, N, 1.0f, A, M, x, 1, 1.0f, y, 1 );

	// Print the result:
	for ( int i = 0; i < N; i++ ) {
		printf( "y[ %i ] = %f\n", i, y[ i ] );
	}

	// Perform the matrix-vector operation `y = α*A*x + β*y` using alternative indexing semantics:
	c_sgemv_ndarray( CblasNoTrans, M, N, 1.0f, A, N, 1, 0, x, 1, 0, 1.0f, y, 1, 0 );

	// Print the result:
	for ( int i = 0; i < N; i++ ) {
		printf( "y[ %i ] = %f\n", i, y[ i ] );
	}
}
