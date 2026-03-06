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

#include "stdlib/ndarray/base/minmax_view_buffer_index.h"
#include <stdint.h>

/**
* Computes the minimum and maximum linear indices (in bytes) in an underlying data buffer accessible to an array view.
*
* @param ndims    number of dimensions
* @param shape    array shape (dimensions)
* @param strides  array strides (in bytes)
* @param offset   index offset
* @param out      2-element output array
* @return         status code
*
* @example
* #include "stdlib/ndarray/base/minmax_view_buffer_index.h"
* #include <stdint.h>
*
* int64_t ndims = 2;
* int64_t shape[] = { 10, 10 };
* int64_t strides[] = { 10, 1 };
* int64_t offset = 0;
* int64_t out[ 2 ];
*
* stdlib_ndarray_minmax_view_buffer_index( ndims, shape, strides, offset, out );
*
* int64_t min = out[ 0 ];
* // returns 0
*
* int64_t max = out[ 1 ];
* // returns 99
*/
int8_t stdlib_ndarray_minmax_view_buffer_index( const int64_t ndims, const int64_t *shape, const int64_t *strides, const int64_t offset, int64_t *out ) {
	int64_t min;
	int64_t max;
	int64_t s;
	int64_t i;

	min = offset;
	max = offset;
	for ( i = 0; i < ndims; i++ ) {
		if ( shape[ i ] == 0 ) {
			out[ 0 ] = offset;
			out[ 1 ] = offset;
			return 0;
		}
		s = strides[ i ];
		if ( s > 0 ) {
			max += s * ( shape[i]-1 );
		} else if ( s < 0 ) {
			min += s * ( shape[i]-1 ); // decrements min
		}
	}
	out[ 0 ] = min;
	out[ 1 ] = max;

	return 0;
}
