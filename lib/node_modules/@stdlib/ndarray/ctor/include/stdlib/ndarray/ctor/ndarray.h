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

#ifndef STDLIB_NDARRAY_CTOR_NDARRAY_H
#define STDLIB_NDARRAY_CTOR_NDARRAY_H

#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include <stdint.h>

/**
* ndarray structure.
*
* @example
* #include "stdlib/ndarray/ctor.h"
* #include "stdlib/ndarray/dtypes.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
* #include "stdlib/ndarray/base/bytes_per_element.h"
* #include <stdlib.h>
* #include <stdio.h>
* #include <stdint.h>
*
* struct ndarray *x = malloc( sizeof( struct ndarray ) );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( 1 );
* }
*
* // Create an underlying byte array:
* uint8_t buffer[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
* x->data = buffer;
*
* // Specify the underlying data type:
* x->dtype = STDLIB_NDARRAY_FLOAT64;
*
* // Explicitly specify the number of bytes per element:
* x->BYTES_PER_ELEMENT = STDLIB_NDARRAY_FLOAT64_BYTES_PER_ELEMENT;
*
* // Specify the array shape:
* int64_t shape[] = { 3 }; // vector consisting of 3 doubles
* x->shape = shape;
*
* // Specify the array strides:
* int64_t strides[] = { x->BYTES_PER_ELEMENT };
* x->strides = strides;
*
* // Specify the byte offset:
* x->offset = 0;
*
* // Specify the array order (note: this does not matter for a 1-dimensional array):
* x->order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* x->imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify subscript index modes:
* x->submodes = { STDLIB_NDARRAY_INDEX_ERROR };
* x->nsubmodes = 1;
*
* // Explicitly specify the number of array dimensions:
* x->ndims = 1; // vector
*
* // Explicitly specify the number of array elements (doubles):
* x->length = x->shape[ 0 ];
*
* // Explicitly specify the number of bytes:
* x->byteLength = (x->length) * (x->BYTES_PER_ELEMENT);
*
* // Explicitly set the array flags:
* x->flags = stdlib_ndarray_flags( x );
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
struct ndarray {
	// Underlying data type:
	int16_t dtype;

	// Pointer to the underlying byte array:
	uint8_t *data;

	// Number of array dimensions:
	int64_t ndims;

	// Array shape (dimensions):
	int64_t *shape;

	// Array strides (in bytes) specifying how to iterate over a strided array:
	int64_t *strides;

	// Byte offset which specifies the location at which to start iterating over array elements:
	int64_t offset;

	// Array order (either row-major (C-style) or column-major (Fortran-style)):
	int8_t order;

	// Mode specifying how to handle indices which exceed array dimensions:
	int8_t imode;

	// Number of subscript modes:
	int64_t nsubmodes;

	// Mode(s) specifying how to handle subscripts which exceed array dimensions on a per dimension basis:
	int8_t *submodes;

	// Number of array elements:
	int64_t length;

	// Size in bytes:
	int64_t byteLength;

	// Number of bytes per element (i.e., item size):
	int64_t BYTES_PER_ELEMENT;

	// Bit mask providing information regarding the memory layout of the array (e.g., see macros):
	int64_t flags;
};

#endif // !STDLIB_NDARRAY_CTOR_NDARRAY_H
