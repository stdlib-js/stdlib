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

#include "stdlib/ndarray/base/clamp_index.h"
#include <stdint.h>

/**
* Restricts an index to the interval `[0,max]`.
*
* @param idx  index
* @param max  maximum index (should be nonnegative)
* @return     index
*
* @example
* #include "stdlib/ndarray/base/clamp_index.h"
*
* int64_t idx = stdlib_ndarray_clamp_index( 10, 8 );
* // returns 8
*/
int64_t stdlib_ndarray_clamp_index( int64_t idx, int64_t max ) {
	if ( idx < 0 ) {
		return 0;
	}
	if ( idx > max ) {
		return max;
	}
	return idx;
}
