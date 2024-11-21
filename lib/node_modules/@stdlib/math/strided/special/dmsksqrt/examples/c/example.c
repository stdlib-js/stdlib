/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

#include "stdlib/math/strided/special/dmsksqrt.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
	// Create an input strided array:
	const double x[] = { 0.0, 4.0, 9.0, 12.0, 24.0, 64.0, 81.0, 101.0 };

	// Create a mask strided array:
	const uint8_t m[] = { 0, 0, 1, 0, 1, 1, 0, 0 };

	// Create an output strided array:
	double y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

	// Specify the number of elements:
	const int64_t N = 4;

	// Specify the stride lengths:
	const int64_t strideX = 2;
	const int64_t strideM = 2;
	const int64_t strideY = 2;

	// Compute the results:
	stdlib_strided_dmsksqrt( N, x, strideX, m, strideM, y, strideY );

	// Print the results:
	for ( int i = 0; i < 8; i++ ) {
		printf( "y[ %i ] = %lf\n", i, y[ i ] );
	}
}
