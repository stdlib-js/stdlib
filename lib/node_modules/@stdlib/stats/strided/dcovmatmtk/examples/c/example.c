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

#include "stdlib/stats/strided/dcovmatmtk.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
	// Define a 4x3 matrix in which variables are stored along rows in row-major order:
	const double A[] = {
		1.0, -2.0, 2.0,
		2.0, -2.0, 1.0,
		2.0, -2.0, 1.0,
		1.0, -2.0, 2.0
	};

	// Define a vector of known means:
	const double means[] = { 1.0/3.0, 1.0/3.0, 1.0/3.0, 1.0/3.0 };

	// Allocate a 4x4 output matrix:
	double B[] = {
		0.0, 0.0, 0.0, 0.0,
		0.0, 0.0, 0.0, 0.0,
		0.0, 0.0, 0.0, 0.0,
		0.0, 0.0, 0.0, 0.0
	};

	stdlib_strided_dcovmatmtk( CblasRowMajor, CblasRows, -1, 4, 3, 1.0, means, 1, A, 3, B, 4 );

	// Print the result:
	for ( int i = 0; i < 4; i++ ) {
		for ( int j = 0; j < 4; j++ ) {
			printf( "B[ %i, %i ] = %lf\n", i, j, B[ (i*4)+j ] );
		}
	}
}
