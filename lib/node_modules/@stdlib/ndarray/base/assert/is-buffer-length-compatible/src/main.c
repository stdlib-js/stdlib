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

#include "stdlib/ndarray/base/assert/is_buffer_length_compatible.h"
#include "stdlib/ndarray/base/minmax_view_buffer_index.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include "stdlib/ndarray/dtypes.h"
#include <stdint.h>

/**
* Determines if a buffer length is compatible with provided ndarray meta data.
*
* ## Notes
*
* -   The function returns `1` if the buffer length is compatible and `0` otherwise.
*
* @param dtype    buffer data type
* @param len      number of elements in data buffer
* @param ndims    number of dimensions
* @param shape    array shape (dimensions)
* @param strides  array strides
* @param offset   index offset
* @return         value indicating if a buffer length is compatible
*
* @example
* #include "stdlib/ndarray/base/assert/is_buffer_length_compatible.h"
* #include "stdlib/ndarray/dtypes.h"
*
* int64_t ndims = 2;
* int64_t shape[] = { 10, 10 };
* int64_t strides[] = { 10, 1 };
* int64_t offset = 0;
*
* int8_t b = stdlib_ndarray_is_buffer_length_compatible( STDLIB_NDARRAY_UINT8, 1000, ndims, shape, strides, offset );
* // returns 1
*
* int8_t b = stdlib_ndarray_is_buffer_length_compatible( STDLIB_NDARRAY_UINT8, 10, ndims, shape, strides, offset );
* // returns 0
*/
int8_t stdlib_ndarray_is_buffer_length_compatible( enum STDLIB_NDARRAY_DTYPE dtype, int64_t len, int64_t ndims, int64_t *shape, int64_t *strides, int64_t offset ) {
	int64_t tmp[ 2 ];
	int64_t nbytes;

	// Determine the number of bytes per element:
	nbytes = stdlib_ndarray_bytes_per_element( dtype );

	// Determine the minimum and maximum linear indices which are accessible by the array view:
	stdlib_ndarray_minmax_view_buffer_index( ndims, shape, strides, offset, tmp );

	// If the indices are "inbounds", then the buffer length is compatible:
	if ( (tmp[0]/nbytes) >= 0 && (tmp[1]/nbytes) < len ) {
		return 1;
	}
	return 0;
}
