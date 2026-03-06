/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

#include "stdlib/strided/common/ternary.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

// Define a callback:
static uint8_t add3( uint8_t x, uint8_t y, uint8_t z ) {
	return x + y + z;
}

int main( void ) {
	// Create underlying byte arrays:
	uint8_t x[] = { 1, 4, 7 };
	uint8_t y[] = { 2, 5, 8 };
	uint8_t z[] = { 3, 6, 9 };
	uint8_t out[] = { 0, 0, 0 };

	// Define a pointer to an array containing pointers to strided arrays:
	uint8_t *arrays[] = { x, y, z, out };

	// Define the strides:
	int64_t strides[] = { 1, 1, 1, 1 }; // 1 byte per uint8

	// Define the number of elements over which to iterate:
	int64_t shape[] = { 3 };

	// Apply the callback:
	stdlib_strided_BBB_B( arrays, shape, strides, (void *)add3 );

	// Print the contents of the output array:
	uint8_t *op1 = out;
	for ( int64_t i = 0; i < shape[0]; i++, op1 += strides[3] ) {
		const uint8_t v = *(uint8_t *)op1;
		printf( "out[ %"PRId64" ] = %u\n", i, v );
	}
}
