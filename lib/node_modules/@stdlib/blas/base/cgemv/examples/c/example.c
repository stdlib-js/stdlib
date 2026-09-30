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

#include "stdlib/blas/base/cgemv.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdio.h>

int main( void ) {
	// Define a 3x3 matrix stored in row-major order:
	const float A[ 3*3*2 ] = {
		1.0f, 1.0f, 2.0f, 2.0f, 3.0f, 3.0f,
		4.0f, 4.0f, 5.0f, 5.0f, 6.0f, 6.0f,
		7.0f, 7.0f, 8.0f, 8.0f, 9.0f, 9.0f
	};

	// Define `x` and `y` vectors:
	const float x[ 3*2 ] = { 1.0f, 1.0f, 2.0f, 2.0f, 3.0f, 3.0f };
	float y[ 3*2 ] = { 3.0f, 3.0f, 2.0f, 2.0f, 1.0f, 1.0f };

	// Create complex scalars:
	const stdlib_complex64_t alpha = stdlib_complex64( 0.5f, 0.5f );
	const stdlib_complex64_t beta = stdlib_complex64( 0.5f, -0.5f );

	// Specify the number of elements along each dimension of `A`:
	const int M = 3;
	const int N = 3;

	// Perform the matrix-vector operation `y = α*A*x + β*y`:
	c_cgemv( CblasRowMajor, CblasNoTrans, M, N, alpha, (void *)A, M, (void *)x, 1, beta, (void *)y, 1 );

	// Print the result:
	for ( int i = 0; i < N; i++ ) {
		printf( "y[ %i ] = %f + %fj\n", i, y[ i*2 ], y[ (i*2)+1 ] );
	}

	// Perform the matrix-vector operation `y = α*A*x + β*y` using alternative indexing semantics:
	c_cgemv_ndarray( CblasNoTrans, M, N, alpha, (void *)A, N, 1, 0, (void *)x, 1, 0, beta, (void *)y, 1, 0 );

	// Print the result:
	for ( int i = 0; i < N; i++ ) {
		printf( "y[ %i ] = %f + %fj\n", i, y[ i*2 ], y[ (i*2)+1 ] );
	}
}
