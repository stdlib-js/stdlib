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

#include "stdlib/ndarray/base/ind.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/base/wrap_index.h"
#include "stdlib/ndarray/base/clamp_index.h"
#include <stdint.h>

/**
* Returns an index given an index mode.
*
* ## Notes
*
* -   The function returns `-1` if an index is out-of-bounds.
*
* @param idx   index
* @param max   maximum index (should be nonnegative)
* @param mode  index mode specifying how to handle an index outside the interval `[0,max]`
* @return      index
*
* @example
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/base/ind.h"
*
* int64_t idx = stdlib_ndarray_ind( 10, 8, STDLIB_NDARRAY_INDEX_CLAMP );
* // returns 8
*
* @example
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/base/ind.h"
*
* int64_t idx = stdlib_ndarray_ind( 13, 10, STDLIB_NDARRAY_INDEX_WRAP );
* // returns 2
*
* @example
* #include "stdlib/ndarray/index_modes.h"
* #include "stdlib/ndarray/base/ind.h"
*
* int64_t idx = stdlib_ndarray_ind( 10, 8, STDLIB_NDARRAY_INDEX_ERROR );
* // returns -1
*/
int64_t stdlib_ndarray_ind( const int64_t idx, const int64_t max, const enum STDLIB_NDARRAY_INDEX_MODE mode ) {
	if ( mode == STDLIB_NDARRAY_INDEX_CLAMP ) {
		return stdlib_ndarray_clamp_index( idx, max );
	}
	if ( mode == STDLIB_NDARRAY_INDEX_WRAP ) {
		return stdlib_ndarray_wrap_index( idx, max );
	}
	if ( idx < 0 || idx > max ) {
		return -1; // out-of-bounds
	}
	return idx;
}
