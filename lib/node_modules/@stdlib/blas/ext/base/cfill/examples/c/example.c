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

#include "stdlib/complex/float32/ctor.h"
#include "stdlib/blas/ext/base/cfill.h"
#include <stdio.h>

int main() {
	// Create a strided array of interleaved real and imaginary components:
	float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };

	// Create a scalar constant:
	const stdlib_complex64_t alpha = stdlib_complex64( 2.0f, 2.0f );

	// Specify the number of elements:
	const int N = 4;

	// Specify a stride:
	const int strideX = 1;

	// Fill the array:
	stdlib_strided_cfill( N, alpha, (stdlib_complex64_t *)x, strideX );

	// Print the result:
	for ( int i = 0; i < 8; i++ ) {
		printf( "x[ %i ] = %f\n", i, x[ i ] );
	}
}
