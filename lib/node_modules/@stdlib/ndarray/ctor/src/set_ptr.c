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

#include "stdlib/ndarray/ctor/set_ptr.h"
#include "stdlib/ndarray/ctor/ndarray.h"
#include "stdlib/ndarray/dtypes.h"
#include <stdint.h>
#include <stdbool.h>
#include <complex.h>

/**
* Sets an ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function does **not** perform bounds checking, and, thus, the function does **not** prevent you from overwriting **unowned** memory. Accordingly, the function **assumes** you know what you are doing.
* -   The function returns `-1` if unable to set an element and `0` otherwise.
* -   The function requires a pointer to a data value `v` in order to provide a generic API supporting ndarrays having different data types.
*
* @param arr  input ndarray
* @param idx  byte array pointer to an ndarray data element
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_set_ptr_value( const struct ndarray *arr, uint8_t *idx, const void *v ) {
	switch ( arr->dtype ) {
	case STDLIB_NDARRAY_FLOAT64:
		*(double *)idx = *(double *)v;
		return 0;
	case STDLIB_NDARRAY_FLOAT32:
		*(float *)idx = *(float *)v;
		return 0;
	case STDLIB_NDARRAY_UINT64:
		*(uint64_t *)idx = *(uint64_t *)v;
		return 0;
	case STDLIB_NDARRAY_INT64:
		*(int64_t *)idx = *(int64_t *)v;
		return 0;
	case STDLIB_NDARRAY_UINT32:
		*(uint32_t *)idx = *(uint32_t *)v;
		return 0;
	case STDLIB_NDARRAY_INT32:
		*(int32_t *)idx = *(int32_t *)v;
		return 0;
	case STDLIB_NDARRAY_UINT16:
		*(uint16_t *)idx = *(uint16_t *)v;
		return 0;
	case STDLIB_NDARRAY_INT16:
		*(int16_t *)idx = *(int16_t *)v;
		return 0;
	case STDLIB_NDARRAY_UINT8:
		*(uint8_t *)idx = *(uint8_t *)v;
		return 0;
	case STDLIB_NDARRAY_UINT8C:
		*(uint8_t *)idx = *(uint8_t *)v;
		return 0;
	case STDLIB_NDARRAY_INT8:
		*(int8_t *)idx = *(int8_t *)v;
		return 0;
	case STDLIB_NDARRAY_COMPLEX128:
		*(double complex *)idx = *(double complex *)v;
		return 0;
	case STDLIB_NDARRAY_COMPLEX64:
		*(float complex *)idx = *(float complex *)v;
		return 0;
	case STDLIB_NDARRAY_BOOL:
		*(bool *)idx = *(bool *)v;
		return 0;
	default:
		return -1;
	}
}

/**
* Sets a double-precision floating-point ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_set_ptr_float64( uint8_t *idx, const double v ) {
	*(double *)idx = v;
	return 0;
}

/**
* Sets a single-precision floating-point ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_set_ptr_float32( uint8_t *idx, const float v ) {
	*(float *)idx = v;
	return 0;
}

/**
* Sets an unsigned 64-bit integer ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_set_ptr_uint64( uint8_t *idx, const uint64_t v ) {
	*(uint64_t *)idx = v;
	return 0;
}

/**
* Sets a signed 64-bit integer ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_set_ptr_int64( uint8_t *idx, const int64_t v ) {
	*(int64_t *)idx = v;
	return 0;
}

/**
* Sets an unsigned 32-bit integer ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_set_ptr_uint32( uint8_t *idx, const uint32_t v ) {
	*(uint32_t *)idx = v;
	return 0;
}

/**
* Sets a signed 32-bit integer ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_set_ptr_int32( uint8_t *idx, const int32_t v ) {
	*(int32_t *)idx = v;
	return 0;
}

/**
* Sets an unsigned 16-bit integer ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_set_ptr_uint16( uint8_t *idx, const uint16_t v ) {
	*(uint16_t *)idx = v;
	return 0;
}

/**
* Sets a signed 16-bit integer ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_set_ptr_int16( uint8_t *idx, const int16_t v ) {
	*(int16_t *)idx = v;
	return 0;
}

/**
* Sets an unsigned 8-bit integer ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_set_ptr_uint8( uint8_t *idx, const uint8_t v ) {
	*(uint8_t *)idx = v;
	return 0;
}

/**
* Sets a signed 8-bit integer ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_set_ptr_int8( uint8_t *idx, const int8_t v ) {
	*(int8_t *)idx = v;
	return 0;
}

/**
* Sets a double-precision complex floating-point ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_set_ptr_complex128( uint8_t *idx, const double complex v ) {
	*(double complex *)idx = v;
	return 0;
}

/**
* Sets a single-precision complex floating-point ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_set_ptr_complex64( uint8_t *idx, const float complex v ) {
	*(float complex *)idx = v;
	return 0;
}

/**
* Sets a boolean ndarray data element specified by a byte array pointer.
*
* ## Notes
*
* -   The function has no way of determining whether `idx` actually points to a compatible memory address. Accordingly, overwriting **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   The function always returns `0`.
*
* @param idx  byte array pointer to an ndarray data element
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_set_ptr_bool( uint8_t *idx, const bool v ) {
	*(bool *)idx = v;
	return 0;
}
