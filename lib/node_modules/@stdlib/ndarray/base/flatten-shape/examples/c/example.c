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

#include "stdlib/ndarray/base/flatten_shape.h"
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
	const int64_t shape[] = { 2, 3, 4, 10 };
	const int64_t ndims = 4;
	const int64_t depth = 2;
	int64_t out[ 2 ];

	stdlib_ndarray_flatten_shape( ndims, shape, depth, out );

	int i;
	printf( "shape = ( " );
	for ( i = 0; i < ndims-depth; i++ ) {
		printf( "%"PRId64"", out[ i ] );
		if ( i < ndims-depth-1 ) {
			printf( ", " );
		}
	}
	printf( " )\n" );
}
