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

#include "stdlib/blas/base/drot.h"
#include <stdio.h>

int main( void ) {
	// Create strided arrays:
	double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0 };
	double y[] = { 6.0, 7.0, 8.0, 9.0, 10.0 };

	// Specify the number of elements:
	const int N = 3;

	// Specify stride lengths:
	const int strideX = 2;
	const int strideY = -2;

	// Specify angle of rotation:
	const double c = 0.8;
	const double s = 0.6;

	// Apply plane rotation:
	c_drot( N, x, strideX, y, strideY, c, s );

	// Print the result:
	for ( int i = 0; i < 5; i++ ) {
		printf( "x[ %i ] = %lf, y[ %i ] = %lf\n", i, x[ i ], i, y[ i ] );
	}

	// Apply plane rotation:
	c_drot_ndarray( N, x, strideX, 0, y, strideY, 4, c, s );

	// Print the result:
	for ( int i = 0; i < 5; i++ ) {
		printf( "x[ %i ] = %lf, y[ %i ] = %lf\n", i, x[ i ], i, y[ i ] );
	}
}
