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

#include "stdlib/blas/ext/base/ssort2ins.h"
#include <stdio.h>

int main( void ) {
	// Create strided arrays:
	float x[] = { 1.0f, -2.0f, 3.0f, -4.0f, 5.0f, -6.0f, 7.0f, -8.0f };
	float y[] = { 0.0f, 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f };

	// Specify the number of elements:
	int N = 8;

	// Specify strides:
	int strideX = 1;
	int strideY = 1;

	// Sort the arrays:
	stdlib_strided_ssort2ins( N, 1.0f, x, strideX, y, strideY );

	// Print the result:
	for ( int i = 0; i < 8; i++ ) {
		printf( "x[ %i ] = %f\n", i, x[ i ] );
		printf( "y[ %i ] = %f\n", i, y[ i ] );
	}
}

