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

#include "stdlib/ndarray/base/shape2strides.h"
#include "stdlib/ndarray/orders.h"
#include <stdint.h>

/**
* Generates a stride array from an array shape.
*
* @param ndims  number of dimensions
* @param shape  array shape (dimensions)
* @param order  specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param out    output strides array
* @return       status code
*
* @example
* #include "stdlib/ndarray/base/shape2strides.h"
* #include "stdlib/ndarray/orders.h"
*
* int64_t ndims = 3;
* int64_t shape[] = { 2, 3, 10 };
* int64_t out[ 3 ];
*
* stdlib_ndarray_shape2strides( ndims, shape, STDLIB_NDARRAY_ROW_MAJOR, out );
*/
int8_t stdlib_ndarray_shape2strides( int64_t ndims, int64_t *shape, enum STDLIB_NDARRAY_ORDER order, int64_t *out ) {
	int64_t i;
	int64_t s;

	s = 1;
	if ( order == STDLIB_NDARRAY_COLUMN_MAJOR ) {
		for ( i = 0; i < ndims; i++ ) {
			out[ i ] = s;
			s *= shape[ i ];
		}
	} else { // row-major
		for ( i = ndims-1; i >= 0; i-- ) {
			out[ i ] = s;
			s *= shape[ i ];
		}
	}
	return 0;
}
