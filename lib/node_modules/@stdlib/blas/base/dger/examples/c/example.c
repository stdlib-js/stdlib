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
	// Define a 4x3 matrix `B` stored in row-major order (i.e., equivalent to the transpose `A^T` of a 3x4 matrix `A` stored in column-major order):
	double B[ 4*3 ] = {
		0.0, 0.0, 0.0, 0.0,
		0.0, 0.0, 0.0, 0.0,
		0.0, 0.0, 0.0, 0.0
	};
	// Define `x^T` and `y` vectors:
	double x[ 4 ] = { 0.0, 1.0, 2.0, 3.0 }; // M
	double y[ 3 ] = { 1.0, 4.0, 0.0 };      // N

	// Specify the number of rows and columns:
	const int M = 4;
	const int N = 3;

	// Specify stride lengths:
	const int strideX = 1;
	const int strideY = 1;

	// Specify the matrix layout:
	const CBLAS_LAYOUT layout = CblasRowMajor;

	// Perform operation (note: arguments are reordered as: A_{M,N} = α⋅x_M⋅y^T_N + A_{M,N} => B = A^T = α⋅y⋅x^T + A^T = α⋅y⋅x^T + B):
	c_dger( layout, N, M, 1.0, y, strideY, x, strideX, B, M );

	// Print the result:
	for ( int i = 0; i < N; i++ ) {
		for ( int j = 0; j < M; j++ ) {
			printf( "B[%i,%i] = %lf\n", i, j, B[ (i*M)+j ] );
		}
	}
}
