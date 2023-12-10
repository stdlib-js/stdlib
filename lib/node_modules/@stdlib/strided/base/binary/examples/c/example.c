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

#include "stdlib/strided/base/binary.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

// Define a callback:
static double add( double x, double y ) {
	return x + y;
}

int main( void ) {
	// Create underlying byte arrays:
	uint8_t x[] = { 1, 4, 7 };
	uint8_t y[] = { 101, 104, 107 };
	uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

	// Define a pointer to an array containing pointers to strided arrays:
	uint8_t *arrays[] = { x, y, out };

	// Define the strides:
	int64_t strides[] = { 1, 1, 8 }; // 1 byte per uint8, 8 bytes per double

	// Define the number of elements over which to iterate:
	int64_t shape[] = { 3 };

	// Apply the callback:
	stdlib_strided_bb_d_as_dd_d( arrays, shape, strides, (void *)add );

	// Print the contents of the output array:
	uint8_t *op1 = out;
	for ( int64_t i = 0; i < shape[0]; i++, op1 += strides[2] ) {
		const double v = *(double *)op1; // cppcheck-suppress invalidPointerCast
		printf( "out[ %"PRId64" ] = %lf\n", i, v );
	}
}
