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
	// Create strided arrays:
	float A[] = { 1.0f, 0.0f, 0.0f, 2.0f, 1.0f, 0.0f, 3.0f, 2.0f, 1.0f };
	const float x[] = { 1.0f, 2.0f, 3.0f };

	// Specify the number of elements along each dimension of `A`:
	const int N = 3;

	// Perform the symmetric rank 1 operation `A = α*x*x^T + A`:
	c_ssyr( CblasColMajor, CblasUpper, N, 1.0f, x, 1, A, N );

	// Print the result:
	for ( int i = 0; i < N*N; i++ ) {
		printf( "A[ %i ] = %f\n", i, A[ i ] );
	}

	// Perform the symmetric rank 1 operation `A = α*x*x^T + A`:
	c_ssyr_ndarray( CblasUpper, N, 1.0f, x, 1, 0, A, N, 1, 0 );

	// Print the result:
	for ( int i = 0; i < N*N; i++ ) {
		printf( "A[ %i ] = %f\n", i, A[ i ] );
	}
}
