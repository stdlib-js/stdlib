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

#ifndef STDLIB_NDARRAY_BASE_UNARY_D_L_H
#define STDLIB_NDARRAY_BASE_UNARY_D_L_H

#include "stdlib/ndarray/ctor.h"
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a double-precision floating-point input ndarray and assigns results to elements in a signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a zero-dimensional double-precision floating-point input ndarray and assigns results to elements in a zero-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_0d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a one-dimensional double-precision floating-point input ndarray and assigns results to elements in a one-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_1d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a two-dimensional double-precision floating-point input ndarray and assigns results to elements in a two-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_2d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a two-dimensional double-precision floating-point input ndarray and assigns results to elements in a two-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_2d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a three-dimensional double-precision floating-point input ndarray and assigns results to elements in a three-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_3d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a three-dimensional double-precision floating-point input ndarray and assigns results to elements in a three-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_3d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a four-dimensional double-precision floating-point input ndarray and assigns results to elements in a four-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_4d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a four-dimensional double-precision floating-point input ndarray and assigns results to elements in a four-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_4d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a five-dimensional double-precision floating-point input ndarray and assigns results to elements in a five-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_5d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a five-dimensional double-precision floating-point input ndarray and assigns results to elements in a five-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_5d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a six-dimensional double-precision floating-point input ndarray and assigns results to elements in a six-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_6d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a six-dimensional double-precision floating-point input ndarray and assigns results to elements in a six-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_6d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a seven-dimensional double-precision floating-point input ndarray and assigns results to elements in a seven-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_7d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a seven-dimensional double-precision floating-point input ndarray and assigns results to elements in a seven-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_7d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to an eight-dimensional double-precision floating-point input ndarray and assigns results to elements in an eight-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_8d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to an eight-dimensional double-precision floating-point input ndarray and assigns results to elements in an eight-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_8d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a nine-dimensional double-precision floating-point input ndarray and assigns results to elements in a nine-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_9d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a nine-dimensional double-precision floating-point input ndarray and assigns results to elements in a nine-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_9d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a ten-dimensional double-precision floating-point input ndarray and assigns results to elements in a ten-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_10d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to a ten-dimensional double-precision floating-point input ndarray and assigns results to elements in a ten-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_10d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting a double-precision floating-point number and returning a signed 64-bit integer to an n-dimensional double-precision floating-point input ndarray and assigns results to elements in an n-dimensional signed 64-bit integer output ndarray.
*/
int8_t stdlib_ndarray_d_l_nd( struct ndarray *arrays[], void *fcn );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_BASE_UNARY_D_L_H
