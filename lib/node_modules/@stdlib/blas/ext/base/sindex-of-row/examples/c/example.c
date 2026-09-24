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

#include "stdlib/blas/ext/base/sindex_of_row.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
	// Create a matrix (row-major):
	const float A[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 0.0f, 0.0f, 0.0f };

	// Create a search vector:
	const float x[] = { 4.0f, 5.0f, 6.0f };

	// Specify the number of matrix rows and columns:
	const int M = 3;
	const int N = 3;

	// Perform a search:
	int idx = stdlib_strided_sindex_of_row( CblasRowMajor, M, N, A, N, x, 1, NULL, 1 );

	// Print the result:
	printf( "index value: %d\n", idx );
}
