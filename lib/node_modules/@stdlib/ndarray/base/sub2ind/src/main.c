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

#include "stdlib/ndarray/base/sub2ind.h"
#include "stdlib/ndarray/index_modes.h"
#include <stdint.h>

/**
* Converts subscripts to a linear index.
*
* ## Notes
*
* -   When provided fewer modes than dimensions, the function recycles modes using modulo arithmetic.
* -   When provided a stride array containing negative strides, if an `offset` is greater than `0`, the function treats subscripts as mapping to a linear index in an underlying data buffer for the array, thus returning a linear index from the perspective of that buffer. If an `offset` is equal to `0`, the function treats subscripts as mapping to a linear index in an array view, thus returning a linear index from the perspective of that view. In short, from the perspective of a view, view data is always ordered.
* -   In "error" mode, the function returns `-1` if a subscript is out-of-bounds.
*
* @param ndims    number of dimensions
* @param shape    array shape (dimensions)
* @param strides  array strides
* @param offset   location of the first indexed value **based** on the stride array
* @param sub      subscripts
* @param nmodes   number of modes
* @param modes    specifies how to handle subscripts which exceed array dimensions
* @return         linear index
*
* @example
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/base/sub2ind.h"
*
* int64_t ndims = 3;
* int64_t shape[] = { 3, 3, 3 };
* int64_t strides[] = { 9, 3, 1 };
* int64_t offset = 0;
*
* int64_t nmodes = 1;
* int8_t modes[] = { STDLIB_NDARRAY_INDEX_ERROR };
*
* int64_t sub[] = { 1, 2, 2 };
*
* int64_t idx = stdlib_ndarray_sub2ind( ndims, shape, strides, offset, sub, nmodes, modes );
* // returns 17
*/
int64_t stdlib_ndarray_sub2ind( int64_t ndims, int64_t *shape, int64_t *strides, int64_t offset, int64_t *sub, int64_t nmodes, int8_t *modes ) {
	enum STDLIB_NDARRAY_INDEX_MODE mode;
	int64_t idx;
	int64_t s;
	int64_t m;
	int64_t j;
	int64_t i;

	idx = offset;
	for ( i = 0; i < ndims; i++ ) {
		m = shape[ i ];
		j = sub[ i ];
		mode = modes[ i%nmodes ];
		if ( mode == STDLIB_NDARRAY_INDEX_CLAMP ) {
			if ( j < 0 ) {
				j = 0;
			} else if ( j >= m ) {
				j = m - 1;
			}
		} else if ( mode == STDLIB_NDARRAY_INDEX_WRAP ) {
			if ( j < 0 ) {
				j += m; // slight optimization to avoid modulo arithmetic when |j| <= m
				if ( j < 0 ) {
					j -= m*( (int64_t)( j/m ) ); // this is equivalent to `j mod m`, where the result has same sign as dividend (i.e., `j`); cannot use `%` as the sign of the result is implementation defined in C
					if ( j != 0 ) {
						j += m;
					}
				}
			} else if ( j >= m ) {
				j -= m; // slight optimization to avoid modulo arithmetic when m < j <= 2m
				if ( j >= m ) {
					j %= m;
				}
			}
		} else if ( j < 0 || j >= m ) { // mode == 'error'
			return -1;
		}
		s = strides[ i ];

		// Check if array view...
		if ( s < 0 && offset == 0 ) {
			idx -= j * s; // increments idx
		} else {
			idx += j * s; // may increment or decrement idx
		}
	}
	return idx;
}
