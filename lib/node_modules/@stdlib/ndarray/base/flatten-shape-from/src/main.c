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

#include "stdlib/ndarray/base/flatten_shape_from.h"
#include <stdint.h>

/**
* Flattens a shape starting from a specified dimension.
*
* @param ndims  number of dimensions
* @param shape  array shape (dimensions)
* @param dim    dimension to start flattening from
* @param out    output shape
* @return       status code
*
* @example
* #include "stdlib/ndarray/base/flatten_shape_from.h"
*
* const int64_t ndims = 3;
* const int64_t shape[] = { 2, 3, 10 };
* int64_t out[ 2 ];
*
* stdlib_ndarray_flatten_shape( ndims, shape, 1, out );
*/
int8_t stdlib_ndarray_flatten_shape_from( const int64_t ndims, const int64_t *shape, const int64_t dim, int64_t *out ) {
	int64_t d;
	int64_t s;
	int64_t i;
	int64_t j;

	// Normalize the dimension index...
	d = dim;
	if ( d < 0 ) {
		d += ndims;
		if ( d < 0 ) {
			d = 0;
		}
	}
	s = 1;
	j = 0;
	for ( i = 0; i < ndims; i++ ) { // e.g., shape=[2,3,4,5], dim=2 => shape=[2,3,20]
		if ( i >= d ) {
			s *= shape[ i ];
			if ( i == ndims-1 ) {
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
