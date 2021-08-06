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

#include "stdlib/blas/ext/base/ssumkbn.h"
#include <stdint.h>
#include <stdio.h>

int main() {
	// Create a strided array:
	float x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };

	// Specify the number of elements:
	int64_t N = 4;

	// Specify the stride length:
	int64_t stride = 2;

	// Compute the sum:
	float v = stdlib_strided_ssumkbn( N, x, stride );

	// Print the result:
	printf( "sum: %f\n", v );
}
