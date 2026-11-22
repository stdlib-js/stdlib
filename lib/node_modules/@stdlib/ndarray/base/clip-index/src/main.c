/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/ndarray/base/clip_index.h"
#include <stdint.h>

/**
* Clips an index to the interval `[0,max]`.
*
* @param idx  index
* @param max  maximum index (should be nonnegative)
* @return     index
*
* @example
* #include "stdlib/ndarray/base/clip_index.h"
*
* int64_t idx = stdlib_ndarray_clip_index( -2, 8 );
* // returns 6
*/
int64_t stdlib_ndarray_clip_index( const int64_t idx, const int64_t max ) {
	int64_t v = idx;
	if ( v < 0 ) {
		v += max;
		if ( v < 0 ) {
			return 0;
		}
		return v;
	}
	if ( v > max ) {
		return max;
	}
	return v;
}
