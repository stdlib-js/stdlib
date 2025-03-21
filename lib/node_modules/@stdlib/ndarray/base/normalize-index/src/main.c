/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

#include "stdlib/ndarray/base/normalize_index.h"
#include <stdint.h>

/**
* Normalizes an index to the interval `[0,max]`.
*
* @param idx  index
* @param max  maximum index (should be nonnegative)
* @return     index
*
* @example
* #include "stdlib/ndarray/base/normalize_index.h"
*
* int64_t idx = stdlib_ndarray_normalize_index( -2, 8 );
* // returns 7
*/
int64_t stdlib_ndarray_normalize_index( int64_t idx, int64_t max ) {
	if ( idx < 0 ) {
		idx += max + 1;
		if ( idx < 0 ) {
			return -1;
		}
		return idx;
	}
	if ( idx > max ) {
		return -1;
	}
	return idx;
}
