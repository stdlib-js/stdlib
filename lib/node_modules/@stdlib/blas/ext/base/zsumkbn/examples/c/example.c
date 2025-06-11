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

#include "stdlib/blas/ext/base/zsumkbn.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"
#include <stdio.h>

int main( void ) {
	// Create a strided array:
	const stdlib_complex128_t x[] = {
		stdlib_complex128( 1.0, 2.0 ),
		stdlib_complex128( 3.0, 4.0 ),
		stdlib_complex128( 5.0, 6.0 ),
		stdlib_complex128( 7.0, 8.0 )
	};

	// Specify the number of elements:
	const int N = 4;

	// Specify the stride length:
	const int strideX = 1;

	// Compute the sum:
	stdlib_complex128_t v = stdlib_strided_zsumkbn( N, x, strideX );

	// Print the result:
	printf( "sum: %lf + %lfi\n", stdlib_complex128_real( v ), stdlib_complex128_imag( v ) );
}
