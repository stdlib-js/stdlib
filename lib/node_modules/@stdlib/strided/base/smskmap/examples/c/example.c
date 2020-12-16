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

#include "stdlib/strided/base/smskmap.h"
#include <stdint.h>
#include <stdio.h>

// Define a callback:
static float scale( const float x ) {
	return x * 10.0f;
}

int main() {
	// Create an input strided array:
	float X[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f };

	// Create a mask strided array:
	uint8_t M[] = { 0, 0, 1, 0, 0, 1 };

	// Create an output strided array:
	float Y[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

	// Specify the number of elements:
	int64_t N = 6;

	// Define the strides:
	int64_t strideX = 1;
	int64_t strideM = 1;
	int64_t strideY = -1;

	// Apply the callback:
	stdlib_strided_smskmap( N, X, strideX, M, strideM, Y, strideY, scale );

	// Print the results:
	for ( int64_t i = 0; i < N; i++ ) {
		printf( "Y[ %lli ] = %f\n", i, Y[ i ] );
	}
}
