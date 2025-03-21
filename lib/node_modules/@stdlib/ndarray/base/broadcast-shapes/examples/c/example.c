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

#include "stdlib/ndarray/base/broadcast_shapes.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
	int64_t N1 = 4;
	int64_t sh1[] = { 8, 1, 6, 1 };

	int64_t N2 = 3;
	int64_t sh2[] = { 7, 1, 5 };

	int64_t ndims[] = { N1, N2 };
	int64_t *shapes[] = { sh1, sh2 };

	int64_t out[] = { 0, 0, 0, 0 };
	int8_t status = stdlib_ndarray_broadcast_shapes( 2, shapes, ndims, out );
	if ( status != 0 ) {
		printf( "incompatible shapes\n" );
		return 1;
	}
	int64_t i;
	printf( "shape = ( " );
	for ( i = 0; i < N1; i++ ) {
		printf( "%"PRId64"", out[ i ] );
		if ( i < N1-1 ) {
			printf( ", " );
		}
	}
	printf( " )\n" );
	return 0;
}
