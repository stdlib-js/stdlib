/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

#include "stdlib/ndarray/base/minmax_view_buffer_index.h"
#include <stdio.h>
#include <inttypes.h>

int main() {
	int64_t ndims = 2;
	int64_t shape[] = { 10, 10 };
	int64_t strides[] = { 10, 1 };
	int64_t offset = 0;
	int64_t out[ 2 ];

	stdlib_ndarray_minmax_view_buffer_index( ndims, shape, strides, offset, out );

	printf( "min: %"PRId64"\n", out[ 0 ] );
	printf( "max: %"PRId64"\n", out[ 1 ] );
}
