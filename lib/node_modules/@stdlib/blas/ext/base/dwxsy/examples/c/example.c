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

#include "stdlib/blas/ext/base/dwxsy.h"
#include <stdio.h>

int main( void ) {
	// Create strided arrays:
	const double x[] = { 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 };
	const double y[] = { 2.0, 3.0, -1.0, 4.0, -2.0, 5.0, -3.0, 6.0 };
	double w[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

	// Specify the number of indexed elements:
	const int N = 8;

	// Specify strides:
	const int strideX = 1;
	const int strideY = 1;
	const int strideW = 1;

	// Subtract elements of `y` from the corresponding elements of `x` and assign the results to elements in `w`:
	stdlib_strided_dwxsy( N, x, strideX, y, strideY, w, strideW );

	// Print the result:
	for ( int i = 0; i < 8; i++ ) {
		printf( "w[ %i ] = %lf\n", i, w[ i ] );
	}
}
