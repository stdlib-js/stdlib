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

#include "stdlib/complex/float64/ctor.h"
#include "stdlib/blas/ext/base/zfill.h"
#include <stdio.h>

int main() {
	// Create a strided array of interleaved real and imaginary components:
	double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };

	// Create a scalar constant:
	const stdlib_complex128_t alpha = stdlib_complex128( 2.0, 2.0 );

	// Specify the number of elements:
	const int N = 4;

	// Specify a stride:
	const int strideX = 1;

	// Fill the array:
	stdlib_strided_zfill( N, alpha, (stdlib_complex128_t *)x, strideX );

	// Print the result:
	for ( int i = 0; i < 8; i++ ) {
		printf( "x[ %i ] = %lf\n", i, x[ i ] );
	}
}
