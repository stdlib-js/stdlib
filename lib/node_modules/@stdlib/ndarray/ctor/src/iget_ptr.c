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

#include "stdlib/ndarray/ctor/iget_ptr.h"
#include "stdlib/ndarray/ctor/ndarray.h"
#include "stdlib/ndarray/ctor/macros.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include "stdlib/ndarray/base/ind.h"
#include "stdlib/ndarray/base/iteration_order.h"
#include <stdlib.h>
#include <stdint.h>

/**
* Returns a pointer in the underlying byte array for an ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   For zero-dimensional arrays, the function returns a pointer to the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @return     underlying byte array pointer
*/
uint8_t * stdlib_ndarray_iget_ptr( const struct ndarray *arr, const int64_t idx ) {
	int64_t *strides;
	int64_t *shape;
	int64_t ndims;
	uint8_t *ind;
	int64_t s;
	int64_t i;
	int64_t j;
	int8_t io;

	// Retrieve the number of dimensions
	ndims = arr->ndims;

	// For zero-dimensional ndarrays, we ignore the index argument and return a pointer to the first (and only) indexed element...
	if ( ndims == 0 ) {
		return (arr->data) + (arr->offset); // pointer arithmetic
	}
	// Copy index argument to a mutable variable:
	j = idx;

	// Resolve an ndarray index based on the ndarray index mode:
	j = stdlib_ndarray_ind( j, (arr->length)-1, arr->imode );
	if ( j < 0 ) {
		return NULL;
	}
	// Determine the pointer to the first indexed element:
	ind = (arr->data) + (arr->offset); // pointer arithmetic

	// Determine the iteration order based on the ndarray strides:
	strides = arr->strides;
	io = stdlib_ndarray_iteration_order( ndims, strides );

	// Check for trivial case...
	if ( (arr->flags) & (STDLIB_NDARRAY_ROW_MAJOR_CONTIGUOUS_FLAG | STDLIB_NDARRAY_COLUMN_MAJOR_CONTIGUOUS_FLAG) ) {
		// Trivial case where we have all positive strides...
		if ( io == 1 ) {
			return ind + (j*(arr->BYTES_PER_ELEMENT)); // pointer arithmetic
		}
		// Trivial case where we have all negative strides...
		if ( io == -1 ) {
			return ind - (j*(arr->BYTES_PER_ELEMENT)); // pointer arithmetic
		}
	}
	// The approach which follows is to resolve a view index to its subscripts and then plug the subscripts into the standard formula for computing the linear index in the underlying byte array...
	shape = arr->shape;
	if ( (arr->order) == STDLIB_NDARRAY_COLUMN_MAJOR ) {
		for ( i = 0; i < ndims; i++ ) {
			s = j % shape[ i ];
			j -= s;
			j /= shape[ i ];
			ind += s * strides[ i ]; // pointer arithmetic
		}
		return ind;
	}
	// Case: row-major
	for ( i = ndims-1; i >= 0; i-- ) {
		s = j % shape[ i ];
		j -= s;
		j /= shape[ i ];
		ind += s * strides[ i ]; // pointer arithmetic
	}
	return ind;
}
