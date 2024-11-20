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

#include "stdlib/ndarray/base/assert/is_buffer_length_compatible_shape.h"
#include "stdlib/ndarray/base/numel.h"
#include <stdint.h>

/**
* Determines if a buffer length is compatible with a provided shape array.
*
* ## Notes
*
* -   The function returns `1` if the buffer length is compatible and `0` otherwise.
*
* @param len      number of elements in data buffer
* @param ndims    number of dimensions
* @param shape    array shape (dimensions)
* @return         value indicating if a buffer length is compatible
*
* @example
* #include "stdlib/ndarray/base/assert/is_buffer_length_compatible_shape.h"
*
* int64_t ndims = 2;
* int64_t shape[] = { 10, 10 };
*
* int8_t b = stdlib_ndarray_is_buffer_length_compatible_shape( 1000, ndims, shape );
* // returns 1
*
* int8_t b = stdlib_ndarray_is_buffer_length_compatible_shape( 10, ndims, shape );
* // returns 0
*/
int8_t stdlib_ndarray_is_buffer_length_compatible_shape( int64_t len, int64_t ndims, int64_t *shape ) {
	if ( len > stdlib_ndarray_numel( ndims, shape ) ) {
		return 1;
	}
	return 0;
}
