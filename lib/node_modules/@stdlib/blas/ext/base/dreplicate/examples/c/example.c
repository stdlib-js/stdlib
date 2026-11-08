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

#include "stdlib/blas/ext/base/dreplicate.h"
#include <stdio.h>

int main( void ) {
	// Create a strided array:
	const double x[] = { 1.0, 2.0, 3.0, 4.0 };
	double out[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

	// Specify the number of indexed elements:
	const int N = 4;

	// Specify the number of times to replicate each element:
	const int k = 2;

	// Specify strides:
	const int strideX = 1;
	const int strideOut = 1;

	// Replicate each element:
	stdlib_strided_dreplicate( N, k, x, strideX, out, strideOut );

	// Print the result:
	for ( int i = 0; i < 8; i++ ) {
		printf( "Out[ %i ] = %lf\n", i, out[ i ] );
	}
}
