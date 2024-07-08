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

#include "stdlib/strided/base/stride2offset.h"
#include <stdint.h>

/**
* Returns the index offset which specifies the location of the first indexed value in a strided array.
*
* @param N        number of indexed elements
* @param stride   index increment
* @return         offset
*
* @example
* #include "stdlib/strided/base/stride2offset.h"
* #include <stdint.h>
*
* int64_t offset = stdlib_strided_stride2offset( 10, -10 );
* // returns 90
*/
int64_t stdlib_strided_stride2offset( int64_t N, int64_t stride ) {
	if ( stride > 0 ) {
		return 0;
	}
	return ( 1 - N ) * stride;
}
