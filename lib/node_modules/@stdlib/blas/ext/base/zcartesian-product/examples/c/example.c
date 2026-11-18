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

#include "stdlib/blas/ext/base/zcartesian_product.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
	// Create strided input arrays (interleaved real and imaginary components):
	const double X[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
	const double Y[] = { 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0 };

	// Specify the number of indexed elements:
	const int M = 4;
	const int N = 4;

	// Create an output array (M*N pairs, each pair has 2 elements):
	double out[ 64 ];

	// Specify strides:
	const int strideX = 1;
	const int strideY = 1;
	const int LDO = 2;

	// Compute the Cartesian product:
	stdlib_strided_zcartesian_product( CblasRowMajor, M, N, (const stdlib_complex128_t *)X, strideX, (const stdlib_complex128_t *)Y, strideY, (stdlib_complex128_t *)out, LDO );

	// Print the result:
	for ( int i = 0; i < M*N*2; i++ ) {
		printf( "out[ %i ] = ( %lf, %lf )\n", i, out[ i*2 ], out[ (i*2)+1 ] );
	}
}
