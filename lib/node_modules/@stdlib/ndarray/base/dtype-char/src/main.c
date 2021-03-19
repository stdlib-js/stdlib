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

#include "stdlib/ndarray/base/dtype_char.h"
#include "stdlib/ndarray/dtypes.h"
#include <stdint.h>

/**
* Returns the one letter character abbreviation for a given data type.
*
* @param dtype  data type (number)
* @return       one letter character abbreviation
*
* @example
* #include "stdlib/ndarray/base/dtype_char.h"
* #include "stdlib/ndarray/dtypes.h"
* #include <stdint.h>
*
* uint8_t ch = stdlib_ndarray_dtype_char( STDLIB_NDARRAY_FLOAT64 );
* // returns 100
*/
uint8_t stdlib_ndarray_dtype_char( enum STDLIB_NDARRAY_DTYPE dtype ) {
	switch ( dtype ) {
	case STDLIB_NDARRAY_FLOAT64:
		return STDLIB_NDARRAY_FLOAT64_CHAR;
	case STDLIB_NDARRAY_FLOAT32:
		return STDLIB_NDARRAY_FLOAT32_CHAR;
	case STDLIB_NDARRAY_INT8:
		return STDLIB_NDARRAY_INT8_CHAR;
	case STDLIB_NDARRAY_UINT8:
		return STDLIB_NDARRAY_UINT8_CHAR;
	case STDLIB_NDARRAY_UINT8C:
		return STDLIB_NDARRAY_UINT8C_CHAR;
	case STDLIB_NDARRAY_INT16:
		return STDLIB_NDARRAY_INT16_CHAR;
	case STDLIB_NDARRAY_UINT16:
		return STDLIB_NDARRAY_UINT16_CHAR;
	case STDLIB_NDARRAY_INT32:
		return STDLIB_NDARRAY_INT32_CHAR;
	case STDLIB_NDARRAY_UINT32:
		return STDLIB_NDARRAY_UINT32_CHAR;
	case STDLIB_NDARRAY_INT64:
		return STDLIB_NDARRAY_INT64_CHAR;
	case STDLIB_NDARRAY_UINT64:
		return STDLIB_NDARRAY_UINT64_CHAR;
	case STDLIB_NDARRAY_BOOL:
		return STDLIB_NDARRAY_BOOL_CHAR;
	case STDLIB_NDARRAY_BINARY:
		return STDLIB_NDARRAY_BINARY_CHAR;
	case STDLIB_NDARRAY_GENERIC:
		return STDLIB_NDARRAY_GENERIC_CHAR;
	default:
		return 0;
	}
}
