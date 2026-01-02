/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#include "stdlib/blas/ext/base/drrss.h"
#include <stdio.h>

int main( void ) {
	// Create two strided arrays:
	const double x[] = { 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 };
	const double y[] = { 5.0, 12.0, -8.0, 15.0, 9.0, 0.0 };

	// Specify the number of elements:
	const int N = 5;

	// Specify the stride lengths:
	const int strideX = 1;
	const int strideY = 1;

	// Compute the square root of the residual sum of squares of `x` and `y`:
	double d = stdlib_strided_drrss( N, x, strideX, y, strideY );

	// Print the result:
	printf( "drrss: %lf\n", d );

	// Specify index offsets:
	const int offsetX = 1;
	const int offsetY = 1;

	// Compute the square root of the residual sum of squares of `x` and `y` with offsets:
	d = stdlib_strided_drrss_ndarray( N, x, strideX, offsetX, y, strideY, offsetY );

	// Print the result:
	printf( "drrss: %lf\n", d );
}
