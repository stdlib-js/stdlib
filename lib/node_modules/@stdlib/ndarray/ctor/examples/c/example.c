/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include "stdlib/ndarray/base/dtype_char.h"
#include <stdlib.h>
#include <stdio.h>
#include <stdint.h>
#include <inttypes.h>

void print_ndarray_contents( const struct ndarray *x ) {
	int64_t i;
	double v;
	int8_t s;

	for ( i = 0; i < stdlib_ndarray_length( x ); i++ ) {
		s = stdlib_ndarray_iget_float64( x, i, &v ); // WARNING: assumes `x->dtype` is float64
		if ( s != 0 ) {
			printf( "Unable to resolve data element.\n" );
			exit( 1 );
		}
		printf( "data[%"PRId64"] = %f\n", i, v );
	}
}

int main( void ) {
	// Manually create an ndarray (WARNING: this is for illustration purposes only, as the fields of an ndarray are subject to change; for ABI compatibility, use utility functions for accessing ndarray data)...
	struct ndarray *x1 = malloc( sizeof( struct ndarray ) );
	if ( x1 == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}

	// Specify the underlying data type:
	enum STDLIB_NDARRAY_DTYPE dtype = STDLIB_NDARRAY_FLOAT64;
	x1->dtype = dtype;

	// Create an underlying byte array:
	uint8_t buffer[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
	x1->data = buffer;

	// Explicitly specify the number of bytes per element:
	x1->BYTES_PER_ELEMENT = STDLIB_NDARRAY_FLOAT64_BYTES_PER_ELEMENT;

	// Specify the array shape:
	int64_t shape[] = { 3 }; // vector consisting of 3 doubles
	x1->shape = shape;

	// Specify the array strides:
	int64_t strides[] = { x1->BYTES_PER_ELEMENT };
	x1->strides = strides;

	// Specify the byte offset:
	x1->offset = 0;

	// Specify the array order (note: this does not matter for a 1-dimensional array):
	enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
	x1->order = order;

	// Specify the index mode:
	enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
	x1->imode = imode;

	// Specify the subscript index modes:
	int8_t submodes[] = { imode };
	x1->submodes = submodes;
	x1->nsubmodes = 1;

	// Explicitly specify the number of array dimensions:
	x1->ndims = 1; // vector

	// Explicitly specify the number of array elements (doubles):
	x1->length = x1->shape[ 0 ];

	// Explicitly specify the number of bytes:
	x1->byteLength = (x1->length) * (x1->BYTES_PER_ELEMENT);

	// Explicitly set the array flags:
	x1->flags = stdlib_ndarray_flags( x1 );

	printf( "dtype = %d\n", stdlib_ndarray_dtype( x1 ) );
	printf( "length = %"PRId64"\n", stdlib_ndarray_length( x1 ) );
	printf( "byteLength = %"PRId64"\n", stdlib_ndarray_bytelength( x1 ) );
	printf( "ltr = %u\n", stdlib_ndarray_dtype_char( stdlib_ndarray_dtype( x1 ) ) );
	printf( "\n" );

	// Use the function interface to create an ndarray (NOTE: for future ABI compatibility, using the following function interface should be preferred)...
	struct ndarray *x2 = stdlib_ndarray_allocate( dtype, buffer, 1, shape, strides, 0, order, imode, 1, submodes );
	if ( x2 == NULL ) {
		printf( "Error allocating memory.\n" );
		exit( 1 );
	}

	printf( "dtype = %d\n", stdlib_ndarray_dtype( x2 ) );
	printf( "length = %"PRId64"\n", stdlib_ndarray_length( x2 ) );
	printf( "byteLength = %"PRId64"\n", stdlib_ndarray_bytelength( x2 ) );
	printf( "ltr = %u\n", stdlib_ndarray_dtype_char( stdlib_ndarray_dtype( x2 ) ) );
	printf( "\n" );

	// Set values in the underlying byte array using pointers:
	int64_t sub[] = { 0 };
	uint8_t *ptr = stdlib_ndarray_get_ptr( x2, sub );
	if ( ptr == NULL ) {
		printf( "Unable to resolve data pointer.\n" );
		exit( 1 );
	}
	*(double *)ptr = 1.0; // cppcheck-suppress invalidPointerCast

	sub[ 0 ] = 1;
	ptr = stdlib_ndarray_get_ptr( x2, sub );
	if ( ptr == NULL ) {
		printf( "Unable to resolve data pointer.\n" );
		exit( 1 );
	}
	*(double *)ptr = 2.0; // cppcheck-suppress invalidPointerCast

	sub[ 0 ] = 2;
	ptr = stdlib_ndarray_get_ptr( x2, sub );
	if ( ptr == NULL ) {
		printf( "Unable to resolve data pointer.\n" );
		exit( 1 );
	}
	*(double *)ptr = 3.0; // cppcheck-suppress invalidPointerCast

	// Print out the current ndarray elements:
	print_ndarray_contents( x2 );
	printf( "\n" );

	// Set values in the underlying byte array using a "generic" function:
	sub[ 0 ] = 0;
	double v = 4.0;
	int8_t status = stdlib_ndarray_set( x2, sub, (void *)&v );
	if ( status != 0 ) {
		printf( "Unable to set data element.\n" );
		exit( 1 );
	}

	sub[ 0 ] = 1;
	v = 5.0;
	status = stdlib_ndarray_set( x2, sub, (void *)&v );
	if ( status != 0 ) {
		printf( "Unable to set data element.\n" );
		exit( 1 );
	}

	sub[ 0 ] = 2;
	v = 6.0;
	status = stdlib_ndarray_set( x2, sub, (void *)&v );
	if ( status != 0 ) {
		printf( "Unable to set data element.\n" );
		exit( 1 );
	}

	// Print out the current ndarray elements:
	print_ndarray_contents( x2 );
	printf( "\n" );

	// Set values in the underlying byte array using a specialized function:
	sub[ 0 ] = 0;
	status = stdlib_ndarray_set_float64( x2, sub, 7.0 );
	if ( status != 0 ) {
		printf( "Unable to set data element.\n" );
		exit( 1 );
	}

	sub[ 0 ] = 1;
	status = stdlib_ndarray_set_float64( x2, sub, 8.0 );
	if ( status != 0 ) {
		printf( "Unable to set data element.\n" );
		exit( 1 );
	}

	sub[ 0 ] = 2;
	status = stdlib_ndarray_set_float64( x2, sub, 9.0 );
	if ( status != 0 ) {
		printf( "Unable to set data element.\n" );
		exit( 1 );
	}

	// Print out the current ndarray elements:
	print_ndarray_contents( x2 );
	printf( "\n" );

	// Free allocated memory:
	stdlib_ndarray_free( x1 );
	stdlib_ndarray_free( x2 );
}
