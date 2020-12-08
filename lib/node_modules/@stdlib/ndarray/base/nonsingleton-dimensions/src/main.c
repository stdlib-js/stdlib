/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#include "stdlib/ndarray/base/nonsingleton_dimensions.h"
#include <stdint.h>

/**
* Returns the number of non-singleton dimensions.
*
* @param ndims  number of dimensions
* @param shape  array shape (dimensions)
* @return       number of singleton dimensions
*
* @example
* #include "stdlib/ndarray/base/nonsingleton_dimensions.h"
*
* int64_t ndims = 2;
* int64_t shape[] = { 10, 1 };
*
* int64_t n = stdlib_ndarray_nonsingleton_dimensions( ndims, shape );
* // returns 1
*/
int64_t stdlib_ndarray_nonsingleton_dimensions( int64_t ndims, int64_t *shape ) {
	int64_t n;
	int64_t i;

	n = 0;
	for ( i = 0; i < ndims; i++ ) {
		if ( shape[ i ] != 1 ) {
			n += 1;
		}
	}
	return n;
}
