/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#include "stdlib/blas/ext/base/scusum.h"
#include <stdio.h>

int main( void ) {
	// Create strided arrays:
	const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };
	float y[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

	// Specify the number of elements:
	const int N = 4;

	// Specify stride lengths:
	const int strideX = 2;
	const int strideY = -2;

	// Compute the cumulative sum:
	stdlib_strided_scusum( N, 0.0f, x, strideX, y, strideY );

	// Print the result:
	for ( int i = 0; i < 8; i++ ) {
		printf( "y[ %d ] = %f\n", i, y[ i ] );
	}
}
