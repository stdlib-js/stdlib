/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#include "stdlib/ndarray/base/flatten_shape.h"
#include <stdint.h>

/**
* Flattens a shape to a specified depth.
*
* @param ndims  number of dimensions
* @param shape  array shape (dimensions)
* @param depth  maximum depth
* @param out    output shape
* @return       status code
*
* @example
* #include "stdlib/ndarray/base/flatten_shape.h"
*
* const int64_t ndims = 3;
* const int64_t shape[] = { 2, 3, 10 };
* int64_t out[ 1 ];
*
* stdlib_ndarray_flatten_shape( ndims, shape, 2, out );
*/
int8_t stdlib_ndarray_flatten_shape( const int64_t ndims, const int64_t *shape, const int64_t depth, int64_t *out ) {
	int64_t d;
	int64_t s;
	int64_t i;
	int64_t j;

	d = ndims - 1;
	if ( depth < d ) {
		d = depth;
	}
	s = 1;
	j = 0;
	for ( i = 0; i < ndims; i++ ) { // e.g., shape=[2,3,4,5], depth=2 => shape=[24,5]
		if ( i <= d ) {
			s *= shape[ i ];
			if ( i == d ) {
				out[ j ] = s;
				j += 1;
			}
		} else {
			out[ j ] = shape[ i ];
			j += 1;
		}
	}
	return 0;
}
