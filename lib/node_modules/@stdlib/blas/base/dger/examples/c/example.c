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

#include "stdlib/blas/base/dger.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
	// Define a 3x4 matrix stored in row-major order:
	double A[ 3*4 ] = {
		0.0, 0.0, 0.0, 0.0,
		0.0, 0.0, 0.0, 0.0,
		0.0, 0.0, 0.0, 0.0
	};
	// Define `x` and `y^T` vectors:
	const double x[ 3 ] = { 1.0, 4.0, 0.0 };      // M
	const double y[ 4 ] = { 0.0, 1.0, 2.0, 3.0 }; // N

	// Specify the number of rows and columns:
	const int M = 3;
	const int N = 4;

	// Specify stride lengths:
	const int strideX = 1;
	const int strideY = 1;

	// Perform operation:
	c_dger( CblasRowMajor, M, N, 1.0, x, strideX, y, strideY, A, N );

	// Print the result:
	for ( int i = 0; i < M; i++ ) {
		for ( int j = 0; j < N; j++ ) {
			printf( "A[%i,%i] = %lf\n", i, j, A[ (i*N)+j ] );
		}
	}
}
