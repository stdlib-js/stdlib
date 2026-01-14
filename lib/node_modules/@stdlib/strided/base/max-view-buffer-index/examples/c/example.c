/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/strided/base/max_view_buffer_index.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
	// Specify the number of indexed elements:
	int64_t N = 6;

	// Define a stride:
	int64_t stride = 2;

	// Define an offset:
	int64_t offset = 100;

	// Compute the maximum accessible index:
	int64_t idx = stdlib_strided_max_view_buffer_index( N, stride, offset );

	// Print the results:
	printf( "N: %"PRId64", stride: %"PRId64", offset: %"PRId64" => idx: %"PRId64"\n", N, stride, offset, idx );
}
