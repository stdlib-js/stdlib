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

#include "stdlib/ndarray/base/assert/is_safe_data_type_cast.h"
#include "stdlib/ndarray/safe_casts.h"
#include "stdlib/ndarray/dtypes.h"
#include <stdint.h>
#include <stdlib.h>

/**
* Determines if an array data type can be safely cast to another array data type.
*
* ## Notes
*
* -   The function returns `1` if a data type can be safely cast and `0` otherwise.
*
* @param from     array data type
* @param to       array data type
* @return         value indicating if a data type can be safely cast
*
* @example
* #include "stdlib/ndarray/base/assert/is_safe_data_type_cast.h"
*
* int8_t b = stdlib_ndarray_is_safe_data_type_cast( 2, 2 );
* // returns 1
*/
int8_t stdlib_ndarray_is_safe_data_type_cast( const int8_t from, const int8_t to ) {
	if ( from == to ) {
		return 1;
	}
	if ( from < STDLIB_NDARRAY_NDTYPES && to < STDLIB_NDARRAY_NDTYPES ) {
		return STDLIB_NDARRAY_SAFE_CASTS[ from ][ to ];
	}
	return 0;
}
