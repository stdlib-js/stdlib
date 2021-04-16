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

#ifndef STDLIB_NDARRAY_BASE_UNARY_S_F_AS_F_F_H
#define STDLIB_NDARRAY_BASE_UNARY_S_F_AS_F_F_H

#include "stdlib/ndarray/ctor.h"
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to a signed 8-bit integer input ndarray and assigns results to elements in a single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to a zero-dimensional signed 8-bit integer input ndarray and assigns results to elements in a zero-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_0d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to a one-dimensional signed 8-bit integer input ndarray and assigns results to elements in a one-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_1d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to a two-dimensional signed 8-bit integer input ndarray and assigns results to elements in a two-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_2d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to a two-dimensional signed 8-bit integer input ndarray and assigns results to elements in a two-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_2d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to a three-dimensional signed 8-bit integer input ndarray and assigns results to elements in a three-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_3d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to a three-dimensional signed 8-bit integer input ndarray and assigns results to elements in a three-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_3d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to a four-dimensional signed 8-bit integer input ndarray and assigns results to elements in a four-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_4d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to a four-dimensional signed 8-bit integer input ndarray and assigns results to elements in a four-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_4d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to a five-dimensional signed 8-bit integer input ndarray and assigns results to elements in a five-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_5d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to a five-dimensional signed 8-bit integer input ndarray and assigns results to elements in a five-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_5d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to a six-dimensional signed 8-bit integer input ndarray and assigns results to elements in a six-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_6d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to a six-dimensional signed 8-bit integer input ndarray and assigns results to elements in a six-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_6d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to a seven-dimensional signed 8-bit integer input ndarray and assigns results to elements in a seven-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_7d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to a seven-dimensional signed 8-bit integer input ndarray and assigns results to elements in a seven-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_7d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to an eight-dimensional signed 8-bit integer input ndarray and assigns results to elements in an eight-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_8d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to an eight-dimensional signed 8-bit integer input ndarray and assigns results to elements in an eight-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_8d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to a nine-dimensional signed 8-bit integer input ndarray and assigns results to elements in a nine-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_9d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to a nine-dimensional signed 8-bit integer input ndarray and assigns results to elements in a nine-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_9d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to a ten-dimensional signed 8-bit integer input ndarray and assigns results to elements in a ten-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_10d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to a ten-dimensional signed 8-bit integer input ndarray and assigns results to elements in a ten-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_10d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision floating-point numbers to an n-dimensional signed 8-bit integer input ndarray and assigns results to elements in an n-dimensional single-precision floating-point output ndarray.
*/
int8_t stdlib_ndarray_s_f_as_f_f_nd( struct ndarray *arrays[], void *fcn );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_BASE_UNARY_S_F_AS_F_F_H
