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

#include "stdlib/stats/base/ndarray/dmean.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
	// Create a data buffer:
	const double data[] = { 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 };

	// Specify the number of array dimensions:
	const int64_t ndims = 1;

	// Specify the array shape:
	int64_t shape[] = { 4 };

	// Specify the array strides:
	int64_t strides[] = { 2*STDLIB_NDARRAY_FLOAT64_BYTES_PER_ELEMENT };

	// Specify the byte offset:
	const int64_t offset = 0;

	// Specify the array order:
	const enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

	// Specify the index mode:
	const enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

	// Specify the subscript index modes:
	int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };
	const int64_t nsubmodes = 1;

	// Create an ndarray:
	// cppcheck-suppress invalidPointerCast
	struct ndarray *x = stdlib_ndarray_allocate( STDLIB_NDARRAY_FLOAT64, (uint8_t *)data, ndims, shape, strides, offset, order, imode, nsubmodes, submodes );
	if ( x == NULL ) {
		fprintf( stderr, "Error allocating memory.\n" );
		exit( 1 );
	}

	// Define a list of ndarrays:
	const struct ndarray *arrays[] = { x };

	// Compute the arithmetic mean:
	double v = stdlib_stats_dmean( arrays );

	// Print the result:
	printf( "mean: %lf\n", v );

	// Free allocated memory:
	stdlib_ndarray_free( x );
}
