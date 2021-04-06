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

#include "stdlib/ndarray/base/assert/is_single_segment_compatible.h"
#include "stdlib/ndarray/base/minmax_view_buffer_index.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include "stdlib/ndarray/base/numel.h"
#include "stdlib/ndarray/dtypes.h"
#include <stdint.h>

/**
* Determines if an array is compatible with a single memory segment.
*
* ## Notes
*
* -   The function returns `1` if compatible with a single memory segment and `0` otherwise.
*
* @param dtype    data type
* @param ndims    number of dimensions
* @param shape    array shape (dimensions)
* @param strides  array strides (in bytes)
* @param offset   index offset
* @return         value indicating if compatible with a single memory segment
*
* @example
* #include "stdlib/ndarray/base/assert/is_single_segment_compatible.h"
* #include "stdlib/ndarray/dtypes.h"
*
* int64_t ndims = 2;
* int64_t shape[] = { 10, 10 };
* int64_t strides[] = { 10, 1 };
* int64_t offset = 0;
*
* int8_t b = stdlib_ndarray_is_single_segment_compatible( STDLIB_NDARRAY_UINT8, ndims, shape, strides, offset );
* // returns 1
*/
int8_t stdlib_ndarray_is_single_segment_compatible( enum STDLIB_NDARRAY_DTYPE dtype, int64_t ndims, int64_t *shape, int64_t *strides, int64_t offset ) {
	int64_t tmp[2];
	int64_t nbytes;
	int64_t len;

	// Compute the total number of elements:
	len = stdlib_ndarray_numel( ndims, shape );
	if ( len == 0 ) {
		return 0;
	}
	// Determine the minimum and maximum linear indices which are accessible by the array view:
	stdlib_ndarray_minmax_view_buffer_index( ndims, shape, strides, offset, tmp );

	// Determine the number of bytes per element:
	nbytes = stdlib_ndarray_bytes_per_element( dtype );

	// If the number of elements matches the view size, then the array is single-segment compatible:
	if ( (len*nbytes) == ( (tmp[1]-tmp[0])+nbytes ) ) {
		return 1;
	}
	return 0;
}
