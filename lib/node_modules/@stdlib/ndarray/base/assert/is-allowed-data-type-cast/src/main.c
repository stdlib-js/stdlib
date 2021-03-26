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

#include "stdlib/ndarray/base/assert/is_allowed_data_type_cast.h"
#include "stdlib/ndarray/base/assert/is_safe_data_type_cast.h"
#include "stdlib/ndarray/base/assert/is_same_kind_data_type_cast.h"
#include "stdlib/ndarray/casting_modes.h"
#include <stdint.h>
#include <stdlib.h>

/**
* Determines if an array data type can be cast to another array data type according to a specified casting rule.
*
* ## Notes
*
* -   The function returns `1` if a data type can be cast and `0` otherwise.
*
* @param from     array data type
* @param to       array data type
* @param casting  casting mode
* @return         value indicating if a data type can be cast
*
* @example
* #include "stdlib/ndarray/casting_modes.h"
* #include "stdlib/ndarray/base/assert/is_allowed_data_type_cast.h"
*
* int8_t b = stdlib_ndarray_is_allowed_data_type_cast( 2, 2, STDLIB_NDARRAY_SAFE_CASTING );
* // returns 1
*/
int8_t stdlib_ndarray_is_allowed_data_type_cast( const int8_t from, const int8_t to, const enum STDLIB_NDARRAY_CASTING_MODE casting ) {
	// Anything goes for "unsafe" casting...
	if ( casting == STDLIB_NDARRAY_UNSAFE_CASTING ) {
		return 1;
	}
	// "Casting" to the same data type is always allowed, regardless of the casting mode...
	if ( from == to ) {
		return 1;
	}
	// No casts between different data types are allowed in "no" or "equiv" casting modes...
	if ( casting == STDLIB_NDARRAY_NO_CASTING || casting == STDLIB_NDARRAY_EQUIV_CASTING ) {
		return 0;
	}
	// In "safe" casting mode, only casts which preserve values are allowed...
	if ( casting == STDLIB_NDARRAY_SAFE_CASTING ) {
		return stdlib_ndarray_is_safe_data_type_cast( from, to );
	}
	// In "same-kind" casting mode, in addition to "safe" casts, casts within a "kind" (e.g., between signed integers or between floating-point numbers) are allowed...
	return stdlib_ndarray_is_same_kind_data_type_cast( from, to );
}
