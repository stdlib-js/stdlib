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
#include "stdlib/ndarray/base/bytes_per_element.h"
#include "stdlib/ndarray/base/iteration_order.h"
#include "stdlib/ndarray/base/minmax_view_buffer_index.h"
#include "stdlib/ndarray/base/numel.h"
#include "stdlib/ndarray/base/strides2order.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include <stdlib.h>
#include <stdint.h>

// NOTE: keep functions in alphabetical order...

/**
* Returns a pointer to a dynamically allocated ndarray.
*
* ## Notes
*
* -   The user is responsible for freeing the allocated memory.
*
* @param dtype      data type
* @param data       pointer to the underlying byte array
* @param ndims      number of dimensions
* @param shape      array shape (dimensions)
* @param strides    array strides (in bytes)
* @param offset     byte offset specifying the location of the first element
* @param order      specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param imode      specifies how to handle indices which exceed array dimensions
* @param nsubmodes  number of subscript modes
* @param submodes   specifies how to handle subscripts which exceed array dimensions on a per dimension basis (if provided fewer submodes than dimensions, submodes are recycled using modulo arithmetic)
* @return           pointer to a dynamically allocated ndarray or, if unable to allocate memory, a null pointer
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
* // Specify the underlying data type:
* enum STDLIB_NDARRAY_DTYPE dtype = STDLIB_NDARRAY_FLOAT64;
*
* // Create an underlying byte array:
* uint8_t buffer[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
*
* // Specify the number of array dimensions:
* int64_t ndims = 1;
*
* // Specify the array shape:
* int64_t shape[] = { 3 }; // vector consisting of 3 doubles
*
* // Specify the array strides:
* int64_t strides[] = { STDLIB_NDARRAY_FLOAT64_BYTES_PER_ELEMENT };
*
* // Specify the byte offset:
* int64_t offset = 0;
*
* // Specify the array order (note: this does not matter for a 1-dimensional array):
* enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;
*
* // Specify the index mode:
* enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;
*
* // Specify the subscript index modes:
* int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };
* int64_t nsubmodes = 1;
*
* // Create an ndarray:
* struct ndarray *x = stdlib_ndarray_allocate( dtype, buffer, ndims, shape, strides, offset, order, imode, nsubmodes, submodes );
* if ( x == NULL ) {
*     fprintf( stderr, "Error allocating memory.\n" );
*     exit( 1 );
* }
*
* // Free allocated memory:
* stdlib_ndarray_free( x );
*/
struct ndarray * stdlib_ndarray_allocate( int16_t dtype, uint8_t *data, int64_t ndims, int64_t *shape, int64_t *strides, int64_t offset, int8_t order, int8_t imode, int64_t nsubmodes, int8_t *submodes ) {
	int64_t len;

	struct ndarray *arr = malloc( sizeof( struct ndarray ) );
	if ( arr == NULL ) {
		return NULL;
	}
	arr->data = data;
	arr->dtype = dtype;
	arr->imode = imode;
	arr->ndims = ndims;
	arr->nsubmodes = nsubmodes;
	arr->offset = offset;
	arr->order = order;
	arr->shape = shape;
	arr->strides = strides;
	arr->submodes = submodes;

	len = stdlib_ndarray_numel( ndims, shape );
	arr->length = len;

	arr->BYTES_PER_ELEMENT = stdlib_ndarray_bytes_per_element( dtype );
	arr->byteLength = len * (arr->BYTES_PER_ELEMENT);
	arr->flags = stdlib_ndarray_flags( arr );

	return arr;
}

/**
* Returns the size of an ndarray (in bytes).
*
* @param arr  input ndarray
* @return     array size
*/
int64_t stdlib_ndarray_bytelength( const struct ndarray *arr ) {
	return arr->byteLength;
}

/**
* Returns a pointer to an ndarray's underlying byte array.
*
* @param arr  input ndarray
* @return     underlying byte array
*/
uint8_t * stdlib_ndarray_data( const struct ndarray *arr ) {
	return arr->data;
}

/**
* Returns an ndarray dimension.
*
* ## Notes
*
* -   The function does not perform any sanity checks.
*
* @param arr  input ndarray
* @param i    dimension index
* @return     dimension
*/
int64_t stdlib_ndarray_dimension( const struct ndarray *arr, const int64_t i ) {
	return arr->shape[ i ];
}

/**
* Disables specified ndarray flags.
*
* ## Notes
*
* -   The function does not perform any sanity checks and **assumes** the user knows what s/he is doing.
*
* @param arr    input ndarray
* @param flags  bit mask to disable flags
* @return       status code
*/
int8_t stdlib_ndarray_disable_flags( struct ndarray *arr, const int64_t flags ) {
	arr->flags &= ~flags;
	return 0;
}

/**
* Returns an ndarray data type.
*
* @param arr  input ndarray
* @return     array data type
*/
int16_t stdlib_ndarray_dtype( const struct ndarray *arr ) {
	return arr->dtype;
}

/**
* Enables specified ndarray flags.
*
* ## Notes
*
* -   The function does not perform any sanity checks and **assumes** the user knows what s/he is doing.
*
* @param arr    input ndarray
* @param flags  bit mask to enable flags
* @return       status code
*/
int8_t stdlib_ndarray_enable_flags( struct ndarray *arr, const int64_t flags ) {
	arr->flags |= flags;
	return 0;
}

