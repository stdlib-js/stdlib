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

#include "stdlib/ndarray/base/shape2strides.h"
#include "stdlib/ndarray/orders.h"
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
	int64_t shape[] = { 2, 3, 10 };
	int64_t ndims = 3;
	int64_t out[ 3 ];

	stdlib_ndarray_shape2strides( ndims, shape, STDLIB_NDARRAY_ROW_MAJOR, out );

	int i;
	printf( "strides = { " );
	for ( i = 0; i < ndims; i++ ) {
		printf( "%"PRId64"", out[ i ] );
		if ( i < ndims-1 ) {
			printf( ", " );
		}
	}
	printf( " }\n" );
}
