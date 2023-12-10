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

#include "stdlib/stats/base/scuminabs.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
	// Create strided arrays:
	float x[] = { 1.0, 2.0, -3.0, 4.0, -5.0, 6.0, 7.0, 8.0 };
	float y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

	// Specify the number of elements:
	int64_t N = 4;

	// Specify stride lengths:
	int64_t strideX = 2;
	int64_t strideY = -2;

	// Compute the cumulative minimum absolute value:
	stdlib_strided_scuminabs( N, x, strideX, y, strideY );

	// Print the result:
	for ( int64_t i = 0; i < 8; i++ ) {
		printf( "y[ %"PRId64" ] = %f\n", i, y[ i ] );
	}
}
