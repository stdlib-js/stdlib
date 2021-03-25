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

#include "stdlib/ndarray/ctor/get.h"
#include "stdlib/ndarray/ctor/get_ptr.h"
#include "stdlib/ndarray/ctor/ndarray.h"
#include <stdlib.h>
#include <stdint.h>
#include <stdbool.h>
#include <complex.h>

/**
* Returns an ndarray data element.
*
* ## Notes
*
* -   The function returns `-1` if unable to get an element and `0` otherwise.
* -   The function requires a `void` pointer for the output address `out` in order to provide a generic API supporting ndarrays having different data types.
*
* @param arr  input ndarray
* @param sub  ndarray subscripts
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get( const struct ndarray *arr, const int64_t *sub, void *out ) {
	uint8_t *idx = stdlib_ndarray_get_ptr( arr, sub );
	if ( idx == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_value( arr, idx, out );
}

/**
* Returns a double-precision floating-point ndarray data element.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
*
* @param arr  input ndarray
* @param sub  ndarray subscripts
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_float64( const struct ndarray *arr, const int64_t *sub, double *out ) {
	uint8_t *idx = stdlib_ndarray_get_ptr( arr, sub );
	if ( idx == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_float64( idx, out );
}

/**
* Returns a single-precision floating-point ndarray data element.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
*
* @param arr  input ndarray
* @param sub  ndarray subscripts
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_float32( const struct ndarray *arr, const int64_t *sub, float *out ) {
	uint8_t *idx = stdlib_ndarray_get_ptr( arr, sub );
	if ( idx == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_float32( idx, out );
}

/**
* Returns an unsigned 64-bit integer ndarray data element.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
*
* @param arr  input ndarray
* @param sub  ndarray subscripts
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_uint64( const struct ndarray *arr, const int64_t *sub, uint64_t *out ) {
	uint8_t *idx = stdlib_ndarray_get_ptr( arr, sub );
	if ( idx == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_uint64( idx, out );
}

/**
* Returns a signed 64-bit integer ndarray data element.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
*
* @param arr  input ndarray
* @param sub  ndarray subscripts
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_int64( const struct ndarray *arr, const int64_t *sub, int64_t *out ) {
	uint8_t *idx = stdlib_ndarray_get_ptr( arr, sub );
	if ( idx == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_int64( idx, out );
}

/**
* Returns an unsigned 32-bit integer ndarray data element.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
*
* @param arr  input ndarray
* @param sub  ndarray subscripts
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_uint32( const struct ndarray *arr, const int64_t *sub, uint32_t *out ) {
	uint8_t *idx = stdlib_ndarray_get_ptr( arr, sub );
	if ( idx == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_uint32( idx, out );
}

/**
* Returns a signed 32-bit integer ndarray data element.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
*
* @param arr  input ndarray
* @param sub  ndarray subscripts
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_int32( const struct ndarray *arr, const int64_t *sub, int32_t *out ) {
	uint8_t *idx = stdlib_ndarray_get_ptr( arr, sub );
	if ( idx == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_int32( idx, out );
}

/**
* Returns an unsigned 16-bit integer ndarray data element.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
*
* @param arr  input ndarray
* @param sub  ndarray subscripts
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_uint16( const struct ndarray *arr, const int64_t *sub, uint16_t *out ) {
	uint8_t *idx = stdlib_ndarray_get_ptr( arr, sub );
	if ( idx == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_uint16( idx, out );
}

/**
* Returns a signed 16-bit integer ndarray data element.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
*
* @param arr  input ndarray
* @param sub  ndarray subscripts
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_int16( const struct ndarray *arr, const int64_t *sub, int16_t *out ) {
	uint8_t *idx = stdlib_ndarray_get_ptr( arr, sub );
	if ( idx == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_int16( idx, out );
}

/**
* Returns an unsigned 8-bit integer ndarray data element.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
*
* @param arr  input ndarray
* @param sub  ndarray subscripts
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_uint8( const struct ndarray *arr, const int64_t *sub, uint8_t *out ) {
	uint8_t *idx = stdlib_ndarray_get_ptr( arr, sub );
	if ( idx == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_uint8( idx, out );
}

/**
* Returns a signed 8-bit integer ndarray data element.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
*
* @param arr  input ndarray
* @param sub  ndarray subscripts
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_int8( const struct ndarray *arr, const int64_t *sub, int8_t *out ) {
	uint8_t *idx = stdlib_ndarray_get_ptr( arr, sub );
	if ( idx == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_int8( idx, out );
}

/**
* Returns a double-precision complex floating-point ndarray data element.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
*
* @param arr  input ndarray
* @param sub  ndarray subscripts
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_complex128( const struct ndarray *arr, const int64_t *sub, double complex *out ) {
	uint8_t *idx = stdlib_ndarray_get_ptr( arr, sub );
	if ( idx == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_complex128( idx, out );
}

/**
* Returns a single-precision complex floating-point ndarray data element.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
*
* @param arr  input ndarray
* @param sub  ndarray subscripts
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_complex64( const struct ndarray *arr, const int64_t *sub, float complex *out ) {
	uint8_t *idx = stdlib_ndarray_get_ptr( arr, sub );
	if ( idx == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_complex64( idx, out );
}

/**
* Returns a boolean ndarray data element.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
*
* @param arr  input ndarray
* @param sub  ndarray subscripts
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_get_bool( const struct ndarray *arr, const int64_t *sub, bool *out ) {
	uint8_t *idx = stdlib_ndarray_get_ptr( arr, sub );
	if ( idx == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_bool( idx, out );
}
