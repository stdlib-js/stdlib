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

#ifndef STDLIB_NDARRAY_BASE_UNARY_C_C_H
#define STDLIB_NDARRAY_BASE_UNARY_C_C_H

#include "stdlib/ndarray/ctor.h"
#include <stdint.h>

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to an single-precision complex floating-point number input ndarray and assigns results to elements in an single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to a zero-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in a zero-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_0d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to a one-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in a one-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_1d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to a two-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in a two-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_2d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to a two-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in a two-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_2d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to a three-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in a three-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_3d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to a three-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in a three-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_3d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to a four-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in a four-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_4d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to a four-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in a four-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_4d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to a five-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in a five-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_5d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to a five-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in a five-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_5d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to a six-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in a six-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_6d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to a six-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in a six-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_6d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to a seven-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in a seven-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_7d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to a seven-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in a seven-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_7d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to an eight-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in an eight-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_8d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to an eight-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in an eight-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_8d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to a nine-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in a nine-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_9d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to a nine-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in a nine-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_9d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to a ten-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in a ten-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_10d( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to a ten-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in a ten-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_10d_blocked( struct ndarray *arrays[], void *fcn );

/**
* Applies a unary callback accepting and returning single-precision complex floating-point numbers to an n-dimensional single-precision complex floating-point number input ndarray and assigns results to elements in an n-dimensional single-precision complex floating-point number output ndarray.
*/
int8_t stdlib_ndarray_c_c_nd( struct ndarray *arrays[], void *fcn );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_NDARRAY_BASE_UNARY_C_C_H
