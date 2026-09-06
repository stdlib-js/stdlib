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

#include "stdlib/blas/ext/base/ctriu2tril.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdio.h>

int main( void ) {
	// Define a 3x3 input matrix stored in row-major order:
	const float A[ 3*3*2 ] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f, 9.0f, 10.0f, 11.0f, 12.0f, 13.0f, 14.0f, 15.0f, 16.0f, 17.0f, 18.0f };

	// Define a 3x3 output matrix:
	float B[ 3*3*2 ] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

	// Specify the number of elements along each dimension of `A`:
	const CBLAS_INT M = 3;
	const CBLAS_INT N = 3;

	// Reflect the upper triangular part of `A` into the lower triangular part of `B`:
	stdlib_strided_ctriu2tril( CblasRowMajor, M, N, 0, (stdlib_complex64_t *)A, N, (stdlib_complex64_t *)B, N );

	// Print the result:
	for ( int i = 0; i < M; i++ ) {
		for ( int j = 0; j < N; j++ ) {
			int idx = ( (i*N) + j ) * 2;
			printf( "B[ %i,%i ] = %f + %fi\n", i, j, B[ idx ], B[ idx+1 ] );
		}
	}

	// Reflect the upper triangular part of `A` (above the first super-diagonal) into `B` using alternative indexing semantics:
	stdlib_strided_ctriu2tril_ndarray( M, N, 1, (stdlib_complex64_t *)A, N, 1, 0, (stdlib_complex64_t *)B, N, 1, 0 );

	// Print the result:
	for ( int i = 0; i < M; i++ ) {
		for ( int j = 0; j < N; j++ ) {
			int idx = ( (i*N) + j ) * 2;
			printf( "B[ %i,%i ] = %f + %fi\n", i, j, B[ idx ], B[ idx+1 ] );
		}
	}
}
