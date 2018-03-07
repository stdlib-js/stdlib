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

#include <stdint.h>
#include "stdlib/ndarray/base/strides2offset.h"

/**
* Returns the index offset which specifies the location of the first indexed value in a multidimensional array based on a stride array.
*
* @param ndims    number of dimensions
* @param shape    array shape (dimensions)
* @param strides  array strides
* @return         offset
*
* @example
* #include "stdlib/ndarray/base/strides2offset.h"
*
* int64_t ndims = 3;
* int64_t shape[] = { 2, 3, 10 };
* int64_t strides[] = { 30, -10, 1 };
*
* int64_t offset = stdlib_ndarray_strides2offset( ndims, shape, strides );
* // returns 20
*/
int64_t stdlib_ndarray_strides2offset( int64_t ndims, int64_t *shape, int64_t *strides ) {
	int64_t offset;
	int64_t i;

	offset = 0;
	for ( i = 0; i < ndims; i++ ) {
		if ( strides[ i ] < 0 ) {
			// Note that, since the stride is negative, this operation increments, not decrements, the offset...
			offset -= strides[ i ] * ( shape[ i ]-1 );
		}
	}
	return offset;
}