/**
* Returns ndarray flags.
*
* @param arr  input ndarray
* @return     flags
*/
int64_t stdlib_ndarray_flags( const struct ndarray *arr ) {
	uint8_t contiguous;
	int64_t *strides;
	int64_t nbytes;
	int64_t tmp[2];
	int64_t ndims;
	int64_t flags;
	int64_t len;
	int8_t ord;

	// Cache various ndarray data:
	len = arr->length;
	ndims = arr->ndims;
	strides = arr->strides;
	nbytes = arr->BYTES_PER_ELEMENT;

	// Initialize the memory for `flags`:
	flags = 0;

	// Determine if the array can be stored contiguously...
	if ( len == 0 || stdlib_ndarray_iteration_order( ndims, strides ) == 0 ) {
		// If an array does not contain any elements, then no data to store, and, if the array is unordered, adjacent array elements are not guaranteed to be stored next to each other.
		contiguous = 0;
	} else {
		// Ensure that the array is compatible with a single memory segment:
		stdlib_ndarray_minmax_view_buffer_index( ndims, arr->shape, strides, arr->offset, tmp );
		if ( (len*nbytes) == ( (tmp[1]-tmp[0])+nbytes ) ) {
			// Compatible:
			contiguous = 1;
		} else {
			// Incompatible:
			contiguous = 0;
		}
	}
	// Determine if the array is row-major/column-major contiguous:
	if ( contiguous == 1 ) {
		// Infer the array "order" from the stride array (this is supplementary to `arr->order`):
		ord = stdlib_ndarray_strides2order( ndims, strides );

		if ( ord == 1 || ord == 3 ) {
			flags |= STDLIB_NDARRAY_ROW_MAJOR_CONTIGUOUS_FLAG;
		}
		if ( ord == 2 || ord == 3 ) {
			flags |= STDLIB_NDARRAY_COLUMN_MAJOR_CONTIGUOUS_FLAG;
		}
	}
	return flags;
}

/**
* Frees an ndarray's allocated memory.
*
* @param arr  input ndarray
*/
void stdlib_ndarray_free( struct ndarray *arr ) {
	free( arr );
}

/**
* Tests whether an ndarray has specified flags enabled.
*
* @param arr    input ndarray
* @param flags  bit mask specifying the flags to test against
* @return       `1` if flags are set and `0` otherwise
*/
int8_t stdlib_ndarray_has_flags( const struct ndarray *arr, const int64_t flags ) {
	if ( ( arr->flags & flags ) == flags ) {
		return 1;
	}
	return 0;
}

/**
* Returns the index mode of an ndarray.
*
* @param arr  input ndarray
* @return     index mode
*/
int8_t stdlib_ndarray_index_mode( const struct ndarray *arr ) {
	return arr->imode;
}

/**
* Returns the number of elements in an ndarray.
*
* @param arr  input ndarray
* @return     number of elements
*/
int64_t stdlib_ndarray_length( const struct ndarray *arr ) {
	return arr->length;
}

/**
* Returns the number of ndarray dimensions.
*
* @param arr  input ndarray
* @return     number of dimensions
*/
int64_t stdlib_ndarray_ndims( const struct ndarray *arr ) {
	return arr->ndims;
}

/**
* Returns the number of ndarray subscript modes.
*
* @param arr  input ndarray
* @return     number of subscript modes
*/
int64_t stdlib_ndarray_nsubmodes( const struct ndarray *arr ) {
	return arr->nsubmodes;
}

/**
* Returns an ndarray index offset (in bytes).
*
* @param arr  input ndarray
* @return     array strides
*/
int64_t stdlib_ndarray_offset( const struct ndarray *arr ) {
	return arr->offset;
}

/**
* Returns the order of an ndarray.
*
* @param arr  input ndarray
* @return     array order
*/
int8_t stdlib_ndarray_order( const struct ndarray *arr ) {
	return arr->order;
}

/**
* Returns a pointer to an array containing an ndarray shape (dimensions).
*
* @param arr  input ndarray
* @return     array shape (dimensions)
*/
int64_t * stdlib_ndarray_shape( const struct ndarray *arr ) {
	return arr->shape;
}

/**
* Returns an ndarray stride (in bytes).
*
* ## Notes
*
* -   The function does not perform any sanity checks.
*
* @param arr  input ndarray
* @param i    dimension index
* @return     array stride
*/
int64_t stdlib_ndarray_stride( const struct ndarray *arr, const int64_t i ) {
	return arr->strides[ i ];
}

/**
* Returns a pointer to an array containing ndarray strides (in bytes).
*
* @param arr  input ndarray
* @return     array strides
*/
int64_t * stdlib_ndarray_strides( const struct ndarray *arr ) {
	return arr->strides;
}

/**
* Returns an ndarray subscript mode.
*
* ## Notes
*
* -   If an ndarray has fewer subscript modes than dimensions, modes are recycled using modulo arithmetic.
* -   The function does not perform any sanity checks.
*
* @param arr  input ndarray
* @param i    dimension index
* @return     subscript mode
*/
int8_t stdlib_ndarray_submode( const struct ndarray *arr, const int64_t i ) {
	return arr->submodes[ i%(arr->nsubmodes) ];
}

/**
* Returns ndarray subscript modes.
*
* @param arr  input ndarray
* @return     subscript modes
*/
int8_t * stdlib_ndarray_submodes( const struct ndarray *arr ) {
	return arr->submodes;
}
