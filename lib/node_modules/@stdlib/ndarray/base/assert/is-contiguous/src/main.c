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

#include "stdlib/ndarray/base/assert/is_contiguous.h"
#include "stdlib/ndarray/base/iteration_order.h"
#include "stdlib/ndarray/base/assert/is_single_segment_compatible.h"
#include "stdlib/ndarray/dtypes.h"
#include <stdint.h>

/**
* Determines if an array is contiguous.
*
* ## Notes
*
* -   The function returns `1` if contiguous and `0` otherwise.
*
* @param dtype    data type
* @param ndims    number of dimensions
* @param shape    array shape (dimensions)
* @param strides  array strides (in bytes)
* @param offset   index offset
* @return         value indicating if contiguous
*
* @example
* #include "stdlib/ndarray/base/assert/is_contiguous.h"
* #include "stdlib/ndarray/dtypes.h"
*
* int64_t ndims = 2;
* int64_t shape[] = { 10, 10 };
* int64_t strides[] = { 10, 1 };
* int64_t offset = 0;
*
* int8_t b = stdlib_ndarray_is_contiguous( STDLIB_NDARRAY_UINT8, ndims, shape, strides, offset );
* // returns 1
*/
int8_t stdlib_ndarray_is_contiguous( enum STDLIB_NDARRAY_DTYPE dtype, int64_t ndims, int64_t *shape, int64_t *strides, int64_t offset ) {
	if (
		stdlib_ndarray_iteration_order( ndims, strides ) != 0 &&
		stdlib_ndarray_is_single_segment_compatible( dtype, ndims, shape, strides, offset ) != 0
	) {
		return 1;
	}
	return 0;
}
