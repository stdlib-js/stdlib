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

#include "stdlib/ndarray/ctor/iget.h"
#include "stdlib/ndarray/ctor/iget_ptr.h"
#include "stdlib/ndarray/ctor/get_ptr.h"
#include "stdlib/ndarray/ctor/ndarray.h"
#include <stdlib.h>
#include <stdint.h>
#include <stdbool.h>
#include <complex.h>

/**
* Returns an ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function returns `-1` if unable to get an element and `0` otherwise.
* -   The function requires a `void` pointer for the output address `out` in order to provide a generic API supporting ndarrays having different data types.
* -   The function places the burden on the user to ensure that the output address is compatible with the data type of input ndarray data elements.
* -   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_iget( const struct ndarray *arr, const int64_t idx, void *out ) {
	uint8_t *ptr = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ptr == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_value( arr, ptr, out );
}

/**
* Returns a double-precision floating-point ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
* -   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_iget_float64( const struct ndarray *arr, const int64_t idx, double *out ) {
	uint8_t *ptr = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ptr == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_float64( ptr, out );
}

/**
* Returns a single-precision floating-point ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
* -   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_iget_float32( const struct ndarray *arr, const int64_t idx, float *out ) {
	uint8_t *ptr = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ptr == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_float32( ptr, out );
}

/**
* Returns an unsigned 64-bit integer ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
* -   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_iget_uint64( const struct ndarray *arr, const int64_t idx, uint64_t *out ) {
	uint8_t *ptr = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ptr == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_uint64( ptr, out );
}

/**
* Returns a signed 64-bit integer ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
* -   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_iget_int64( const struct ndarray *arr, const int64_t idx, int64_t *out ) {
	uint8_t *ptr = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ptr == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_int64( ptr, out );
}

/**
* Returns an unsigned 32-bit integer ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
* -   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_iget_uint32( const struct ndarray *arr, const int64_t idx, uint32_t *out ) {
	uint8_t *ptr = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ptr == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_uint32( ptr, out );
}

/**
* Returns a signed 32-bit integer ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
* -   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_iget_int32( const struct ndarray *arr, const int64_t idx, int32_t *out ) {
	uint8_t *ptr = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ptr == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_int32( ptr, out );
}

/**
* Returns an unsigned 16-bit integer ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
* -   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_iget_uint16( const struct ndarray *arr, const int64_t idx, uint16_t *out ) {
	uint8_t *ptr = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ptr == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_uint16( ptr, out );
}

/**
* Returns a signed 16-bit integer ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
* -   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_iget_int16( const struct ndarray *arr, const int64_t idx, int16_t *out ) {
	uint8_t *ptr = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ptr == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_int16( ptr, out );
}

/**
* Returns an unsigned 8-bit integer ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
* -   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_iget_uint8( const struct ndarray *arr, const int64_t idx, uint8_t *out ) {
	uint8_t *ptr = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ptr == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_uint8( ptr, out );
}

/**
* Returns a signed 8-bit integer ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
* -   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_iget_int8( const struct ndarray *arr, const int64_t idx, int8_t *out ) {
	uint8_t *ptr = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ptr == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_int8( ptr, out );
}

/**
* Returns a double-precision complex floating-point ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
* -   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_iget_complex128( const struct ndarray *arr, const int64_t idx, double complex *out ) {
	uint8_t *ptr = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ptr == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_complex128( ptr, out );
}

/**
* Returns a single-precision complex floating-point ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
* -   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_iget_complex64( const struct ndarray *arr, const int64_t idx, float complex *out ) {
	uint8_t *ptr = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ptr == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_complex64( ptr, out );
}

/**
* Returns a boolean ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the output address type matches the underlying input ndarray data type and **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to get an element and `0` otherwise.
* -   For zero-dimensional arrays, the function returns the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param out  output address
* @return     status code
*/
int8_t stdlib_ndarray_iget_bool( const struct ndarray *arr, const int64_t idx, bool *out ) {
	uint8_t *ptr = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ptr == NULL ) {
		return -1;
	}
	return stdlib_ndarray_get_ptr_bool( ptr, out );
}
