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

#include "stdlib/strided/base/smskmap2.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

// Define a callback:
static float addf( const float x, const float y ) {
	return x + y;
}

int main( void ) {
	// Create input strided arrays:
	float X[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f };
	float Y[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f };

	// Create a mask strided array:
	uint8_t M[] = { 0, 0, 1, 0, 0, 1 };

	// Create an output strided array:
	float Z[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

	// Specify the number of elements:
	int64_t N = 6;

	// Define the strides:
	int64_t strideX = 1;
	int64_t strideY = -1;
	int64_t strideZ = 1;
	int64_t strideM = 1;

	// Apply the callback:
	stdlib_strided_smskmap2( N, X, strideX, Y, strideY, M, strideM, Z, strideZ, addf );

	// Print the results:
	for ( int64_t i = 0; i < N; i++ ) {
		printf( "Z[ %"PRId64" ] = %f\n", i, Z[ i ] );
	}
}
