/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#include "stdlib/ndarray/base/dtype_alignment.h"
#include "stdlib/ndarray/dtypes.h"
#include <stdint.h>

/**
* Returns the alignment (in bytes) for a provided data type.
*
* ## Notes
*
* -   The function returns `-1` if provided an unknown/unsupported data type.
*
* @param dtype  data type (enumeration constant)
* @return       alignment (in bytes)
*
* @example
* #include "stdlib/ndarray/base/dtype_alignment.h"
* #include "stdlib/ndarray/dtypes.h"
* #include <stdint.h>
*
* int8_t out = stdlib_ndarray_dtype_alignment( STDLIB_NDARRAY_FLOAT64 );
* // returns 8
*/
int8_t stdlib_ndarray_dtype_alignment( enum STDLIB_NDARRAY_DTYPE dtype ) {
	switch ( dtype ) {
	case STDLIB_NDARRAY_FLOAT64:
		return STDLIB_NDARRAY_FLOAT64_ALIGNMENT;
	case STDLIB_NDARRAY_FLOAT32:
		return STDLIB_NDARRAY_FLOAT32_ALIGNMENT;
	case STDLIB_NDARRAY_FLOAT16:
		return STDLIB_NDARRAY_FLOAT16_ALIGNMENT;

	case STDLIB_NDARRAY_INT8:
		return STDLIB_NDARRAY_INT8_ALIGNMENT;
	case STDLIB_NDARRAY_UINT8:
		return STDLIB_NDARRAY_UINT8_ALIGNMENT;
	case STDLIB_NDARRAY_UINT8C:
		return STDLIB_NDARRAY_UINT8C_ALIGNMENT;

	case STDLIB_NDARRAY_INT16:
		return STDLIB_NDARRAY_INT16_ALIGNMENT;
	case STDLIB_NDARRAY_UINT16:
		return STDLIB_NDARRAY_UINT16_ALIGNMENT;

	case STDLIB_NDARRAY_INT32:
		return STDLIB_NDARRAY_INT32_ALIGNMENT;
	case STDLIB_NDARRAY_UINT32:
		return STDLIB_NDARRAY_UINT32_ALIGNMENT;

	case STDLIB_NDARRAY_INT64:
		return STDLIB_NDARRAY_INT64_ALIGNMENT;
	case STDLIB_NDARRAY_UINT64:
		return STDLIB_NDARRAY_UINT64_ALIGNMENT;

	case STDLIB_NDARRAY_BOOL:
		return STDLIB_NDARRAY_BOOL_ALIGNMENT;

	case STDLIB_NDARRAY_BINARY:
		return STDLIB_NDARRAY_BINARY_ALIGNMENT;

	case STDLIB_NDARRAY_COMPLEX32:
		return STDLIB_NDARRAY_COMPLEX32_ALIGNMENT;
	case STDLIB_NDARRAY_COMPLEX64:
		return STDLIB_NDARRAY_COMPLEX64_ALIGNMENT;
	case STDLIB_NDARRAY_COMPLEX128:
		return STDLIB_NDARRAY_COMPLEX128_ALIGNMENT;

	case STDLIB_NDARRAY_GENERIC:
		return STDLIB_NDARRAY_GENERIC_ALIGNMENT;

	default:
		return -1;
	}
}
