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

#include "stdlib/blas/ext/base/dvander.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
	// Define a 3x3 output array stored in row-major order:
	double Out[ 3*3 ] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

	// Define the input array:
	const double x[ 3 ] = { 1.0, 2.0, 3.0 };

	// Specify the number of rows and columns:
	const int M = 3;
	const int N = 3;

	// Generate the Vandermonde matrix:
	stdlib_strided_dvander( CblasRowMajor, -1.0, M, N, x, 1, Out, N );

	// Print the result:
	for ( int i = 0; i < M; i++ ) {
		for ( int j = 0; j < N; j++ ) {
			printf( "Out[%i,%i] = %lf\n", i, j, Out[ (i*N)+j ] );
		}
	}
}
