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

#include "stdlib/ndarray/base/max_view_buffer_index.h"
#include <stdint.h>

/**
* Computes the maximum linear index (in bytes) in an underlying data buffer accessible to an array view.
*
* @param ndims    number of dimensions
* @param shape    array shape (dimensions)
* @param strides  array strides (in bytes)
* @param offset   index offset
* @return         maximum linear index
*
* @example
* #include "stdlib/ndarray/base/max_view_buffer_index.h"
* #include <stdint.h>
*
* int64_t ndims = 2;
* int64_t shape[] = { 10, 10 };
* int64_t strides[] = { 10, 1 };
* int64_t offset = 0;
*
* int64_t idx = stdlib_ndarray_max_view_buffer_index( ndims, shape, strides, offset );
* // returns 99
*/
int64_t stdlib_ndarray_max_view_buffer_index( int64_t ndims, int64_t *shape, int64_t *strides, int64_t offset ) {
	int64_t idx;
	int64_t i;

	idx = offset;
	for ( i = 0; i < ndims; i++ ) {
		if ( strides[ i ] > 0 ) {
			idx += strides[ i ] * (shape[ i ] - 1);
		}
	}
	return idx;
}
