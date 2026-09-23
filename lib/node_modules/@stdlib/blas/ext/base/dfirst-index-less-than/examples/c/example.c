/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/blas/ext/base/dfirst_index_less_than.h"
#include <stdio.h>

int main( void ) {
	// Create strided arrays:
	const double x[] = { 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0 };
	const double y[] = { 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0 };

	// Specify the number of indexed elements:
	const int N = 8;

	// Specify stride lengths:
	const int strideX = 1;
	const int strideY = 1;

	// Perform a search:
	int idx = stdlib_strided_dfirst_index_less_than( N, x, strideX, y, strideY );

	// Print the result:
	printf( "index value: %d\n", idx );
}
