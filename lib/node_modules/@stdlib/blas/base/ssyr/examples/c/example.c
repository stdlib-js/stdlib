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

#include "stdlib/blas/base/ssyr.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
	// Define 3x3 symmetric matrices stored in row-major layout:
	float A1[ 3*3 ] = {
		1.0f, 2.0f, 3.0f,
		2.0f, 1.0f, 2.0f,
		3.0f, 2.0f, 1.0f
	};

	float A2[ 3*3 ] = {
		1.0f, 2.0f, 3.0f,
		2.0f, 1.0f, 2.0f,
		3.0f, 2.0f, 1.0f
	};

	// Define a vector:
	const float x[ 3 ] = { 1.0f, 2.0f, 3.0f };

	// Specify the number of elements along each dimension of `A1` and `A2`:
	const int N = 3;

	// Perform the symmetric rank 1 operation `A = α*x*x^T + A`:
	c_ssyr( CblasColMajor, CblasUpper, N, 1.0f, x, 1, A1, N );

	// Print the result:
	for ( int i = 0; i < N*N; i++ ) {
		printf( "A1[ %i ] = %f\n", i, A1[ i ] );
	}

	// Perform the symmetric rank 1 operation `A = α*x*x^T + A` using alternative indexing semantics:
	c_ssyr_ndarray( CblasUpper, N, 1.0f, x, 1, 0, A2, N, 1, 0 );

	// Print the result:
	for ( int i = 0; i < N*N; i++ ) {
		printf( "A2[ %i ] = %f\n", i, A2[ i ] );
	}
}
