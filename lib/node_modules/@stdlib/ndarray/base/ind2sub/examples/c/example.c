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

#include "stdlib/ndarray/base/ind2sub.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
	int64_t ndims = 2;
	int64_t shape[] = { 3, 3 };
	int64_t strides[] = { -3, 1 };
	int64_t offset = 6;

	int64_t out[ 2 ];

	stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, 7, STDLIB_NDARRAY_INDEX_ERROR, out );

	int i;
	printf( "subscripts = { " );
	for ( i = 0; i < ndims; i++ ) {
		printf( "%"PRId64"", out[ i ] );
		if ( i < ndims-1 ) {
			printf( ", " );
		}
	}
	printf( " }\n" );
}
