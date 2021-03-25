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

#ifndef STDLIB_NDARRAY_CTOR_GET_PTR_H
#define STDLIB_NDARRAY_CTOR_GET_PTR_H

#include "ndarray.h"
#include <stdint.h>
#include <stdbool.h>
#include <complex.h>

/**
* Returns a pointer to an ndarray data element in the underlying byte array.
*/
uint8_t * stdlib_ndarray_get_ptr( const struct ndarray *arr, const int64_t *sub );

/**
* Returns an ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_get_ptr_value( const struct ndarray *arr, const uint8_t *idx, void *out );

/**
* Returns a double-precision floating-point ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_get_ptr_float64( const uint8_t *idx, double *out );

/**
* Returns a single-precision floating-point ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_get_ptr_float32( const uint8_t *idx, float *out );

/**
* Returns an unsigned 64-bit integer ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_get_ptr_uint64( const uint8_t *idx, uint64_t *out );

/**
* Returns a signed 64-bit integer ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_get_ptr_int64( const uint8_t *idx, int64_t *out );

/**
* Returns an unsigned 32-bit integer ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_get_ptr_uint32( const uint8_t *idx, uint32_t *out );

/**
* Returns a signed 32-bit integer ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_get_ptr_int32( const uint8_t *idx, int32_t *out );

/**
* Returns an unsigned 16-bit integer ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_get_ptr_uint16( const uint8_t *idx, uint16_t *out );

/**
* Returns a signed 16-bit integer ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_get_ptr_int16( const uint8_t *idx, int16_t *out );

/**
* Returns an unsigned 8-bit integer ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_get_ptr_uint8( const uint8_t *idx, uint8_t *out );

/**
* Returns a signed 8-bit integer ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_get_ptr_int8( const uint8_t *idx, int8_t *out );

/**
* Returns a double-precision complex floating-point ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_get_ptr_complex128( const uint8_t *idx, double complex *out );

/**
* Returns a single-precision complex floating-point ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_get_ptr_complex64( const uint8_t *idx, float complex *out );

/**
* Returns a boolean ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_get_ptr_bool( const uint8_t *idx, bool *out );

#endif // !STDLIB_NDARRAY_CTOR_GET_PTR_H
