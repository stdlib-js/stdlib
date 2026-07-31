/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#include "stdlib/stats/strided/distances/dcosine_similarity.h"
#include <stdio.h>

int main( void ) {
	// Create strided arrays:
	const double x[] = { 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 };
	const double y[] = { 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 };

	// Specify the number of elements:
	const int N = 8;

	// Specify strides:
	const int strideX = 1;
	const int strideY = -1;

	// Compute the cosine similarity of `x` and `y`:
	double sim = stdlib_strided_dcosine_similarity( N, x, strideX, y, strideY );

	// Print the result:
	printf( "cosine similarity: %lf\n", sim );

	// Compute the cosine similarity of `x` and `y` with offsets:
	sim = stdlib_strided_dcosine_similarity_ndarray( N, x, strideX, 0, y, strideY, N-1 );

	// Print the result:
	printf( "cosine similarity: %lf\n", sim );
}
