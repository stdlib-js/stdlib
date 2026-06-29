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

#include "stdlib/blas/ext/base/dcartesiansquare.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
	// Create a strided input array:
	const double x[] = { 1.0, 2.0 };

	// Specify the number of indexed elements:
	const int N = 2;

	// Create an output array (N*N pairs, each pair has 2 elements):
	double out[ 8 ];

	// Specify strides:
	const int strideX = 1;
	const int LDO = 2;

	// Compute the Cartesian square:
	stdlib_strided_dcartesian_square( CblasRowMajor, N, x, strideX, out, LDO );

	// Print the result:
	for ( int i = 0; i < N*N; i++ ) {
		printf( "out[ %i ] = ( %lf, %lf )\n", i, out[ i*2 ], out[ (i*2)+1 ] );
	}
}
