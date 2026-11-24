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

#include "stdlib/lapack/base/dlacpy.h"
#include "stdlib/lapack/base/shared.h"
#include <stdio.h>

int main( void ) {
	// Define a 3x3 input matrix stored in row-major order:
	const double A[ 3*3 ] = {
		1.0, 2.0, 3.0,
		4.0, 5.0, 6.0,
		7.0, 8.0, 9.0
	};

	// Define a 3x3 output matrix:
	double B[ 3*3 ] = {
		0.0, 0.0, 0.0,
		0.0, 0.0, 0.0,
		0.0, 0.0, 0.0
	};

	// Specify the number of elements along each dimension of `A`:
	const int M = 3;
	const int N = 3;

	// Copy elements from the upper triangle of `A` to `B`:
	c_dlacpy( LAPACK_ROW_MAJOR, LAPACK_UPPER_TRIANGLE, M, N, A, N, B, N );

	// Print the result:
	for ( int i = 0; i < M; i++ ) {
		for ( int j = 0; j < N; j++ ) {
			printf( "B[ %i, %i ] = %lf\n", i, j, B[ (i*N)+j ] );
		}
	}

	// Copy elements from the lower triangle of `A` to `B` using alternative indexing semantics:
	c_dlacpy_ndarray( LAPACK_LOWER_TRIANGLE, M, N, A, N, 1, 0, B, N, 1, 0 );

	// Print the result:
	for ( int i = 0; i < M; i++ ) {
		for ( int j = 0; j < N; j++ ) {
			printf( "B[ %i, %i ] = %lf\n", i, j, B[ (i*N)+j ] );
		}
	}
}
