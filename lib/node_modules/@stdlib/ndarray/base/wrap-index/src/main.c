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
#include "stdlib/ndarray/base/wrap_index.h"

/**
* Wraps an index on the interval `[0,max]`.
*
* @param idx  index
* @param max  maximum index (should be nonnegative)
* @return     index
*
* @example
* #include "stdlib/ndarray/base/wrap_index.h"
*
* int64_t idx = stdlib_ndarray_wrap_index( 13, 10 );
* // returns 2
*/
int64_t stdlib_ndarray_wrap_index( int64_t idx, int64_t max ) {
	int64_t mp1 = max + 1; // WARNING: possibility of overflow (although, in practice, `max` should never be that large)
	if ( idx < 0 ) {
		idx += mp1; // slight optimization to avoid modulo arithmetic when |idx| <= max+1
		if ( idx < 0 ) {
			idx -= mp1*( (int64_t)( idx/mp1 ) ); // this is equivalent to `idx mod mp1`, where the result has same sign as dividend (i.e., `idx`); cannot use `%` as the sign of the result is implementation defined in C
			if ( idx != 0 ) {
				idx += mp1;
			}
		}
		return idx;
	}
	if ( idx > max ) {
		idx -= mp1; // slight optimization to avoid modulo arithmetic when max+1 < idx <= 2*(max+1)
		if ( idx > max ) {
			idx %= mp1;
		}
		return idx;
	}
	return idx;
}
