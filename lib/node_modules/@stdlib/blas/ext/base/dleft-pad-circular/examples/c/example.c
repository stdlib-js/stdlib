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

#include "stdlib/blas/ext/base/dleft_pad_circular.h"
#include <stdio.h>

int main( void ) {
	// Create strided arrays:
	const double x[] = { 1.0, 2.0, 3.0 };
	double y[] = { 0.0, 0.0, 0.0, 0.0, 0.0 };

	// Specify the number of indexed elements:
	const int N = 3;

	// Specify the number of elements to pad:
	const int k = 2;

	// Specify stride lengths:
	const int strideX = 1;
	const int strideY = 1;

	// Prepend elements:
	stdlib_strided_dleft_pad_circular( N, k, x, strideX, y, strideY );

	// Print the result:
	for ( int i = 0; i < 5; i++ ) {
		printf( "y[ %d ] = %lf\n", i, y[ i ] );
	}
}
