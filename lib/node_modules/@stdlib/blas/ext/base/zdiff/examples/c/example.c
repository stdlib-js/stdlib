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

#include "stdlib/blas/ext/base/zdiff.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdio.h>

int main( void ) {
	// Create a strided array of interleaved real and imaginary components:
	const double x[] = { 1.0, -1.0, 2.0, -2.0, 3.0, -3.0, 4.0, -4.0 };

	// Define a list of values to prepend:
	const double p[] = { 0.0, 0.0 };

	// Define a list of values to append:
	const double a[] = { 5.0, -5.0 };

	// Define an output array:
	double out[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

	// Define a workspace:
	double w[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

	// Compute forward differences:
	stdlib_strided_zdiff( 4, 1, (stdlib_complex128_t *)x, 1, 1, (stdlib_complex128_t *)p, 1, 1, (stdlib_complex128_t *)a, 1, (stdlib_complex128_t *)out, 1, (stdlib_complex128_t *)w, 1 );

	// Print the result:
	for ( int i = 0; i < 10; i++ ) {
		printf( "out[ %i ] = %lf\n", i, out[ i ] );
	}
}
