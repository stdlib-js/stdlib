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

#include "stdlib/ndarray/ctor/get_ptr.h"
#include "stdlib/ndarray/ctor/ndarray.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/base/ind.h"
#include <stdlib.h>
#include <stdint.h>
#include <stdbool.h>
#include <complex.h>

/**
* Returns a pointer to an ndarray data element in the underlying byte array.
*
* @param arr  input ndarray
* @param sub  ndarray subscripts
* @return     underlying byte array pointer
*/
uint8_t * stdlib_ndarray_get_ptr( const struct ndarray *arr, const int64_t *sub ) {
	int8_t *submodes;
	int64_t *strides;
	int64_t *shape;
	int64_t ndims;
	uint8_t *idx;
	int64_t ind;
	int64_t M;
	int64_t i;

	ndims = arr->ndims;
	shape = arr->shape;
	strides = arr->strides;
	submodes = arr->submodes;
	M = arr->nsubmodes;

	idx = (arr->data) + (arr->offset); // pointer arithmetic
	for ( i = 0; i < ndims; i++ ) {
		ind = stdlib_ndarray_ind( sub[ i ], shape[ i ]-1, submodes[ i%M ] );
		if ( ind < 0 ) {
			return NULL;
		}
		idx += strides[ i ] * ind; // pointer arithmetic
	}
	return idx;
}

/**
* Returns an ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function does **not** perform bounds checking and **assumes** you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
* -   The function requires a `void` pointer for the output address `out` in order to provide a generic API supporting ndarrays having different data types.
*
* @param arr  input ndarray
* @param idx  byte array pointer to an ndarray data element
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_ptr_value( const struct ndarray *arr, const uint8_t *idx, void *out ) {
	switch ( arr->dtype ) {
	case STDLIB_NDARRAY_FLOAT64:
		*(double *)out = *(double *)idx;
		return 0;
	case STDLIB_NDARRAY_FLOAT32:
		*(float *)out = *(float *)idx;
		return 0;
	case STDLIB_NDARRAY_UINT64:
		*(uint64_t *)out = *(uint64_t *)idx;
		return 0;
	case STDLIB_NDARRAY_INT64:
		*(int64_t *)out = *(int64_t *)idx;
		return 0;
	case STDLIB_NDARRAY_UINT32:
		*(uint32_t *)out = *(uint32_t *)idx;
		return 0;
	case STDLIB_NDARRAY_INT32:
		*(int32_t *)out = *(int32_t *)idx;
		return 0;
	case STDLIB_NDARRAY_UINT16:
		*(uint16_t *)out = *(uint16_t *)idx;
		return 0;
	case STDLIB_NDARRAY_INT16:
		*(int16_t *)out = *(int16_t *)idx;
		return 0;
	case STDLIB_NDARRAY_UINT8:
		*(uint8_t *)out = *(uint8_t *)idx;
		return 0;
	case STDLIB_NDARRAY_UINT8C:
		*(uint8_t *)out = *(uint8_t *)idx;
		return 0;
	case STDLIB_NDARRAY_INT8:
		*(int8_t *)out = *(int8_t *)idx;
		return 0;
	case STDLIB_NDARRAY_COMPLEX128:
		*(double complex *)out = *(double complex *)idx;
		return 0;
	case STDLIB_NDARRAY_COMPLEX64:
		*(float complex *)out = *(float complex *)idx;
		return 0;
	case STDLIB_NDARRAY_BOOL:
		*(bool *)out = *(bool *)idx;
		return 0;
	default:
		return -1;
	}
}

/**
* Returns a double-precision floating-point ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_ptr_float64( const uint8_t *idx, double *out ) {
	*out = *(double *)idx;
	return 0;
}

/**
* Returns a single-precision floating-point ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_ptr_float32( const uint8_t *idx, float *out ) {
	*out = *(float *)idx;
	return 0;
}

/**
* Returns an unsigned 64-bit integer ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_ptr_uint64( const uint8_t *idx, uint64_t *out ) {
	*out = *(uint64_t *)idx;
	return 0;
}

/**
* Returns a signed 64-bit integer ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_ptr_int64( const uint8_t *idx, int64_t *out ) {
	*out = *(int64_t *)idx;
	return 0;
}

/**
* Returns an unsigned 32-bit integer ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_ptr_uint32( const uint8_t *idx, uint32_t *out ) {
	*out = *(uint32_t *)idx;
	return 0;
}

/**
* Returns a signed 32-bit integer ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_ptr_int32( const uint8_t *idx, int32_t *out ) {
	*out = *(int32_t *)idx;
	return 0;
}

/**
* Returns an unsigned 16-bit integer ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_ptr_uint16( const uint8_t *idx, uint16_t *out ) {
	*out = *(uint16_t *)idx;
	return 0;
}

/**
* Returns a signed 16-bit integer ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_ptr_int16( const uint8_t *idx, int16_t *out ) {
	*out = *(int16_t *)idx;
	return 0;
}

/**
* Returns an unsigned 8-bit integer ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_ptr_uint8( const uint8_t *idx, uint8_t *out ) {
	*out = *(uint8_t *)idx;
	return 0;
}

/**
* Returns a signed 8-bit integer ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_ptr_int8( const uint8_t *idx, int8_t *out ) {
	*out = *(int8_t *)idx;
	return 0;
}

/**
* Returns a double-precision complex floating-point ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_ptr_complex128( const uint8_t *idx, double complex *out ) {
	*out = *(double complex *)idx;
	return 0;
}

/**
* Returns a single-precision complex floating-point ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_ptr_complex64( const uint8_t *idx, float complex *out ) {
	*out = *(float complex *)idx;
	return 0;
}

/**
* Returns a boolean ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_ptr_bool( const uint8_t *idx, bool *out ) {
	*out = *(bool *)idx;
	return 0;
}
