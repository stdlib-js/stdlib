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

#include "stdlib/ndarray/base/iteration_order.h"
#include <stdint.h>

/**
* Determines array iteration order given a stride array.
*
* ## Notes
*
* The function returns one of the following values:
*
* -   `1`: left-to-right iteration order (strides are all nonnegative).
* -   `-1`: right-to-left iteration order (strides are all negative).
* -   `0`: unordered (strides are of mixed sign).
*
* @param ndims    number of dimensions
* @param strides  array strides
* @return         iteration order
*
* @example
* #include "stdlib/ndarray/base/iteration_order.h"
*
* uint64_t ndims = 2;
* int64_t strides[] = { 2, 1 };
*
* int8_t o = stdlib_ndarray_iteration_order( ndims, strides );
* // returns 1
*/
int8_t stdlib_ndarray_iteration_order( int64_t ndims, int64_t *strides ) {
	int64_t cnt;
	int64_t i;

	cnt = 0;
	for ( i = 0; i < ndims; i++ ) {
		if ( strides[ i ] < 0 ) {
			cnt += 1;
		}
	}
	if ( cnt == 0 ) {
		// All nonnegative strides:
		return 1;
	}
	if ( cnt == ndims ) {
		// All negative strides:
		return -1;
	}
	// Strides of mixed signs:
	return 0;
}
