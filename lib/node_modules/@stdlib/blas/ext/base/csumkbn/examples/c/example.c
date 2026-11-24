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

#include "stdlib/blas/ext/base/csumkbn.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/real.h"
#include "stdlib/complex/float32/imag.h"
#include <stdio.h>

int main( void ) {
	// Create a strided array:
	const stdlib_complex64_t x[] = {
		stdlib_complex64( 1.0f, 2.0f ),
		stdlib_complex64( 3.0f, 4.0f ),
		stdlib_complex64( 5.0f, 6.0f ),
		stdlib_complex64( 7.0f, 8.0f )
	};

	// Specify the number of elements:
	const int N = 4;

	// Specify the stride length:
	const int strideX = 1;

	// Compute the sum:
	stdlib_complex64_t v = stdlib_strided_csumkbn( N, x, strideX );

	// Print the result:
	printf( "sum: %f + %fi\n", stdlib_complex64_real( v ), stdlib_complex64_imag( v ) );
}
