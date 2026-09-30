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

#include "stdlib/blas/ext/base/cdiff.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdio.h>

int main( void ) {
	// Create a strided array of interleaved real and imaginary components:
	const float x[] = { 1.0f, -1.0f, 2.0f, -2.0f, 3.0f, -3.0f, 4.0f, -4.0f };

	// Define a list of values to prepend:
	const float p[] = { 0.0f, 0.0f };

	// Define a list of values to append:
	const float a[] = { 5.0f, -5.0f };

	// Define an output array:
	float out[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

	// Define a workspace:
	float w[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

	// Compute forward differences:
	stdlib_strided_cdiff( 4, 1, (const stdlib_complex64_t *)x, 1, 1, (const stdlib_complex64_t *)p, 1, 1, (const stdlib_complex64_t *)a, 1, (stdlib_complex64_t *)out, 1, (stdlib_complex64_t *)w, 1 );

	// Print the result:
	for ( int i = 0; i < 10; i++ ) {
		printf( "out[ %i ] = %f\n", i, out[ i ] );
	}
}
