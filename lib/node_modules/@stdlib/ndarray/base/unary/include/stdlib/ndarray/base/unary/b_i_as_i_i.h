/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

#ifndef STDLIB_NDARRAY_BASE_UNARY_B_I_AS_I_I_H
#define STDLIB_NDARRAY_BASE_UNARY_B_I_AS_I_I_H

#include "stdlib/ndarray/ctor.h"
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Applies a unary callback accepting and returning signed 32-bit integers to an unsigned 8-bit integer input ndarray and assigns results to elements in a signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to a zero-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in a zero-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_0d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to a one-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in a one-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_1d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to a two-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in a two-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_2d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to a two-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in a two-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_2d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to a three-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in a three-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_3d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to a three-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in a three-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_3d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to a four-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in a four-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_4d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to a four-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in a four-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_4d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to a five-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in a five-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_5d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to a five-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in a five-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_5d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to a six-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in a six-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_6d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to a six-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in a six-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_6d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to a seven-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in a seven-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_7d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to a seven-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in a seven-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_7d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to an eight-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in an eight-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_8d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to an eight-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in an eight-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_8d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to a nine-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in a nine-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_9d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to a nine-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in a nine-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_9d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to a ten-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in a ten-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_10d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to a ten-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in a ten-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_10d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning signed 32-bit integers to an n-dimensional unsigned 8-bit integer input ndarray and assigns results to elements in an n-dimensional signed 32-bit integer output ndarray.
*/
int8_t stdlib_ndarray_b_i_as_i_i_nd( struct ndarray *arrays[], void *fcn );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_BASE_UNARY_B_I_AS_I_I_H
