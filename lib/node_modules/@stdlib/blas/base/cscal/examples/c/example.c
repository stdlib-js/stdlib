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

#include "stdlib/blas/base/cscal.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdio.h>

int main( void ) {
	// Create a strided array of interleaved real and imaginary components:
	float cx[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };

	// Create a complex scalar:
	const stdlib_complex64_t ca = stdlib_complex64( 2.0f, 2.0f );

	// Specify the number of elements:
	const int N = 4;

	// Specify stride length:
	const int strideX = 1;

	// Scale the elements of the array:
	c_cscal( N, ca, (void *)cx, strideX );

	// Print the result:
	for ( int i = 0; i < N; i++ ) {
		printf( "cx[ %i ] = %f + %fj\n", i, cx[ i*2 ], cx[ (i*2)+1 ] );
	}

	// Scale the elements of the array:
	c_cscal_ndarray( N, ca, (void *)cx, -strideX, 3 );

	// Print the result:
	for ( int i = 0; i < N; i++ ) {
		printf( "cx[ %i ] = %f + %fj\n", i, cx[ i*2 ], cx[ (i*2)+1 ] );
	}
}
