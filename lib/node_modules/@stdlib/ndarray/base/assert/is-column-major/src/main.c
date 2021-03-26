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

#include "stdlib/ndarray/base/assert/is_column_major.h"
#include <stdint.h>
#include <stdlib.h>

/**
* Determines if an array is column-major based on a provided stride array.
*
* ## Notes
*
* -   The function returns `1` if column-major and `0` otherwise.
*
* @param ndims    number of dimensions
* @param strides  array strides
* @return         value indicating if column-major
*
* @example
* #include "stdlib/ndarray/base/assert/is_column_major.h"
*
* int64_t ndims = 2;
* int64_t strides[] = { 1, 10 };
*
* int8_t b = stdlib_ndarray_is_column_major( ndims, strides );
* // returns 1
*/
int8_t stdlib_ndarray_is_column_major( int64_t ndims, int64_t *strides ) {
	int64_t s1;
	int64_t s2;
	int64_t i;

	if ( ndims == 0 ) {
		return 0;
	}
	s1 = llabs( strides[ 0 ] );
	for ( i = 1; i < ndims; i++ ) {
		s2 = llabs( strides[ i ] );
		if ( s2 < s1 ) {
			return 0;
		}
		s1 = s2;
	}
	return 1;
}
