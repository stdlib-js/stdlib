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

#ifndef STDLIB_NDARRAY_CTOR_SET_PTR_H
#define STDLIB_NDARRAY_CTOR_SET_PTR_H

#include "ndarray.h"
#include <stdint.h>
#include <stdbool.h>
#include <complex.h>

/**
* Sets an ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_set_ptr_value( const struct ndarray *arr, uint8_t *idx, const void *v );

/**
* Sets a double-precision floating-point ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_set_ptr_float64( uint8_t *idx, const double v );

/**
* Sets a single-precision floating-point ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_set_ptr_float32( uint8_t *idx, const float v );

/**
* Sets an unsigned 64-bit integer ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_set_ptr_uint64( uint8_t *idx, const uint64_t v );

/**
* Sets a signed 64-bit integer ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_set_ptr_int64( uint8_t *idx, const int64_t v );

/**
* Sets an unsigned 32-bit integer ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_set_ptr_uint32( uint8_t *idx, const uint32_t v );

/**
* Sets a signed 32-bit integer ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_set_ptr_int32( uint8_t *idx, const int32_t v );

/**
* Sets an unsigned 16-bit integer ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_set_ptr_uint16( uint8_t *idx, const uint16_t v );

/**
* Sets a signed 16-bit integer ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_set_ptr_int16( uint8_t *idx, const int16_t v );

/**
* Sets an unsigned 8-bit integer ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_set_ptr_uint8( uint8_t *idx, const uint8_t v );

/**
* Sets a signed 8-bit integer ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_set_ptr_int8( uint8_t *idx, const int8_t v );

/**
* Sets a double-precision complex floating-point ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_set_ptr_complex128( uint8_t *idx, const double complex v );

/**
* Sets a single-precision complex floating-point ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_set_ptr_complex64( uint8_t *idx, const float complex v );

/**
* Sets a boolean ndarray data element specified by a byte array pointer.
*/
int8_t stdlib_ndarray_set_ptr_bool( uint8_t *idx, const bool v );

#endif // !STDLIB_NDARRAY_CTOR_SET_PTR_H
