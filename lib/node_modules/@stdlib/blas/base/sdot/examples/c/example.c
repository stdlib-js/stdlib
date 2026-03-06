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

#include "stdlib/blas/base/sdot.h"
#include <stdio.h>

int main( void ) {
	// Create strided arrays:
	const float x[] = { 1.0f, -2.0f, 3.0f, -4.0f, 5.0f, -6.0f, 7.0f, -8.0f };
	const float y[] = { 1.0f, -2.0f, 3.0f, -4.0f, 5.0f, -6.0f, 7.0f, -8.0f };

	// Specify the number of indexed elements:
	const int N = 8;

	// Specify strides:
	const int strideX = 1;
	const int strideY = -1;

	// Compute the dot product:
	float d = c_sdot( N, x, strideX, y, strideY );

	// Print the result:
	printf( "dot product: %f\n", d );

	// Compute the dot product:
	d = c_sdot_ndarray( N, x, strideX, 0, y, strideY, 7 );

	// Print the result:
	printf( "dot product: %f\n", d );
}
