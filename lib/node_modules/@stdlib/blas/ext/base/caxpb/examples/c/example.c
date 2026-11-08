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

#include "stdlib/blas/ext/base/caxpb.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/real.h"
#include "stdlib/complex/float32/imag.h"
#include <stdio.h>

int main( void ) {
	// Create a strided array:
	stdlib_complex64_t x[] = {
		stdlib_complex64( 1.0f, -2.0f ),
		stdlib_complex64( 3.0f, -4.0f ),
		stdlib_complex64( 5.0f, -6.0f ),
		stdlib_complex64( 7.0f, -8.0f )
	};

	// Specify the number of indexed elements:
	const int N = 4;

	// Specify a stride:
	const int strideX = 1;

	// Define scalar constants:
	stdlib_complex64_t alpha = stdlib_complex64( 2.0f, 0.0f );
	stdlib_complex64_t beta = stdlib_complex64( 1.0f, 0.0f );

	// Multiply each element by alpha and add beta:
	stdlib_strided_caxpb( N, alpha, beta, x, strideX );

	// Print the result:
	for ( int i = 0; i < N; i++ ) {
		printf( "x[ %i ] = %f + %fi\n", i, stdlib_complex64_real( x[ i ] ), stdlib_complex64_imag( x[ i ] ) );
	}
}
