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

#include "stdlib/ndarray/ctor/iset.h"
#include "stdlib/ndarray/ctor/iget_ptr.h"
#include "stdlib/ndarray/ctor/set_ptr.h"
#include "stdlib/ndarray/ctor/ndarray.h"
#include <stdlib.h>
#include <stdint.h>
#include <stdbool.h>
#include <complex.h>

/**
* Sets an ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function returns `-1` if unable to set an element and `0` otherwise.
* -   The function requires a pointer to a data value `v` in order to provide a generic API supporting ndarrays having different data types.
* -   The function has no way of determining whether `v` actually points to a memory address compatible with the underlying input ndarray data type. Accordingly, accessing **unowned** memory is possible, and this function **assumes** you know what you are doing.
* -   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_iset( const struct ndarray *arr, const int64_t idx, const void *v ) {
	uint8_t *ind = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ind == NULL ) {
		return -1;
	}
	return stdlib_ndarray_set_ptr_value( arr, ind, v );
}

/**
* Sets a double-precision floating-point ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to set an element and `0` otherwise.
* -   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_iset_float64( const struct ndarray *arr, const int64_t idx, const double v ) {
	uint8_t *ind = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ind == NULL ) {
		return -1;
	}
	return stdlib_ndarray_set_ptr_float64( ind, v );
}

/**
* Sets a single-precision floating-point ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to set an element and `0` otherwise.
* -   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_iset_float32( const struct ndarray *arr, const int64_t idx, const float v ) {
	uint8_t *ind = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ind == NULL ) {
		return -1;
	}
	return stdlib_ndarray_set_ptr_float32( ind, v );
}

/**
* Sets an unsigned 64-bit integer ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to set an element and `0` otherwise.
* -   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_iset_uint64( const struct ndarray *arr, const int64_t idx, const uint64_t v ) {
	uint8_t *ind = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ind == NULL ) {
		return -1;
	}
	return stdlib_ndarray_set_ptr_uint64( ind, v );
}

/**
* Sets a signed 64-bit integer ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to set an element and `0` otherwise.
* -   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_iset_int64( const struct ndarray *arr, const int64_t idx, const int64_t v ) {
	uint8_t *ind = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ind == NULL ) {
		return -1;
	}
	return stdlib_ndarray_set_ptr_int64( ind, v );
}

/**
* Sets an unsigned 32-bit integer ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to set an element and `0` otherwise.
* -   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_iset_uint32( const struct ndarray *arr, const int64_t idx, const uint32_t v ) {
	uint8_t *ind = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ind == NULL ) {
		return -1;
	}
	return stdlib_ndarray_set_ptr_uint32( ind, v );
}

/**
* Sets a signed 32-bit integer ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to set an element and `0` otherwise.
* -   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_iset_int32( const struct ndarray *arr, const int64_t idx, const int32_t v ) {
	uint8_t *ind = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ind == NULL ) {
		return -1;
	}
	return stdlib_ndarray_set_ptr_int32( ind, v );
}

/**
* Sets an unsigned 16-bit integer ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to set an element and `0` otherwise.
* -   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_iset_uint16( const struct ndarray *arr, const int64_t idx, const uint16_t v ) {
	uint8_t *ind = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ind == NULL ) {
		return -1;
	}
	return stdlib_ndarray_set_ptr_uint16( ind, v );
}

/**
* Sets a signed 16-bit integer ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to set an element and `0` otherwise.
* -   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_iset_int16( const struct ndarray *arr, const int64_t idx, const int16_t v ) {
	uint8_t *ind = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ind == NULL ) {
		return -1;
	}
	return stdlib_ndarray_set_ptr_int16( ind, v );
}

/**
* Sets an unsigned 8-bit integer ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function returns `-1` if unable to set an element and `0` otherwise.
* -   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_iset_uint8( const struct ndarray *arr, const int64_t idx, const uint8_t v ) {
	uint8_t *ind = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ind == NULL ) {
		return -1;
	}
	return stdlib_ndarray_set_ptr_uint8( ind, v );
}

/**
* Sets a signed 8-bit integer ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function returns `-1` if unable to set an element and `0` otherwise.
* -   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_iset_int8( const struct ndarray *arr, const int64_t idx, const int8_t v ) {
	uint8_t *ind = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ind == NULL ) {
		return -1;
	}
	return stdlib_ndarray_set_ptr_int8( ind, v );
}

/**
* Sets a double-precision complex floating-point ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to set an element and `0` otherwise.
* -   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_iset_complex128( const struct ndarray *arr, const int64_t idx, const double complex v ) {
	uint8_t *ind = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ind == NULL ) {
		return -1;
	}
	return stdlib_ndarray_set_ptr_complex128( ind, v );
}

/**
* Sets a single-precision complex floating-point ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to set an element and `0` otherwise.
* -   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_iset_complex64( const struct ndarray *arr, const int64_t idx, const float complex v ) {
	uint8_t *ind = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ind == NULL ) {
		return -1;
	}
	return stdlib_ndarray_set_ptr_complex64( ind, v );
}

/**
* Sets a boolean ndarray data element located at a specified linear index.
*
* ## Notes
*
* -   The function does **not** verify that the type of `v` matches the underlying input ndarray data type, and, thus, overwriting **unowned** memory is possible. The function **assumes** that you know what you are doing.
* -   The function returns `-1` if unable to set an element and `0` otherwise.
* -   For zero-dimensional arrays, the function sets the first (and only) indexed element, regardless of the value of `idx`.
*
* @param arr  input ndarray
* @param idx  linear view index
* @param v    value to set
* @return     status code
*/
int8_t stdlib_ndarray_iset_bool( const struct ndarray *arr, const int64_t idx, const bool v ) {
	uint8_t *ind = stdlib_ndarray_iget_ptr( arr, idx );
	if ( ind == NULL ) {
		return -1;
	}
	return stdlib_ndarray_set_ptr_bool( ind, v );
}
