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

#include "stdlib/ndarray/base/bytes_per_element.h"
#include "stdlib/ndarray/dtypes.h"
#include <stdint.h>

/**
* Returns the number of bytes per element for a given data type.
*
* ## Notes
*
* -   If unable to resolve a provided data type, the function returns `0`.
*
* @param dtype  data type (number)
* @return       number of bytes per element
*
* @example
* #include "stdlib/ndarray/base/bytes_per_element.h"
* #include "stdlib/ndarray/dtypes.h"
* #include <stdint.h>
*
* int64_t nbytes = stdlib_ndarray_bytes_per_element( STDLIB_NDARRAY_FLOAT64 );
* // returns 8
*/
int64_t stdlib_ndarray_bytes_per_element( enum STDLIB_NDARRAY_DTYPE dtype ) {
	switch ( dtype ) {
	case STDLIB_NDARRAY_FLOAT64:
		return STDLIB_NDARRAY_FLOAT64_BYTES_PER_ELEMENT;
	case STDLIB_NDARRAY_FLOAT32:
		return STDLIB_NDARRAY_FLOAT32_BYTES_PER_ELEMENT;
	case STDLIB_NDARRAY_INT8:
		return STDLIB_NDARRAY_INT8_BYTES_PER_ELEMENT;
	case STDLIB_NDARRAY_UINT8:
		return STDLIB_NDARRAY_UINT8_BYTES_PER_ELEMENT;
	case STDLIB_NDARRAY_UINT8C:
		return STDLIB_NDARRAY_UINT8C_BYTES_PER_ELEMENT;
	case STDLIB_NDARRAY_INT16:
		return STDLIB_NDARRAY_INT16_BYTES_PER_ELEMENT;
	case STDLIB_NDARRAY_UINT16:
		return STDLIB_NDARRAY_UINT16_BYTES_PER_ELEMENT;
	case STDLIB_NDARRAY_INT32:
		return STDLIB_NDARRAY_INT32_BYTES_PER_ELEMENT;
	case STDLIB_NDARRAY_UINT32:
		return STDLIB_NDARRAY_UINT32_BYTES_PER_ELEMENT;
	case STDLIB_NDARRAY_INT64:
		return STDLIB_NDARRAY_INT64_BYTES_PER_ELEMENT;
	case STDLIB_NDARRAY_UINT64:
		return STDLIB_NDARRAY_UINT64_BYTES_PER_ELEMENT;
	case STDLIB_NDARRAY_BOOL:
		return STDLIB_NDARRAY_BOOL_BYTES_PER_ELEMENT;
	case STDLIB_NDARRAY_BINARY:
		return STDLIB_NDARRAY_BINARY_BYTES_PER_ELEMENT;
	default:
		return 0; // data type is not currently supported
	}
}
