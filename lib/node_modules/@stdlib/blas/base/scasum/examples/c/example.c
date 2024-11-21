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

#include "stdlib/blas/base/scasum.h"
#include <stdio.h>

int main( void ) {
	// Create a strided array of interleaved real and imaginary components:
	const float cx[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };

	// Specify the number of elements:
	const int N = 4;

	// Specify stride length:
	const int strideX = 1;

	// Compute the sum of the absolute values of real and imaginary components:
	float out = c_scasum( N, (void *)cx, strideX );

	// Print the result:
	printf( "out: %f\n", out );

	// Compute the sum of the absolute values of real and imaginary components using alternative indexing semantics:
	out = c_scasum_ndarray( N, (void *)cx, -strideX, N-1 );

	// Print the result:
	printf( "out: %f\n", out );
}
