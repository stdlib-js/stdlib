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

#include "stdlib/blas/ext/base/scartesianproduct.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
	// Create strided input arrays:
	const float X[] = { 1.0f, 2.0f, 3.0f, 4.0f };
	const float Y[] = { 5.0f, 6.0f, 7.0f, 8.0f };

	// Specify the number of indexed elements:
	const int M = 4;
	const int N = 4;

	// Create an output array (M*N pairs, each pair has 2 elements):
	float out[ 32 ];

	// Specify strides:
	const int strideX = 1;
	const int strideY = 1;
	const int LDO = 2;

	// Compute the Cartesian product:
	stdlib_strided_scartesian_product( CblasRowMajor, M, N, X, strideX, Y, strideY, out, LDO );

	// Print the result:
	for ( int i = 0; i < M*N; i++ ) {
		printf( "out[ %i ] = ( %f, %f )\n", i, out[ i*2 ], out[ (i*2)+1 ] );
	}
}
