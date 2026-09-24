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

#include "stdlib/blas/ext/base/zlinspace.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"
#include <stdio.h>
#include <stdbool.h>

int main( void ) {
	// Create a strided array:
	double x[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

	// Specify the number of indexed elements:
	const int N = 8;

	// Specify a stride:
	const int strideX = 1;

	// Create start and stop values:
	const stdlib_complex128_t start = stdlib_complex128( 0.0, 0.0 );
	const stdlib_complex128_t stop = stdlib_complex128( 10.0, 5.0 );

	// Fill the array:
	stdlib_strided_zlinspace( N, start, stop, true, (stdlib_complex128_t *)x, strideX );

	// Print the result:
	for ( int i = 0; i < N; i++ ) {
		stdlib_complex128_t v = ( (stdlib_complex128_t *)x )[ i ];
		printf( "x[ %i ] = %lf + %lfi\n", i, stdlib_complex128_real( v ), stdlib_complex128_imag( v ) );
	}
}
