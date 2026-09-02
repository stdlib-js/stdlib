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

#include "stdlib/blas/ext/base/zindex_of_row.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
	// Create a matrix (row-major, 2x2, interleaved real and imaginary components):
	const double A[] = { 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0 };

	// Create a search vector (interleaved real and imaginary components):
	const double x[] = { 3.0, 0.0, 4.0, 0.0 };

	// Specify the number of matrix rows and columns:
	const int M = 2;
	const int N = 2;

	// Perform a search:
	int idx = stdlib_strided_zindex_of_row( CblasRowMajor, M, N, (const stdlib_complex128_t *)A, N, (const stdlib_complex128_t *)x, 1, NULL, 1 );

	// Print the result:
	printf( "index value: %d\n", idx );
}
