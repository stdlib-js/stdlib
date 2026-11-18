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

#include "stdlib/blas/ext/base/sminheap_sift_down.h"
#include <stdio.h>

int main( void ) {
	// Create a strided array representing a min-heap whose root violates the min-heap invariant:
	float x[] = { 7.0f, 2.0f, 3.0f, 4.0f, 5.0f };

	// Specify the number of indexed elements:
	const int N = 5;

	// Specify a stride:
	const int strideX = 1;

	// Sift the root value down toward the leaves in order to restore the min-heap property:
	stdlib_strided_sminheap_sift_down( N, 0, x[ 0 ], x, strideX );

	// Print the result:
	for ( int i = 0; i < 5; i++ ) {
		printf( "x[ %i ] = %f\n", i, x[ i ] );
	}
}
