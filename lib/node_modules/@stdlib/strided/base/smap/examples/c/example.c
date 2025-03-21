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

#include "stdlib/strided/base/smap.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

// Define a callback:
static float scale( const float x ) {
	return x * 10.0f;
}

int main( void ) {
	// Create an input strided array:
	float X[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 };

	// Create an output strided array:
	float Y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

	// Specify the number of elements:
	int64_t N = 6;

	// Define the strides:
	int64_t strideX = 1;
	int64_t strideY = -1;

	// Apply the callback:
	stdlib_strided_smap( N, X, strideX, Y, strideY, scale );

	// Print the results:
	for ( int64_t i = 0; i < N; i++ ) {
		printf( "Y[ %"PRId64" ] = %f\n", i, Y[ i ] );
	}
}
