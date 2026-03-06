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

#include "stdlib/blas/ext/base/dsort2hp.h"
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
	// Create strided arrays:
	double x[] = { 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 };
	double y[] = { 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 };

	// Specify the number of elements:
	int N = 8;

	// Specify strides:
	int strideX = 1;
	int strideY = 1;

	// Sort the arrays:
	c_dsort2hp( N, 1.0, x, strideX, y, strideY );

	// Print the result:
	for ( int i = 0; i < 8; i++ ) {
		printf( "x[ %i ] = %lf\n", i, x[ i ] );
		printf( "y[ %i ] = %"PRId64"\n", i, (int64_t)y[ i ] );
	}
}
