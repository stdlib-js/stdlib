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
#include <stdlib.h>
#include "stdlib/ndarray/base/strides2order.h"

/**
* Determines the order of a multidimensional array based on a provided stride array.
*
* ## Notes
*
* The function returns one of the following values:
*
* -   `0`: neither row-major nor column-major.
* -   `1`: row-major (C-style).
* -   `2`: column-major (Fortran-style).
* -   `3`: both row-major and column-major.
*
* @param ndims    number of dimensions
* @param strides  array strides
* @return         order
*
* @example
* #include "stdlib/ndarray/base/strides2order.h"
*
* int64_t ndims = 2;
* int64_t strides[] = { 2, 1 };
*
* int8_t o = stdlib_ndarray_strides2order( ndims, strides );
* // returns 1
*/
int8_t stdlib_ndarray_strides2order( int64_t ndims, int64_t *strides ) {
	int8_t column;
	int8_t row;
	int64_t s1;
	int64_t s2;
	int64_t i;

	if ( ndims == 0 ) {
		return 0; // 'none'
	}
	column = 1;
	row = 1;

	s1 = llabs( strides[ 0 ] );
	for ( i = 1; i < ndims; i++ ) {
		s2 = llabs( strides[ i ] );
		if ( column && s2 < s1 ) {
			column = 0;
		} else if ( row && s2 > s1 ) {
			row = 0;
		}
		if ( row || column ) {
			s1 = s2;
		} else {
			return 0; // 'none'
		}
	}
	if ( row && column ) {
		return 3; // 'both'
	}
	if ( row ) {
		return 1; // 'row-major'
	}
	return 2; // 'column-major'
}
