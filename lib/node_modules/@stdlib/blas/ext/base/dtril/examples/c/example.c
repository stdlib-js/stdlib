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

#include "stdlib/blas/ext/base/dtril.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
	// Define a 3x3 input matrix stored in row-major order:
	const double A[ 3*3 ] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 };

	// Define a 3x3 output matrix:
	double B[ 3*3 ] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

	// Specify the number of elements along each dimension of `A`:
	const CBLAS_INT M = 3;
	const CBLAS_INT N = 3;

	// Copy the lower triangular part of `A` to `B`:
	stdlib_strided_dtril( CblasRowMajor, M, N, 0, A, N, B, N );

	// Print the result:
	for ( int i = 0; i < M; i++ ) {
		for ( int j = 0; j < N; j++ ) {
			printf( "B[ %i,%i ] = %lf\n", i, j, B[ (i*N)+j ] );
		}
	}

	// Copy the lower triangular part of `A`, including the first super-diagonal, to `B` using alternative indexing semantics:
	stdlib_strided_dtril_ndarray( M, N, 1, A, N, 1, 0, B, N, 1, 0 );

	// Print the result:
	for ( int i = 0; i < M; i++ ) {
		for ( int j = 0; j < N; j++ ) {
			printf( "B[ %i,%i ] = %lf\n", i, j, B[ (i*N)+j ] );
		}
	}
}
