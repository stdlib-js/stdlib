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

#include "stdlib/ndarray/base/vind2bind.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include <stdint.h>

/**
* Converts a linear index in an array view to a linear index in an underlying data buffer.
*
* ## Notes
*
* -   In "error" and "normalize" modes, the function returns `-1` if an index is out-of-bounds.
*
* @param ndims    number of dimensions
* @param shape    array shape (dimensions)
* @param strides  array strides
* @param offset   location of the first indexed value **based** on the stride array
* @param order    specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param idx      linear index in an array view
* @param mode     specifies how to handle a linear index which exceeds array dimensions
* @return         index
*
* @example
* #include "stdlib/ndarray/base/vind2bind.h"
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/orders.h"
*
* int64_t ndims = 2;
* int64_t shape[] = { 3, 3 };
* int64_t strides[] = { -3, 1 };
* int64_t offset = 6;
*
* int64_t idx = stdlib_ndarray_vind2bind( ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, 1, STDLIB_NDARRAY_INDEX_ERROR );
* // returns 7
*/
int64_t stdlib_ndarray_vind2bind( const int64_t ndims, const int64_t *shape, const int64_t *strides, const int64_t offset, const enum STDLIB_NDARRAY_ORDER order, const int64_t idx, const enum STDLIB_NDARRAY_INDEX_MODE mode ) {
	int64_t index;
	int64_t len;
	int64_t ind;
	int64_t s;
	int64_t i;

	index = idx;
	len = 1;
	for ( i = 0; i < ndims; i++ ) {
		len *= shape[ i ];
	}
	if ( mode == STDLIB_NDARRAY_INDEX_CLAMP ) {
		if ( index < 0 ) {
			index = 0;
		} else if ( index >= len ) {
			index = len - 1;
		}
	} else if ( mode == STDLIB_NDARRAY_INDEX_WRAP ) {
		if ( index < 0 ) {
			index += len; // slight optimization to avoid modulo arithmetic when |index| <= len
			if ( index < 0 ) {
				index -= len*( (int64_t)( index/len ) ); // this is equivalent to `index mod len`, where the result has same sign as dividend (i.e., `index`); cannot use `%` as the sign of the result is implementation defined in C
				if ( index != 0 ) {
					index += len;
				}
			}
		} else if ( index >= len ) {
			index -= len; // slight optimization to avoid modulo arithmetic when len < index <= 2*len
			if ( index >= len ) {
				index %= len;
			}
		}
	} else {
		if ( mode == STDLIB_NDARRAY_INDEX_NORMALIZE && index < 0 ) {
			index += len;
		}
		if ( index < 0 || index >= len ) {
			return -1;
		}
	}
	// The approach which follows is to resolve a view index to its subscripts and then plug the subscripts into the standard formula for computing the linear index in the underlying data buffer...
	ind = offset;
	if ( order == STDLIB_NDARRAY_COLUMN_MAJOR ) {
		for ( i = 0; i < ndims; i++ ) {
			s = index % shape[ i ]; // assume nonnegative "shape"
			index -= s;
			index /= shape[ i ];
			ind += s * strides[ i ];
		}
		return ind;
	}
	// Case: row-major
	for ( i = ndims-1; i >= 0; i-- ) {
		s = index % shape[ i ]; // assume nonnegative "shape"
		index -= s;
		index /= shape[ i ];
		ind += s * strides[ i ];
	}
	return ind;
}
