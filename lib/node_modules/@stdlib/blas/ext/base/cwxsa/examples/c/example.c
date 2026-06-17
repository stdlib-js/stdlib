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

#include "stdlib/blas/ext/base/cwxsa.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/real.h"
#include "stdlib/complex/float32/imag.h"
#include <stdio.h>

int main( void ) {
	// Create strided arrays:
	const stdlib_complex64_t x[] = {
		stdlib_complex64( 1.0f, 2.0f ),
		stdlib_complex64( 3.0f, 4.0f ),
		stdlib_complex64( 5.0f, 6.0f ),
		stdlib_complex64( 7.0f, 8.0f )
	};
	stdlib_complex64_t w[] = {
		stdlib_complex64( 0.0f, 0.0f ),
		stdlib_complex64( 0.0f, 0.0f ),
		stdlib_complex64( 0.0f, 0.0f ),
		stdlib_complex64( 0.0f, 0.0f )
	};

	// Specify the number of indexed elements:
	const int N = 4;

	// Specify strides:
	const int strideX = 1;
	const int strideW = 1;

	// Define a scalar constant:
	stdlib_complex64_t alpha = stdlib_complex64( 5.0f, 3.0f );

	// Subtract a constant from each element in `x` and assign to `w`:
	stdlib_strided_cwxsa( N, alpha, x, strideX, w, strideW );

	// Print the result:
	for ( int i = 0; i < N; i++ ) {
		printf( "w[ %i ] = %f + %fi\n", i, stdlib_complex64_real( w[ i ] ), stdlib_complex64_imag( w[ i ] ) );
	}
}
