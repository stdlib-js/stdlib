/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/strided/base/min_view_buffer_index.h"
#include <stdint.h>

/**
* Returns the minimum accessible index based on a set of provided strided array parameters.
*
* @param N        number of indexed elements
* @param stride   index increment
* @param offset   starting index
* @return         index
*
* @example
* #include "stdlib/strided/base/min_view_buffer_index.h"
* #include <stdint.h>
*
* int64_t offset = stdlib_strided_min_view_buffer_index( 3, -2, 10 );
* // returns 6
*/
int64_t stdlib_strided_min_view_buffer_index( const int64_t N, const int64_t stride, const int64_t offset ) {
	if ( N > 0 && stride < 0 ) {
		return offset + ( (N-1)*stride ); // decrements the offset
	}
	return offset;
}
