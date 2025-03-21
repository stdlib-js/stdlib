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

#ifndef STDLIB_NDARRAY_CTOR_H
#define STDLIB_NDARRAY_CTOR_H

#include <stdint.h>

#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"

// The following #includes contain additional APIs which should be exposed along with the prototypes contained in this file...
#include "ctor/get.h"
#include "ctor/get_ptr.h"
#include "ctor/iget.h"
#include "ctor/iget_ptr.h"
#include "ctor/iset.h"
#include "ctor/macros.h"
#include "ctor/ndarray.h"
#include "ctor/set.h"
#include "ctor/set_ptr.h"

// NOTE: keep declarations in alphabetical order...

/**
* Returns a pointer to a dynamically allocated ndarray.
*/
struct ndarray * stdlib_ndarray_allocate( int16_t dtype, uint8_t *data, int64_t ndims, int64_t *shape, int64_t *strides, int64_t offset, int8_t order, int8_t imode, int64_t nsubmodes, int8_t *submodes );

/**
* Returns the size of an ndarray (in bytes).
*/
int64_t stdlib_ndarray_bytelength( const struct ndarray *arr );

/**
* Returns a pointer to an ndarray's underlying byte array.
*/
uint8_t * stdlib_ndarray_data( const struct ndarray *arr );

/**
* Returns an ndarray dimension.
*/
int64_t stdlib_ndarray_dimension( const struct ndarray *arr, const int64_t i );

/**
* Disables specified ndarray flags.
*/
int8_t stdlib_ndarray_disable_flags( struct ndarray *arr, const int64_t flags );

/**
* Returns an ndarray data type.
*/
int16_t stdlib_ndarray_dtype( const struct ndarray *arr );

/**
* Enables specified ndarray flags.
*/
int8_t stdlib_ndarray_enable_flags( struct ndarray *arr, const int64_t flags );

/**
* Returns ndarray flags.
*/
int64_t stdlib_ndarray_flags( const struct ndarray *arr );

/**
* Frees an ndarray's allocated memory.
*/
void stdlib_ndarray_free( struct ndarray *arr );

/**
* Tests whether an ndarray has specified flags enabled.
*/
int8_t stdlib_ndarray_has_flags( const struct ndarray *arr, const int64_t flags );

/**
* Returns the index mode of an ndarray.
*/
int8_t stdlib_ndarray_index_mode( const struct ndarray *arr );

/**
* Returns the number of elements in an ndarray.
*/
int64_t stdlib_ndarray_length( const struct ndarray *arr );

/**
* Returns the number of ndarray dimensions.
*/
int64_t stdlib_ndarray_ndims( const struct ndarray *arr );

/**
* Returns an ndarray index offset (in bytes).
*/
int64_t stdlib_ndarray_offset( const struct ndarray *arr );

/**
* Returns the order of an ndarray.
*/
int8_t stdlib_ndarray_order( const struct ndarray *arr );

/**
* Returns the number of ndarray subscript modes.
*/
int64_t stdlib_ndarray_nsubmodes( const struct ndarray *arr );

/**
* Returns a pointer to an array containing an ndarray shape (dimensions).
*/
int64_t * stdlib_ndarray_shape( const struct ndarray *arr );

/**
* Returns an ndarray stride (in bytes).
*/
int64_t stdlib_ndarray_stride( const struct ndarray *arr, const int64_t i );

/**
* Returns a pointer to an array containing ndarray strides (in bytes).
*/
int64_t * stdlib_ndarray_strides( const struct ndarray *arr );

/**
* Returns ndarray subscript modes.
*/
int8_t * stdlib_ndarray_submodes( const struct ndarray *arr );

/**
* Returns an ndarray subscript mode.
*/
int8_t stdlib_ndarray_submode( const struct ndarray *arr, const int64_t i );

#endif // !STDLIB_NDARRAY_CTOR_H
