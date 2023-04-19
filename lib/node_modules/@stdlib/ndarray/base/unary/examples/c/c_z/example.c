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

#include "stdlib/ndarray/base/unary.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32.h"
#include "stdlib/complex/float64.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <inttypes.h>

static void print_ndarray_contents( const struct ndarray *x ) {
	stdlib_complex128_t v;
	int64_t i;
	int8_t s;

	for ( i = 0; i < stdlib_ndarray_length( x ); i++ ) {
		s = stdlib_ndarray_iget_complex128( x, i, &v );
		if ( s != 0 ) {
			fprintf( stderr, "Unable to resolve data element.\n" );
			exit( EXIT_FAILURE );
		}
		fprintf( stdout, "data[%"PRId64"] = %lf + %lfi\n", i, v.re, v.im );
	}
}

static stdlib_complex64_t scale( const stdlib_complex64_t x ) {
	return stdlib_complex64( x.re+10.0f, x.im+10.0f );
}

int main( void ) {
	// Define the ndarray data types:
	enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
	enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

	// Create underlying byte arrays:
	uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
	uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

	// Define the number of dimensions:
	int64_t ndims = 3;

	// Define the array shapes:
	int64_t shape[] = { 2, 2, 2 };

	// Define the strides:
	int64_t sx[] = { 32, 16, 8 };
	int64_t sy[] = { 64, 32, 16 };

	// Define the offsets:
	int64_t ox = 0;
	int64_t oy = 0;

	// Define the array order:
	enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

	// Specify the index mode:
	enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

	// Specify the subscript index modes:
	int8_t submodes[] = { imode };
	int64_t nsubmodes = 1;

	// Create an input ndarray:
	struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
	if ( x == NULL ) {
		fprintf( stderr, "Error allocating memory.\n" );
		exit( EXIT_FAILURE );
	}

	// Create an output ndarray:
	struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
	if ( y == NULL ) {
		fprintf( stderr, "Error allocating memory.\n" );
		exit( EXIT_FAILURE );
	}

	// Define an array containing the ndarrays:
	struct ndarray *arrays[] = { x, y };

	// Apply the callback:
	int8_t status = stdlib_ndarray_c_z( arrays, (void *)scale );
	if ( status != 0 ) {
		fprintf( stderr, "Error during computation.\n" );
		exit( EXIT_FAILURE );
	}

	// Print the results:
	print_ndarray_contents( y );
	fprintf( stdout, "\n" );

	// Free allocated memory:
	stdlib_ndarray_free( x );
	stdlib_ndarray_free( y );
}
